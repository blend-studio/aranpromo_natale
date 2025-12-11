import React from 'react';
import { motion } from 'framer-motion';
import { Tv, CheckCircle, Zap } from 'lucide-react';

const PromoSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-aranBlack mb-4 tracking-tight">
            NON UN SEMPLICE <span className="text-aranRed">REGALO</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Abbiamo pensato a tutto noi. La tua cucina sarà completa di tutto, senza costi aggiuntivi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* TV Image with Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
             <img 
               src="https://images.samsung.com/is/image/samsung/p6pim/it/ue50cu7170uxzt/gallery/it-crystal-uhd-cu7000-ue50cu7170uxzt-536480579?$684_547_PNG$" 
               alt="Samsung TV" 
               className="relative z-10 w-full drop-shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500"
             />
             <div className="absolute top-0 right-0 bg-aranBlack text-white px-4 py-2 font-bold text-xs uppercase tracking-widest rounded-bl-xl shadow-lg">
                Valore €549
             </div>
          </motion.div>

          {/* Benefits List */}
          <div className="space-y-6">
             <BenefitItem 
               icon={<Tv className="w-6 h-6 text-white" />} 
               title="Samsung Crystal UHD 50''"
               desc="Risoluzione 4K, Smart TV integrata e colori cristallini. Il centro del tuo intrattenimento domestico è incluso."
               color="bg-blue-600"
             />
             <BenefitItem 
               icon={<Zap className="w-6 h-6 text-white" />} 
               title="Kit 4 Elettrodomestici"
               desc="Piano cottura, forno multifunzione, frigorifero combinato e lavastoviglie. Tutto marchiato e garantito."
               color="bg-aranRed"
             />
             <BenefitItem 
               icon={<CheckCircle className="w-6 h-6 text-white" />} 
               title="Progettazione Inclusa"
               desc="I nostri interior designer studieranno la soluzione perfetta per i tuoi spazi, gratuitamente."
               color="bg-aranBlack"
             />
          </div>

        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ icon, title, desc, color }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300"
  >
    <div className={`shrink-0 p-4 rounded-xl shadow-lg ${color}`}>
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default PromoSection;