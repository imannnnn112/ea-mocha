import React, { useState } from 'react';
import { MenuItem, CartItem } from './types.ts';
import { MENU_ITEMS, PRODUCT_INFO } from './data/mockData.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Ingredients } from './components/Ingredients.tsx';
import { Benefits } from './components/Benefits.tsx';
import { TasteProfile } from './components/TasteProfile.tsx';
import { ProcessTimeline } from './components/ProcessTimeline.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { ToppingsSection } from './components/ToppingsSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { OrderingGuide } from './components/OrderingGuide.tsx';
import { ProductInfo } from './components/ProductInfo.tsx';
import { Footer } from './components/Footer.tsx';
import { OrderModal } from './components/OrderModal.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 2500);
  };

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      // If same item with same sweetness, ice and toppings exists, increment quantity
      const existingIndex = prev.findIndex(
        (item) =>
          item.menuItem.id === newItem.menuItem.id &&
          item.sweetness === newItem.sweetness &&
          item.iceLevel === newItem.iceLevel &&
          item.notes === newItem.notes &&
          item.selectedToppings.length === newItem.selectedToppings.length &&
          item.selectedToppings.every((t, i) => t.id === newItem.selectedToppings[i]?.id)
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });

    showToast(`${newItem.menuItem.name} berhasil ditambahkan ke keranjang!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderNowFromHero = () => {
    // Open modal with the first featured menu item (Classic Ice Mocha) or scroll to menu
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedProduct(MENU_ITEMS[0]);
    }
  };

  const handleViewMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickWhatsApp = () => {
    if (cartItems.length > 0) {
      setIsCartOpen(true);
    } else {
      const defaultMsg = `Halo Admin Es Mocha! Saya ingin bertanya atau memesan Es Mocha dingin segar. Boleh tahu menu rekomendasi hari ini?`;
      window.open(`https://wa.me/${PRODUCT_INFO.whatsappRaw}?text=${encodeURIComponent(defaultMsg)}`, '_blank');
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#241A15] flex flex-col selection:bg-[#52301A] selection:text-white relative">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#341F12] text-white px-5 py-3 rounded-full shadow-xl text-xs font-semibold flex items-center gap-2 border border-[#52301A] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span>✓</span>
          <span>{notification}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOrderNow={handleOrderNowFromHero}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero
          onOrderNow={handleOrderNowFromHero}
          onViewMenu={handleViewMenu}
        />

        {/* 4. Tentang Es Mocha */}
        <About />

        {/* 5. Komposisi Es Mocha */}
        <Ingredients />

        {/* 6. Keunggulan Es Mocha */}
        <Benefits />

        {/* 7. Profil Rasa */}
        <TasteProfile />

        {/* 8. Proses Pembuatan */}
        <ProcessTimeline />

        {/* 9. Menu */}
        <MenuSection
          onSelectProduct={(item) => setSelectedProduct(item)}
        />

        {/* 10. Topping */}
        <ToppingsSection />

        {/* 11. Galeri */}
        <GallerySection />

        {/* 12. Testimoni */}
        <TestimonialsSection />

        {/* 13. Cara Pemesanan & WhatsApp */}
        <OrderingGuide
          onQuickWhatsApp={handleQuickWhatsApp}
        />

        {/* 14. Informasi Produk */}
        <ProductInfo />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Order Customizer Dialog */}
      <OrderModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onBrowseMenu={handleViewMenu}
      />
    </div>
  );
}
