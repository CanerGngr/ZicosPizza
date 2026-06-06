let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    if (typeof menuItems !== 'undefined') {
        renderMenu();
    }
    
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    } else {
        // Fallback: Check for elements with text content "Bestellen"
        const buttons = document.querySelectorAll('button');
        for (const btn of buttons) {
            if (btn.textContent.trim().toLowerCase() === 'bestellen') {
                btn.addEventListener('click', checkout);
                break;
            }
        }
    }
});

function renderMenu() {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer) return;
    
    menuContainer.innerHTML = '';
    
    // Group menu items by category
    const groupedMenu = menuItems.reduce((acc, item) => {
        const category = item.category || 'Andere';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});
    
    // Render each category
    for (const [category, items] of Object.entries(groupedMenu)) {
        const categorySection = document.createElement('div');
        categorySection.className = 'menu-category';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);
        
        const itemsList = document.createElement('div');
        itemsList.className = 'menu-items-list';
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            
            const price = parseFloat(item.price) || 0;
            
            itemElement.innerHTML = `
                <div class="item-info">
                    <h3>${item.name}</h3>
                    ${item.description ? `<p class="description">${item.description}</p>` : ''}
                    <p class="price">${price.toFixed(2)} €</p>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart('${item.id}', '${item.name.replace(/'/g, "\\'")}', ${price})">Hinzufügen</button>
            `;
            itemsList.appendChild(itemElement);
        });
        
        categorySection.appendChild(itemsList);
        menuContainer.appendChild(categorySection);
    }
}

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    renderCart();
}

function updateQuantity(id, change) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById('cart');
    if (!cartContainer) return;
    
    cartContainer.innerHTML = ''; // Clear current cart content
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart-msg">Der Warenkorb ist leer.</p>';
        return;
    }
    
    const cartList = document.createElement('ul');
    cartList.className = 'cart-items';
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <div class="cart-item-details">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">${itemTotal.toFixed(2)} €</span>
            </div>
            <div class="cart-item-controls">
                <button onclick="updateQuantity('${item.id}', -1)">-</button>
                <span class="cart-item-quantity">${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
        `;
        cartList.appendChild(li);
    });
    
    cartContainer.appendChild(cartList);
    
    // Add total section
    const totalSection = document.createElement('div');
    totalSection.className = 'cart-total-section';
    totalSection.innerHTML = `<strong>Gesamtsumme: <span id="cart-total">${total.toFixed(2)} €</span></strong>`;
    cartContainer.appendChild(totalSection);
}

function checkout() {
    if (cart.length === 0) {
        alert('Ihr Warenkorb ist leer!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Vielen Dank für Ihre Bestellung!\n\nBestellwert: ${total.toFixed(2)} €\nIhre Bestellung wird in Kürze bearbeitet.`);
    
    cart = [];
    renderCart();
}

// Expose functions globally for inline event handlers
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.checkout = checkout;
