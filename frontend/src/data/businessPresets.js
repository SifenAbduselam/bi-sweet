// src/data/businessPreset.js

export const businessPresets = {
  bakery: {
    name: "Sweet's Cupcake",
    type: "Homemade Cupcakes & Desserts",
    heroTitle: "Sweet's Cupcake",
    heroSubtitle: "Freshly Baked Happiness",
    heroText: "Handcrafted cupcakes made with love, premium ingredients, and a whole lot of sprinkles.",
    
    // Services/Menu Items
    services: [
      { 
        name: "Classic Vanilla Cupcake", 
        price: "$3.50", 
        description: "Fluffy vanilla sponge with buttercream frosting",
        image: "/images/vanilla-cupcake.jpg"
      },
      { 
        name: "Chocolate Dream", 
        price: "$4.00", 
        description: "Rich chocolate cake with ganache topping",
        image: "/images/chocolate-cupcake.jpg"
      },
      { 
        name: "Strawberry Bliss", 
        price: "$4.50", 
        description: "Fresh strawberry frosting with real fruit pieces",
        image: "/images/strawberry-cupcake.jpg"
      },
      { 
        name: "Red Velvet Special", 
        price: "$4.50", 
        description: "Classic red velvet with cream cheese frosting",
        image: "/images/redvelvet-cupcake.jpg"
      },
      { 
        name: "Lotus Biscoff", 
        price: "$5.00", 
        description: "Caramel biscoff spread with cookie crumble",
        image: "/images/lotus-cupcake.jpg"
      },
      { 
        name: "Tiramisu Tray", 
        price: "From $25", 
        description: "Coffee-soaked cupcakes with mascarpone cream",
        image: "/images/tiramisu-tray.jpg"
      },
    ],

    // Gallery Images
    gallery: [
      { id: 1, src: "/images/gallery-1.jpg", alt: "Cupcake display" },
      { id: 2, src: "/images/gallery-2.jpg", alt: "Baking process" },
      { id: 3, src: "/images/gallery-3.jpg", alt: "Custom order" },
      { id: 4, src: "/images/gallery-4.jpg", alt: "Party setup" },
      { id: 5, src: "/images/gallery-5.jpg", alt: "Seasonal special" },
      { id: 6, src: "/images/gallery-6.jpg", alt: "Gift boxes" },
    ],

    // Contact Info
    contact: {
      phone: "+1 (555) 123-4567",
      email: "hello@sweetscupcake.com",
      address: "123 Baker Street, Sweet Town",
      hours: "Mon-Sat: 8AM - 7PM",
      instagram: "@sweetscupcake",
    },

    // About Section
    about: {
      title: "Our Sweet Story",
      text: "We started baking from our home kitchen with a simple mission: bring joy through delicious cupcakes. Every cupcake is baked fresh daily using premium ingredients and recipes passed down through generations.",
      stats: [
        { number: "500+", label: "Happy Customers" },
        { number: "50+", label: "Cupcake Varieties" },
        { number: "5", label: "Years of Baking" },
      ]
    }
  },
  // Keep other presets intact for backend compatibility
};