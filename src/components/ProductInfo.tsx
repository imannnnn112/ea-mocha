import React from 'react';
import { Tag, Coffee, ThermometerSnowflake, Clock, MapPin, Sparkles } from 'lucide-react';
import { PRODUCT_INFO } from '../data/mockData.ts';

export const ProductInfo: React.FC = () => {
  const specs = [
    {
      label: 'Nama Produk',
      value: PRODUCT_INFO.productName,
      icon: <Coffee className="w-4 h-4 text-[#7C4824]" />,
    },
    {
      label: 'Kategori',
      value: PRODUCT_INFO.category,
      icon: <Tag className="w-4 h-4 text-[#7C4824]" />,
    },
    {
      label: 'Karakter Rasa',
      value: PRODUCT_INFO.flavor,
      icon: <Sparkles className="w-4 h-4 text-[#7C4824]" />,
    },
    {
      label: 'Suhu Penyajian',
      value: PRODUCT_INFO.servingTemp,
      icon: <ThermometerSnowflake className="w-4 h-4 text-[#7C4824]" />,
    },
    {
      label: 'Saran Penyajian',
      value: PRODUCT_INFO.freshness,
      icon: <Clock className="w-4 h-4 text-[#7C4824]" />,
    },
    {
      label: 'Gerai / Outlet',
      value: PRODUCT_INFO.outletAddress,
      icon: <MapPin className="w-4 h-4 text-[#7C4824]" />,
    },
  ];

  return (
    <section className="py-16 bg-[#F4EDE4]/60 border-t border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border border-[#EADBCC] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#F4EFEA] gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7C4824]">
                Spesifikasi & Ringkasan
              </span>
              <h3 className="text-2xl font-bold font-display text-[#2B180C]">
                Informasi Produk Es Mocha
              </h3>
            </div>
            <div className="text-xs text-[#7A6352] bg-[#FAF5EE] px-3 py-1.5 rounded-lg border border-[#EFE5D8]">
              Jam Buka: <span className="font-semibold text-[#3D2515]">{PRODUCT_INFO.openingHours}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {specs.map((item) => (
              <div key={item.label} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2]">
                <div className="p-2 rounded-lg bg-white border border-[#E8DFD5] shadow-xs shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs text-[#826A59] block mb-0.5">
                    {item.label}
                  </span>
                  <p className="text-sm font-bold text-[#2B180C] leading-snug">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
