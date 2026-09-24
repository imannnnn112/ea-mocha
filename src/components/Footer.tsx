import React from 'react';
import { Coffee, Phone, Clock, MapPin, Instagram, Facebook } from 'lucide-react';
import { PRODUCT_INFO } from '../data/mockData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#24150B] text-[#EFE4D7] pt-16 pb-12 border-t border-[#3D2516]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3D2516]">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#52301A] flex items-center justify-center text-[#FDFBF7]">
                <Coffee className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold font-display tracking-wide text-white">
                Es Mocha
              </span>
            </div>
            <p className="text-xs text-[#BAA596] leading-relaxed">
              Perpaduan nikmat kopi espresso pilihan dan cokelat creamy premium. Menyegarkan hari-hari Anda dengan rasa otentik yang seimbang.
            </p>
            <div className="pt-1 flex items-center gap-3 text-[#A89180]">
              <a
                href="#home"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#home"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C9B8AA]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">Tentang Es Mocha</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Daftar Menu & Harga</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan Produk</a>
              </li>
              <li>
                <a href="#proses" className="hover:text-white transition-colors">Proses Pembuatan</a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-white transition-colors">Galeri Foto</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              Kontak & Pemesanan
            </h4>
            <ul className="space-y-3 text-xs text-[#C9B8AA]">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C99A75] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">WhatsApp Pesanan</span>
                  <a
                    href={`https://wa.me/${PRODUCT_INFO.whatsappRaw}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-amber-200 font-mono"
                  >
                    {PRODUCT_INFO.whatsappNumber}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C99A75] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Jam Buka Gerai</span>
                  <span>{PRODUCT_INFO.openingHours}</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C99A75] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Lokasi Kedai</span>
                  <span>{PRODUCT_INFO.outletAddress}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Taste Guarantee */}
          <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Jaminan Kesegaran
            </h4>
            <p className="text-xs text-[#C9B8AA] leading-relaxed">
              Setiap gelas Es Mocha diracik saat dipesan menggunakan bahan higienis dengan es batu kristal steril untuk sensasi dingin maksimal.
            </p>
            <div className="pt-2">
              <a
                href="#menu"
                className="inline-block text-xs font-semibold text-amber-200 hover:text-white underline underline-offset-4"
              >
                Pesan Menu Sekarang →
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Footnote */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A7668] gap-3">
          <p>© {new Date().getFullYear()} Es Mocha Indonesia. Seluruh Hak Cipta Dilindungi.</p>
          <p className="text-[#6D5B4F]">Kopi Espresso & Cokelat Premium Dingin Segar</p>
        </div>
      </div>
    </footer>
  );
};
