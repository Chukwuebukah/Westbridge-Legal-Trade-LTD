import { 
  Shield, FileText, Award, Users, Home, Briefcase, Globe, FileCheck, Layers, FilePlus 
} from 'lucide-react';

function ServicesSection() {
  const services = [
    {
      icon: Briefcase,
      title: 'Commercial & Corporate Law',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Incorporation of companies in Nigeria (Ltd, PLC, joint ventures, SPVs)</li>
          <li>Structuring of ownership and shareholder relations</li>
          <li>Preparation and review of corporate documents (MEMART, articles, shareholder agreements)</li>
          <li>Changes in company structure (capital increase, entry/exit of shareholders)</li>
          <li>Corporate governance and support for directors and company officers</li>
        </ul>
      ),
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: FileText,
      title: 'Contracts & Transactional Documentation',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Drafting and review of contracts of all types (sale and purchase, supply, service, distribution, franchise, NDA, MoU, etc.)</li>
          <li>Negotiation of contract terms with local and foreign partners</li>
          <li>Adapting contracts to Nigerian law and regulatory requirements</li>
          <li>Legal risk assessment in contracts and recommendations to mitigate those risks</li>
        </ul>
      ),
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Globe,
      title: 'European / Foreign Companies Entering Nigerian / West African Market',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Full “market entry” legal service for European companies</li>
          <li>Legal analysis of the most suitable business and corporate structure</li>
          <li>Incorporation of companies, branches, or joint ventures with local partners</li>
          <li>Registrations with authorities, regulators, and professional bodies</li>
          <li>Legal support in dealings with ministries, government agencies, and key local stakeholders</li>
        </ul>
      ),
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Users,
      title: 'Non-profit Organizations, Foundations & Associations',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Establishment of non-profit organizations, foundations, associations, and community projects</li>
          <li>Drafting of constitutions, by-laws, and internal regulations</li>
          <li>Registration and compliance under Nigerian law and regulatory requirements</li>
          <li>Advisory for international NGOs operating in Nigeria and West Africa</li>
        </ul>
      ),
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: FileCheck,
      title: 'Regulatory & Compliance Advisory',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Compliance with Nigerian legal requirements (corporate, tax – in cooperation with tax advisers, AML/KYC, NPO regulations)</li>
          <li>Internal policies, codes of ethics, and process manuals</li>
          <li>Preparing clients for inspections and audits by public authorities</li>
          <li>Ongoing monitoring of legislative changes and practical guidance on how to respond</li>
        </ul>
      ),
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Dispute Resolution (Out-of-Court & Litigation Support)',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Negotiation and out-of-court resolution of commercial disputes</li>
          <li>Preparation of legal opinions and documentation for court proceedings and arbitrations</li>
          <li>Strategic advice on dispute prevention (contract structuring, risk management)</li>
        </ul>
      ),
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Layers,
      title: 'International Trade & Cross-Border Transactions',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Contracts for international trade (sale and purchase, distribution, agency, licensing, technology transfer)</li>
          <li>Legal support for export and import, including documentation for payments and bank guarantees</li>
          <li>Joint ventures between Nigerian and European entities</li>
          <li>Advice on the application of international standards (including INCOTERMS)</li>
        </ul>
      ),
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: FilePlus,
      title: 'Legal “Outsourcing” for Companies',
      description: (
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          <li>Long-term external “in-house” legal services (retainer / fixed monthly fee)</li>
          <li>Regular legal advisory for management and business owners</li>
          <li>Fast responses to day-to-day operational legal questions</li>
        </ul>
      ),
      color: 'from-teal-400 to-teal-600'
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-[#181e29] border-t border-[#232a3b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-400/10 text-yellow-400 text-xs font-bold px-4 py-2 rounded-full mb-4">
            EXPLORE OUR PRACTICE AREAS
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 font-serif">
            Explore The Perfect Practice Areas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide expert legal services in corporate, commercial, regulatory, and cross-border matters, helping clients navigate complex legal landscapes in Nigeria and West Africa.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <button className="bg-yellow-400 text-[#181e29] font-bold py-2 px-6 rounded transition text-sm shadow group-hover:bg-yellow-500">View More</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
