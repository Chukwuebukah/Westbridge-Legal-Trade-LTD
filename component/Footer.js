import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#181e29] border-t border-[#232a3b] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-lg text-[#181e29]">
                ⚖️
              </div>
              <span className="text-2xl font-serif font-extrabold">
                WestBridge Legal & Trade LTD
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your legal bridge between Europe and West Africa{" "}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition text-[#181e29]"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition text-[#181e29]"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition text-[#181e29]"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-lg mb-6 text-yellow-400 font-serif">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#aboutus"
                  className="text-gray-400 hover:text-yellow-400 transition font-medium"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-yellow-400 transition font-medium"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-yellow-400 transition font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

       {/* Services */}
<div>
  <h4 className="font-extrabold text-lg mb-6 text-yellow-400 font-serif">
    SERVICES
  </h4>
  <ul className="space-y-3">
    <li>
      <a
        href="#services"
        className="text-gray-400 hover:text-yellow-400 transition font-medium"
      >
        Commercial & Corporate Law
      </a>
    </li>
    <li>
      <a
        href="#services"
        className="text-gray-400 hover:text-yellow-400 transition font-medium"
      >
        Contracts & Transactional Documentation
      </a>
    </li>
    <li>
      <a
        href="#services"
        className="text-gray-400 hover:text-yellow-400 transition font-medium"
      >
        European / Foreign Market Entry
      </a>
    </li>
    <li>
      <a
        href="#services"
        className="text-gray-400 hover:text-yellow-400 transition font-medium"
      >
        Non-profit Organizations & Foundations
      </a>
    </li>
    <li>
      <a
        href="#services"
        className="text-gray-400 hover:text-yellow-400 transition font-medium"
      >
        Regulatory & Compliance Advisory
      </a>
    </li>
    <li>
      <a
        href="#services"
        className="text-gray-400 hover:text-yellow-400 transition font-medium"
      >
        Dispute Resolution
      </a>
    </li>
    <li>
      <a
        href="#services"
        className="text-gray-400 hover:text-yellow-400 transition font-medium"
      >
        International Trade & Cross-Border Transactions
      </a>
    </li>
    <li>
      <a
        href="#services"
        className="text-gray-400 hover:text-yellow-400 transition font-medium"
      >
        Legal Outsourcing for Companies
      </a>
    </li>
  </ul>
</div>


          {/* Contact */}
          <div>
            <h4 className="font-extrabold text-lg mb-6 text-yellow-400 font-serif">
              CONTACT INFO
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-yellow-400 shrink-0 mt-1" />
                <span className="text-gray-400">+234 807 074 2746</span>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={18} className="text-yellow-400 shrink-0 mt-1" />
                <span className="text-gray-400">tomas.turecek@ncecctrade.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-yellow-400 shrink-0 mt-1" />
                <span className="text-gray-400">
                No 1, Adebayo Doherty Road, Lekki-Phase 1, Lagos
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#232a3b] my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Attorneyster. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
