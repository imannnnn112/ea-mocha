import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types.ts';
import { formatRupiah, generateWhatsAppOrderUrl } from '../utils/format.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onBrowseMenu: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onBrowseMenu,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [address, setAddress] = useState('');
  const [generalNote, setGeneralNote] = useState('');

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.unitTotalPrice * item.quantity,
    0
  );

  const handleSendOrder = () => {
    if (cartItems.length === 0) return;
    const url = generateWhatsAppOrderUrl(
      cartItems,
      customerName,
      deliveryType,
      address,
      generalNote
    );
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div
        className="w-full max-w-md bg-[#FDFBF7] h-full shadow-2xl flex flex-col justify-between border-l border-[#EADBCC] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#EADBCC] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#52301A]" />
            <h2 className="text-lg font-bold font-display text-[#2B180C]">
              Keranjang Pesanan ({cartItems.reduce((acc, it) => acc + it.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup keranjang"
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-grow overflow-y-auto p-5 space-y-5">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF5EE] border border-[#E8DFD5] flex items-center justify-center mx-auto text-[#7C4824]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-base font-bold text-[#3D2616]">
                Keranjang Masih Kosong
              </p>
              <p className="text-xs text-[#7A6352] max-w-xs mx-auto">
                Belum ada sajian Es Mocha yang dipilih. Yuk jelajahi menu favorit kami!
              </p>
              <button
                onClick={() => {
                  onClose();
                  onBrowseMenu();
                }}
                className="px-6 py-2.5 rounded-full bg-[#52301A] text-white text-xs font-semibold shadow-sm hover:bg-[#3D2314] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Lihat Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Itemized List */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-white border border-[#EADBCC] shadow-xs flex flex-col justify-between"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="w-12 h-12 rounded-lg object-cover border border-[#E8DFD5]"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-[#2B180C]">
                            {item.menuItem.name}
                          </h4>
                          <p className="text-[11px] text-[#7A6150]">
                            {item.sweetness} · {item.iceLevel}
                          </p>
                          {item.selectedToppings.length > 0 && (
                            <p className="text-[11px] text-[#915B35] font-medium">
                              + {item.selectedToppings.map((t) => t.name).join(', ')}
                            </p>
                          )}
                          {item.notes && (
                            <p className="text-[11px] text-stone-500 italic">
                              "{item.notes}"
                            </p>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-stone-400 hover:text-red-600 transition-colors"
                        aria-label="Hapus item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#F5EFE8] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-md border border-[#D5C2B1] flex items-center justify-center text-xs text-[#52301A]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold font-mono tabular-nums w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-md border border-[#D5C2B1] flex items-center justify-center text-xs text-[#52301A]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-bold font-mono tabular-nums text-[#3A2213]">
                        {formatRupiah(item.unitTotalPrice * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="text-right">
                  <button
                    onClick={onClearCart}
                    className="text-xs text-stone-500 hover:text-stone-800 underline"
                  >
                    Kosongkan Keranjang
                  </button>
                </div>
              </div>

              {/* Delivery / Pickup Details Form */}
              <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#EADBCC] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#52301A]">
                  Informasi Pengantaran
                </h4>

                <div>
                  <label className="block text-[11px] font-semibold text-[#4A3222] mb-1">
                    Nama Pemesan
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nama lengkap Anda"
                    className="w-full px-3 py-1.5 text-xs bg-white rounded-lg border border-[#DACDBD] focus:outline-none focus:ring-1 focus:ring-[#52301A]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#4A3222] mb-1">
                    Metode Pemesanan
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryType('delivery')}
                      className={`py-1.5 text-xs font-semibold rounded-lg border text-center ${
                        deliveryType === 'delivery'
                          ? 'border-[#52301A] bg-[#52301A] text-white'
                          : 'border-[#DACDBD] bg-white text-stone-700'
                      }`}
                    >
                      Antar (Delivery)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryType('pickup')}
                      className={`py-1.5 text-xs font-semibold rounded-lg border text-center ${
                        deliveryType === 'pickup'
                          ? 'border-[#52301A] bg-[#52301A] text-white'
                          : 'border-[#DACDBD] bg-white text-stone-700'
                      }`}
                    >
                      Ambil (Pick Up)
                    </button>
                  </div>
                </div>

                {deliveryType === 'delivery' && (
                  <div>
                    <label className="block text-[11px] font-semibold text-[#4A3222] mb-1">
                      Alamat Pengiriman Lengkap
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Jalan, nomor rumah, patokan..."
                      className="w-full px-3 py-1.5 text-xs bg-white rounded-lg border border-[#DACDBD] focus:outline-none focus:ring-1 focus:ring-[#52301A]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-[11px] font-semibold text-[#4A3222] mb-1">
                    Catatan Khusus Pengantaran
                  </label>
                  <input
                    type="text"
                    value={generalNote}
                    onChange={(e) => setGeneralNote(e.target.value)}
                    placeholder="Contoh: Titip ke satpam, hubungi sebelum sampai"
                    className="w-full px-3 py-1.5 text-xs bg-white rounded-lg border border-[#DACDBD] focus:outline-none focus:ring-1 focus:ring-[#52301A]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer with WhatsApp Order Button */}
        {cartItems.length > 0 && (
          <div className="p-5 bg-white border-t border-[#EADBCC] space-y-3">
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold text-stone-700">Total Pembayaran</span>
              <span className="text-xl font-bold font-mono tabular-nums text-[#2B180C]">
                {formatRupiah(totalPrice)}
              </span>
            </div>

            <button
              onClick={handleSendOrder}
              className="w-full py-3.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Kirim Pesanan ke WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-[#8C7464]">
              Format pesan otomatis terisi untuk admin kami.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
