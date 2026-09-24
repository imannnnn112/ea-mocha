import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { IMAGES } from '../data/mockData.ts';

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<{ src: string; title: string; category: string } | null>(null);

  const galleryItems = [
    {
      id: 'g1',
      title: 'Es Mocha dalam Gelas Dingin',
      category: 'Sajian Utama',
      src: IMAGES.hero,
      span: 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto',
    },
    {
      id: 'g2',
      title: 'Close-up Creamy Ice Mocha',
      category: 'Detail Tekstur',
      src: IMAGES.creamy,
      span: 'aspect-[4/3]',
    },
    {
      id: 'g3',
      title: 'Bahan-bahan Segar Es Mocha',
      category: 'Artisanal Ingredients',
      src: IMAGES.ingredients,
      span: 'aspect-[4/3]',
    },
    {
      id: 'g4',
      title: 'Es Mocha dengan Topping Spesial',
      category: 'Varian Topping',
      src: IMAGES.special,
      span: 'aspect-[4/3]',
    },
    {
      id: 'g5',
      title: 'Classic Ice Mocha dengan Es Kristal',
      category: 'Proses & Kesegaran',
      src: IMAGES.classic,
      span: 'aspect-[4/3]',
    },
  ];

  return (
    <section id="galeri" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C4824] block mb-2">
            Dokumentasi Visual
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2B180C] [text-wrap:balance]">
            Galeri Es Mocha
          </h2>
          <p className="mt-3 text-base text-[#685343]">
            Intip keindahan estetika sajian minuman kopi cokelat dingin kami yang menggugah selera.
          </p>
          <div className="w-16 h-1 bg-[#7C4824] mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group bg-[#2E1A0F] border border-[#E8DFD5] ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  {item.category}
                </span>
                <h3 className="text-base font-bold font-display">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-center gap-1 text-xs text-white/80">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Perbesar Foto</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1F140D] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Tutup foto"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[4/3] sm:aspect-[16/10] max-h-[75vh]">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full h-full object-contain bg-black"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 sm:p-5 bg-[#2A1A11] border-t border-stone-800 flex items-center justify-between text-white">
              <div>
                <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                  {activePhoto.category}
                </span>
                <h4 className="text-lg font-bold font-display">
                  {activePhoto.title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
