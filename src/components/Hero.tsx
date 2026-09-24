import React from 'react';
import { ArrowRight, Sparkles, Snowflake, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/mockData.ts';

interface HeroProps {
  onOrderNow: () => void;
  onViewMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onViewMenu }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle organic warm background glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#EFE3D5]/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#84502E]">
              <Snowflake className="w-4 h-4 text-[#84502E]" />
              <span>Sensasi Kopi & Cokelat Dingin Premium</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B180C] leading-[1.12] [text-wrap:balance]">
              Nikmati Kesegaran <span className="text-[#683B1E] italic">Es Mocha</span> dalam Setiap Tegukan
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#5A4638] leading-relaxed max-w-xl [text-wrap:balance]">
              Perpaduan nikmat kopi dan cokelat yang creamy, manis, dan menyegarkan untuk menemani hari-harimu.
            </p>

            {/* Key trust bullets */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-[#4E3827] pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#733F1F]" />
                <span>Espresso Asli & Susu Murni</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#733F1F]" />
                <span>Cokelat Pekat Premium</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#733F1F]" />
                <span>Harga Mulai Rp10.000</span>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOrderNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#4A2813] hover:bg-[#341B0B] active:scale-[0.98] rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Pesan Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onViewMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#4A2813] bg-white border border-[#D5C2B1] hover:bg-[#F7F2EB] hover:border-[#B4967F] rounded-full transition-colors"
              >
                Lihat Menu
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative backdrop shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E3D3C3] to-[#FAF6F0] rounded-3xl -rotate-2 -z-10 shadow-inner" />

              {/* Main Image Frame with condensation & appetizing details */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/60 bg-[#2B180C] aspect-[4/3] sm:aspect-[4/3] group">
                <img
                  src={IMAGES.hero}
                  alt="Segelas Es Mocha segar dingin dengan es batu, lapisan cokelat dan susu creamy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                {/* Bottom caption in image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-amber-200/90">Signature Blend</p>
                      <p className="text-lg font-bold font-display">Es Mocha Dingin Segar</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-white/80 block">Mulai Dari</span>
                      <span className="text-lg font-bold tabular-nums text-white">Rp10.000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Quality Tag */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#E8DFD5] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#52301A] flex items-center justify-center text-amber-100 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2B180C]">100% Rasa Otentik</p>
                  <p className="text-[11px] text-[#6E5544]">Creamy, Manis, & Menyegarkan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
