import React from 'react';
import { Link } from 'react-router-dom';
import { ViewState } from '../types';
import { ArrowLeft, Calendar, Zap, Users, Terminal, Image as ImageIcon, Video, Wand2, Laptop, Clock, Check, Brain } from 'lucide-react'; // Mapping icons
import { AnimButton } from '../components/AnimButton';
import brochurePdf from '../assets/Curso Inteligencia Artificial_Febrero2026.pdf';

interface IACourseViewProps {
  onRegister: (dates?: string) => void;
}

export const IACourseView: React.FC<IACourseViewProps> = ({ onRegister }) => {
  const [hoveredGroup, setHoveredGroup] = React.useState<number[] | null>(null);

  const getDayGroup = (day: number) => {
    const regularGroups = [[3, 4, 5], [10, 11, 12], [24, 25, 26]];
    const intensiveGroups = [[21], [28]]; // Treated individually as requested

    for (const group of regularGroups) {
      if (group.includes(day)) return { type: 'regular', days: group, label: 'Modalidad Regular' };
    }
    for (const group of intensiveGroups) {
      if (group.includes(day)) return { type: 'intensive', days: group, label: 'Modalidad Intensiva' };
    }
    return null;
  };

  const handleDayClick = (group: { type: string, days: number[], label: string } | null) => {
    if (!group) return;
    const dateString = `${group.label}: ${group.days.join(', ')} de Febrero`;
    onRegister(dateString);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 bg-grid-ia relative font-sans selection:bg-cyan-500 selection:text-black pb-20">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Nav */}
      <div className="no-print sticky top-4 left-4 z-[60] ml-4">
        <Link to="/">
          <AnimButton variant="outline" className="backdrop-blur-md rounded-full">
            <ArrowLeft size={16} /> Volver
          </AnimButton>
        </Link>
      </div>

      <div className="max-w-[210mm] mx-auto bg-[#030712]/95 relative shadow-2xl overflow-hidden min-h-screen border-x border-slate-800 print-full mt-4">

        {/* Header */}
        <header className="pt-12 pb-8 px-8 text-center relative z-10 border-b border-slate-800 bg-gradient-to-b from-slate-900/50 to-transparent">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-500/50 bg-cyan-950/30 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Calendar size={14} className="mr-1" /> INSCRIPCIONES ABIERTAS
          </div>
          <div className="flex flex-col items-center justify-center leading-none mb-6">
            <span className="text-lg md:text-xl text-cyan-500 tracking-[0.2em] md:tracking-[0.5em] font-bold mb-2 uppercase opacity-80 font-tech text-center">
              CURSO BÁSICO ONLINE
            </span>
            <span className="text-xl md:text-2xl text-white font-bold tracking-[0.3em] uppercase mb-4 font-tech drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              FEBRERO
            </span>
            <h1 className="flex flex-col items-center font-black italic tracking-tighter">
              <span className="text-6xl md:text-7xl text-white drop-shadow-lg z-10">INTELIGENCIA</span>
              <span className="text-6xl md:text-7xl text-white drop-shadow-lg z-10 -mt-2">ARTIFICIAL</span>
              <span className="text-7xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-glow-ai -mt-4 z-20 pb-2">
                APLICADA
              </span>
            </h1>
          </div>
          <div className="mb-6 flex justify-center">
            <div className="border border-cyan-500/50 bg-slate-900/80 px-10 py-3 rounded-lg transform -skew-x-12 inline-block backdrop-blur-md animate-pulse-slow">
              <p className="transform skew-x-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-black text-lg tracking-widest uppercase flex items-center gap-2">
                SIN NECESIDAD DE PROGRAMAR
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-lg font-light tracking-wide max-w-xl mx-auto">
            Domina las herramientas del futuro hoy. Crea imágenes, videos y proyectos digitales.
          </p>
        </header>

        <main className="p-8 grid gap-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center font-tech">
                <Zap size={20} className="text-yellow-400 mr-3" /> ¿Por qué este curso?
              </h2>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                La IA ya no es el futuro, es tu herramienta actual. En este curso 100% práctico aprenderás a usar herramientas gratuitas de Google AI Studio y más.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start"><Check size={14} className="text-cyan-500 mt-1 mr-2" /> Crear imágenes y videos impactantes</li>
                <li className="flex items-start"><Check size={14} className="text-cyan-500 mt-1 mr-2" /> Escribir prompts perfectos</li>
                <li className="flex items-start"><Check size={14} className="text-cyan-500 mt-1 mr-2" /> Desarrollar ideas sin código</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center font-tech">
                <Users size={20} className="text-purple-400 mr-3" /> ¿Para quién es?
              </h2>
              <div className="flex flex-wrap gap-2">
                {['Creadores de contenido', 'Emprendedores', 'Docentes', 'Curiosos Tech'].map(tag => (
                  <span key={tag} className="bg-slate-800 text-gray-300 text-xs px-3 py-1 rounded border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-gray-400 italic">
                👉 No necesitas experiencia previa ni conocimientos técnicos.
              </div>
            </div>
          </div>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-white font-tech tracking-wider whitespace-nowrap">
                <span className="text-cyan-500">//</span> CONTENIDO
              </h2>
              <div className="h-[1px] bg-slate-800 w-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Brain, color: 'text-cyan-400', title: 'Fundamentos IA', desc: 'Qué es, casos prácticos en negocios y educación.' },
                { icon: Terminal, color: 'text-green-400', title: 'Prompt Engineering', desc: 'El arte de pedir. Instrucciones claras e iteración.' },
                { icon: ImageIcon, color: 'text-pink-400', title: 'Imágenes con IA', desc: 'Estilo, composición, referencias visuales.' },
                { icon: Video, color: 'text-red-400', title: 'Video con IA', desc: 'Texto a video, movimiento de cámara.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-700/50 p-4 rounded-lg hover:bg-slate-800/50 transition-colors group">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon size={20} className={`${item.color} group-hover:text-white transition-colors`} />
                    <h3 className="font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}

              <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-purple-900/20 to-slate-900/20 border border-purple-500/30 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Wand2 size={20} className="text-purple-400" />
                  <h3 className="font-bold text-white text-lg">Vibe Coding</h3>
                </div>
                <p className="text-sm text-gray-300">Creación de ideas digitales, apps conceptuales y landing pages usando la IA como asistente creativo.</p>
              </div>
            </div>
          </section>

          <div className="flex justify-between items-center bg-slate-900/80 px-6 py-4 rounded-lg border border-slate-700 shadow-inner">
            <div className="text-center w-full border-r border-slate-700">
              <p className="text-2xl font-black text-white">70%</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Práctica</p>
            </div>
            <div className="text-center w-full border-r border-slate-700">
              <p className="text-2xl font-black text-white">30%</p>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Teoría</p>
            </div>
            <div className="text-center w-full">
              <div className="flex justify-center mb-1"><Laptop size={20} className="text-cyan-400" /></div>
              <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Herramientas Gratuitas</p>
            </div>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white font-tech mb-2">📅 Elige tu fecha</h3>
              <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700 shadow-xl backdrop-blur-sm h-full flex flex-col">
                <div className="text-center font-bold text-white mb-6 uppercase tracking-widest border-b border-slate-700 pb-4 font-tech">Febrero 2026</div>

                <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
                  {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'].map(d => (
                    <div key={d} className="text-slate-500 text-xs font-bold uppercase">{d}</div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2 flex-grow">
                  {Array.from({ length: 28 }, (_, i) => i + 1).map(day => {
                    const group = getDayGroup(day);
                    const isHovered = hoveredGroup && group && hoveredGroup.some(d => group.days.includes(d));
                    const isRegular = group?.type === 'regular';
                    const isIntensive = group?.type === 'intensive';

                    let cellClass = "aspect-square flex items-center justify-center rounded-lg text-sm transition-all duration-300 relative cursor-default border ";

                    if (group) {
                      cellClass += " cursor-pointer ";
                      if (isRegular) {
                        cellClass += isHovered
                          ? "bg-cyan-500 text-white border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-105 z-10"
                          : "bg-cyan-900/30 text-cyan-300 border-cyan-500/30";
                      } else if (isIntensive) {
                        cellClass += isHovered
                          ? "bg-purple-500 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] scale-105 z-10"
                          : "bg-purple-900/30 text-purple-300 border-purple-500/30";
                      }
                    } else {
                      cellClass += "text-slate-600 border-transparent hover:bg-slate-800/50";
                    }

                    return (
                      <div
                        key={day}
                        className={cellClass}
                        onMouseEnter={() => group && setHoveredGroup(group.days)}
                        onMouseLeave={() => setHoveredGroup(null)}
                        onClick={() => handleDayClick(group)}
                      >
                        {day}
                        {(isHovered && group && day === group.days[0]) && ( // Show tooltip only on first day of group to avoid clutter? Or pass mouse position? Actually absolute centering on the highlighted group might be tricky. Let's just keep the simple tooltip on hovered element.
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap z-20 border border-slate-700 pointer-events-none">
                            {group.label}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-400 justify-center border-t border-slate-800 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></span>
                    <span>Regular (18:00 - 21:00)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.8)]"></span>
                    <span>Intensiva (09:00 - 17:00)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-lg font-bold text-white font-tech mb-2 invisible md:visible">Inversión</h3>
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 p-8 rounded-xl text-center shadow-2xl transform rotate-1 border border-cyan-400/30 flex flex-col justify-center h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <p className="text-sm text-cyan-100 uppercase tracking-[0.2em] mb-2 font-bold relative z-10">Inversión Total</p>
                <div className="relative z-10">
                  <p className="text-7xl font-black text-white mb-2 tracking-tighter drop-shadow-lg">$25</p>
                </div>
                <div className="text-left text-sm text-cyan-50 mt-8 space-y-3 border-t border-white/20 pt-6 relative z-10 mx-4">
                  <p className="flex items-center gap-3"><Check size={16} className="text-cyan-300" /> <span>Material de apoyo digital</span></p>
                  <p className="flex items-center gap-3"><Check size={16} className="text-cyan-300" /> <span>Grabaciones de las clases</span></p>
                  <p className="flex items-center gap-3"><Check size={16} className="text-cyan-300" /> <span className="font-bold text-white">Certificado Backstage</span></p>
                </div>

                <div className="mt-8 relative z-10">
                  <button onClick={() => onRegister()} className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg shadow-lg hover:bg-cyan-50 transition-colors uppercase tracking-widest text-xs">
                    Reservar Cupo
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-[#020617] border-t border-slate-800 p-8 pb-12 text-center relative z-10">
          <h2 className="text-2xl font-bold text-white mb-6">¿Listo para crear el futuro?</h2>
          <div className="flex justify-center gap-4">
            <AnimButton variant="ai" onClick={() => onRegister()}>
              Inscribirse Ahora
            </AnimButton>
          </div>
          <p className="mt-8 text-gray-500 text-sm font-mono border-t border-slate-800 pt-6 inline-block">
            "La Inteligencia Artificial no reemplaza tu creatividad. <span className="text-cyan-400 font-bold">La potencia.</span>"
          </p>
        </footer>
      </div>

      <div className="fixed bottom-6 right-4 md:right-20 no-print z-40 block">
        <a
          href={brochurePdf}
          download="Brochure_Curso_IA_Febrero2026.pdf"
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.6)] hover:shadow-[0_0_30px_rgba(245,158,11,0.9)] hover:scale-105 transition-all flex items-center gap-2 text-sm uppercase tracking-wider animate-pulse border border-white/20 backdrop-blur-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          <span className="hidden md:inline">Descargar Brochure</span>
          <span className="md:hidden">Brochure</span>
        </a>
      </div>
    </div>
  );
};