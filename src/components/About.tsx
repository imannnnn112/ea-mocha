import React from 'react';
import { Coffee, Heart, Sparkles, Droplets } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-[#F5EFE6]/60 border-y border-[#EADBCC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C4824] block mb-2">
            Mengenal Lebih Dekat
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2B180C] [text-wrap:balance]">
            Apa Itu Es Mocha?
          </h2>
          <div className="w-16 h-1 bg-[#7C4824] mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-[#E8DFD5] relative">
          <p className="text-lg sm:text-xl text-[#4A3728] leading-relaxed text-center font-serif italic text-balance mb-8">
            "Es Mocha adalah minuman yang memadukan cita rasa kopi dan cokelat dalam satu sajian. Perpaduan espresso atau kopi dengan cokelat menghasilkan rasa yang khas, yaitu perpaduan antara pahit dan aroma kopi dengan rasa manis serta lembut dari cokelat. Penyajiannya menggunakan es sehingga memberikan sensasi dingin dan menyegarkan."
          </p>

          <p className="text-sm sm:text-base text-[#685343] text-center leading-relaxed max-w-2xl mx-auto mb-10">
            Kelebihan utama Es Mocha adalah fleksibilitas rasanya yang seimbang: Es Mocha dapat dinikmati secara sempurna oleh para pecinta kopi sejati maupun mereka yang lebih menyukai kelembutan minuman cokelat manis.
          </p>

          {/* Dual Audience Balance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#F4EFEA]">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-[#FAF6F0] border border-[#EFE5D8]">
              <div className="w-11 h-11 rounded-lg bg-[#52301A] text-white flex items-center justify-center shrink-0">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#2B180C] mb-1">Bagi Pecinta Kopi</h3>
                <p className="text-sm text-[#665040] leading-relaxed">
                  Tetap mendapatkan tendangan kafein dan aroma roasted espresso yang tajam, dibalut kelembutan cokelat yang menenangkan tanpa rasa asam berlebih.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-[#FAF6F0] border border-[#EFE5D8]">
              <div className="w-11 h-11 rounded-lg bg-[#7A3F1E] text-white flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#2B180C] mb-1">Bagi Penikmat Cokelat</h3>
                <p className="text-sm text-[#665040] leading-relaxed">
                  Menikmati cokelat dingin yang jauh lebih berkarakter, tidak enek, dan memiliki kedalaman aroma yang mewah berkat sentuhan halus espresso.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-6 border-t border-[#F4EFEA]">
            <div>
              <p className="text-2xl font-bold font-serif text-[#4A2813]">100%</p>
              <p className="text-xs text-[#7B6657]">Bahan Segar Pilihan</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-serif text-[#4A2813]">0</p>
              <p className="text-xs text-[#7B6657]">Pengawet Buatan</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-serif text-[#4A2813]">4°C</p>
              <p className="text-xs text-[#7B6657]">Suhu Dingin Optimal</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-serif text-[#4A2813]">6+</p>
              <p className="text-xs text-[#7B6657]">Pilihan Topping Lezat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
