import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';

const LocationSection = () => {
  return (
    <section className="py-0 bg-white relative">
      <div className="flex flex-col lg:flex-row h-full lg:h-[600px]">
        
        {/* INFO BOX (Sinistra) */}
        <div className="w-full lg:w-1/3 bg-aranBeige p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
             
             {/* Titolo */}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
             >
                <h2 className="text-4xl lg:text-5xl font-modern mb-8 text-aranBlack">
                  Vieni a trovarci
                </h2>
                <div className="w-16 h-1 bg-aranRed mb-10"></div>
             </motion.div>
             
             <div className="space-y-10 font-sans">
                
                {/* Indirizzo */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-5 group"
                >
                   <div className="p-3 bg-white text-aranRed rounded-full shadow-md group-hover:bg-aranRed group-hover:text-white transition-colors duration-300">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-xl mb-1 text-aranBlack font-modern tracking-wide">ARAN STORE PIACENZA</h4>
                      <p className="text-gray-600 leading-relaxed">Via Roma, 24<br/>29010 Pontenure (PC)</p>
                      <a 
                        href="https://www.google.com/maps/dir//Via+Roma,+24,+29010+Pontenure+PC" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-aranRed font-bold text-xs mt-3 uppercase tracking-widest border-b border-aranRed pb-1 w-fit hover:text-aranBlack hover:border-aranBlack transition-all"
                      >
                        <Navigation size={14} /> Ottieni Indicazioni
                      </a>
                   </div>
                </motion.div>

                {/* Orari */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-5 group"
                >
                   <div className="p-3 bg-white text-aranRed rounded-full shadow-md group-hover:bg-aranRed group-hover:text-white transition-colors duration-300">
                      <Clock size={24} />
                   </div>
                   <div className="w-full">
                      <h4 className="font-bold text-xl mb-3 text-aranBlack font-modern tracking-wide">ORARI SHOWROOM</h4>
                      <ul className="text-gray-600 text-sm space-y-2 w-full">
                        <li className="flex justify-between border-b border-gray-300 pb-1 border-dashed">
                           <span className="font-bold">Lunedì</span>
                           <span>15:00 - 19:30</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-300 pb-1 border-dashed">
                           <span className="font-bold">Martedì - Sabato</span>
                           <span className="text-right">09:30 - 12:30<br/>15:00 - 19:30</span>
                        </li>
                        <li className="flex justify-between pt-1 text-aranRed font-bold">
                           <span>Domenica</span>
                           <span>Chiuso</span>
                        </li>
                      </ul>
                   </div>
                </motion.div>

             </div>
        </div>

        {/* MAPPA (Destra - Full Height) - RIMOSSO IL BORDO E L'OVERLAY */}
        <div className="w-full lg:w-2/3 h-[400px] lg:h-auto bg-gray-200 relative">
            <iframe 
              src="https://maps.google.com/maps?q=Aran+Cucine+Store+Piacenza,Via+Roma+24,Pontenure,PC&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              title="Mappa Aran Cucine Piacenza"
            ></iframe>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;