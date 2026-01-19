import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { RegistrationFormData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: 'ia' | 'video';
  initialDates?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, defaultCourse = 'ia', initialDates = '' }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    phone: '',
    course: defaultCourse === 'video' ? 'video' : 'ia',
    selectedDates: initialDates
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        course: defaultCourse,
        selectedDates: initialDates
      }));
      setError(null);
    }
  }, [isOpen, defaultCourse, initialDates]);

  // Update course selection when default changes if not touched?
  // For simplicity, we stick to controlled input.

  const showError = (msg: string) => {
    setError(msg);
    setTimeout(() => setError(null), 3000); // Auto-hide after 3 seconds
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validation
    if (!formData.name || !formData.email || !formData.phone) {
      showError('Por favor completa todos los campos.');
      return;
    }

    if (formData.course === 'ia' && !formData.selectedDates) {
      showError('Por favor selecciona una fecha calculada para el curso.');
      return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showError('Por favor ingresa un correo electrónico válido.');
      return;
    }

    // Phone Validation (10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, ''); // Remove non-digits
    if (phoneDigits.length !== 10) {
      showError('Por favor ingresa un número de teléfono válido de 10 dígitos.');
      return;
    }

    setIsSending(true);

    const templateParams = {
      nombre: formData.name,
      email: formData.email,
      telefono: formData.phone,
      empresa: "Particular", // Default value
      servicio: formData.course === 'ia' ? 'Curso Inteligencia Artificial' : 'Curso Video',
      fecha: formData.selectedDates || 'No especificada',
      mensaje: `Solicitud de inscripción para ${formData.course === 'ia' ? 'Curso IA' : 'Curso Video'}`
    };

    // NOTE: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key
    emailjs.send('service_sivpc5g', 'template_4eqthe7', templateParams, 'Y6F1OJ6jA-_h38721')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSending(false);
        setIsSubmitted(true);
      }, (err) => {
        console.log('FAILED...', err);
        setIsSending(false);
        showError('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
      });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', course: 'ia', selectedDates: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* ... backdrop ... */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-slate-900 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl p-6 overflow-hidden"
          >
            {/* ... close button ... */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-display font-bold text-white mb-2">Inscríbete Ahora</h2>
                <p className="text-gray-400 text-sm mb-6">Reserva tu cupo. Nos pondremos en contacto contigo para finalizar el pago.</p>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-4 bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                    {error}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {formData.course === 'ia' && (
                    <div className="space-y-2">
                      {initialDates ? (
                        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                          <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">Fechas Seleccionadas</label>
                          <p className="text-white font-mono text-sm">{formData.selectedDates}</p>
                        </div>
                      ) : (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">Elige tus fechas</label>
                          <select
                            required
                            value={formData.selectedDates || ''}
                            onChange={e => setFormData({ ...formData, selectedDates: e.target.value })}
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none"
                          >
                            <option value="">-- Selecciona una opción --</option>
                            <option value="Modalidad Regular: 3, 4, 5 de Febrero">Modalidad Regular: 3, 4, 5 de Febrero</option>
                            <option value="Modalidad Regular: 10, 11, 12 de Febrero">Modalidad Regular: 10, 11, 12 de Febrero</option>
                            <option value="Modalidad Regular: 24, 25, 26 de Febrero">Modalidad Regular: 24, 25, 26 de Febrero</option>
                            <option value="Modalidad Intensiva: 21 de Febrero">Modalidad Intensiva: 21 de Febrero</option>
                            <option value="Modalidad Intensiva: 28 de Febrero">Modalidad Intensiva: 28 de Febrero</option>
                          </select>
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Nombre Completo</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Correo Electrónico</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Teléfono</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                      placeholder="099 123 4567"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg shadow-lg transform transition-transform active:scale-95 mt-4 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSending ? 'Enviando...' : 'Enviar Inscripción'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Enviada!</h3>
                <p className="text-gray-300 mb-6">En breve un asesor se comunicará contigo.</p>
                <button
                  onClick={resetForm}
                  className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};