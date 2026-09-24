import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Coffee } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOrderNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOrderNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Menu', href: '#menu' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Proses', href: '#proses' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-[#E8DFD5]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Zone: Clean single typography brand */}
        <a
          href="#home"
          className="flex items-center gap-2 group text-2xl font-bold tracking-tight text-[#3A2312]"
        >
          <div className="w-9 h-9 rounded-full bg-[#52301A] flex items-center justify-center text-[#FDFBF7] shadow-sm group-hover:scale-105 transition-transform">
            <Coffee className="w-5 h-5" />
          </div>
          <span className="font-display tracking-wide">Es Mocha</span>
        </a>

        {/* Navigation links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5A4638]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#3A2312] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#52301A] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-3">
          {/* Cart Icon button */}
          <button
            onClick={onOpenCart}
            aria-label="Buka Keranjang Pesanan"
            className="relative p-2.5 rounded-full text-[#3A2312] bg-[#F4EFEA] hover:bg-[#EAE1D5] transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#873E23] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary CTA button */}
          <button
            onClick={onOrderNow}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#52301A] hover:bg-[#3D2314] rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap"
          >
            Pesan Sekarang
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu Navigasi"
            className="lg:hidden p-2 rounded-lg text-[#3A2312] hover:bg-[#F4EFEA] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#E8DFD5] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#4A3728] hover:text-[#3A2312] py-2 border-b border-[#F4EFEA]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOrderNow();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#52301A] rounded-full shadow-sm"
              >
                Pesan Sekarang
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
