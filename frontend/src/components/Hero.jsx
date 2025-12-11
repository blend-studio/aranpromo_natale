import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowRight } from 'lucide-react';
import bgImage from '../assets/24.jpg';
import logoBianco from '../assets/logo-bianco.svg';

const Hero = ({ onOpenModal, scarcityCount }) => {
  return (
    <header className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Aran Cucine Christmas Promo" 
          className="w-full h-full object-cover" 
        />
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Snow Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] animate-slide z-10"></div>

      {/* Red Overlay Panel (Left) */}
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-[50%] lg:w-[40%] bg-aranRed/85 backdrop-blur-sm z-30 flex flex-col justify-center px-8 md:px-16 shadow-2xl">
        
        {/* Logo */}
        <div className="absolute top-8 left-8 md:left-16 w-32 md:w-40">
          <img src={logoBianco} alt="Aran Cucine" className="w-full h-auto drop-shadow-md" />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-20"
        >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full mb-6">
                <Flame className="text-white fill-white animate-pulse" size={16} />
                <span className="text-xs md:text-sm font-bold tracking-wider uppercase text-white">Solo {scarcityCount} cucine disponibili</span>
            </div>

         
            
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-white drop-shadow-lg">
                XMAS PROMO
            </h1>

               {/* 4 Elettrodomestici in Omaggio - styled box */}
            <div className="flex items-end gap-4 mb-8">
              <span className="text-[6rem] md:text-[8rem] font-black leading-none text-white drop-shadow-xl -mb-2 md:-mb-4">4</span>
              <div className="flex flex-col justify-end">
                <span className="text-lg md:text-2xl font-bold text-white tracking-widest uppercase leading-none mb-1">ELETTRODOMESTICI</span>
                <span className="text-2xl md:text-4xl font-light text-white tracking-widest uppercase leading-none">IN OMAGGIO</span>
                <div className="w-full h-[2px] bg-white mt-2 shadow-lg"></div>
              </div>
            </div>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl font-medium mb-8 text-white/90 leading-relaxed">
                Acquista la tua cucina Aran e ricevi <strong className="text-white border-b border-white">4 Elettrodomestici</strong> e una <strong className="text-white border-b border-white">Smart TV 50"</strong> in regalo.
            </p>
            
            {/* CTA Button */}
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenModal} 
                className="group relative inline-flex items-center gap-3 bg-white text-aranRed text-lg px-8 py-4 font-bold tracking-widest uppercase overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-sm"
            >
                <span className="relative z-10">Blocca l'offerta</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={24} />
            </motion.button>

            <p className="mt-6 text-xs text-white/70 font-medium tracking-wide">
                *Offerta valida solo fino al 24 Dicembre
            </p>
        </motion.div>

        {/* Vertical Text Decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-16 overflow-hidden hidden md:flex items-center justify-center opacity-10 pointer-events-none">
             <span className="text-8xl font-black text-white tracking-widest transform -rotate-90 whitespace-nowrap">XMAS PROMO</span>
        </div>

      </div>

    </header>
  );
};

export default Hero;