import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import bgImage from '../assets/24.jpg';
import logoBianco from '../assets/logo-bianco.svg';
import tvImage from '../assets/it-qled-qef1-qe50qef1auxzt-546734855.png'; 

// Importiamo le 4 risorse per i cerchi
import img1 from '../assets/Risorsa 1.webp';
import img2 from '../assets/Risorsa 2.webp';
import img3 from '../assets/Risorsa 3.webp';
import img4 from '../assets/Risorsa 4.webp';

const Hero = ({ onOpenModal }) => {
  const sideImages = [img1, img2, img3, img4];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <header className="relative h-[100dvh] w-full overflow-hidden bg-white">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
            <img 
            src={bgImage} 
            alt="Aran Cucine Showroom" 
            className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/10 md:bg-black/30"></div>
        </motion.div>
      </div>

      {/* 2. RED PANEL CONTAINER */}
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        className="absolute left-0 top-0 bottom-0 w-full md:w-[55%] lg:w-[48%] bg-aranRed/90 md:bg-aranRed/80 backdrop-blur-sm z-20 shadow-2xl flex flex-col md:border-r border-white/10"
      >
        
        {/* LOGO */}
        <motion.div 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
           className="absolute top-6 left-6 md:top-8 md:left-12 w-28 md:w-40 z-50"
        >
          <img src={logoBianco} alt="Aran Cucine" className="w-full h-auto drop-shadow-md" />
        </motion.div>

        {/* CONTENUTO CENTRALE (Flex Grow) */}
        <div className="flex-grow flex flex-col justify-center px-6 md:px-12 relative pt-10 md:pt-0">
            
            {/* Blocco Titolo */}
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
                className="mb-2 md:mb-6"
            >
                {/* MODIFICA: text-4xl su mobile (era 5xl) */}
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-[5.5rem] font-black leading-[0.9] text-white drop-shadow-lg mb-2 md:mb-4 tracking-tight">
                    XMAS <br/>PROMO
                </motion.h1>
                
                <motion.div variants={fadeInUp} className="flex items-center gap-3 md:gap-4 w-fit">
                    {/* MODIFICA: text-[3.5rem] su mobile (era [5rem]) */}
                    <span className="text-[3.5rem] md:text-[8rem] font-black leading-[0.8] text-white drop-shadow-xl">4</span>
                    <div className="flex flex-col justify-center">
                        {/* MODIFICA: text-xs su mobile (era sm) */}
                        <span className="text-xs md:text-xl font-bold text-white tracking-widest uppercase leading-none mb-1">
                            ELETTRODOMESTICI
                        </span>
                        <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: '100%' }} 
                            transition={{ delay: 1, duration: 0.5 }}
                            className="h-[1px] bg-white/50 my-1"
                        ></motion.div>
                        {/* MODIFICA: text-lg su mobile (era xl) */}
                        <span className="text-lg md:text-3xl font-light text-white tracking-widest uppercase leading-none">
                            IN OMAGGIO
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Blocco TV + CTA */}
            <div className="relative mt-1 md:mt-4">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="relative z-30 text-white"
                >
                    {/* MODIFICA: text-[10px] su mobile */}
                    <p className="text-[10px] md:text-base font-medium tracking-widest uppercase mb-1 opacity-90">E UNA</p>
                    {/* MODIFICA: text-2xl su mobile (era 3xl) */}
                    <h2 className="text-2xl md:text-[2.8rem] font-black leading-none mb-2 md:mb-3">
                        SMART TV <br/> SAMSUNG
                    </h2>
                    <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 1.2 }}
                        // MODIFICA: text-base su mobile (era lg) e padding ridotto
                        className="bg-white text-aranBlack font-black text-base md:text-2xl px-2 py-0.5 md:px-3 md:py-1 inline-block shadow-lg transform -skew-x-3"
                    >
                        DA 50”
                    </motion.div>
                </motion.div>

                {/* TV Desktop */}
                <motion.div 
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
                    className="hidden md:block absolute top-[-30px] md:top-[-60px] left-[220px] md:left-[280px] w-[300px] md:w-[550px] z-40 pointer-events-none"
                >
                    <img src={tvImage} alt="Samsung TV" className="w-full h-auto drop-shadow-2xl" />
                </motion.div>

                {/* TV Mobile */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="block md:hidden w-[160px] mt-2 mx-auto relative z-30"
                >
                    <img src={tvImage} alt="Samsung TV" className="w-full h-auto drop-shadow-xl" />
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                    className="mt-4 md:mt-12 relative z-30 mb-2"
                >
                     <button 
                        onClick={onOpenModal}
                        className="w-full md:w-auto bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-aranRed px-5 py-2.5 md:px-6 md:py-3 font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group shadow-xl rounded-none text-xs md:text-base"
                     >
                        Blocca l'offerta
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
                     </button>
                </motion.div>
            </div>
        </div>

        {/* 3. BANNER SCURO */}
        <div className="w-full md:absolute md:bottom-20 md:left-auto md:right-[-250px] md:w-auto z-50 shrink-0">
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, delay: 1.5 }}
                className="bg-[#1a1a1a] text-white p-4 md:p-8 shadow-2xl w-full md:min-w-[450px] border-t-4 md:border-t-0 md:border-l-4 border-white/20"
            >
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <Flame size={14} className="text-aranRed animate-pulse" />
                    <p className="text-[10px] md:text-sm font-light tracking-[0.2em] uppercase text-gray-300">
                        PROMOZIONE VALIDA
                    </p>
                </div>
                {/* MODIFICA: text-base su mobile (era lg/xl) */}
                <p className="text-base md:text-3xl font-bold tracking-wider uppercase leading-none mb-2 md:mb-3 text-center md:text-left">
                    SOLO PER LE PRIME 15 CUCINE
                </p>
                <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '66%' }} 
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="h-[2px] bg-white mx-auto md:mx-0"
                ></motion.div>
            </motion.div>
        </div>

      </motion.div>

      {/* 4. CERCHI ELETTRODOMESTICI A DESTRA (Solo Desktop) */}
      <div className="hidden lg:flex flex-col justify-center gap-6 absolute right-8 top-0 bottom-0 z-10 py-10">
          {sideImages.map((img, i) => (
             <motion.div 
               key={i} 
               initial={{ scale: 0, opacity: 0 }}
               animate={{ 
                 scale: 1, 
                 opacity: 1,
                 y: [0, -10, 0] 
               }}
               transition={{ 
                 scale: { type: "spring", stiffness: 260, damping: 20, delay: 0.1 + (i * 0.1) },
                 opacity: { duration: 0.2, delay: 0.1 + (i * 0.1) },
                 y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 + (i * 0.5) } 
               }}
               className="w-24 h-24 xl:w-28 xl:h-28 rounded-full border-4 border-white/80 bg-white overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300 relative group"
             >
                <img src={img} alt={`Elettrodomestico ${i+1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-aranRed/0 group-hover:bg-aranRed/20 transition-colors duration-300"></div>
             </motion.div>
          ))}
      </div>

    </header>
  );
};

export default Hero;