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
        name: "White Coconut", 
        price: "$22", 
        description: "Creamy coconut dessert topped with shredded coconut flakes",
        category: "Classic"
      },
      { 
        id: 2,
        name: "Black Strawberry", 
        price: "$28", 
        description: "Rich chocolate base with fresh strawberries and cream",
        category: "Premium"
      },
      { 
        id: 3,
        name: "Kinder Biscoff", 
        price: "$25", 
        description: "Lotus biscoff cookies layered with creamy custard",
        category: "Signature"
      },
      { 
        id: 4,
        name: "Oreo", 
        price: "$24", 
        description: "Classic Oreo cookies with caramel drizzle and cream",
        category: "Classic"
      },
      { 
        id: 5,
        name: "White Strawberry", 
        price: "$28", 
        description: "Delicate white cream with fresh strawberry layers",
        category: "Premium"
      },
      { 
        id: 6,
        name: "Lotus Biscoff", 
        price: "$25", 
        description: "Crushed biscoff cookies with caramel and cream layers",
        category: "Signature"
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