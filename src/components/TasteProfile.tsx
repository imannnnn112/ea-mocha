import React, { useState } from 'react';
import { Star, Sliders, Check } from 'lucide-react';
import { TASTE_PROFILE } from '../data/mockData.ts';

export const TasteProfile: React.FC = () => {
  const [selectedSweetness, setSelectedSweetness] = useState<'100%' | '75%' | '50%'>('100%');

  const sweetnessDescriptions = {
    '100%': 'Standar Signature: Rasa cokelat manis legit seimbang dengan harum espresso kuat dan sensasi creamy memikat.',
    '75%': 'Less Sweet: Dominasi kopi lebih tajam dengan manis cokelat yang lembut dan tetap menyegarkan.',
    '50%': 'Half Sweet: Profil pahit nikmat espresso lebih menonjol, cocok untuk yang menyukai rasa kopi bold.',
  };

  return (
    <section className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C4824] block mb-2">
            Karakter Sensorik
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2B180C] [text-wrap:balance]">
            Profil Rasa Es Mocha
          </h2>
          <div className="w-16 h-1 bg-[#7C4824] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Visual Rating Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#EADBCC] shadow-sm">
            <h3 className="text-lg font-bold text-[#2B180C] mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#854E29] fill-[#854E29]" />
              <span>Indeks Keseimbangan Rasa</span>
            </h3>

            <div className="space-y-4">
              {TASTE_PROFILE.map((item) => (
                <div key={item.name} className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-[#F5EFE8] gap-1 sm:gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-[#3D2515] w-28">{item.name}</span>
                    <span className="text-xs text-[#826A59] hidden sm:inline">({item.note})</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= item.rating
                              ? 'text-[#C77732] fill-[#C77732]'
                              : 'text-stone-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold tabular-nums text-[#4D3321] w-8 text-right">
                      {item.rating}/5
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Description quote as requested */}
            <div className="mt-6 p-4 rounded-xl bg-[#FAF5EE] border border-[#EFE5D8]">
              <p className="text-sm text-[#5C4535] leading-relaxed italic">
                "Es Mocha memiliki karakter rasa yang seimbang. Aroma kopi terasa cukup kuat, kemudian berpadu dengan rasa cokelat yang manis dan tekstur susu yang lembut."
              </p>
            </div>
          </div>

          {/* Interactive Sweetness Preference Customizer preview */}
          <div className="lg:col-span-5 bg-[#3B2213] text-white rounded-2xl p-6 sm:p-8 shadow-md">
            <div className="flex items-center gap-2 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sliders className="w-4 h-4" />
              <span>Eksplorasi Tingkat Manis</span>
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-2">
              Kustomisasi Sesuai Selera
            </h3>
            <p className="text-xs text-[#DEC8B9] leading-relaxed mb-6">
              Pilih tingkat manis favorit saat memesan Es Mocha:
            </p>

            {/* Level selector buttons */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {(['100%', '75%', '50%'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedSweetness(level)}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    selectedSweetness === level
                      ? 'bg-amber-100 text-[#3B2213] shadow'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {selectedSweetness === level && <Check className="w-3.5 h-3.5" />}
                  <span>{level}</span>
                </button>
              ))}
            </div>

            {/* Dynamic flavor explanation */}
            <div className="p-4 rounded-xl bg-white/10 border border-white/10">
              <p className="text-xs font-semibold uppercase text-amber-200 tracking-wider mb-1">
                Profil Level {selectedSweetness}
              </p>
              <p className="text-xs text-[#F2E9E2] leading-relaxed">
                {sweetnessDescriptions[selectedSweetness]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
