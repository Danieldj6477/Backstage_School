import React from 'react';
import { Link } from 'react-router-dom';
import { ViewState } from '../types';
import { ArrowLeft, Star, Film, Lightbulb, Camera, Circle, Mic, Smartphone, Calendar, Clock, CheckCircle } from 'lucide-react';
import { AnimButton } from '../components/AnimButton';

interface VideoCourseViewProps {
  onRegister: () => void;
}

export const VideoCourseView: React.FC<VideoCourseViewProps> = ({ onRegister }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-amber-500 selection:text-black pb-20">

      {/* Nav */}
      <div className="no-print sticky top-4 left-4 z-[60] ml-4 pt-4">
        <Link to="/">
          <AnimButton variant="outline" className="backdrop-blur-md rounded-full">
            <ArrowLeft size={16} /> Volver
          </AnimButton>
        </Link>
      </div>

      <div className="max-w-[210mm] mx-auto bg-[#0f172a] shadow-2xl overflow-hidden relative print-full mt-4">

        <header className="py-16 px-8 text-center relative border-b-4 border-amber-500 bg-slate-900">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1585675100412-2201a715b905?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
          <div className="relative z-10">
            <div className="inline-block bg-amber-500 text-black font-bold px-4 py-1 rounded-sm mb-4 transform -rotate-2">
              🎬 INSCRIPCIONES ABIERTAS
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2 text-white">
              Curso de Producción<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Audiovisual</span>
            </h1>
            <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto mt-4">
              "Crea contenido visual que conecte, comunique y venda"
            </p>
          </div>
        </header>

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center">
                <Star className="mr-3" size={24} /> ¿Por qué este curso?
              </h2>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Hoy el contenido audiovisual es clave para redes sociales, marcas y proyectos personales. Aprenderás a:
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                {['Contar historias con imágenes', 'Manejar cámara, luz y audio', 'Crear contenido profesional', 'Potenciar tu creatividad'].map((item, i) => (
                  <li key={i} className="flex items-start"><CheckCircle size={16} className="text-green-400 mt-1 mr-2" /> <span>{item}</span></li>
                ))}
              </ul>
              <div className="mt-4 bg-slate-800 p-3 rounded-l-md border-l-4 border-amber-500 text-sm italic">
                👉 No necesitas experiencia previa. ¡Empieza desde cero!
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center">
                <Film className="mr-3" size={24} /> Contenido del Curso
              </h2>
              <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                <ul className="grid grid-cols-1 gap-3 text-sm">
                  {[
                    { icon: Lightbulb, color: 'text-yellow-500', text: 'Iluminación y temperatura de color' },
                    { icon: Camera, color: 'text-blue-400', text: 'Triángulo de exposición (ISO, Apertura)' },
                    { icon: Circle, color: 'text-gray-400', text: 'Tipos de lentes y usos' },
                    { icon: Film, color: 'text-red-400', text: 'Lenguaje audiovisual y planos' },
                    { icon: Mic, color: 'text-purple-400', text: 'Audio y tipos de micrófonos' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <item.icon size={20} className={`${item.color} w-6 mr-2`} /> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">🎯 Ideal para:</h2>
              <div className="flex flex-wrap gap-2">
                {['Creadores de contenido', 'Emprendedores', 'Estudiantes', 'Aficionados'].map(tag => (
                  <span key={tag} className="bg-slate-700 text-xs px-3 py-1 rounded-full text-white">{tag}</span>
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-400 flex items-center">
                <Smartphone size={16} className="mr-2" /> Puedes iniciar incluso con tu celular.
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center">
                <Clock className="mr-3" size={24} /> Modalidades
              </h2>
              <div className="grid gap-4">
                <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-lg text-white">📅 Modalidad Regular</h3>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                    <span className="flex items-center gap-1"><Calendar size={14} /> Martes a Jueves</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">18:00 - 21:00</span>
                  </div>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-bold text-lg text-white">📅 Modalidad Intensiva</h3>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-300">
                    <span className="flex items-center gap-1"><Calendar size={14} /> Sábados</span>
                    <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded">09:00 - 17:00</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-6 text-black shadow-lg transform rotate-1">
              <div className="text-center border-b-2 border-black/10 pb-4 mb-4">
                <p className="text-sm font-bold uppercase tracking-widest opacity-70">Inversión Total</p>
                <p className="text-5xl font-black my-1">$25</p>
                <p className="text-xs font-bold bg-black text-amber-500 inline-block px-2 py-1 rounded">CUPOS LIMITADOS</p>
              </div>
              <ul className="text-sm font-semibold space-y-1">
                <li>Clases 100% prácticas</li>
                <li>Material de apoyo incluido</li>
                <li>Certificado de Backstage Productions</li>
              </ul>
            </section>

            <section className="text-sm text-gray-400">
              <h3 className="font-bold text-white mb-2">🚀 Metodología:</h3>
              <p>Aprendizaje práctico con ejercicios reales, enfoque en redes sociales y un ambiente participativo.</p>
            </section>
          </div>
        </div>

        <footer className="bg-slate-900 border-t border-slate-800 p-8 text-center mt-4">
          <h3 className="text-2xl font-bold text-white mb-4">¡Reserva tu cupo ahora!</h3>
          <div className="flex justify-center items-center gap-4 mb-6">
            <AnimButton variant="cine" onClick={onRegister}>
              Inscribirse al Curso
            </AnimButton>
          </div>
          <p className="font-mono text-amber-400 text-sm tracking-widest uppercase border-t border-slate-800 pt-4 inline-block">
            "Aprende a crear, grabar y contar historias con imágenes"
          </p>
        </footer>
      </div>

      <div className="fixed bottom-6 right-20 no-print z-40 hidden md:block">
        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_30px_rgba(245,158,11,0.8)] hover:scale-105 transition-all flex items-center gap-2 text-sm uppercase tracking-wider animate-pulse-slow border border-white/20 backdrop-blur-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Descargar Temario
        </button>
      </div>
    </div>
  );
};