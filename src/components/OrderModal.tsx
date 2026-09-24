import React, { useState } from 'react';
import { X, Plus, Minus, Check, MessageCircle, ShoppingBag } from 'lucide-react';
import { MenuItem, Topping, CartItem } from '../types.ts';
import { TOPPINGS } from '../data/mockData.ts';
import { formatRupiah, generateWhatsAppOrderUrl } from '../utils/format.ts';

interface OrderModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [sweetness, setSweetness] = useState<'100%' | '75%' | '50%' | '25%'>('100%');
  const [iceLevel, setIceLevel] = useState<'Normal Ice' | 'Less Ice' | 'Extra Ice'>('Normal Ice');
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [notes, setNotes] = useState('');

  const toggleTopping = (topping: Topping) => {
    if (selectedToppings.some((t) => t.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter((t) => t.id !== topping.id));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const toppingsTotalPrice = selectedToppings.reduce((sum, t) => sum + t.price, 0);
  const unitPrice = item.price + toppingsTotalPrice;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    const newCartItem: CartItem = {
      id: `${item.id}-${Date.now()}`,
      menuItem: item,
      quantity,
      sweetness,
      iceLevel,
      selectedToppings,
      notes,
      unitTotalPrice: unitPrice,
    };
    onAddToCart(newCartItem);
    onClose();
  };

  const handleInstantWhatsApp = () => {
    const singleItem: CartItem = {
      id: `${item.id}-${Date.now()}`,
      menuItem: item,
      quantity,
      sweetness,
      iceLevel,
      selectedToppings,
      notes,
      unitTotalPrice: unitPrice,
    };
    const url = generateWhatsAppOrderUrl([singleItem]);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EADBCC] my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Tutup kustomisasi"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Header */}
        <div className="relative aspect-[16/9] bg-[#2E1A0F]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <h3 className="text-xl sm:text-2xl font-bold font-display leading-snug">
              {item.name}
            </h3>
            <p className="text-xs text-stone-200 mt-1 line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>

        {/* Customization Options */}
        <div className="p-5 sm:p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Sweetness Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#52301A] mb-2">
              Tingkat Kemanisan (Sweetness)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {(['100%', '75%', '50%', '25%'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSweetness(level)}
                  className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all ${
                    sweetness === level
                      ? 'border-[#52301A] bg-[#52301A] text-white shadow-sm'
                      : 'border-[#E5D7C9] bg-[#FAF7F2] text-[#4A3425] hover:bg-[#F2EAE0]'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Ice Level Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#52301A] mb-2">
              Takaran Es Batu (Ice Level)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Normal Ice', 'Less Ice', 'Extra Ice'] as const).map((ice) => (
                <button
                  key={ice}
                  type="button"
                  onClick={() => setIceLevel(ice)}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all ${
                    iceLevel === ice
                      ? 'border-[#52301A] bg-[#52301A] text-white shadow-sm'
                      : 'border-[#E5D7C9] bg-[#FAF7F2] text-[#4A3425] hover:bg-[#F2EAE0]'
                  }`}
                >
                  {ice}
                </button>
              ))}
            </div>
          </div>

          {/* Toppings Multi-selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#52301A] mb-2">
              Pilihan Ekstra Topping (Opsional)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {TOPPINGS.map((topping) => {
                const isSelected = selectedToppings.some((t) => t.id === topping.id);
                return (
                  <button
                    key={topping.id}
                    type="button"
                    onClick={() => toggleTopping(topping)}
                    className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-[#7C4824] bg-[#F7EFE8] text-[#3B2213]'
                        : 'border-[#EADBCC] bg-white text-[#523C2D] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-bold">{topping.name}</p>
                      <p className="text-[11px] text-[#826754] font-mono tabular-nums">
                        +{formatRupiah(topping.price)}
                      </p>
                    </div>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isSelected
                          ? 'bg-[#7C4824] border-[#7C4824] text-white'
                          : 'border-stone-300'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#52301A] mb-1.5">
              Catatan Khusus
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Es batu dipisah, jangan terlalu manis"
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#DACDBD] text-xs focus:outline-none focus:ring-2 focus:ring-[#52301A]"
            />
          </div>

          {/* Quantity Stepper */}
          <div className="flex items-center justify-between pt-2 border-t border-[#F4EFEA]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#52301A]">
              Jumlah Porsi
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full border border-[#D5C2B1] flex items-center justify-center text-[#52301A] hover:bg-[#FAF5EE]"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-base font-bold font-mono tabular-nums text-[#2B180C] w-6 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full border border-[#D5C2B1] flex items-center justify-center text-[#52301A] hover:bg-[#FAF5EE]"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 sm:p-6 bg-[#FAF6F0] border-t border-[#EADBCC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#826A59] block">Total Harga</span>
            <span className="text-2xl font-bold font-mono tabular-nums text-[#2B180C]">
              {formatRupiah(totalPrice)}
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleAddToCart}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#52301A] hover:bg-[#3D2314] active:scale-95 text-white font-semibold text-xs shadow-sm transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>+ Keranjang</span>
            </button>
            <button
              onClick={handleInstantWhatsApp}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-semibold text-xs shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan WA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
