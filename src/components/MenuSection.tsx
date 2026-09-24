import React from 'react';
import { Plus, Sparkles, Check } from 'lucide-react';
import { MenuItem } from '../types.ts';
import { MENU_ITEMS } from '../data/mockData.ts';
import { formatRupiah } from '../utils/format.ts';

interface MenuSectionProps {
  onSelectProduct: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectProduct }) => {
  return (
    <section id="menu" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C4824] block mb-2">
            Pilihan Sajian Dingin
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2B180C] [text-wrap:balance]">
            Menu Es Mocha
          </h2>
          <p className="mt-3 text-base text-[#685343]">
            Pilih varian favorit Anda, nikmati kelezatan kopi cokelat dengan resep spesial kami.
          </p>
          <div className="w-16 h-1 bg-[#7C4824] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#EADBCC] overflow-hidden hover:border-[#B48F75] hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image Header with Aspect Ratio */}
              <div className="relative aspect-[4/3] bg-[#2E1B0F] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Subtle Text badge if available */}
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-[#4A2813]/90 backdrop-blur-sm text-amber-100 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-[#2B180C] group-hover:text-[#683B1E] transition-colors font-display">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6E5746] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5EFE8] flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[11px] text-[#8C6D56] block">Harga</span>
                    <span className="text-lg font-bold font-mono tabular-nums text-[#3A2213]">
                      {formatRupiah(item.price)}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProduct(item)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#52301A] hover:bg-[#3D2314] active:scale-95 rounded-full transition-all shadow-sm"
                  >
                    <span>Pesan Sekarang</span>
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
