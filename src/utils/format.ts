import { CartItem } from '../types.ts';
import { PRODUCT_INFO } from '../data/mockData.ts';

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace(/\s/g, '');
}

export function generateWhatsAppOrderUrl(
  items: CartItem[],
  customerName?: string,
  deliveryType: 'pickup' | 'delivery' = 'delivery',
  address?: string,
  generalNote?: string
): string {
  const total = items.reduce((sum, item) => sum + item.unitTotalPrice * item.quantity, 0);

  let message = `*Halo Admin Es Mocha! Saya ingin memesan Es Mocha:*\n\n`;

  if (customerName) {
    message += `👤 *Nama Pemesan:* ${customerName}\n`;
  }
  message += `🛵 *Metode:* ${deliveryType === 'delivery' ? 'Antar ke Alamat' : 'Ambil di Tempat (Pick Up)'}\n`;
  if (deliveryType === 'delivery' && address) {
    message += `📍 *Alamat Pengiriman:* ${address}\n`;
  }

  message += `\n*RINCIAN PESANAN:*\n`;
  message += `------------------------------\n`;

  items.forEach((item, index) => {
    message += `${index + 1}. *${item.menuItem.name}* (x${item.quantity})\n`;
    message += `   • Manis: ${item.sweetness} | Es: ${item.iceLevel}\n`;
    if (item.selectedToppings.length > 0) {
      const toppingNames = item.selectedToppings.map(t => t.name).join(', ');
      message += `   • Topping: ${toppingNames}\n`;
    }
    if (item.notes) {
      message += `   • Catatan: "${item.notes}"\n`;
    }
    message += `   • Subtotal: ${formatRupiah(item.unitTotalPrice * item.quantity)}\n\n`;
  });

  message += `------------------------------\n`;
  message += `💰 *TOTAL ESTIMASI:* ${formatRupiah(total)}\n`;
  if (generalNote) {
    message += `📝 *Catatan Khusus:* ${generalNote}\n`;
  }
  message += `\nMohon informasi ketersediaan & konfirmasi total pembayarannya. Terima kasih!`;

  return `https://wa.me/${PRODUCT_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}
