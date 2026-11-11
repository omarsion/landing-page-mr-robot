import { useRef, useState } from 'react';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import SmartSvgImage from './SmartSvgImage';

type LeadershipProfile = {
  id: string;
  name: string;
  firstNames: string;
  lastNames: string;
  position: string;
  focus: string;
  caption: string;
  role: string;
  summary: string;
  experience: string;
  portrait: { url: string; width: number; height: number };
  cv: { url: string; previewBase: string; downloadName: string; pages: number };
  highlights: { number: string; label: string; detail: string }[];
};

const leadership: LeadershipProfile[] = [
  {
    id: 'ian-vera',
    name: 'Ian André Vera Pérez',
    firstNames: 'Ian André',
    lastNames: 'Vera Pérez',
    position: 'CEO Y FUNDADOR',
    focus: 'DIRECCIÓN Y ESTRATEGIA',
    caption: 'Tecnología con dirección e impacto.',
    role: 'CEO y fundador · Desarrollador full stack · Arquitectura de software',
    summary: 'Fundador y CEO de MR. ROBOT BOLIVIA y jefe del Departamento de Sistemas en FIEA Ecuador. Lidera el desarrollo de software a medida, la arquitectura de soluciones web y la automatización de procesos para clientes nacionales e internacionales.',
    experience: 'Ha desarrollado soluciones tecnológicas para SEDES Cochabamba y WOWCOM SRL, combinando desarrollo full stack, integración de APIs y soporte TI para digitalizar procesos y fortalecer la operación de sus equipos.',
    portrait: { url: `${import.meta.env.BASE_URL}images/ian-andre-vera-perez.jpeg`, width: 1280, height: 1130 },
    cv: { url: `${import.meta.env.BASE_URL}cv/ian-andre-vera-perez.pdf`, previewBase: `${import.meta.env.BASE_URL}cv/ian-andre-vera-perez`, downloadName: 'Ian_Andre_Vera_Perez_CV.pdf', pages: 3 },
    highlights: [
      { number: '01', label: 'Liderazgo tecnológico', detail: 'Jefe del Departamento de Sistemas en FIEA Ecuador.' },
      { number: '02', label: 'Desarrollo full stack', detail: 'Arquitectura de software, aplicaciones web y automatización.' },
      { number: '03', label: 'Soluciones tecnológicas', detail: 'Experiencia con SEDES Cochabamba y WOWCOM SRL.' },
    ],
  },
  {
    id: 'omar-barea',
    name: 'Omar Ariel Barea Lima',
    firstNames: 'Omar Ariel',
    lastNames: 'Barea Lima',
    position: 'COFUNDADOR',
    focus: 'INGENIERÍA Y DESARROLLO',
    caption: 'Ingeniería con visión de producto.',
    role: 'Cofundador · Ingeniero de Sistemas · Desarrollador full stack',
    summary: 'Cofundador de MR. ROBOT BOLIVIA, participa en el desarrollo de proyectos de software para clientes nacionales e internacionales. Su trabajo combina sistemas web, bases de datos e inteligencia artificial aplicada para convertir necesidades reales en herramientas útiles.',
    experience: 'Ha participado en investigación y desarrollo en TECBA, y en soluciones tecnológicas para SEMAPA, SEDES y SEDEPOS.',
    portrait: { url: `${import.meta.env.BASE_URL}images/omar-ariel-barea-lima.webp`, width: 900, height: 1200 },
    cv: { url: `${import.meta.env.BASE_URL}cv/omar-ariel-barea-lima.pdf`, previewBase: `${import.meta.env.BASE_URL}cv/omar-ariel-barea-lima`, downloadName: 'Omar_Ariel_Barea_Lima_CV.pdf', pages: 3 },
    highlights: [
      { number: '01', label: 'Desarrollo full stack', detail: 'Sistemas web, interfaces y bases de datos.' },
      { number: '02', label: 'IA aplicada', detail: 'Herramientas de IA integradas al desarrollo de software.' },
      { number: '03', label: 'Trayectoria institucional', detail: 'Experiencia con TECBA, SEMAPA, SEDES y SEDEPOS.' },
    ],
  },
];

