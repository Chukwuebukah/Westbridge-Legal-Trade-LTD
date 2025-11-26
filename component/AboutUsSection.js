import Image from "next/image";
import { Award, Users, Briefcase, CheckCircle } from 'lucide-react';

function AboutUsSection() {

  const features = [
    { icon: CheckCircle, title: 'We design the optimal legal structure', desc: 'We assess your goals and build the safest possible legal framework.' },
    { icon: Award, title: 'Incorporate a company or set up a branch', desc: 'Complete guidance on company formation and regulatory compliance.' },
    { icon: Users, title: 'Handle registrations with authorities & regulators', desc: 'We interface with Nigerian institutions so you don’t have to.' },
    { icon: Briefcase, title: 'Draft and review all key contracts', desc: 'Ensure your agreements protect your interests at every step.' },
    { icon: Briefcase, title: 'Provide ongoing legal advice and compliance support', desc: 'Long-term partnership to keep your business safe and compliant.' }
  ];

  return (
    <section id="aboutus" className="py-24 px-6 bg-[#181e29] border-t border-[#232a3b]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block bg-yellow-400/10 text-yellow-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            WHO WE ARE
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-serif leading-tight">
            Dedicated Excellence in Legal & Corporate Services
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We bring a blend of European legal culture and West African business knowledge to help companies navigate regulatory systems confidently.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-3xl blur-2xl opacity-20"></div>

            <Image
              src="/lawyers.jpg"
              alt="Legal professionals at work"
              width={500}
              height={500}
              className="rounded-3xl shadow-2xl w-full h-auto relative z-10"
            />
          </div>

          {/* Text & Features */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif leading-snug">
              Why Choose Westbridge Legal & Trade Ltd?
            </h3>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              WESTBRIDGE LEGAL & TRADE LTD is a Nigeria-based law firm bridging European legal standards with the realities of West African markets. 
              We operate at the intersection of business, law, and cross-border commerce to help companies thrive in emerging markets.
            </p>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Whether you are an investor, an SME, or a multinational corporation, we provide tailored legal and regulatory solutions to support sustainable business growth in Nigeria and West Africa.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-5 items-start">
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center">
                      <Icon className="text-yellow-400" size={26} />
                    </div>

                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
