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
        description: "Creamy coconut dessert topped with shredded coconut flakes",
        sizes: {
          small: { label: "Small", price: "250 Br" },
          large: { label: "Large", price: "350 Br" }
        }
      },
      { 
        id: 2,
        name: "Black Strawberry", 
        description: "Rich chocolate base with fresh strawberries and cream",
        sizes: {
          small: { label: "Small", price: "300 Br" },
          large: { label: "Large", price: "450 Br" }
        }
      },
      { 
        id: 3,
        name: "Kinder Biscoff", 
        description: "Lotus biscoff cookies layered with creamy custard",
        sizes: {
          small: { label: "Small", price: "280 Br" },
          large: { label: "Large", price: "400 Br" }
        }
      },
      { 
        id: 4,
        name: "Oreo", 
        description: "Classic Oreo cookies with caramel drizzle and cream",
        sizes: {
          small: { label: "Small", price: "250 Br" },
          large: { label: "Large", price: "380 Br" }
        }
      },
      { 
        id: 5,
        name: "White Strawberry", 
        description: "Delicate white cream with fresh strawberry layers",
        sizes: {
          small: { label: "Small", price: "300 Br" },
          large: { label: "Large", price: "450 Br" }
        }
      },
      { 
        id: 6,
        name: "Lotus Biscoff", 
        description: "Crushed biscoff cookies with caramel and cream layers",
        sizes: {
          small: { label: "Small", price: "280 Br" },
          large: { label: "Large", price: "400 Br" }
        }
      },
    ],

    contact: {
      phone: "0982284291",
      location: "Jimma",
      email: "hello@bisweetdeserts.com",
      hours: "Mon-Sat: 9AM - 6PM",
      tiktok: "https://www.tiktok.com/@__bi__sweet?is_from_webapp=1&sender_device=pc",
      tiktokUsername: "__bi__sweet",
      telegram: "https://t.me/Yb087",
      telegramUsername: "Yb087",
    },

    about: {
      title: "Our Story",
      text: "Bi-Sweet Deserts started as a small home kitchen passion project. Today, we continue to create handcrafted desserts using traditional recipes and premium ingredients. Every dessert is made fresh to order with love.",
    }
  },
};