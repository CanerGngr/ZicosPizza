const menuItems = [
    // PIZZEN
    {
        id: 1,
        name: "Pizza Margherita",
        description: "Tomatensauce, Käse und Oregano",
        price: 8.50,
        category: "PIZZEN"
    },
    {
        id: 2,
        name: "Pizza Salami",
        description: "Tomatensauce, Käse, Salami und Oregano",
        price: 9.50,
        category: "PIZZEN"
    },
    {
        id: 3,
        name: "Pizza Prosciutto",
        description: "Tomatensauce, Käse, Schinken und Oregano",
        price: 9.50,
        category: "PIZZEN"
    },
    {
        id: 4,
        name: "Pizza Hawaii",
        description: "Tomatensauce, Käse, Schinken, Ananas und Oregano",
        price: 10.00,
        category: "PIZZEN"
    },
    {
        id: 5,
        name: "Pizza Tonno",
        description: "Tomatensauce, Käse, Thunfisch, Zwiebeln und Oregano",
        price: 10.50,
        category: "PIZZEN"
    },
    {
        id: 6,
        name: "Pizza Zico's Spezial",
        description: "Tomatensauce, Käse, Salami, Schinken, Pilze, Paprika, Zwiebeln und Oregano",
        price: 12.00,
        category: "PIZZEN"
    },

    // NUDELN
    {
        id: 7,
        name: "Spaghetti Napoli",
        description: "Spaghetti mit hausgemachter Tomatensauce",
        price: 7.50,
        category: "NUDELN"
    },
    {
        id: 8,
        name: "Spaghetti Bolognese",
        description: "Spaghetti mit herzhafter Hackfleischsauce",
        price: 8.50,
        category: "NUDELN"
    },
    {
        id: 9,
        name: "Rigatoni Forno",
        description: "Rigatoni mit Hackfleischsauce, mit Käse überbacken",
        price: 9.50,
        category: "NUDELN"
    },

    // SALATE
    {
        id: 10,
        name: "Gemischter Salat",
        description: "Grüner Salat, Tomaten, Gurken, Karotten und Zwiebeln",
        price: 6.50,
        category: "SALATE"
    },
    {
        id: 11,
        name: "Insalata Zico",
        description: "Gemischter Salat mit Thunfisch, Schinken, Ei, Käse und Oliven",
        price: 9.50,
        category: "SALATE"
    },

    // FLEISCHGERICHTE
    {
        id: 12,
        name: "Wiener Schnitzel",
        description: "Paniertes Schweineschnitzel mit Pommes frites und Beilagensalat",
        price: 13.50,
        category: "FLEISCHGERICHTE"
    },
    {
        id: 13,
        name: "Cordon Bleu",
        description: "Schweineschnitzel gefüllt mit Schinken und Käse, dazu Pommes frites und Beilagensalat",
        price: 15.00,
        category: "FLEISCHGERICHTE"
    },

    // DESSERT
    {
        id: 14,
        name: "Tiramisu",
        description: "Hausgemachtes italienisches Dessert mit Mascarpone, Kaffee und Löffelbiskuits",
        price: 5.50,
        category: "DESSERT"
    },

    // GETRÄNKE
    {
        id: 15,
        name: "Coca-Cola",
        description: "Koffeinhaltiges Erfrischungsgetränk (1,0l)",
        price: 3.50,
        category: "GETRÄNKE"
    },
    {
        id: 16,
        name: "Mineralwasser",
        description: "Pritzelndes Mineralwasser (1,0l)",
        price: 2.50,
        category: "GETRÄNKE"
    }
];

if (typeof window !== 'undefined') {
    window.menuItems = menuItems;
} else if (typeof module !== 'undefined' && module.exports) {
    module.exports = menuItems;
}
