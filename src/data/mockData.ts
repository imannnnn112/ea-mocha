import { MenuItem, Topping, Testimonial } from '../types.ts';

// Import image assets
import heroImage from '../assets/images/hero_iced_mocha_1790213785050.jpg';
import classicImage from '../assets/images/classic_ice_mocha_1790213800444.jpg';
import creamyImage from '../assets/images/creamy_ice_mocha_1790213814594.jpg';
import specialImage from '../assets/images/special_ice_mocha_1790213829815.jpg';
import ingredientsImage from '../assets/images/mocha_ingredients_1790213843784.jpg';

export const IMAGES = {
  hero: heroImage,
  classic: classicImage,
  creamy: creamyImage,
  special: specialImage,
  ingredients: ingredientsImage,
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'classic-ice-mocha',
    name: 'Classic Ice Mocha',
    description: 'Perpaduan kopi espresso pilihan, cokelat nikmat, susu segar, dan es batu menyegarkan.',
    price: 10000,
    image: classicImage,
    popular: true,
  },
  {
    id: 'creamy-ice-mocha',
    name: 'Creamy Ice Mocha',
    description: 'Es Mocha dengan lapisan whipped cream lembut di atasnya dan taburan cocoa halus.',
    price: 12000,
    image: creamyImage,
    badge: 'Favorit',
    popular: true,
  },
  {
    id: 'chocolate-ice-mocha',
    name: 'Chocolate Ice Mocha',
    description: 'Es Mocha dengan racikan cokelat yang lebih pekat dan rich untuk pecinta dark chocolate.',
    price: 12000,
    image: heroImage,
    badge: 'Extra Choco',
  },
  {
    id: 'mocha-special',
    name: 'Mocha Special',
    description: 'Es Mocha istimewa dengan saus cokelat lumer, butiran chocolate chips renyah, dan topping pilihan.',
    price: 15000,
    image: specialImage,
    badge: 'Signature',
    popular: true,
  },
];

export const TOPPINGS: Topping[] = [
  {
    id: 'whipped-cream',
    name: 'Whipped Cream',
    description: 'Krim lembut manis nan lumer di mulut',
    price: 3000,
    iconName: 'Cloud',
  },
  {
    id: 'chocolate-sauce',
    name: 'Chocolate Sauce',
    description: 'Llelehan saus cokelat pekat premium',
    price: 2000,
    iconName: 'Droplet',
  },
  {
    id: 'chocolate-chips',
    name: 'Chocolate Chips',
    description: 'Butiran cokelat renyah nan legit',
    price: 2000,
    iconName: 'Sparkles',
  },
  {
    id: 'oreo',
    name: 'Oreo',
    description: 'Remahan biskuit Oreo gurih nikmat',
    price: 3000,
    iconName: 'Cookie',
  },
  {
    id: 'meses-cokelat',
    name: 'Meses Cokelat',
    description: 'Taburan meses cokelat klasik renyah',
    price: 2000,
    iconName: 'Grid',
  },
  {
    id: 'caramel-sauce',
    name: 'Caramel Sauce',
    description: 'Saus karamel harum dengan manis legit',
    price: 2000,
    iconName: 'Flame',
  },
];

export const COMPOSITION_ITEMS = [
  {
    id: 'kopi',
    title: 'Kopi Espresso',
    emoji: '☕',
    description: 'Memberikan aroma dan cita rasa kopi yang kuat dan khas dari biji kopi sangrai pilihan.',
    highlight: 'Aroma Kuat',
  },
  {
    id: 'cokelat',
    title: 'Cokelat Premium',
    emoji: '🍫',
    description: 'Memberikan rasa manis dan karakter cokelat yang lezat, pekat, serta menggugah selera.',
    highlight: 'Cokelat Pekat',
  },
  {
    id: 'susu',
    title: 'Susu Segar',
    emoji: '🥛',
    description: 'Membuat tekstur minuman lebih creamy, gurih, dan lembut di lidah.',
    highlight: 'Tekstur Creamy',
  },
  {
    id: 'es',
    title: 'Es Batu Kristal',
    emoji: '🧊',
    description: 'Memberikan sensasi dingin dan menyegarkan seketika, sangat pas saat cuaca panas.',
    highlight: 'Dingin Menyegarkan',
  },
  {
    id: 'pemanis',
    title: 'Pemanis Alami',
    emoji: '🍯',
    description: 'Digunakan untuk menyesuaikan tingkat kemanisan yang seimbang sesuai selera Anda.',
    highlight: 'Manis Seimbang',
  },
];