export default function Profile() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeProfile, setActiveProfile] = useState<LeadershipProfile | null>(null);

  const openCv = (profile: LeadershipProfile) => {
    setActiveProfile(profile);
    dialogRef.current?.showModal();
  };

  const closeCv = () => dialogRef.current?.close();

  return (
    <section id="perfil" className="section-pad profile-section" aria-labelledby="perfil-titulo">
      <div className="container-wide team-intro">
        <p className="eyebrow">EL EQUIPO DE MR. ROBOT</p>
        <h2 id="perfil-titulo" className="section-title mt-5">Personas que construyen <em>soluciones.</em></h2>
        <p className="section-copy mt-6 max-w-2xl">Ingeniería, diseño y desarrollo reunidos para transformar necesidades reales en productos digitales claros y útiles.</p>
      </div>

      {leadership.map(profile => <article className="container-wide profile-layout" key={profile.id} aria-labelledby={`${profile.id}-nombre`}>
        <div className="profile-visual">
          <SmartSvgImage src={profile.portrait.url} width={profile.portrait.width} height={profile.portrait.height} alt={`Retrato de ${profile.name}`} className="profile-photo" />
          <div className="profile-visual__caption"><span>{profile.position}</span><strong>{profile.caption}</strong></div>
        </div>

        <div className="profile-content">
          <p className="eyebrow">{profile.focus}</p>
          <h3 id={`${profile.id}-nombre`} className="team-ceo-name mt-5">{profile.firstNames} <em>{profile.lastNames}.</em></h3>
          <p className="profile-role mt-7">{profile.role}</p>
          <p className="section-copy mt-5">{profile.summary}</p>
          <p className="section-copy mt-4">{profile.experience}</p>

          <div className="profile-highlights" aria-label="Áreas de experiencia">
            {profile.highlights.map(item => <div className="profile-highlight" key={item.number}><span>{item.number}</span><strong>{item.label}</strong><p>{item.detail}</p></div>)}
          </div>

          <button className="button button--light mt-8" type="button" onClick={() => openCv(profile)} aria-label={`Ver currículum de ${profile.name}`} aria-haspopup="dialog" aria-controls="cv-dialog">
            Ver currículum completo <FileText size={18} aria-hidden="true" />
          </button>
          <p className="profile-document-note mt-3">Documento original · {profile.cv.pages} páginas · PDF</p>
        </div>
      </article>)}

      <dialog id="cv-dialog" ref={dialogRef} className="cv-dialog" aria-labelledby="cv-dialog-title" onClose={() => setActiveProfile(null)} onClick={event => { if (event.target === event.currentTarget) closeCv(); }}>
        {activeProfile && <div className="cv-dialog__panel">
          <div className="cv-dialog__header">
            <div><p className="eyebrow">DOCUMENTO COMPLETO</p><h2 id="cv-dialog-title">Currículum de {activeProfile.name}</h2></div>
            <button className="cv-dialog__close" type="button" onClick={closeCv} aria-label="Cerrar currículum"><X size={22} aria-hidden="true" /></button>
          </div>
          <div className="cv-dialog__viewer" role="region" aria-label={`Currículum completo de ${activeProfile.name}`} tabIndex={0}>
            {/* La vista previa funciona sin un visor PDF nativo; el documento original sigue disponible. */}
            {Array.from({ length: activeProfile.cv.pages }, (_, index) => <figure className="cv-page" key={`${activeProfile.id}-${index}`}>
              <figcaption>Página {index + 1} de {activeProfile.cv.pages}</figcaption>
              <img src={`${activeProfile.cv.previewBase}/pagina-${index + 1}.webp`} width={1191} height={1684} alt={`Página ${index + 1} del currículum de ${activeProfile.name}`} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
            </figure>)}
          </div>
          <div className="cv-dialog__footer">
            <span>{activeProfile.cv.pages} páginas · PDF</span>
            <div className="cv-dialog__actions">
              <a href={activeProfile.cv.url} target="_blank" rel="noopener noreferrer">Abrir en otra pestaña <ExternalLink size={16} aria-hidden="true" /></a>
              <a href={activeProfile.cv.url} download={activeProfile.cv.downloadName}>Descargar CV <Download size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>}
      </dialog>
    </section>
  );
}
