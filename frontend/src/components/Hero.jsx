import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import bgImage from '../assets/67_BIJOU.webp';
import logoBianco from '../assets/logo-bianco.svg';
import tvImage from '../assets/it-qled-qef1-qe50qef1auxzt-546734855.png'; 

// Importiamo le 4 risorse per i cerchi
import img1 from '../assets/Risorsa 1.webp';
import img2 from '../assets/Risorsa 2.webp';
import img3 from '../assets/Risorsa 3.webp';
import img4 from '../assets/Risorsa 4.webp';

const Hero = ({ onOpenModal }) => {
  const sideImages = [img1, img2, img3, img4];

  // Varianti per animazioni pulite
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <header className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* 1. BACKGROUND IMAGE (Zoom-in continuo molto lento) */}
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
            <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
      </div>

      {/* 2. RED PANEL (Entra da sinistra) */}
      <motion.div 
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        className="absolute left-0 top-0 bottom-0 w-full md:w-[48%] bg-aranRed/70 backdrop-blur-[3px] mix-blend-multiply md:mix-blend-normal z-20 shadow-[10px_0_30px_rgba(0,0,0,0.2)] flex flex-col border-r border-white/10"
      >
        
        {/* Logo */}
        <motion.div 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
           className="absolute top-8 left-8 md:left-12 w-32 md:w-40 z-50"
        >
          <img src={logoBianco} alt="Aran Cucine" className="w-full h-auto drop-shadow-md" />
        </motion.div>

        {/* CONTENUTO PRINCIPALE */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 relative">
            
            {/* Blocco Superiore */}
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
                className="mb-6 mt-10"
            >
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-[5.5rem] font-black leading-[0.9] text-white drop-shadow-lg mb-4 tracking-tight">
                    XMAS <br/>PROMO
                </motion.h1>
                
                <motion.div variants={fadeInUp} className="flex items-center gap-4 w-fit">
                    <span className="text-[6rem] md:text-[8rem] font-black leading-[0.8] text-white drop-shadow-xl">4</span>
                    <div className="flex flex-col justify-center">
                        <span className="text-lg md:text-xl font-bold text-white tracking-widest uppercase leading-none mb-1">
                            ELETTRODOMESTICI
                        </span>
                        
                        {/* Linea che si allunga */}
                        <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: '100%' }} 
                            transition={{ delay: 1, duration: 0.5 }}
                            className="h-[1px] bg-white/50 my-1"
                        ></motion.div>
                        
                        <span className="text-2xl md:text-3xl font-light text-white tracking-widest uppercase leading-none">
                            IN OMAGGIO
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            {/* SEZIONE TV + TESTO */}
            <div className="relative mt-4">
                
                {/* Testo a Sinistra */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="relative z-30 text-white"
                >
                    <p className="text-sm md:text-base font-medium tracking-widest uppercase mb-1 opacity-90">E UNA</p>
                    <h2 className="text-3xl md:text-[2.8rem] font-black leading-none mb-3">
                        SMART TV <br/> SAMSUNG
                    </h2>
                    
                    {/* Badge Bianco */}
                    <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 1.2 }}
                        className="bg-white text-aranBlack font-black text-xl md:text-2xl px-4 py-1 inline-block shadow-lg transform -skew-x-3"
                    >
                        DA 50”
                    </motion.div>
                </motion.div>

                {/* IMMAGINE TV (Entra da destra rispetto al container rosso) */}
                <motion.div 
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
                    className="absolute top-[-30px] md:top-[-60px] left-[220px] md:left-[280px] w-[300px] md:w-[550px] z-40 pointer-events-none"
                >
                    <img 
                        src={tvImage} 
                        alt="Samsung TV" 
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                className="mt-12 relative z-30"
            >
                 <button 
                    onClick={onOpenModal}
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-aranRed px-8 py-3 font-bold tracking-widest uppercase transition-all flex items-center gap-2 group shadow-[0_0_15px_rgba(0,0,0,0.3)]"
                 >
                    Blocca l'offerta
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </button>
            </motion.div>

        </div>

        {/* 3. BANNER SCURO IN BASSO */}
        <div className="absolute bottom-12 md:bottom-20 right-[-60px] md:right-[-250px] z-50">
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, delay: 1.5 }}
                className="bg-[#1a1a1a] text-white p-6 md:p-8 shadow-2xl min-w-[320px] md:min-w-[450px] border-l-4 border-white/20"
            >
                <div className="flex items-center gap-2 mb-1">
                    <Flame size={16} className="text-aranRed animate-pulse" />
                    <p className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-gray-300">
                        PROMOZIONE VALIDA
                    </p>
                </div>
                <p className="text-xl md:text-3xl font-bold tracking-wider uppercase leading-none mb-3">
                    SOLO PER LE PRIME 15 CUCINE
                </p>
                <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '66%' }} 
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="h-[2px] bg-white"
                ></motion.div>
            </motion.div>
        </div>

      </motion.div>

      {/* 4. CERCHI ELETTRODOMESTICI A DESTRA (NUOVA ANIMAZIONE POP-UP) */}
      <div className="hidden lg:flex flex-col justify-center gap-6 absolute right-8 top-0 bottom-0 z-10 py-10">
          {sideImages.map((img, i) => (
             <motion.div 
               key={i} 
               // STATO INIZIALE: Invisibile e piccolissimo
               initial={{ scale: 0, opacity: 0 }}
               // ANIMAZIONE: Diventa grande di colpo (POP) e poi fluttua
               animate={{ 
                 scale: 1, 
                 opacity: 1,
                 y: [0, -10, 0] 
               }}
               transition={{ 
                 // POP ISTANTANEO (Molla rigida e veloce)
                 scale: { type: "spring", stiffness: 260, damping: 20, delay: 0.1 + (i * 0.1) },
                 opacity: { duration: 0.2, delay: 0.1 + (i * 0.1) },
                 // Fluttuazione lenta (parte dopo)
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