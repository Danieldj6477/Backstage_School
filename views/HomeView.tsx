import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewState } from '../types';
import { Video, Brain, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomeView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-brand-dark pb-12">
      {/* Navbar - unchanged logic mostly */}
      <nav className="fixed w-full z-40 top-0 start-0 border-b border-white/10 bg-brand-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm group-hover:bg-cine-gold transition-colors overflow-hidden">
              {/* Ensure logo.png is present in the public directory */}
              <img src="logo.png" alt="Backstage" className="w-full h-full object-contain p-0.5" />
            </div>
            <span className="self-center text-xl font-display font-bold whitespace-nowrap text-white">
              Backstage <span className="font-light opacity-70">School</span>
            </span>
          </div>
          <div className="flex md:order-2 space-x-3">
            {/* External link preserved */}
            <a href="https://wa.me/593962545882" target="_blank" rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2 px-5 rounded-full text-sm transition-all flex items-center gap-2 shadow-lg shadow-green-900/20 hover:scale-105">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Contáctame
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* ... hero bg ... */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/80 to-brand-dark"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6 text-cine-gold"
          >
            Nuevos Lanzamientos
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="font-display font-black text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            Potencia tu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cine-gold via-white to-ai-cyan">
              Talento Creativo
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10"
          >
            Domina el arte audiovisual o adéntrate en el futuro con inteligencia artificial. Dos caminos, un solo objetivo: <strong>Crear sin límites.</strong>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <a href="#cursos" className="border border-white/30 hover:bg-white hover:text-black text-white py-3 px-8 rounded transition-all font-medium">
              Explorar Cursos
            </a>
          </motion.div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Elige tu camino</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cine-gold to-ai-cyan mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Video Card */}
            <motion.div
              whileHover={{ y: -5 }}
              onClick={() => navigate('/video')}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cine-gold/50 transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>

              <div className="relative p-8 md:p-10 h-full flex flex-col items-start justify-between min-h-[450px]">
                <div>
                  <div className="w-14 h-14 bg-cine-gold/10 rounded-xl flex items-center justify-center mb-6 border border-cine-gold/20 text-cine-gold group-hover:bg-cine-gold group-hover:text-black transition-colors duration-300">
                    <Video size={24} />
                  </div>
                  <h3 className="font-display font-black text-3xl text-white mb-2 group-hover:text-cine-gold transition-colors">
                    PRODUCCIÓN <br />AUDIOVISUAL
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    Aprende a contar historias. Domina la cámara, la iluminación y el lenguaje cinematográfico para crear contenido profesional.
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-gray-300">
                    <li className="flex items-center"><Check size={16} className="text-cine-gold mr-3" /> Iluminación y Composición</li>
                    <li className="flex items-center"><Check size={16} className="text-cine-gold mr-3" /> Manejo de Cámara Pro</li>
                    <li className="flex items-center"><Check size={16} className="text-cine-gold mr-3" /> Audio y Narrativa</li>
                  </ul>
                </div>
                <div className="w-full text-center bg-transparent border border-cine-gold text-cine-gold group-hover:bg-cine-gold group-hover:text-black py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300">
                  Ver Temario Completo
                </div>
              </div>
            </motion.div>

            {/* AI Card */}
            <motion.div
              whileHover={{ y: -5 }}
              onClick={() => navigate('/ia')}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-ai-cyan/50 transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-ai-cyan to-ai-purple opacity-0 group-hover:opacity-20 transition duration-500 blur-lg"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>

              <div className="relative p-8 md:p-10 h-full flex flex-col items-start justify-between min-h-[450px]">
                <div>
                  <div className="w-14 h-14 bg-ai-cyan/10 rounded-xl flex items-center justify-center mb-6 border border-ai-cyan/20 text-ai-cyan group-hover:bg-ai-cyan group-hover:text-black transition-colors duration-300">
                    <Brain size={24} />
                  </div>
                  <h3 className="font-display font-black text-3xl text-white mb-2 group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-ai-cyan group-hover:to-ai-purple transition-colors">
                    INTELIGENCIA <br />ARTIFICIAL
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    Crea imágenes, videos y proyectos digitales <span className="text-ai-cyan font-bold">sin saber programar</span>. Utiliza la tecnología del futuro hoy.
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-gray-300">
                    <li className="flex items-center"><Check size={16} className="text-ai-cyan mr-3" /> Prompt Engineering</li>
                    <li className="flex items-center"><Check size={16} className="text-ai-cyan mr-3" /> Imágenes y Video con IA</li>
                    <li className="flex items-center"><Check size={16} className="text-ai-cyan mr-3" /> Vibe Coding (No Code)</li>
                  </ul>
                </div>
                <div className="w-full text-center bg-transparent border border-ai-cyan text-ai-cyan group-hover:bg-ai-cyan group-hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] py-4 rounded-lg font-bold uppercase tracking-wider transition-all duration-300">
                  Ver Temario Completo
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <footer className="bg-black py-12 border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h4 className="font-display font-bold text-2xl text-white mb-6">Backstage School</h4>
          <p className="text-gray-600 text-sm">
            &copy; 2024 Backstage Productions & School. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};