import { ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '../lib/contact';
import SmartSvgImage from './SmartSvgImage';

const projects = [
  {
    number: '01', type: 'EXPERIENCIA WEB', image: `${import.meta.env.BASE_URL}images/fiea-web-redesign.jpg`, width: 1600, height: 733,
    alt: 'Portal institucional de FIEA Ecuador, con fotografía de paisaje y navegación principal',
    title: 'Rediseño Web & Transformación Digital – FIEA Ecuador',
    subtitle: 'CMS Institucional y Gestión de Contenidos a Medida',
    description: 'Reestructuración integral y modernización del portal institucional utilizando WordPress, optimizando la experiencia del usuario y el rendimiento del sitio. Desarrollo de plugins personalizados a medida para la gestión dinámica de imágenes y noticias de alto tráfico. Trabajo colaborativo directo con el equipo de comunicación de la FIEA para la alineación de marca y flujos editoriales ágiles.',
  },
  {
    number: '02', type: 'GESTIÓN EDUCATIVA', image: `${import.meta.env.BASE_URL}images/centro-infantil-datilera.jpg`, width: 921, height: 415,
    alt: 'Panel de Datilera para la sede Cochabamba con indicadores de inscripciones, ingresos y pagos pendientes',
    title: 'Sistema de Gestión de Información – Centro Infantil Datilera',
    subtitle: 'Operación integrada para las sedes de Cochabamba y Oruro',
    description: 'Plataforma de gestión para el Centro Infantil Datilera y sus sedes de Cochabamba y Oruro. Organiza la información de inscripciones, seguimiento académico, finanzas y pagos en una interfaz clara para el equipo administrativo.',
  },
  {
    number: '03', type: 'AUTOMATIZACIÓN', image: `${import.meta.env.BASE_URL}images/fiea-budgets.jpg`, width: 1600, height: 723,
    alt: 'Panel de control financiero de FIEA con indicadores de presupuesto, comprobantes y reglas activas',
    title: 'Sistema de Presupuestos y Automatización Financiera – FIEA',
    subtitle: 'Integración Global y Automatización API',
    description: 'Desarrollo de una plataforma automatizada de presupuestos y facturación ("Budgets") adaptada para proyectos e inversionistas de EE.UU. Implementación de flujos de comunicación automáticos en tiempo real mediante la integración de la API de WhatsApp y servicios de correo electrónico, reduciendo la fricción en la gestión y acelerando la toma de decisiones.',
  },
  {
    number: '04', type: 'SOFTWARE ERP', image: `${import.meta.env.BASE_URL}images/ferreteria-aroma.jpg`, width: 1600, height: 730,
    alt: 'Panel operativo de Ferretería Aroma con métricas de ventas, inventario y sucursales',
    title: 'Sistema ERP de Inventarios y Control Comercial – Ferretería y Fábrica “Aroma”',
    subtitle: 'Gestión de Operaciones e Ingresos-Egresos',
    description: 'Solución a medida para el control operativo, de producción y financiero de la ferretería y fábrica de calaminas "Aroma". Automatización del inventario en tiempo real, gestión de flujos de ventas y control estricto de ingresos y egresos, digitalizando procesos clave para mejorar la rentabilidad de la planta y de sucursales.',
  },
  {
    number: '05', type: 'IMPACTO SOCIAL', image: `${import.meta.env.BASE_URL}images/sedes-cochabamba.png`, width: 682, height: 400,
    alt: 'Inicio del sistema de registro de personas con discapacidad para SEDES Cochabamba',
    title: 'Sistema de Registro y Gestión Social – SEDES Cochabamba',
    subtitle: 'Digitalización Inclusiva y Seguridad de Datos',
    description: 'Plataforma digital segura y accesible para el registro y gestión de personas con discapacidad, desarrollada para el Servicio Departamental de Salud (SEDES) Cochabamba. Optimización del flujo de captura de datos, garantía de privacidad de información sensible y simplificación de procesos gubernamentales para el beneficio ciudadano.',
  },
  {
    number: '06', type: 'GESTIÓN INSTITUCIONAL', image: `${import.meta.env.BASE_URL}images/iglesia-rios-de-agua-viva.png`, width: 1787, height: 788,
    alt: 'Página pública de la Iglesia Ríos de Agua Viva con navegación de eventos, feria, campamentos y acceso para encargados',
    title: 'Plataforma Web y Gestión de Actividades – Iglesia Ríos de Agua Viva',
    subtitle: 'Portal Público y Administración con Autenticación Segura',
    description: 'Desarrollo de una plataforma que integra la página pública de la Iglesia Ríos de Agua Viva con la gestión de eventos, agendas, reuniones, campamentos y ferias. Incluye herramientas para administrar los platos, las ventas y las finanzas de cada feria, centralizando la organización de sus actividades. Separa el contenido de acceso público de los módulos administrativos, protegidos mediante inicio de sesión seguro para los encargados.',
  },
  {
    number: '07', type: 'SOFTWARE ERP E INTEGRACIÓN DOMÓTICA', image: `${import.meta.env.BASE_URL}images/alex-parabrisas-estantes.png`, width: 1917, height: 1017,
    alt: 'Panel de Alex Parabrisas para buscar productos y localizar estantes mediante un mapa del almacén con señalización luminosa',
    title: 'Sistema ERP de Ventas e Inventario con Domótica – Alex Parabrisas',
    subtitle: 'Control Comercial y Localización de Productos mediante API',
    description: 'Desarrollo de un sistema ERP que integra la gestión de ventas e inventario de Alex Parabrisas con un sistema de domótica para localizar productos en el almacén. Al buscar un artículo, identifica el estante asignado y activa su luz mediante una API previamente configurada, conectando la información del inventario con la ubicación física del producto. Esta integración facilita la búsqueda de existencias y agiliza la atención y la operación del negocio.',
  },
  {
    number: '08', type: 'ATENCIÓN CIUDADANA', image: `${import.meta.env.BASE_URL}images/sereci-colas.png`, width: 1672, height: 902,
    alt: 'Panel de SERECI Cochabamba con fichas emitidas, cola de atención y estado de ventanillas',
    title: 'Propuesta de Gestión de Turnos – SERECI Cochabamba',
    subtitle: 'Fichas, prioridades y ventanillas en un solo panel',
    description: 'Propuesta de gestión de turnos para SERECI Cochabamba que permite emitir fichas, organizar las colas y asignar ventanillas según la disponibilidad y la prioridad de atención. Su panel centraliza los turnos pendientes, los tiempos de espera y el estado de cada ventanilla para facilitar una atención ordenada y eficiente.',
  },
  {
    number: '09', type: 'GESTIÓN EDUCATIVA', image: `${import.meta.env.BASE_URL}images/edugest-estudiantes.png`, width: 1672, height: 902,
    alt: 'Panel EduGest con resumen de estudiantes, docentes, calificaciones y alertas académicas',
    title: 'EduGest – Gestión Estudiantil',
    subtitle: 'Administración académica y seguimiento de estudiantes',
    description: 'Plataforma que centraliza la administración académica de una institución educativa. Permite gestionar estudiantes, docentes, materias, cursos y horarios, además de registrar calificaciones y asistencia. Incluye reportes de rendimiento y alertas académicas para facilitar el seguimiento de cada estudiante y apoyar las decisiones del equipo educativo.',
  },
  {
    number: '10', type: 'ORIENTACIÓN VOCACIONAL', image: `${import.meta.env.BASE_URL}images/mivocacion-orientacion.png`, width: 1672, height: 880,
    alt: 'Panel de MiVocación con evaluación de intereses, avance y opciones de carreras',
    title: 'MiVocación – Orientación Vocacional',
    subtitle: 'Intereses, habilidades y opciones de estudio',
    description: 'Plataforma que acompaña a los estudiantes en la exploración de su futuro académico. Mediante cuestionarios sobre intereses, habilidades y preferencias, ofrece sugerencias de carreras y áreas de estudio. Permite consultar el avance de la evaluación y explorar opciones educativas para tomar una decisión informada sobre qué estudiar.',
  },
  {
    number: '11', type: 'GESTIÓN DE RESTAURANTES', image: `${import.meta.env.BASE_URL}images/restogest-restaurantes.png`, width: 1672, height: 905,
    alt: 'Panel RestoGest con estado de mesas, pedidos en curso, ventas e inventario',
    title: 'RestoGest – Gestión Integral para Restaurantes',
    subtitle: 'Mesas, pedidos, cocina, caja e inventario conectados',
    description: 'Solución adaptable a restaurantes y cafeterías que reúne la gestión de mesas, pedidos, cocina, menú, caja e inventario. Permite organizar el consumo en salón, los pedidos para llevar y las entregas a domicilio. Su panel muestra las ventas del día, los pedidos en curso y las alertas de stock para facilitar la operación del negocio.',
  },
  {
    number: '12', type: 'JUEGO MÓVIL', image: `${import.meta.env.BASE_URL}images/medalquest-mapa.png`, width: 1672, height: 890,
    alt: 'Panel MedalQuest con mapa de medallas, actividad de jugadores, misiones y eventos',
    title: 'MedalQuest – Aventura Geolocalizada',
    subtitle: 'Caminatas con GPS, medallas virtuales y misiones',
    description: 'Juego móvil que convierte las caminatas en una aventura mediante GPS, permitiendo descubrir y capturar medallas virtuales en ubicaciones del mapa. Incluye un panel de administración web para crear medallas, definir radios de captura, organizar misiones y eventos, y consultar la actividad de los jugadores y sus logros.',
  },
];

export default function Portfolio() {
  return (
    <section id="proyectos" className="section-pad projects-section" aria-labelledby="proyectos-titulo">
      <div className="container-wide">
        <div className="section-heading"><div><p className="eyebrow">TRABAJO QUE HABLA POR SÍ SOLO</p><h2 id="proyectos-titulo" className="section-title mt-5">Proyectos <em>destacados.</em></h2></div><p className="section-copy max-w-md">Soluciones digitales creadas para desafíos y equipos distintos.</p></div>
        <div className="projects-grid mt-12">
          {projects.map(project => <article className="project-card" key={project.number}>
            <div className="project-image-wrap"><SmartSvgImage src={project.image} width={project.width} height={project.height} alt={project.alt} className="project-image" /><span className="project-index">{project.number} / {String(projects.length).padStart(2, '0')}</span></div>
            <div className="project-content"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><a href={whatsappUrl(`Hola, quiero conversar sobre un proyecto similar a ${project.title}.`)} target="_blank" rel="noopener noreferrer" className="project-action">Hablemos de un proyecto similar <ArrowUpRight size={18} aria-hidden="true" /></a></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
