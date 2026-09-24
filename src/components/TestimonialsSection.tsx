import React, { useState } from 'react';
import { Star, MessageSquarePlus, X, Check, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData.ts';
import { Testimonial } from '../types.ts';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formComment, setFormComment] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formComment.trim()) return;

    const newReview: Testimonial = {
      id: `custom-${Date.now()}`,
      name: formName,
      role: formRole || 'Pelanggan Setia',
      comment: formComment,
      rating: formRating,
      date: 'Baru saja',
    };

    setReviews([newReview, ...reviews]);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setModalOpen(false);
      setFormName('');
      setFormRole('');
      setFormComment('');
    }, 1200);
  };

  return (
    <section className="py-20 bg-[#F5EFE6]/50 border-t border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7C4824] block mb-2">
            Kepuasan Pelanggan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2B180C] [text-wrap:balance]">
            Apa Kata Pelanggan?
          </h2>
          <p className="mt-3 text-base text-[#685343]">
            Pengalaman nyata dari mereka yang telah merasakan nikmat dan segarnya Es Mocha.
          </p>
          <div className="w-16 h-1 bg-[#7C4824] mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((testi) => (
            <div
              key={testi.id}
              className="p-6 rounded-2xl bg-white border border-[#EADBCC] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#C77732]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testi.rating ? 'fill-[#C77732]' : 'text-stone-300'}`}
                    />
                  ))}
                  <span className="text-xs font-bold tabular-nums ml-1 text-[#4D3321]">
                    5.0
                  </span>
                </div>

                {/* Comment quote */}
                <p className="text-sm sm:text-base text-[#4D382A] italic leading-relaxed mb-6 font-serif">
                  "{testi.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-[#F5EFE8] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#2B180C]">
                    {testi.name}
                  </h3>
                  <p className="text-xs text-[#8C6D56]">
                    {testi.role}
                  </p>
                </div>
                <span className="text-[11px] text-[#A68F7E]">
                  {testi.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Write a review button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#52301A] bg-white border border-[#D5C2B1] hover:bg-[#FAF6F0] rounded-full transition-colors shadow-sm"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Bagikan Pengalaman Anda</span>
          </button>
        </div>
      </div>

      {/* Write Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl border border-[#EADBCC] relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold font-display text-[#2B180C] mb-1">
              Tulis Pengalaman Minum Es Mocha
            </h3>
            <p className="text-xs text-[#7A6352] mb-6">
              Ulasan Anda sangat berarti bagi perkembangan cita rasa kami.
            </p>

            {isSuccess ? (
              <div className="py-8 text-center text-emerald-600">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <p className="font-bold text-base">Terima kasih atas ulasan Anda!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3D2515] mb-1">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DACDBD] text-sm focus:outline-none focus:ring-2 focus:ring-[#52301A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D2515] mb-1">
                    Profesi / Deskripsi Singkat (Opsional)
                  </label>
                  <input
                    type="text"
                    value={formRole}
                    onChange={(e) => setFormRole(e.target.value)}
                    placeholder="Contoh: Pecinta Kopi / Mahasiswa"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DACDBD] text-sm focus:outline-none focus:ring-2 focus:ring-[#52301A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D2515] mb-1">
                    Rating Bintang
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setFormRating(num)}
                        className="p-1"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            num <= formRating
                              ? 'text-[#C77732] fill-[#C77732]'
                              : 'text-stone-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D2515] mb-1">
                    Ulasan / Testimoni *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formComment}
                    onChange={(e) => setFormComment(e.target.value)}
                    placeholder="Bagikan kesan rasa kopi, cokelat, kesegaran es, atau pelayanan kami..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DACDBD] text-sm focus:outline-none focus:ring-2 focus:ring-[#52301A]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-lg"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#52301A] hover:bg-[#3D2314] rounded-lg shadow-sm"
                  >
                    Kirim Ulasan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
