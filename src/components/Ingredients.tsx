import React from 'react';
import { COMPOSITION_ITEMS, IMAGES } from '../data/mockData.ts';

export const Ingredients: React.FC = () => {
  return (
    <section className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C4824] block mb-2">
            Formula Rasa Terbaik
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2B180C] [text-wrap:balance]">
            Komposisi Es Mocha
          </h2>
          <p className="mt-3 text-base text-[#685343]">
            Diramu secara cermat menggunakan lima elemen utama berkualitas tinggi tanpa kompromi rasa.
          </p>
          <div className="w-16 h-1 bg-[#7C4824] mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Visual Banner + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Ingredients Photography Banner */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#E8DFD5] group aspect-[4/3]">
              <img
                src={IMAGES.ingredients}
                alt="Bahan-bahan segar Es Mocha: biji kopi espresso, bongkahan cokelat hitam, susu murni, dan es batu"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-200">Artisanal Selection</span>
                <p className="text-lg font-bold font-display">Bahan Alami Pilihan</p>
                <p className="text-xs text-stone-200 mt-0.5">Hanya bahan segar bermutu tinggi untuk cita rasa tak tertandingi.</p>
              </div>
            </div>
          </div>

          {/* Composition Cards 5 items */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMPOSITION_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className={`p-5 rounded-xl border border-[#EADBCC] bg-[#FAF7F2] hover:bg-white hover:shadow-md transition-all ${
                  idx === 4 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto w-full' : ''
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5DACD] flex items-center justify-center text-2xl shadow-sm shrink-0">
                    {item.emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#2B180C]">{item.title}</h3>
                      <span className="text-[11px] text-[#7C4824] font-medium bg-[#EFE4D7] px-2 py-0.5 rounded">
                        {item.highlight}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#665040] mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
