'use client';
import { useState } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#aboutus' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-[#181e29] bg-opacity-95 backdrop-blur-md shadow-lg z-50 border-b border-[#232a3b] fixed top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-3">
          <img
            src="/Logo.jpg"
            alt="WestBridge Legal & Trade LTD"
            className="h-8 md:h-10"
          />
        </div>

        {/* contact info (desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2 text-yellow-400 font-medium">
            <Mail size={18} />{' '}
            <span>info@westbridgelegaltrade.com.ng</span>
          </div>
        </div>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-6 ml-8">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ color: '#facc15' }}
              className="text-white font-medium transition text-lg cursor-pointer"
              onClick={closeMenu}
            >
              {item.label}
            </motion.a>
          ))}


        </div>

        {/* mobile toggle */}
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
          onClick={handleToggle}
        >
          {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </button>
      </div>

      {/* mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#181e29] border-t border-[#232a3b] shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-white font-semibold text-lg"
                >
                  {item.label}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}