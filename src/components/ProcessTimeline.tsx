import React from 'react';
import { PROCESS_STEPS } from '../data/mockData.ts';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="proses" className="py-20 bg-[#F4EDE4]/40 border-y border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C4824] block mb-2">
            Dari Barista ke Tangan Anda
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2B180C] [text-wrap:balance]">
            Bagaimana Es Mocha Dibuat?
          </h2>
          <p className="mt-3 text-base text-[#685343]">
            Tujuh langkah presisi untuk menciptakan keharmonisan kopi dan cokelat yang sempurna.
          </p>
          <div className="w-16 h-1 bg-[#7C4824] mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item, index) => (
              <div
                key={item.step}
                className={`relative p-6 rounded-2xl bg-white border border-[#EADBCC] shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between ${
                  index === 6 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1 bg-[#FAF6F0]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-display text-[#8C522B] group-hover:text-[#52301A] transition-colors">
                      {item.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#F5EFE8] flex items-center justify-center text-xs font-bold text-[#6D4222]">
                      Step
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2B180C] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665040] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F5EFE8] flex items-center gap-1.5 text-[11px] font-medium text-[#8F684E]">
                  <span>Fase {item.step}</span>
                  <span>·</span>
                  <span>Standar Higienis</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
