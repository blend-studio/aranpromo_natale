import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import bgImage from '../assets/24.jpg';
import logoBianco from '../assets/logo-bianco.svg';
import tvImage from '../assets/it-qled-qef1-qe50qef1auxzt-546734855.png'; 

// Importiamo le 4 risorse per i cerchi (Visibili solo su Desktop XL)
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
    <header className="relative min-h-[100dvh] w-full overflow-hidden bg-white">
      
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
        // IPAD VERT (md): w-full. IPAD ORIZ (lg): w-[55%]. DESKTOP (xl): w-[48%]
        className="absolute left-0 top-0 bottom-0 w-full lg:w-[55%] xl:w-[48%] bg-aranRed/90 md:bg-aranRed/85 lg:bg-aranRed/80 backdrop-blur-sm z-20 shadow-2xl flex flex-col lg:border-r border-white/10"
      >
        
        {/* LOGO */}
        <motion.div 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
           className="absolute top-6 left-6 md:top-8 md:left-10 lg:top-6 lg:left-10 xl:top-8 xl:left-12 w-32 md:w-40 lg:w-32 xl:w-40 z-50"
        >
          <img src={logoBianco} alt="Aran Cucine" className="w-full h-auto drop-shadow-md" />
        </motion.div>

        {/* CONTENUTO CENTRALE */}
        <div className="flex-grow flex flex-col justify-center px-6 md:px-16 lg:px-16 xl:px-12 relative py-24 md:py-32 lg:py-20">
            
            {/* Blocco Titolo */}
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
                className="mb-4 md:mb-8 lg:mb-4 xl:mb-8"
            >
                {/* FIX DEFINITIVO: 'leading-tight' (invece di leading-none) per separare le righe XMAS e PROMO */}
                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-4xl xl:text-[4.5rem] font-black leading-[1.05] md:leading-[1.05] lg:leading-[1.05] xl:leading-[1.05] text-white drop-shadow-lg mb-3 md:mb-4 tracking-normal">
                        XMAS <br/>PROMO
                    </motion.h1>
                
                <motion.div variants={fadeInUp} className="flex items-center gap-3 md:gap-6 lg:gap-3 xl:gap-4 w-fit">
                    {/* Anche qui leading-tight per sicurezza sul numero */}
                    <span className="text-[4.5rem] md:text-[7rem] lg:text-[4rem] xl:text-[8rem] font-black leading-tight text-white drop-shadow-xl">4</span>
                    <div className="flex flex-col justify-center">
                        <span className="text-sm md:text-xl lg:text-xs xl:text-xl font-bold text-white tracking-widest uppercase leading-none mb-1">
                            ELETTRODOMESTICI
                        </span>
                        <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: '100%' }} 
                            transition={{ delay: 1, duration: 0.5 }}
                            className="h-[1px] bg-white/50 my-1"
                        ></motion.div>
                        <span className="text-xl md:text-4xl lg:text-lg xl:text-3xl font-light text-white tracking-widest uppercase leading-none">
                            IN OMAGGIO
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Blocco TV + CTA */}
            <div className="relative mt-2 md:mt-8 lg:mt-2 xl:mt-4">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="relative z-30 text-white"
                >
                    <p className="text-xs md:text-lg lg:text-[10px] xl:text-base font-medium tracking-widest uppercase mb-1 opacity-90">E UNA</p>
                    <h2 className="text-3xl md:text-5xl lg:text-2xl xl:text-[2.8rem] font-black leading-[1.05] md:leading-[1.05] lg:leading-[1.05] xl:leading-[1.05] mb-2 md:mb-5 lg:mb-2 xl:mb-3">
                        SMART TV <br/> SAMSUNG
                    </h2>
                    <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 1.2 }}
                        className="bg-white text-aranBlack font-black text-lg md:text-2xl lg:text-sm xl:text-2xl px-3 py-1 inline-block shadow-lg transform -skew-x-3"
                    >
                        DA 50”
                    </motion.div>
                </motion.div>

                {/* --- GESTIONE IMMAGINE TV --- */}

                {/* 1. TV MOBILE & IPAD VERTICALE */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="block lg:hidden w-[220px] md:w-[400px] mt-6 md:mt-10 ml-[-20px] relative z-30"
                >
                    <img src={tvImage} alt="Samsung TV" className="w-full h-auto drop-shadow-xl" />
                </motion.div>

                {/* 2. TV IPAD ORIZZONTALE & DESKTOP */}
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
                    className="hidden lg:block absolute lg:top-[-10px] xl:top-[-40px] lg:left-[120px] xl:left-[240px] lg:w-[320px] xl:w-[500px] z-40 pointer-events-none"
                >
                    <img src={tvImage} alt="Samsung TV" className="w-full h-auto drop-shadow-2xl" />
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                    className="mt-8 md:mt-16 lg:mt-6 xl:mt-12 relative z-30 mb-8 lg:mb-0"
                >
                     <button 
                        onClick={onOpenModal}
                        className="w-full md:w-auto bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-aranRed px-8 py-3 md:px-12 md:py-5 lg:px-5 lg:py-2 xl:px-8 xl:py-3 font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group shadow-xl rounded-none text-sm md:text-xl lg:text-xs xl:text-base"
                     >
                        Blocca l'offerta
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform md:w-7 md:h-7 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                     </button>
                </motion.div>
            </div>
        </div>

        {/* 3. BANNER SCURO */}
        <div className="w-full lg:absolute lg:bottom-8 xl:bottom-20 lg:left-auto lg:right-[-120px] xl:right-[-250px] lg:w-auto z-50 shrink-0">
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, delay: 1.5 }}
                className="bg-[#1a1a1a] text-white p-5 md:p-6 lg:p-4 xl:p-8 shadow-2xl w-full md:w-auto md:min-w-[320px] lg:min-w-[250px] xl:min-w-[450px] border-t-4 lg:border-t-0 lg:border-l-4 border-white/20 mx-auto md:mx-0"
            >
                <div className="mb-2 lg:mb-0">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                        <Flame size={16} className="text-aranRed animate-pulse md:w-6 md:h-6 lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
                        <p className="text-xs md:text-lg lg:text-[10px] xl:text-sm font-light tracking-[0.2em] uppercase text-gray-300">
                            PROMOZIONE VALIDA
                        </p>
                    </div>
                    <p className="text-xl md:text-4xl lg:text-base xl:text-3xl font-bold tracking-wider uppercase leading-none mb-2 md:mb-4 lg:mb-1 xl:mb-2 text-center lg:text-left">
                        SOLO PER LE PRIME 15 CUCINE
                    </p>
                </div>
                <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '66%' }} 
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="h-[2px] bg-white mx-auto lg:mx-0"
                ></motion.div>
            </motion.div>
        </div>

      </motion.div>

      {/* 4. CERCHI ELETTRODOMESTICI A DESTRA (Solo Desktop XL) */}
      <div className="hidden xl:flex flex-col justify-center gap-6 absolute right-8 top-0 bottom-0 z-10 py-10">
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
               className="w-28 h-28 rounded-full border-4 border-white/80 bg-white overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300 relative group"
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