import React from 'react';
import { Phone } from 'lucide-react';

const Navbar = ({ onOpenModal }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tighter text-aranBlack">
                ARAN <span className="text-aranRed">CUCINE</span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">
                Store Piacenza
            </span>
        </div>

        {/* Desktop Info */}
        <div className="hidden md:flex items-center gap-6">
             <div className="flex items-center gap-2 text-gray-600 font-medium">
                <Phone size={18} className="text-aranRed" />
                0523 718895
             </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={onOpenModal}
          className="bg-aranRed text-white px-6 py-2 rounded-full font-bold shadow-[0_4px_14px_0_rgba(139,0,0,0.39)] hover:bg-red-800 hover:scale-105 transition-all duration-300 animate-pulse"
        >
          BLOCCA PROMO
        </button>
      </div>
    </nav>
  );
};

export default Navbar;