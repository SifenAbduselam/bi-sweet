// src/data/businessPresets.js

export const businessPresets = {
  bakery: {
    name: "Bi-Sweet Deserts",
    type: "Homemade Desserts",
    heroTitle: "Bi-Sweet",
    heroSubtitle: "Homemade with Love",
    heroText: "Premium, artisanal homemade desserts crafted with love and the finest ingredients.",
    
    products: [
      { 
        id: 1,
        name: "Tiramisu Tray", 
        price: "$25", 
        description: "Classic Italian coffee-flavored dessert with cocoa",
        category: "Trays"
      },
      { 
        id: 2,
        name: "Strawberry Tres Leches", 
        price: "$28", 
        description: "Moist sponge cake soaked in three milks with fresh strawberries",
        category: "Cakes"
      },
      { 
        id: 3,
        name: "Lotus Biscoff Pudding", 
        price: "$22", 
        description: "Creamy pudding topped with caramelized biscoff cookies",
        category: "Puddings"
      },
      { 
        id: 4,
        name: "Chocolate Lava Cake", 
        price: "$24", 
        description: "Rich chocolate cake with molten center",
        category: "Cakes"
      },
      { 
        id: 5,
        name: "Mango Cheesecake", 
        price: "$30", 
        description: "Creamy cheesecake with tropical mango topping",
        category: "Cheesecakes"
      },
      { 
        id: 6,
        name: "Mixed Dessert Box", 
        price: "$35", 
        description: "Assorted mini desserts perfect for sharing",
        category: "Boxes"
      },
      { 
        id: 7,
        name: "Vanilla Bean Panna Cotta", 
        price: "$18", 
        description: "Silky Italian custard with vanilla bean",
        category: "Puddings"
      },
      { 
        id: 8,
        name: "Red Velvet Delight", 
        price: "$26", 
        description: "Classic red velvet with cream cheese frosting",
        category: "Cakes"
      },
    ],

    contact: {
      phone: "+1 (555) 123-4567",
      email: "hello@bisweetdeserts.com",
      address: "123 Baker Street, Sweet Town",
      hours: "Mon-Sat: 9AM - 6PM",
    },

    about: {
      title: "Our Story",
      text: "Bi-Sweet Deserts started as a small home kitchen passion project. Today, we continue to create handcrafted desserts using traditional recipes and premium ingredients. Every dessert is made fresh to order with love.",
    }
  },
};