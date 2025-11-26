'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Landmark, Gavel, Scale, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-[#181e29] bg-opacity-95 backdrop-blur-md shadow-lg z-50 border-b border-[#232a3b] fixed top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
         
          <img src="/Logo.jpg" alt="WestBridge Legal & Trade LTD" className="h-8 md:h-10" />
        </div>

        {/* Contact Info (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2 text-yellow-400 font-medium">
            <Phone size={18} /> <span>+2348070742746</span>
          </div>
          <div className="flex items-center gap-2 text-yellow-400 font-medium">
            <Mail size={18} /> <span>tomas.turecek@ncecctrade.com</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 ml-8">
          {['Home', 'About Us', 'Services', 'Contact Us'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '')}`}
              whileHover={{ color: '#facc15' }}
              className="text-white font-medium transition text-lg cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            whileHover={{ scale: 1.08, backgroundColor: '#facc15', color: '#181e29' }}
            className="bg-yellow-400 text-[#181e29] px-6 py-2 rounded font-semibold shadow ml-4 cursor-pointer"
            href="#contact"
          >
            Book A Consultation
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#181e29] border-t border-[#232a3b] shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {['Home', 'About Us', 'Services', 'Contact Us'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '')}`}
                  onClick={handleLinkClick}
                  className="block text-white font-semibold text-lg"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full block text-center bg-yellow-400 text-[#181e29] px-6 py-2 rounded font-semibold mt-2"
              >
                Book A Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-stretch bg-[#181e29] pt-32 pb-12 overflow-hidden">
      <Navbar />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 px-6 z-10">

        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-start gap-8">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, type: 'spring' }}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight font-serif"
          >
            WESTBRIDGE LEGAL & TRADE LTD
          </motion.h1>

          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, type: 'spring' }}
            className="text-lg text-gray-300 max-w-xl"
          >
            Your legal bridge between Europe and West Africa
          </motion.p>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: '#facc15', color: '#181e29' }}
            className="bg-yellow-400 text-[#181e29] font-bold py-3 px-8 rounded transition text-lg shadow-lg cursor-pointer"
            href="#contact"
          >
            Get In Touch
          </motion.a>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6 items-center md:items-end">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, type: 'spring' }}
            className="relative rounded-2xl shadow-2xl overflow-hidden w-full max-w-xs md:max-w-sm lg:max-w-md"
          >
            <Image
              src="/law.jpg"
              alt="Lawyer in office"
              width={400}
              height={500}
              className="rounded-2xl w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Icons */}
      <Landmark size={100} className="absolute left-0 top-1/2 -translate-y-1/2 text-yellow-900 opacity-10" />
      <Gavel size={80} className="absolute right-10 bottom-10 text-yellow-900 opacity-10" />
      <Scale size={80} className="absolute left-10 bottom-10 text-yellow-900 opacity-10" />
    </div>
  );
}

export default HeroSection;
