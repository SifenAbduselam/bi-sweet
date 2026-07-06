// src/components/Contact.jsx
import { businessPresets } from "../data/businessPreset";

export default function Contact() {
  const { contact } = businessPresets.bakery;

  return (
    <section id="contact" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 font-semibold uppercase tracking-wider mb-2">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <span className="text-3xl">📍</span>
              <div>
                <h3 className="font-bold text-gray-800">Address</h3>
                <p className="text-gray-600 text-sm">{contact.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <span className="text-3xl">📞</span>
              <div>
                <h3 className="font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600 text-sm">{contact.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <span className="text-3xl">✉️</span>
              <div>
                <h3 className="font-bold text-gray-800">Email</h3>
                <p className="text-gray-600 text-sm">{contact.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
              <span className="text-3xl">🕐</span>
              <div>
                <h3 className="font-bold text-gray-800">Hours</h3>
                <p className="text-gray-600 text-sm">{contact.hours}</p>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Send us a Message</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-500 transition-colors"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-500 transition-colors"
              />
              <textarea 
                rows="4"
                placeholder="Your Message or Order Inquiry"
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-pink-500 transition-colors resize-none"
              />
              <button 
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3.5 rounded-full font-semibold transition-colors shadow-md"
              >
                Send Message 💌
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}