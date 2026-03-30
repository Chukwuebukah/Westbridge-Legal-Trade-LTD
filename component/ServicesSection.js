import { 
  Shield, FileText, Award, Users, Home, Briefcase, Globe, FileCheck, Layers, FilePlus 
} from 'lucide-react';

function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: 'Immigration, Work Permits & Expatriate Support',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Securing work permits and related authorisations.</li>
          <li>Legal support in obtaining visas and visa-related travel assistance.</li>
          <li>Assistance with immigration procedures for expatriates and specialised personnel.</li>
          <li>Advisory on residence and employment regulatory requirements.</li>
          <li>Ongoing employer support for expatriate compliance.</li>
        </ul>
      ),
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: Globe,
      title: 'Corporate Market Entry & Regulatory Set-Up',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Incorporation of companies, branches and joint ventures.</li>
          <li>Structuring of ownership and governance documentation.</li>
          <li>Registrations with relevant authorities and regulators.</li>
          <li>Legal support for entry into regulated sectors.</li>
          <li>Ongoing compliance advisory for operating businesses.</li>
        </ul>
      ),
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: FileText,
      title: 'Tax Services & Fiscal Advisory Coordination',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Initial tax guidance for foreign companies entering Nigeria.</li>
          <li>Support with tax registration and compliance basics.</li>
          <li>Coordination with tax advisers and specialist consultants.</li>
          <li>Legal assistance in communication with tax authorities.</li>
          <li>Review of tax and regulatory obligations affecting business models.</li>
        </ul>
      ),
      color: 'from-teal-400 to-teal-600',
    },
    {
      icon: FileCheck,
      title: 'Customs, Import Compliance & Trade Documentation',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Legal support on customs compliance.</li>
          <li>Preparation and review of import documentation.</li>
          <li>Advisory on regulatory requirements for imported goods.</li>
          <li>Support in dealings with customs authorities and institutions.</li>
          <li>Assistance resolving delays, disputes and procedural issues.</li>
        </ul>
      ),
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Complete Customs Clearance Management',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>End-to-end coordination of customs clearance procedures.</li>
          <li>Review of shipping, import and clearance documentation.</li>
          <li>Support liaising with customs authorities and agents.</li>
          <li>Assistance addressing clearance delays and documentary deficiencies.</li>
          <li>Legal oversight to reduce penalties, detention and delays.</li>
        </ul>
      ),
      color: 'from-red-400 to-red-600',
    },
    {
      icon: FilePlus,
      title: 'NAFDAC Regulatory Support',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Legal support in NAFDAC registration processes.</li>
          <li>Review of required registration documentation and materials.</li>
          <li>Advisory on product regulatory requirements.</li>
          <li>Procedural support during approval processes.</li>
          <li>Ongoing post-registration compliance guidance.</li>
        </ul>
      ),
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Layers,
      title: 'SONCAP & Standards Compliance',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Advisory on SONCAP and conformity standards.</li>
          <li>Documentation review for import compliance.</li>
          <li>Support with regulatory and certification bodies.
</li>
          <li>Risk assessment for deficiencies in compliance documents.</li>
          <li>Assistance resolving import and approval issues.</li>
        </ul>
      ),
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      icon: FileText,
      title: 'Commercial Contracts, Contract Review & Management',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Drafting and review of commercial contracts.</li>
          <li>Risk clause identification and amendment recommendations.</li>
          <li>Preparation of lease, supply, service, distribution agreements.</li>
          <li>Contract management during term and issue resolution.</li>
          <li>Support in negotiation, renewal, termination and breach scenarios.</li>
        </ul>
      ),
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: Home,
      title: 'Tenancy Agreements, Lease Review & Real Estate Support',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Drafting and review of tenancy and lease agreements.</li>
          <li>Legal assessment of rental terms before execution.</li>
          <li>Negotiation of lease terms for tenants and landlords.</li>
          <li>Support in renewal, termination and default situations.</li>
          <li>Representation in landlord-tenant disputes.</li>
        </ul>
      ),
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: Shield,
      title: 'Landlord-Tenant Relationship Management',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Administration of tenancy agreements and related records.</li>
          <li>Preparation of notices, demand letters and renewals.</li>
          <li>Legal support in enforcing contractual obligations.</li>
          <li>Advisory for landlords protecting legal interests.</li>
          <li>Dispute, default and termination handling support.</li>
        </ul>
      ),
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      icon: Users,
      title: 'Legal Support for Expatriates Living in Nigeria',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Company setup and business structuring for expatriates.</li>
          <li>Visa and immigration support for long-term residence.</li>
          <li>Lease review and tenancy protection services.</li>
          <li>Contract review for local business dealings.</li>
          <li>Legal guidance on day-to-day business and residency matters.</li>
        </ul>
      ),
      color: 'from-blue-400 to-blue-600',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-[#181e29] border-t border-[#232a3b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-400/10 text-yellow-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 font-serif">
            Westbridge Legal & Trade Ltd Service Offering
          </h2>
          <p className="text-xl text-gray-300 mx-auto">
            At Westbridge Legal & Trade Ltd, we provide practical, high-level legal and regulatory support for companies, investors, expatriates, landlords and international businesses operating in Nigeria and across West Africa.
            Our services are designed to help clients enter the market securely, remain compliant, protect their interests and operate with confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-[#232a3b] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#232a3b] hover:border-yellow-400 overflow-hidden relative"
              >
                <div className={`w-14 h-14 bg-linear-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-yellow-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition font-serif">{service.title}</h3>
                <div className="mb-6">{service.description}</div>
               
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
