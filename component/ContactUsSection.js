'use client';
import { useState } from 'react';
import { Mail, MapPin, ArrowRight, Clock, MessageSquare, Landmark, Gavel, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = formData.subject || `Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:info@westbridgelegaltrade.com.ng?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#181e29] border-t border-[#232a3b] relative overflow-hidden">
      {/* Animated Law Icons */}
      <motion.div initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 0.18 }} transition={{ delay: 0.3, duration: 1.2, type: 'spring' }} className="absolute left-10 top-10 z-0">
        <Scale size={60} className="text-yellow-400" />
      </motion.div>
      <motion.div initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 0.13 }} transition={{ delay: 0.5, duration: 1.2, type: 'spring' }} className="absolute right-10 top-32 z-0">
        <Landmark size={70} className="text-yellow-400" />
      </motion.div>
      <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 0.12 }} transition={{ delay: 0.7, duration: 1.2, type: 'spring' }} className="absolute left-1/2 bottom-10 z-0">
        <Gavel size={50} className="text-yellow-400" />
      </motion.div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7, type: 'spring' }} className="inline-block bg-yellow-400/10 text-yellow-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            GET IN TOUCH
          </motion.span>
          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8, type: 'spring' }} className="text-5xl md:text-6xl font-extrabold text-white mb-6 font-serif">
            Contact Our Legal Team
          </motion.h2>
          <motion.p initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8, type: 'spring' }} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us today for initial consultation.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.7, type: 'spring' }} className="bg-[#232a3b] p-8 rounded-2xl border border-[#232a3b] hover:border-yellow-400 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-4">
              <Clock className="text-[#181e29]" size={28} />
            </div>
            <h3 className="font-bold text-white text-xl mb-2">Office Hours</h3>
            <p className="text-gray-300 font-medium mb-1">Mon-Fri 9AM-6PM</p>
            <p className="text-gray-400 text-sm">
              Available for consultations
            </p>
          </motion.div>
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.7, type: 'spring' }} className="bg-[#232a3b] p-8 rounded-2xl border border-[#232a3b] hover:border-yellow-400 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-4">
              <Mail className="text-[#181e29]" size={28} />
            </div>
            <h3 className="font-bold text-white text-xl mb-2">Email</h3>
            <p className="text-gray-300 font-medium mb-1">info@westbridgelegaltrade.com.ng</p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <MessageSquare size={16} /> Response within 24 hours
            </p>
          </motion.div>
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.7, type: 'spring' }} className="bg-[#232a3b] p-8 rounded-2xl border border-[#232a3b] hover:border-yellow-400 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="text-[#181e29]" size={28} />
            </div>
            <h3 className="font-bold text-white text-xl mb-2">Address</h3>
            <p className="text-gray-300 font-medium mb-1">No 1, Adebayo Doherty Road,</p>
            <p className="text-gray-400 text-sm">Lekki-Phase 1, Lagos</p>
          </motion.div>
        </div>
        {/* Contact Form & Testimonial */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.7, type: 'spring' }} className="md:col-span-2">
            <div className="max-w-2xl mx-auto bg-[#232a3b] p-8 rounded-2xl border border-[#232a3b]">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-6 py-3 bg-[#181e29] border border-gray-700 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-6 py-3 bg-[#181e29] border border-gray-700 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-6 py-3 bg-[#181e29] border border-gray-700 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full px-6 py-3 bg-[#181e29] border border-gray-700 rounded-xl focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition resize-none text-white placeholder-gray-400"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#facc15', color: '#181e29' }}
                  type="submit"
                  className="w-full bg-yellow-400 text-[#181e29] font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 text-lg"
                >
                  Send Message
                  <ArrowRight size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;