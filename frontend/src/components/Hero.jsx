import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import bgImage from '../assets/67_BIJOU.webp';
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
      // min-h-[100dvh] assicura che copra lo schermo, ma permette di estendersi su mobile
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
            // MODIFICA CRITICA PER MOBILE:
            // Mobile/iPad Vert (< lg): 'relative w-full min-h-[100dvh]' -> Così se il contenuto è lungo, la pagina scrolla e non taglia.
            // iPad Oriz/Desktop (lg+): 'absolute left-0 top-0 bottom-0' -> Torna fisso e split screen.
            className="relative w-full min-h-[100dvh] lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:min-h-0 lg:w-[55%] xl:w-[48%] bg-aranRed/90 lg:bg-aranRed/85 md:bg-aranRed/80 backdrop-blur-sm z-20 shadow-2xl flex flex-col lg:border-r border-white/10"
        >
        
        {/* LOGO */}
        <motion.div 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
           className="absolute top-6 left-6 md:top-8 md:left-10 lg:top-8 lg:left-12 xl:top-8 xl:left-12 w-32 lg:w-36 md:w-32 xl:w-40 z-50"
        >
          <img src={logoBianco} alt="Aran Cucine" className="w-full h-auto drop-shadow-md" />
        </motion.div>

        {/* CONTENUTO CENTRALE */}
        {/* Aggiunto pb-12/pb-24 su mobile per dare spazio al banner in fondo senza tagliare */}
        <div className="flex-grow flex flex-col justify-center px-6 md:px-16 lg:px-12 xl:px-12 relative pt-28 pb-12 md:py-20 lg:py-0">
            
            {/* Blocco Titolo */}
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
                className="mb-4 lg:mb-6 md:mb-4 xl:mb-8"
            >
                {/* FIX IPAD ORIZZONTALE (lg): Ridotto da text-8xl a text-6xl */}
                    <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl md:text-4xl xl:text-[5.5rem] font-black leading-[1.05] md:leading-[1.05] lg:leading-[1.05] xl:leading-[1.05] text-white drop-shadow-lg mb-3 md:mb-4 tracking-normal">
                        XMAS <br/>PROMO
                    </motion.h1>
                
                <motion.div variants={fadeInUp} className="flex items-center gap-3 lg:gap-4 md:gap-3 xl:gap-4 w-fit">
                    {/* FIX IPAD ORIZZONTALE (lg): Ridotto da text-[9rem] a text-[6rem] */}
                    <span className="text-[4.5rem] lg:text-[6rem] md:text-[4rem] xl:text-[8rem] font-black leading-tight text-white drop-shadow-xl">4</span>
                    <div className="flex flex-col justify-center">
                        {/* FIX IPAD ORIZZONTALE (lg): Testi normalizzati */}
                        <span className="text-sm lg:text-base md:text-xs xl:text-xl font-bold text-white tracking-widest uppercase leading-none mb-1">
                            ELETTRODOMESTICI
                        </span>
                        <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: '100%' }} 
                            transition={{ delay: 1, duration: 0.5 }}
                            className="h-[1px] bg-white/50 my-1"
                        ></motion.div>
                        <span className="text-xl lg:text-2xl md:text-lg xl:text-3xl font-light text-white tracking-widest uppercase leading-none">
                            IN OMAGGIO
                        </span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Blocco TV + CTA */}
            <div className="relative mt-2 lg:mt-4 md:mt-2 xl:mt-4">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="relative z-30 text-white"
                >
                    <p className="text-xs lg:text-sm md:text-[10px] xl:text-base font-medium tracking-widest uppercase mb-1 opacity-90">E UNA</p>
                    {/* FIX IPAD ORIZZONTALE (lg): Ridotto a text-5xl */}
                    <h2 className="text-3xl lg:text-5xl md:text-2xl xl:text-[2.8rem] font-black leading-[1.05] md:leading-[1.05] lg:leading-[1.05] xl:leading-[1.05] mb-2 lg:mb-3 md:mb-2 xl:mb-3">
                        SMART TV <br/> SAMSUNG
                    </h2>
                    <motion.div 
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 1.2 }}
                        className="bg-white text-aranBlack font-black text-lg lg:text-xl md:text-sm xl:text-2xl px-3 py-1 inline-block shadow-lg transform -skew-x-3"
                    >
                        DA 50”
                    </motion.div>
                </motion.div>

                {/* --- GESTIONE IMMAGINE TV --- */}

                {/* 1. TV per MOBILE e TABLET VERTICALE (< lg) */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="block lg:hidden w-[220px] md:w-[360px] mt-6 md:mt-8 ml-[-20px] md:ml-0 relative z-30"
                >
                    <img src={tvImage} alt="Samsung TV" className="w-full h-auto drop-shadow-xl" />
                </motion.div>

                {/* 2. TV IPAD ORIZZONTALE & DESKTOP */}
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.1 }}
                    // lg:top-[-100px] (Spostata più in alto per aumentare spazio col banner)
                    // lg:right-[-170px] (Spostata a destra)
                    className="hidden lg:block absolute lg:top-[-100px] xl:top-[-40px] lg:right-[-170px] lg:left-auto xl:left-[320px] xl:right-auto lg:w-[320px] xl:w-[500px] z-40 pointer-events-none"
                >
                    <img src={tvImage} alt="Samsung TV" className="w-full h-auto drop-shadow-2xl" />
                </motion.div>

                {/* CTA Button */}
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
                    className="mt-8 lg:mt-8 md:mt-6 xl:mt-12 relative z-30 mb-8 lg:mb-0"
                >
                     <button 
                        onClick={onOpenModal}
                        className="w-full md:w-auto bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-aranRed lg:px-8 lg:py-3 md:px-5 md:py-2 px-8 py-3 xl:px-8 xl:py-3 font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group shadow-xl rounded-none text-sm lg:text-base md:text-xs xl:text-base"
                     >
                        Blocca l'offerta
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform lg:w-5 lg:h-5 md:w-4 md:h-4 xl:w-5 xl:h-5" />
                     </button>
                </motion.div>
            </div>
        </div>

        {/* 3. BANNER SCURO */}
        {/* MOBILE: 'relative' (nel flusso) - TABLET/DESKTOP: 'absolute' */}
        <div className="w-full relative lg:absolute lg:bottom-4 xl:bottom-20 lg:left-auto lg:right-[-150px] xl:right-[-350px] lg:w-auto z-50 shrink-0">
            <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, delay: 1.5 }}
                // md:mx-auto (centrato su vert), lg:mx-0 (allineato a dx su oriz)
                className="bg-[#1a1a1a] text-white lg:p-5 md:p-4 p-5 xl:p-8 shadow-2xl w-full md:w-auto lg:min-w-[280px] md:min-w-[250px] xl:min-w-[450px] border-t-4 lg:border-t-0 lg:border-l-4 border-white/20 mx-auto md:mx-auto lg:mx-0"
            >
                <div className="mb-2 lg:mb-0">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                        <Flame size={16} className="text-aranRed animate-pulse lg:w-4 lg:h-4 md:w-3 md:h-3 xl:w-4 xl:h-4" />
                        <p className="text-xs lg:text-xs md:text-[10px] xl:text-sm font-light tracking-[0.2em] uppercase text-gray-300">
                            PROMOZIONE VALIDA
                        </p>
                    </div>
                    <p className="text-xl lg:text-xl md:text-base xl:text-3xl font-bold tracking-wider uppercase leading-none mb-2 lg:mb-2 md:mb-1 xl:mb-2 text-center lg:text-left">
                        SOLO PER LE PRIME 15 CUCINE
                    </p>
                </div>
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
                 className="w-28 h-28 rounded-full border-4 border-white/80 bg-aranRed overflow-hidden shadow-2xl hover:scale-110 transition-transform duration-300 relative group flex items-center justify-center"
              >
                    <img src={img} alt={`Elettrodomestico ${i+1}`} className="w-3/4 h-3/4 object-contain" />
                    <div className="absolute inset-0 bg-aranRed/0 group-hover:bg-aranRed/20 transition-colors duration-300"></div>
              </motion.div>
          ))}
      </div>

    </header>
  );
};

export default Hero;