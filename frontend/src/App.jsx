import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoSection from './components/PromoSection';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scarcityCount, setScarcityCount] = useState(15);

  // Effetto per diminuire il numero di cucine (finto realtime)
  useEffect(() => {
    // Recupera dal localStorage se esiste per persistenza, altrimenti 15
    const savedCount = localStorage.getItem('scarcity');
    if(savedCount) setScarcityCount(parseInt(savedCount));

    const interval = setInterval(() => {
      setScarcityCount((prev) => {
        const newVal = prev > 3 ? prev - 1 : 3; // Non scende sotto 3
        localStorage.setItem('scarcity', newVal);
        return newVal;
      });
    }, 45000); // Scende ogni 45 secondi

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans antialiased text-gray-800 bg-white selection:bg-aranRed selection:text-white">
      
      {/* Navbar rimossa come richiesto */}
      
      <Hero onOpenModal={() => setIsModalOpen(true)} scarcityCount={scarcityCount} />
      
      <PromoSection />

     {/* Sezione Contatto Finale - SFONDO AGGIORNATO */}
      <section className="py-20 bg-aranBeige"> 
        <div className="container mx-auto px-4 max-w-4xl">
           <div className="bg-white rounded-none shadow-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="bg-aranBlack p-10 text-white md:w-2/5 flex flex-col justify-center relative overflow-hidden">
                 {/* Decorazione Neve nel form */}
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/snow.png')]"></div>
                 
                 <h3 className="text-4xl font-modern mb-4 relative z-10">Blocca l'offerta</h3>
                 <p className="opacity-90 mb-6 font-sans font-light relative z-10">
                   Compila il modulo per riservare uno dei 3 pacchetti promozionali rimasti.
                 </p>
                 <div className="w-12 h-1 bg-aranRed"></div>
              </div>
              
              <div className="p-8 md:w-3/5">
                 <ContactForm />
              </div>
           </div>
        </div>
      </section>

      <Footer />

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)} // Chiude cliccando fuori
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Evita chiusura cliccando dentro
              className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-aranRed"
              >
                <X size={24} />
              </button>
              
              <div className="relative bg-aranRed h-32 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-30"></div>
                <h3 className="text-3xl font-black text-white relative z-10 drop-shadow-md">XMAS PROMO</h3>
              </div>
              
              <div className="p-8">
                <p className="text-center text-gray-500 mb-6 text-sm">Inserisci i tuoi dati per essere ricontattato senza impegno.</p>
                <ContactForm onSuccess={() => setIsModalOpen(false)} />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;