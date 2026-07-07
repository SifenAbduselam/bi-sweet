// src/components/Contact.jsx
import { businessPresets } from "../data/businessPresets";
import heroBg from "../assets/hero-bg.jpg";

export default function Contact() {
  const { contact } = businessPresets.bakery;

  return (
    <section 
      id="contact" 
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <p className="text-[#C9A9A6] font-semibold uppercase tracking-widest mb-3 text-sm">
            Get in Touch
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#C9A9A6] mx-auto rounded-full mb-4" />
          <p className="text-gray-700 text-lg">
            We'd love to hear from you!
          </p>
        </div>

        {/* Contact Info - Clean & Simple */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Phone */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A9A6] to-[#B79A9A] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#C9A9A6] uppercase tracking-wider mb-1">
                    Call Us
                  </h3>
                  <a href={`tel:${contact.phone}`} className="text-2xl font-serif font-bold text-gray-900 hover:text-[#C9A9A6] transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* TikTok */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#C9A9A6] uppercase tracking-wider mb-1">
                    Follow on TikTok
                  </h3>
                  <a href={contact.tiktok} target="_blank" rel="noopener noreferrer" className="text-2xl font-serif font-bold text-gray-900 hover:text-[#C9A9A6] transition-colors">
                    @{contact.tiktokUsername}
                  </a>
                </div>
              </div>
            </div>

            {/* Telegram */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#C9A9A6] uppercase tracking-wider mb-1">
                    Message on Telegram
                  </h3>
                  <a href={contact.telegram} target="_blank" rel="noopener noreferrer" className="text-2xl font-serif font-bold text-gray-900 hover:text-[#C9A9A6] transition-colors">
                    @{contact.telegramUsername}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}