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
    // min-h-[100dvh] assicura che copra tutto lo schermo anche se il contenuto sfora leggermente su iPad
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
        // IPAD VERTICALE (md): w-full (come mobile). IPAD ORIZZONTALE (lg): w-[55%] (Split screen).
        className="absolute left-0 top-0 bottom-0 w-full lg:w-[55%] xl:w-[48%] bg-aranRed/90 md:bg-aranRed/85 lg:bg-aranRed/80 backdrop-blur-sm z-20 shadow-2xl flex flex-col lg:border-r border-white/10"
      >
        
        {/* LOGO */}
        <motion.div 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
           // Posizione fissa in alto a sinistra
           className="absolute top-6 left-6 md:top-8 md:left-10 lg:top-8 lg:left-12 w-32 md:w-40 z-50"
        >
          <img src={logoBianco} alt="Aran Cucine" className="w-full h-auto drop-shadow-md" />
        </motion.div>

        {/* CONTENUTO CENTRALE */}
        {/* Flex grow e padding gestiti per centrare verticalmente */}
        <div className="flex-grow flex flex-col justify-center px-6 md:px-16 lg:px-12 relative py-24 md:py-32 lg:py-0">
            
            {/* Blocco Titolo */}
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
                className="mb-4 md:mb-8 lg:mb-6"
            >
                {/* TIPOGRAFIA: Mobile(4xl) -> Tablet(6xl) -> Desktop(7xl+) */}
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[0.9] text-white drop-shadow-lg mb-2 md:mb-4 tracking-tight">
                    XMAS <br/>PROMO
                </motion.h1>
                
                <motion.div variants={fadeInUp} className="flex items-center gap-3 md:gap-5 lg:gap-4 w-fit">
                    <span className="text-[3.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-black leading-[0.8] text-white drop-shadow-xl">4</span>
                    <div className="flex flex-col justify-center">
                        <span className="text-xs md:text-lg lg:text-xl font-bold text-white tracking-widest uppercase leading-none mb-1">
                            ELETTRODOMESTICI
                        </span>
                        <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: '100%' }} 
                            transition={{ delay: 1, duration: 0.5 }}
                            className="h-[1px] bg-white/50 my-1"
                        ></motion.div>
                        <span className="text-lg md:text-2xl lg:text-3xl font-light text-white tracking-widest uppercase leading-none">
                            IN OMAGGIO
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Blocco TV + CTA */}
            <div className="relative mt-1 md:mt-4 lg:mt-4">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="relative z-30 text-white"
                >
                    <p className="text-[10px] md:text-sm lg:text-base font-medium tracking-widest uppercase mb-1 opacity-90">E UNA</p>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-[2.8rem] font-black leading-none mb-2 md:mb-4">
                        SMART TV <br/> SAMSUNG
                    </h2>
                    <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 1.2 }}
                        className="bg-white text-aranBlack font-black text-base md:text-xl lg:text-2xl px-3 py-1 inline-block shadow-lg transform -skew-x-3"
                    >
                        DA 50”
                    </motion.div>
                </motion.div>

                {/* --- GESTIONE IMMAGINE TV --- */}

                {/* 1. TV MOBILE & IPAD VERTICALE (A SINISTRA) */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    // MOBILE: ml-[-10px] (tutta a sinistra). TABLET(md): ml-[-20px] (tutta a sinistra anche qui). LG: hidden.
                    className="block lg:hidden w-[200px] md:w-[380px] mt-6 md:mt-8 ml-[-10px] md:ml-[-20px] relative z-30"
                >
                    <img src={tvImage} alt="Samsung TV" className="w-full h-auto drop-shadow-xl" />
                </motion.div>

                {/* 2. TV IPAD ORIZZONTALE & DESKTOP (Laterale a destra) */}
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
                    // Visibile solo da lg in su. Posizionata assoluta.
                    className="hidden lg:block absolute top-[20%] right-[-30%] xl:top-[-60px] xl:left-[280px] xl:right-auto w-[400px] xl:w-[550px] z-40 pointer-events-none"
                >
                    <img src={tvImage} alt="Samsung TV" className="w-full h-auto drop-shadow-2xl" />
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                    // Margini per staccare dal banner su mobile/tablet vert
                    className="mt-8 md:mt-12 lg:mt-12 relative z-30 mb-8 lg:mb-0"
                >
                     <button 
                        onClick={onOpenModal}
                        // ADATTAMENTO: Padding e testo scalati
                        className="w-full md:w-auto bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-aranRed px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3 font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group shadow-xl rounded-none text-xs md:text-lg lg:text-base xl:text-base mx-auto md:mx-0"
                     >
                        Blocca l'offerta
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform md:w-6 md:h-6 lg:w-5 lg:h-5" />
                     </button>
                </motion.div>
            </div>
        </div>

        {/* 3. BANNER SCURO */}
        {/* Mobile/iPad Vert: Relative in fondo al flusso. iPad Oriz/Desktop: Absolute in basso a destra. */}
        <div className="w-full lg:absolute lg:bottom-16 xl:bottom-20 lg:left-auto lg:right-[-250px] lg:w-auto z-50 shrink-0">
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, delay: 1.5 }}
                // ADATTAMENTO IPAD VERTICALE (md): Padding ridotto e testo più piccolo per non occupare troppo spazio.
                className="bg-[#1a1a1a] text-white p-4 md:p-6 lg:p-8 lg:flex lg:justify-between lg:items-center xl:block shadow-2xl w-full md:w-auto md:min-w-[320px] lg:min-w-[400px] xl:min-w-[450px] border-t-4 lg:border-t-0 lg:border-l-4 border-white/20 mx-auto md:mx-0"
            >
                <div className="mb-2 lg:mb-0">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                        <Flame size={14} className="text-aranRed animate-pulse md:w-5 md:h-5 lg:w-4 lg:h-4" />
                        {/* Testo più piccolo su md */}
                        <p className="text-[10px] md:text-xs lg:text-sm font-light tracking-[0.2em] uppercase text-gray-300">
                            PROMOZIONE VALIDA
                        </p>
                    </div>
                    {/* Testo titolo ridotto su md */}
                    <p className="text-base md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider uppercase leading-none mb-2 md:mb-3 lg:mb-3 text-center lg:text-left">
                        SOLO PER LE PRIME 15 CUCINE
                    </p>
                </div>
                {/* Linea decorativa: nascosta su tablet orizzontale per pulizia */}
                <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '66%' }} 
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="h-[2px] bg-white mx-auto lg:hidden xl:block xl:mx-0 mt-2"
                ></motion.div>
            </motion.div>
        </div>

      </motion.div>

      {/* 4. CERCHI ELETTRODOMESTICI A DESTRA (Solo Desktop XL) */}
      {/* Nascosti su iPad (md/lg) per evitare casino, visibili solo su schermi grandi */}
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