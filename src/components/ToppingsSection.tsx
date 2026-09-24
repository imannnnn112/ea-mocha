import React from 'react';
import { 
  Cloud, 
  Droplet, 
  Sparkles, 
  Cookie, 
  Grid, 
  Flame 
} from 'lucide-react';
import { TOPPINGS } from '../data/mockData.ts';
import { formatRupiah } from '../utils/format.ts';

export const ToppingsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#733F1F]" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5 text-[#733F1F]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#733F1F]" />;
      case 'Cookie':
        return <Cookie className="w-5 h-5 text-[#733F1F]" />;
      case 'Grid':
        return <Grid className="w-5 h-5 text-[#733F1F]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#733F1F]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#733F1F]" />;
    }
  };

  return (
    <section className="py-20 bg-[#F5EFE6]/50 border-t border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C4824] block mb-2">
            Ekstra Kenikmatan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2B180C] [text-wrap:balance]">
            Pilihan Topping Es Mocha
          </h2>
          <p className="mt-3 text-base text-[#685343]">
            Tambahkan sensasi renyah, lumer, atau creamy ekstra pada minuman Es Mocha Anda.
          </p>
          <div className="w-16 h-1 bg-[#7C4824] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Topping Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TOPPINGS.map((topping) => (
            <div
              key={topping.id}
              className="p-5 rounded-xl bg-white border border-[#EADBCC] hover:border-[#B48F75] hover:shadow-md transition-all text-center flex flex-col items-center justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF5EE] border border-[#EFE5D8] flex items-center justify-center mb-3 shadow-inner">
                {getIcon(topping.iconName)}
              </div>
              <h3 className="text-sm font-bold text-[#2B180C] mb-1">
                {topping.name}
              </h3>
              <p className="text-[11px] text-[#786150] leading-tight mb-3">
                {topping.description}
              </p>
              <span className="text-xs font-bold font-mono text-[#52301A] bg-[#F4EDE4] px-2.5 py-1 rounded-md">
                +{formatRupiah(topping.price)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