export const ADVANTAGES = [
  {
    title: 'Perpaduan Kopi & Cokelat Nikmat',
    description: 'Harmoni pas antara pahit harumnya kopi espresso dan manisnya cokelat berkualitas tinggi.',
  },
  {
    title: 'Rasa Creamy & Lembut',
    description: 'Tekstur velvety yang memanjakan lidah di setiap tegukan dengan susu pilihan.',
  },
  {
    title: 'Menyegarkan Saat Dingin',
    description: 'Sajian es batu higienis yang seketika menghilangkan dahaga di siang hari yang terik.',
  },
  {
    title: 'Cocok untuk Berbagai Suasana',
    description: 'Teman setia saat santai, bekerja di meja kerja, nongkrong bareng sahabat, atau kumpul keluarga.',
  },
  {
    title: 'Pecinta Kopi & Cokelat Bersatu',
    description: 'Pilihan paling fleksibel bagi siapa saja yang mendambakan sensasi kopi sekaligus kelezatan cokelat.',
  },
  {
    title: 'Tampilan Estetik & Instagramable',
    description: 'Gradasi warna cokelat, putih susu, dan embun dingin pada gelas yang sangat photogenic.',
  },
  {
    title: 'Pilihan Aneka Topping',
    description: 'Bebas kustomisasi dengan aneka topping favorit dari whipped cream hingga saus karamel.',
  },
];

export const TASTE_PROFILE = [
  { name: 'Aroma Kopi', rating: 5, note: 'Harum espresso khas' },
  { name: 'Rasa Cokelat', rating: 5, note: 'Pekat dan memikat' },
  { name: 'Creamy', rating: 4, note: 'Lembut seimbang' },
  { name: 'Kesegaran', rating: 5, note: 'Dingin maksimal' },
  { name: 'Kemanisan', rating: 4, note: 'Pas tidak berlebih' },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Siapkan Kopi',
    description: 'Seduh kopi atau espresso hingga menghasilkan aroma dan rasa kopi yang kuat.',
  },
  {
    step: '02',
    title: 'Siapkan Cokelat',
    description: 'Tambahkan cokelat atau saus cokelat premium sesuai takaran racikan resep rahasia.',
  },
  {
    step: '03',
    title: 'Tambahkan Susu',
    description: 'Campurkan susu segar untuk menghasilkan tekstur yang creamy dan gurih lembut.',
  },
  {
    step: '04',
    title: 'Tambahkan Es',
    description: 'Masukkan es batu kristal higienis ke dalam gelas saji hingga penuh.',
  },
  {
    step: '05',
    title: 'Campurkan',
    description: 'Aduk semua bahan dengan teknik khusus hingga tercampur dengan sempurna.',
  },
  {
    step: '06',
    title: 'Tambahkan Topping',
    description: 'Tambahkan whipped cream, saus cokelat lumer, atau topping pilihan pelanggan.',
  },
  {
    step: '07',
    title: 'Sajikan',
    description: 'Es Mocha siap dinikmati dalam keadaan dingin dan menyegarkan.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Andi Pratama',
    role: 'Pecinta Kopi Harian',
    comment: 'Rasa kopinya pas dan cokelatnya terasa. Cocok banget diminum siang hari saat cuaca lagi terik.',
    rating: 5,
    date: '2 hari lalu',
  },
  {
    id: 'testi-2',
    name: 'Rizky Fadillah',
    role: 'Mahasiswa',
    comment: 'Es Mochanya creamy dan menyegarkan. Harganya juga terjangkau untuk kantong mahasiswa!',
    rating: 5,
    date: '3 hari lalu',
  },
  {
    id: 'testi-3',
    name: 'Fajar Nugraha',
    role: 'Content Creator',
    comment: 'Perpaduan kopi dan cokelatnya enak. Tampilannya juga menarik dan aesthetic buat difoto di media sosial.',
    rating: 5,
    date: '1 minggu lalu',
  },
];

export const ORDER_STEPS = [
  {
    number: '1',
    title: 'Pilih Menu Favorit',
    desc: 'Tentukan varian Es Mocha yang paling Anda suka dari katalog menu kami.',
  },
  {
    number: '2',
    title: 'Tentukan Jumlah & Topping',
    desc: 'Atur porsi, tingkat manis (sugar level), jumlah es, dan topping favorit.',
  },
  {
    number: '3',
    title: 'Klik Pesan Sekarang',
    desc: 'Rincian pesanan akan otomatis terangkum dalam keranjang pemesanan.',
  },
  {
    number: '4',
    title: 'Hubungi WhatsApp',
    desc: 'Format chat WhatsApp akan otomatis terisi dan siap dikirim ke admin kami.',
  },
  {
    number: '5',
    title: 'Konfirmasi Pesanan',
    desc: 'Admin kami merespons cepat untuk estimasi waktu dan total pembayaran.',
  },
  {
    number: '6',
    title: 'Pesanan Siap Diambil / Dikirim',
    desc: 'Es Mocha segar segera disiapkan dan dinikmati dingin menyegarkan!',
  },
];

export const PRODUCT_INFO = {
  productName: 'Es Mocha',
  category: 'Minuman Kopi & Cokelat',
  flavor: 'Kopi & Cokelat Creamy',
  servingTemp: 'Dingin / Es (Ice Cold 2°C - 5°C)',
  freshness: 'Paling nikmat diminum langsung dalam 4-6 jam',
  whatsappNumber: '08XXXXXXXXXX',
  whatsappRaw: '6281234567890',
  outletAddress: 'Jl. Kopi Harum No. 18, Pusat Kota',
  openingHours: 'Setiap Hari: 09:00 - 22:00 WIB',
};
