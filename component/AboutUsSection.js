import Image from "next/image";
import { Award, Users, Briefcase, CheckCircle } from 'lucide-react';

function AboutUsSection({ imageSrc, imageAlt = 'About us image' }) {

  const features = [
    { icon: CheckCircle, title: 'We design the optimal legal structure', desc: 'We analyse your objectives, risk profile and counterparties, then propose and implement the safest and most efficient legal setup for your project.' },
    { icon: Award, title: 'We incorporate your company or establish your branch', desc: 'From choosing the right vehicle to complete incorporation and post-incorporation filings, we manage the entire process so you can focus on the business itself.' },
    { icon: Users, title: 'We handle registrations with authorities and regulators', desc: 'We deal directly with Nigerian ministries, agencies and regulators on your behalf, ensuring that licences, registrations and approvals are obtained correctly and on time.' },
    { icon: Briefcase, title: 'We draft and review all key contracts', desc: 'Shareholders’ agreements, joint-venture arrangements, distribution and service contracts – we prepare and negotiate documentation that protects your position and is enforceable in practice.' },
    { icon: Briefcase, title: 'We provide ongoing legal and compliance support', desc: 'Through long-term advisory mandates, we monitor legal and regulatory changes, keep your structure and documentation up to date, and act as your external in-house legal department in Nigeria.' }
  ];

  const hasImage = Boolean(imageSrc);

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
        <div className={`grid gap-14 items-center ${hasImage ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
          {hasImage && (
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}

          {/* Text & Features */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif leading-snug">
              Why Choose Westbridge Legal & Trade Ltd?
            </h3>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            WESTBRIDGE LEGAL & TRADE LTD is a Nigeria-based law firm led by Oxford-educated European lawyers with long-term experience in West Africa. We combine in-depth knowledge of Nigerian law with a solid background in common-law and continental legal systems. This allows us to apply European-level legal standards to the realities of West African markets – reliably, commercially and without illusions.
            </p>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          We work at the intersection of law, trade and cross-border transactions. Whether you are an investor, an SME or a multinational corporation, we provide precise, business-oriented legal and regulatory support to secure and grow your operations in Nigeria and across West Africa.
            </p>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              How We Support Your Business
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
