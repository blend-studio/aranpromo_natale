import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Check, Flame, Zap, ChefHat, Droplets, ThermometerSnowflake } from 'lucide-react';

const PromoSection = () => {
  // Varianti per l'entrata degli elementi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 80 } 
    }
  };

  return (
    <section className="py-24 bg-aranBeige text-aranBlack relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Sezione */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-modern mb-4"
          >
            Il Natale Aran
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-aranRed mx-auto"
          ></motion.div>
          <p className="mt-6 text-xl font-sans font-light max-w-2xl mx-auto">
            Non solo una cucina, ma un pacchetto completo per la tua casa.
            
          </p>
        </div>

        {/* Griglia Benefit */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          
          {/* Card TV (Evidenziata) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-none shadow-xl flex flex-col md:flex-row items-center gap-8 border-l-4 border-aranRed relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 bg-aranRed text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                ESCLUSIVA NATALE 2025
             </div>
             <div className="w-full md:w-1/2">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="src/assets/it-qled-qef1-qe50qef1auxzt-546734855.png" 
                  alt="Samsung TV" 
                  className="w-full object-contain drop-shadow-2xl"
                />
             </div>
             <div className="w-full md:w-1/2 text-left">
                <h3 className="text-4xl font-modern mb-2">Smart TV Samsung 50"</h3>
                <p className="text-gray-600 mb-6 font-sans">
                  Goditi le feste con una risoluzione cristallina. La tecnologia Crystal Processor 4K regala sfumature di colore realistiche per un'esperienza visiva potente.
                </p>
                <ul className="space-y-2 font-sans text-sm font-bold text-aranBlack">
                  <li className="flex items-center gap-2"><Check className="text-aranRed" size={16}/> Risoluzione 4K UHD</li>
                  <li className="flex items-center gap-2"><Check className="text-aranRed" size={16}/> Design AirSlim</li>
                  <li className="flex items-center gap-2"><Check className="text-aranRed" size={16}/> Compatibile con Alexa e Google</li>
                </ul>
             </div>
          </motion.div>

          {/* Lista Elettrodomestici */}
          <div className="space-y-6 flex flex-col justify-center">
             <ApplianceCard icon={<Flame/>} title="Piano Cottura" desc="Gas o Induzione di ultima generazione." />
             <ApplianceCard icon={<ChefHat/>} title="Forno Multifunzione" desc="Cottura uniforme per i tuoi dolci natalizi." />
             <ApplianceCard icon={<ThermometerSnowflake/>} title="Frigorifero" desc="Combinato no-frost, spazioso ed efficiente." />
             <ApplianceCard icon={<Droplets/>} title="Lavastoviglie" desc="Silenziosa e a basso consumo energetico." />
          </div>

        </motion.div>

        {/* Footer Promo */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
           <p className="text-aranBlack font-modern text-2xl mb-2">
             Tutto questo è incluso nel prezzo della tua cucina.
           </p>
           <div className="inline-flex items-center gap-2 bg-aranRed text-white px-6 py-2 rounded-full shadow-lg">
              <Flame size={18} className="animate-pulse" />
              <span className="font-sans font-bold uppercase tracking-widest text-sm">Offerta valida solo per le prime 15 Cucine</span>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

// Componente Card Elettrodomestico Semplice
const ApplianceCard = ({ icon, title, desc }) => (
  <motion.div 
    variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
    className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow border-b-2 border-transparent hover:border-aranRed group flex items-start gap-4"
  >
    <div className="p-3 bg-aranBeige text-aranBlack rounded-full group-hover:bg-aranRed group-hover:text-white transition-colors">
      {icon}
    </div>
    <div>
      <h4 className="font-modern text-xl mb-1">{title}</h4>
      <p className="text-sm text-gray-500 font-sans">{desc}</p>
    </div>
  </motion.div>
);

export default PromoSection;