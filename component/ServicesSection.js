import { 
  Shield, FileText, Award, Users, Home, Briefcase, Globe, FileCheck, Layers, FilePlus 
} from 'lucide-react';

function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: 'Immigration, Work Permits & Expatriate Support',
      description: (
        <div className="text-gray-300 space-y-3">
          <p>
            We provide comprehensive legal support to foreign companies, expatriates and their employees in connection with entry into Nigeria, long-term residence and lawful employment in the country. Our objective is to ensure that all immigration and employment-related formalities are handled smoothly, correctly and without unnecessary delays.
          </p>

          <p className="font-semibold text-white">Our services include in particular:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Securing work permits and related authorisations</li>
            <li>Legal support in obtaining visas into Nigeria and visa-related assistance for travel outside Nigeria</li>
            <li>Assistance with immigration procedures for expatriates, senior management and specialised foreign personnel</li>
            <li>Advisory on regulatory requirements connected with residence and lawful employment in Nigeria</li>
            <li>Ongoing employer support in relation to expatriate staff compliance</li>
          </ul>

          <p className="text-sm italic mt-2">
            This service is particularly valuable for European and other foreign companies relocating employees to Nigeria or establishing a long-term local presence.
          </p>
        </div>
      ),
      color: 'from-yellow-400 to-yellow-600',
    },

    {
      icon: Globe,
      title: 'Corporate Market Entry & Regulatory Set-Up',
      description: (
        <div className="text-gray-300 space-y-3">
          <p>
            We assist both foreign and local clients with safe and efficient entry into the Nigerian and wider West African market. We design the most suitable legal structure for each business model and ensure that all required registrations, approvals and legal documentation are properly put in place.
          </p>

          <p className="font-semibold text-white">Our services include in particular:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Incorporation of companies, branches and joint ventures</li>
            <li>Structuring of corporate ownership and internal governance documentation</li>
            <li>Registrations with relevant authorities and regulators</li>
            <li>Legal support for entry into regulated sectors</li>
            <li>Ongoing compliance advisory for businesses operating in Nigeria</li>
          </ul>

          <p className="text-sm italic mt-2">
            This service is ideal for investors, foreign founders, SMEs and multinational companies seeking a legally secure and commercially workable market entry strategy.
          </p>
        </div>
      ),
      color: 'from-blue-400 to-blue-600',
    },

    {
      icon: FileText,
      title: 'Tax Services & Fiscal Advisory Coordination',
      description: (
        <div className="text-gray-300 space-y-3">
          <p>
            We provide legal and coordination support in relation to tax matters and fiscal compliance, particularly for foreign companies and expatriates doing business in Nigeria. Our role is to ensure that clients understand their obligations and have the correct structure and reporting approach in place.
          </p>

          <p className="font-semibold text-white">Our services include in particular:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Initial tax guidance for foreign companies entering the Nigerian market</li>
            <li>Support with tax registration and basic compliance structuring</li>
            <li>Coordination with tax advisers and specialist consultants where appropriate</li>
            <li>Legal support in communication with relevant authorities</li>
            <li>Review of how tax and regulatory obligations affect the client’s business model</li>
          </ul>

          <p className="text-sm italic mt-2">
            This service is especially important for businesses seeking to operate in Nigeria transparently, safely and without avoidable regulatory exposure in the future.
          </p>
        </div>
      ),
      color: 'from-teal-400 to-teal-600',
    },

    {
      icon: FileCheck,
      title: 'Customs, Import Compliance & Trade Documentation',
      description: (
        <div className="text-gray-300 space-y-3">
          <p>
            In the field of international trade, we provide legal support related to the importation of goods into Nigeria, customs processes and trade documentation. We help clients reduce legal and regulatory risks associated with import operations and cross-border movement of goods.
          </p>

          <p className="font-semibold text-white">Our services include in particular:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Legal support on customs compliance</li>
            <li>Preparation and review of import-related documentation</li>
            <li>Advisory on regulatory requirements applicable to goods entering the Nigerian market</li>
            <li>Support in dealings with relevant authorities and institutions</li>
            <li>Assistance in resolving delays, disputes or procedural issues arising during customs and import processes</li>
          </ul>

          <p className="text-sm italic mt-2">
            This service is particularly relevant for companies importing equipment, technology, industrial goods, healthcare products, consumer goods and other regulated products into Nigeria.
          </p>
        </div>
      ),
      color: 'from-purple-400 to-purple-600',
    },

    {
      icon: Shield,
      title: 'Complete Customs Clearance Management',
      description: (
        <div className="text-gray-300 space-y-3">
          <p>
            In addition to legal advisory on customs compliance, we also assist clients with the coordination and management of the full customs clearance process. Our objective is to ensure that goods are cleared efficiently, lawfully and with minimal disruption to business operations.
          </p>

          <p className="font-semibold text-white">Our services include in particular:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>End-to-end coordination of customs clearance procedures</li>
            <li>Review of shipping, import and clearance documentation</li>
            <li>Support in liaising with customs authorities, agents, ports and related institutions</li>
            <li>Assistance in addressing clearance delays, queries and documentary deficiencies</li>
            <li>Legal oversight of the customs process to reduce exposure to penalties, detention or avoidable delays</li>
          </ul>

          <p className="text-sm italic mt-2">
            This service is especially useful for foreign companies and first-time importers who require a reliable local legal and regulatory partner.
          </p>
        </div>
      ),
      color: 'from-red-400 to-red-600',
    },

    {
      icon: FilePlus,
      title: 'NAFDAC Regulatory Support',
      description: (
        <div className="text-gray-300 space-y-3">
          <p>
            We assist clients in navigating the NAFDAC regulatory framework, particularly in relation to the importation, registration, distribution and placing of regulated products on the Nigerian market.
          </p>

          <p className="font-semibold text-white">Our services include in particular:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Legal support in NAFDAC registration processes</li>
            <li>Review of documentation and supporting materials required for registration</li>
            <li>Advisory on regulatory requirements for products subject to NAFDAC control</li>
            <li>Communication with the relevant authorities and procedural support during approval processes</li>
            <li>Ongoing legal guidance on post-registration compliance</li>
          </ul>

          <p className="text-sm italic mt-2">
            This service is highly relevant for businesses operating in healthcare, pharmaceuticals, food, cosmetics and other regulated sectors.
          </p>
        </div>
      ),
      color: 'from-green-400 to-green-600',
    },

    {
      icon: Layers,
      title: 'SONCAP & Standards Compliance',
      description: (
        <div className="text-gray-300 space-y-3">
          <p>
            We provide legal support in relation to SONCAP requirements and other technical standards applicable to the entry of products into Nigeria.
          </p>

          <p className="font-semibold text-white">Our services include in particular:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Advisory on SONCAP requirements and applicable standards</li>
            <li>Review of documentation required for import and compliance</li>
            <li>Support in communication with certification and regulatory bodies</li>
            <li>Assessment of legal and regulatory risks linked to deficient documentation</li>
            <li>Legal assistance in resolving import and approval issues</li>
          </ul>

          <p className="text-sm italic mt-2">
This service is particularly important for manufacturers, exporters and importers whose goods must meet Nigerian conformity and standards requirements.          </p>
        </div>
      ),
      color: 'from-indigo-400 to-indigo-600',
    },

    {
      icon: FileText,
      title: 'Commercial Contracts, Contract Review & Contract Management',
      description: (
        <div className="text-gray-300 space-y-3">
          <p>
            We draft, review and manage contracts so that they reflect the client’s commercial objectives while providing robust legal protection.
          </p>

          <p className="font-semibold text-white">Our services include in particular:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Drafting and review of commercial contracts</li>
            <li>Identification of risk clauses and recommendation of amendments</li>
            <li>Preparation of lease, supply, service, distribution and other commercial agreements</li>
            <li>Management of contracts and contractual relationships during their term</li>
            <li>Legal support in negotiation, amendment, renewal, termination or breach situations</li>
          </ul>

          <p className="text-sm italic mt-2">
This service is central to businesses that need commercially practical contracts that are also legally enforceable and strategically sound.          </p>
        </div>
      ),
      color: 'from-yellow-400 to-yellow-600',
    },

    {
      icon: Home,
      title: 'Tenancy Agreements, Lease Review & Real Estate Legal Support',
      description: (
        <div className="text-gray-300 space-y-3">
          <p>
            We provide legal services in relation to tenancy and lease arrangements for both tenants and landlords.
          </p>

          <p className="font-semibold text-white">Our services include in particular:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Drafting and review of tenancy agreements and lease agreements</li>
            <li>Legal assessment of rental terms before execution</li>
            <li>Negotiation of lease terms on behalf of clients</li>
            <li>Legal support in renewal, termination, notice and default situations</li>
            <li>Representation in landlord-tenant disputes</li>
          </ul>

          <p className="text-sm italic mt-2">
          This service is especially important for expatriates, foreign employees, companies leasing office or residential premises, as well as property owners.
          </p>
        </div>
      ),
      color: 'from-pink-400 to-pink-600',
    },

    {
      icon: Shield,
      title: 'Landlord-Tenant Relationship Management',
      description: (
        <div className="text-gray-300 space-y-3">
          <p>
            In addition to drafting and reviewing lease documentation, we provide ongoing legal management of landlord-tenant relationships.
          </p>

          <p className="font-semibold text-white">Our services include in particular:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Administration of tenancy agreements and related documentation</li>
            <li>Preparation of notices, reminders, demand letters and renewal documentation</li>
            <li>Legal support in enforcing tenants’ contractual obligations</li>
            <li>Advisory to landlords on the protection of their legal and proprietary interests</li>
            <li>Handling disputes, defaults and termination of tenancy relationships</li>
          </ul>

          <p className="text-sm italic mt-2">
            This is the type of service that demonstrates long-term legal stewardship rather than one-off document preparation, and it significantly strengthens the professional profile of the firm.
          </p>
        </div>
      ),
      color: 'from-cyan-400 to-cyan-600',
    },

    {
      icon: Users,
      title: 'Legal Support for Expatriates Living in Nigeria',
      description: (
        <div className="text-gray-300 space-y-3">
          <p>
            As a firm led by an expatriate with long-term experience in Nigeria, we understand both the practical and legal challenges foreign clients face in the country.
          </p>

          <p className="font-semibold text-white">Our services include in particular:</p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Company set-up and business structuring for expatriates</li>
            <li>Visa and immigration support</li>
            <li>Lease review and tenancy protection</li>
            <li>Contract review for local business dealings</li>
            <li>Legal navigation of day-to-day business and residency matters in Nigeria</li>
          </ul>

          <p className="text-sm italic mt-2">
            This reflects one of the firm’s strongest competitive advantages.
          </p>
        </div>
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
            Our Services
          </h2>
          <p className="text-xl text-gray-300 mx-auto leading-relaxed">
            At Westbridge Legal & Trade Ltd, we provide practical, high-level legal and regulatory support for companies, investors, expatriates, landlords and international businesses operating in Nigeria and across West Africa. Our services are designed to help clients enter the market securely, remain compliant, protect their interests and operate with confidence.
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