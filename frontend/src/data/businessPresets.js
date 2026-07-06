// src/data/businessPreset.js

export const businessPresets = {
  bakery: {
    name: "Bi Sweet Bakery",
    type: "Homemade Desserts",
    heroTitle: "Bi Sweet Bakery",
    heroText: "Premium, artisanal homemade desserts crafted with love.",
    services: [
      { name: "Tiramisu Tray", price: "From $25", duration: "Order request" },
      { name: "Strawberry Tres Leches", price: "From $28", duration: "Order request" },
      { name: "Lotus Biscoff Pudding", price: "From $22", duration: "Order request" },
    ],
  },
  // You can safely leave photography, clinic, and hotel intact so your backend database queries don't break
};