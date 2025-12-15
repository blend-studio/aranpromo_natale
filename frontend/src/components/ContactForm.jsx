import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = ({ onSuccess, className }) => {
  // Sostituisci con il percorso reale del tuo file public/index.php
  const API_URL = "https://piacenza.arancucine.it/promo/backend/public/index.php/api/contact"; 

  const [formData, setFormData] = useState({
    nome: '', cognome: '', email: '', telefono: '', messaggio: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nome: '', cognome: '', email: '', telefono: '', messaggio: '' });
        if (onSuccess) setTimeout(onSuccess, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center p-6 animate-fade-in">
        <CheckCircle size={64} className="text-green-500 mb-4 animate-bounce" />
        <h3 className="text-2xl font-bold text-gray-800">Richiesta Inviata!</h3>
        <p className="text-gray-600 mt-2">Ti contatteremo entro 24h per confermare i tuoi regali.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Nome</label>
            <input required name="nome" value={formData.nome} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-aranRed focus:ring-1 focus:ring-aranRed outline-none transition-all" />
        </div>
        <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Cognome</label>
            <input required name="cognome" value={formData.cognome} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-aranRed focus:ring-1 focus:ring-aranRed outline-none transition-all" />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-aranRed focus:ring-1 focus:ring-aranRed outline-none transition-all" />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-gray-500 uppercase">Telefono</label>
        <input required type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-aranRed focus:ring-1 focus:ring-aranRed outline-none transition-all" />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-bold text-gray-500 uppercase">Messaggio (Opzionale)</label>
        <textarea name="messaggio" value={formData.messaggio} onChange={handleChange} rows="3" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-aranRed focus:ring-1 focus:ring-aranRed outline-none transition-all resize-none"></textarea>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded text-sm">
            <AlertCircle size={16} /> Si è verificato un errore. Riprova.
        </div>
      )}

      <button 
        disabled={status === 'loading'}
        type="submit" 
        className="w-full bg-aranRed text-white font-bold py-4 rounded shadow-lg hover:bg-red-800 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'loading' ? <Loader2 className="animate-spin" /> : <>VOGLIO LA PROMO <Send size={18} /></>}
      </button>
      <p className="text-[10px] text-gray-400 text-center mt-2">I tuoi dati sono al sicuro. Inviando accetti la privacy policy.</p>
    </form>
  );
};

export default ContactForm;