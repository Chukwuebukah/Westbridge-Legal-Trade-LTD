'use client';
import Image from 'next/image';
import { Landmark, Gavel, Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';


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
