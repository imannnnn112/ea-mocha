import React from 'react';
import { 
  Sparkles, 
  Smile, 
  Snowflake, 
  Coffee, 
  Layers, 
  Camera, 
  HeartHandshake 
} from 'lucide-react';
import { ADVANTAGES } from '../data/mockData.ts';

export const Benefits: React.FC = () => {
  const iconList = [
    <Coffee className="w-5 h-5 text-[#6B391C]" key="1" />,
    <Layers className="w-5 h-5 text-[#6B391C]" key="2" />,
    <Snowflake className="w-5 h-5 text-[#6B391C]" key="3" />,
    <Smile className="w-5 h-5 text-[#6B391C]" key="4" />,
    <HeartHandshake className="w-5 h-5 text-[#6B391C]" key="5" />,
    <Camera className="w-5 h-5 text-[#6B391C]" key="6" />,
    <Sparkles className="w-5 h-5 text-[#6B391C]" key="7" />,
  ];

  return (
    <section id="keunggulan" className="py-20 bg-[#F4EDE4]/50 border-y border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C4824] block mb-2">
            Kenikmatan Tiada Duanya
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2B180C] [text-wrap:balance]">
            Mengapa Memilih Es Mocha?
          </h2>
          <p className="mt-3 text-base text-[#685343]">
            Dirancang khusus untuk menghadirkan kepuasan instan pada setiap teguk kesegarannya.
          </p>
          <div className="w-16 h-1 bg-[#7C4824] mx-auto mt-4 rounded-full" />
        </div>

        {/* 7 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-white border border-[#EADBCC] hover:border-[#B8967F] shadow-sm hover:shadow-md transition-all duration-300 ${
                idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF5EE] border border-[#E8DFD5] flex items-center justify-center mb-4 shadow-sm">
                {iconList[idx % iconList.length]}
              </div>
              <h3 className="text-lg font-bold text-[#2B180C] mb-2">
                {adv.title}
              </h3>
              <p className="text-sm text-[#665040] leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
