// src/data/businessPreset.js

export const businessPresets = {
  bakery: {
    name: "Bi-Sweet Deserts",
    type: "Homemade Desserts",
    heroTitle: "Bi-Sweet Deserts",
    heroSubtitle: "Homemade with Love",
    heroText: "Premium, artisanal homemade desserts crafted with love and the finest ingredients.",
    
    // Products
    products: [
      { 
        id: 1,
        name: "Tiramisu Tray", 
        price: "From $25", 
        description: "Classic Italian coffee-flavored dessert",
        category: "Trays"
      },
      { 
        id: 2,
        name: "Strawberry Tres Leches", 
        price: "From $28", 
        description: "Moist sponge cake soaked in three milks with fresh strawberries",
        category: "Cakes"
      },
      { 
        id: 3,
        name: "Lotus Biscoff Pudding", 
        price: "From $22", 
        description: "Creamy pudding topped with caramelized biscoff cookies",
        category: "Puddings"
      },
      { 
        id: 4,
        name: "Chocolate Lava Cake", 
        price: "From $24", 
        description: "Rich chocolate cake with molten center",
        category: "Cakes"
      },
      { 
        id: 5,
        name: "Mango Cheesecake", 
        price: "From $30", 
        description: "Creamy cheesecake with tropical mango topping",
        category: "Cheesecakes"
      },
      { 
        id: 6,
        name: "Mixed Dessert Box", 
        price: "From $35", 
        description: "Assorted mini desserts perfect for sharing",
        category: "Boxes"
      },
    ],

    // Contact Info
    contact: {
      phone: "+1 (555) 123-4567",
      email: "hello@bisweetdeserts.com",
      address: "123 Baker Street, Sweet Town",
      hours: "Mon-Sat: 9AM - 6PM",
    },

    // About
    about: {
      title: "Our Story",
      text: "Bi-Sweet Deserts started as a small home kitchen passion project. Today, we continue to create handcrafted desserts using traditional recipes and premium ingredients. Every dessert is made fresh to order with love.",
    }
  },
};