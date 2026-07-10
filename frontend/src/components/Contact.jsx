// src/components/Contact.jsx
import { businessPresets } from "../data/businessPresets";

export default function Contact() {
  const { contact } = businessPresets.bakery;

  return (
    // my-16 creates the top/bottom gap to show the background image!
    <section id="contact" className="w-full my-16 md:my-24 px-0">
      
      {/* SOLID BURGUNDY CARD */}
      <div className="w-full bg-[#8B4A5A] shadow-2xl py-16 md:py-20">
        
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-10 h-px bg-white/40" />
              <p className="text-white/80 text-xs font-medium uppercase tracking-[0.3em]">Get in Touch</p>
              <span className="w-10 h-px bg-white/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-3">Contact Us</h2>
            <p className="text-white/80 font-light">We'd love to hear from you!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#723C4B] rounded-xl p-6 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Call Us</h3>
              <a href="tel:0982284291" className="text-xl font-serif font-bold text-white hover:text-[#F5E0E3] transition-colors">0982284291</a>
            </div>

            <div className="bg-[#723C4B] rounded-xl p-6 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Visit Us</h3>
              <p className="text-xl font-serif font-bold text-white">Jimma</p>
            </div>

            <div className="bg-[#723C4B] rounded-xl p-6 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
              </div>
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-wider mb-2">TikTok</h3>
              <a href="https://www.tiktok.com/@__bi__sweet" target="_blank" rel="noopener noreferrer" className="text-xl font-serif font-bold text-white hover:text-[#F5E0E3] transition-colors">@__bi__sweet</a>
            </div>

            <div className="bg-[#723C4B] rounded-xl p-6 shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </div>
              <h3 className="text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Telegram</h3>
              <a href="https://t.me/Yb087" target="_blank" rel="noopener noreferrer" className="text-xl font-serif font-bold text-white hover:text-[#F5E0E3] transition-colors">@Yb087</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}