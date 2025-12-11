import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-aranBlack text-white pt-16 pb-8 border-t-4 border-aranRed">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Colonna 1 */}
        <div>
          <h4 className="text-2xl font-black mb-6">ARAN <span className="text-aranRed">PIACENZA</span></h4>
          <p className="text-gray-400 mb-4">Design italiano, qualità artigianale e tecnologia. Da oltre 50 anni arrediamo le case più belle del mondo.</p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/10 rounded hover:bg-aranRed transition-colors"><Facebook size={20} /></a>
            <a href="#" className="p-2 bg-white/10 rounded hover:bg-aranRed transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Colonna 2 - Contatti */}
        <div>
           <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Dove Siamo</h4>
           <ul className="space-y-4 text-gray-300">
             <li className="flex items-start gap-3">
               <MapPin className="text-aranRed shrink-0" size={20} />
               <span>Via Roma, 24, 29010<br/>Pontenure (PC)</span>
             </li>
             <li className="flex items-center gap-3">
               <Phone className="text-aranRed shrink-0" size={20} />
               <a href="tel:0523718895" className="hover:text-white">0523 718895</a>
             </li>
           </ul>
        </div>

        {/* Colonna 3 - Orari */}
        <div>
          <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Orari Showroom</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Lunedì</span>
              <span>15:00 - 19:30</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Mar - Sab</span>
              <span>09:30 - 12:30 / 15:00 - 19:30</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2 text-aranRed font-bold">
              <span>Domenica</span>
              <span>Chiuso</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="text-center mt-12 pt-8 border-t border-white/10 text-xs text-gray-500">
        © 2025 Aran Cucine Store Piacenza - P.IVA 01906470339 - Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;