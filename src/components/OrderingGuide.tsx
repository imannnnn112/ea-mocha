import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { ORDER_STEPS, PRODUCT_INFO } from '../data/mockData.ts';

interface OrderingGuideProps {
  onQuickWhatsApp: () => void;
}

export const OrderingGuide: React.FC<OrderingGuideProps> = ({ onQuickWhatsApp }) => {
  return (
    <section id="kontak" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C4824] block mb-2">
            Praktis & Cepat
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2B180C] [text-wrap:balance]">
            Cara Pesan Es Mocha
          </h2>
          <p className="mt-3 text-base text-[#685343]">
            Ikuti 6 langkah mudah berikut untuk menikmati Es Mocha segar langsung di tangan Anda.
          </p>
          <div className="w-16 h-1 bg-[#7C4824] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {ORDER_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#EADBCC] flex items-start gap-4 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#52301A] text-white flex items-center justify-center font-bold text-sm font-mono shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#2B180C] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665040] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA Card Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#3B2213] to-[#25140A] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Pemesanan Cepat & Respon Ramah</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">
                Mau Langsung Pesan Sekarang?
              </h3>
              <p className="text-sm text-[#DEC7B8] leading-relaxed">
                Hubungi kami melalui WhatsApp untuk konfirmasi pesanan cepat, tanya promo, atau pemesanan dalam jumlah banyak (catering/acara).
              </p>
              <p className="text-xs text-amber-200 font-mono">
                Nomor Resmi: {PRODUCT_INFO.whatsappNumber}
              </p>
            </div>

            <button
              onClick={onQuickWhatsApp}
              className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-base flex items-center gap-3 shadow-lg hover:shadow-emerald-600/30 transition-all shrink-0 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Pesan via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
