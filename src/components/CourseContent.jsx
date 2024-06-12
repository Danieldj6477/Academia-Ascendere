
import React, { useState } from 'react';
import { Tab, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const CourseContent = () => {
  const [activeKey, setActiveKey] = useState('unit1');

  const handleNext = (nextKey) => {
    setActiveKey(nextKey);
  };

  const videos = {
    unit1: [
      "https://www.youtube.com/embed/K-cSWbY8TVE" // Reemplaza con el ID del video de la Unidad 1
    ],
    unit2: [
      "https://www.youtube.com/embed/zfHaCrv6sxA" // Reemplaza con el ID del video de la Unidad 2
    ],
    unit3: [
      "https://www.youtube.com/embed/w1drc7CUMWI", // Reemplaza con el ID del primer video de la Unidad 3
      "https://www.youtube.com/embed/3NW2FUWi7R0" // Reemplaza con el ID del segundo video de la Unidad 3
    ],
    unit4: [
      "https://www.youtube.com/embed/UNarW27SH-I", // Reemplaza con el ID del primer video de la Unidad 4
      "https://www.youtube.com/embed/7rBrT3SDzms" // Reemplaza con el ID del segundo video de la Unidad 4
    ],
    unit5: [
      "https://www.youtube.com/embed/tXfBzaoLlvk", // Reemplaza con el ID del primer video de la Unidad 5
      "https://www.youtube.com/embed/U3Al-UKsQ2U" // Reemplaza con el ID del segundo video de la Unidad 5
    ],
    unit6: [
      "https://www.youtube.com/embed/tXfBzaoLlvk" // Reemplaza con el ID del video de la Unidad 6
    ],
  };

  const openOutlookEmail = () => {
    const recipient = "example@example.com"; // Reemplaza con el destinatario deseado
    const subject = "Consulta sobre el curso de IA"; // Reemplaza con el asunto deseado
    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${recipient}&subject=${encodeURIComponent(subject)}`;
    window.open(outlookUrl, '_blank');
  };

  return (
    <div className="course-content">
      <Container>
        <h1>Creación de contenidos educativos utilizando la IA</h1>
        <Tab.Container id="course-tabs" activeKey={activeKey}>
          <Nav variant="tabs" className="mb-3">
            <Nav.Item>
              <Nav.Link eventKey="unit1" onClick={(e) => e.preventDefault()}>Unidad 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="unit2" onClick={(e) => e.preventDefault()}>Unidad 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="unit3" onClick={(e) => e.preventDefault()}>Unidad 3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="unit4" onClick={(e) => e.preventDefault()}>Unidad 4</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="unit5" onClick={(e) => e.preventDefault()}>Unidad 5</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="unit6" onClick={(e) => e.preventDefault()}>Unidad 6</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="unit1">
              <h4>Introducción a la IA. Referencias conceptuales</h4>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="500"
                  src={videos.unit1[0]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div class="content-summary">
    <h2>Introducción a la IA. Referencias conceptuales</h2>
    <p>En esta unidad, aprenderás los conceptos básicos de la inteligencia artificial y su aplicación en la educación. Exploraremos las definiciones clave, los tipos de IA y cómo estas tecnologías están revolucionando el campo educativo.</p>

    <h3>Conceptos Básicos de la Inteligencia Artificial (IA)</h3>
    <p>La IA es un campo de estudio que busca crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana, como aprender, razonar, tomar decisiones y resolver problemas. Se basa en algoritmos y modelos matemáticos que permiten a las máquinas aprender de los datos y mejorar con la experiencia.</p>

    <h3>Tipos de Inteligencia Artificial</h3>
    <ul>
        <li><strong>IA Generativa:</strong> Se enfoca en la creación de contenido digital, como imágenes, sonidos, videos y textos, sin necesidad de una formación extensa previa.</li>
        <li><strong>IA de Aprendizaje Automático:</strong> Incluye técnicas como el aprendizaje profundo y el aprendizaje de refuerzo, utilizadas para tareas complejas a partir de grandes volúmenes de datos.</li>
    </ul>

    <h3>Aplicaciones de la IA en la Educación</h3>
    <ul>
        <li><strong>Tutorías Virtuales:</strong> Sistemas que proporcionan apoyo educativo personalizado.</li>
        <li><strong>Evaluación Automática:</strong> Herramientas que permiten la evaluación inmediata y objetiva de los estudiantes.</li>
        <li><strong>Análisis de Sentimientos:</strong> Técnicas para entender las emociones y actitudes de los estudiantes a través de sus interacciones.</li>
    </ul>

    <h3>Beneficios de la IA en la Educación</h3>
    <ul>
        <li><strong>Personalización del Aprendizaje:</strong> Adaptación de los contenidos y métodos educativos a las necesidades individuales de cada estudiante.</li>
        <li><strong>Eficiencia y Eficacia:</strong> Automatización de tareas administrativas y repetitivas, permitiendo a los educadores centrarse en aspectos más importantes del aprendizaje.</li>
        <li><strong>Acceso Inclusivo:</strong> Facilita el acceso a la educación de calidad a través de plataformas digitales y recursos educativos generados por IA.</li>
    </ul>

    <h3>Retos y Desafíos Éticos de la IA</h3>
    <ul>
        <li><strong>Sesgos Algorítmicos:</strong> Riesgo de perpetuar o amplificar prejuicios y discriminaciones existentes.</li>
        <li><strong>Privacidad y Seguridad de Datos:</strong> Protección de los datos personales y sensibles de los estudiantes.</li>
        <li><strong>Transparencia y Explicabilidad:</strong> Necesidad de que los sistemas de IA sean comprensibles y sus decisiones explicables.</li>
    </ul>
</div>
        <Button onClick={() => handleNext('unit2')} className="mt-3">Siguiente Unidad</Button>
            </Tab.Pane>

            
            <Tab.Pane eventKey="unit2">
              <h4>IAs de lenguaje natural</h4>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="500"
                  src={videos.unit2[0]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div class="content-summary">
    <h2>ChatGPT e Inteligencia Artificial en la Educación Superior</h2>
    <p>ChatGPT es un modelo de lenguaje desarrollado por OpenAI, basado en la arquitectura GPT-3.5. Permite interacciones naturales con la computadora, generando respuestas basadas en datos de Internet.</p>

    <h3>Crear una Cuenta en ChatGPT</h3>
    <p>El proceso de registro es sencillo y requiere un correo electrónico y verificaciones necesarias. Se puede acceder a través de cualquier navegador web en <a href="https://chat.openai.com" target="_blank">ChatGPT</a>.</p>

    <h3>Aplicaciones de ChatGPT en la Educación Superior</h3>
    <ul>
        <li><strong>Enseñanza y Aprendizaje:</strong> Generación de contenido educativo, evaluación de información y apoyo en la investigación básica.</li>
        <li><strong>Investigación:</strong> Ayuda en la redacción y evaluación de artículos, así como en la búsqueda de información relevante.</li>
        <li><strong>Administración:</strong> Optimización de procesos administrativos, respuesta a consultas y gestión de inscripciones.</li>
        <li><strong>Participación Comunitaria:</strong> Desarrollo de estrategias para el bienestar de la comunidad y campañas de comunicación.</li>
    </ul>

    <h3>Retos e Implicaciones Éticas</h3>
    <ul>
        <li><strong>Integridad Académica:</strong> Preocupaciones sobre el plagio y la detección de IA en trabajos académicos.</li>
        <li><strong>Falta de Regulación:</strong> Necesidad de desarrollar protocolos compartidos y regulación del uso de IA.</li>
        <li><strong>Protección de Datos:</strong> Preocupaciones sobre la privacidad y el uso de datos personales.</li>
        <li><strong>Sesgo Cognitivo:</strong> Riesgo de replicar sesgos presentes en los datos de entrenamiento.</li>
        <li><strong>Género y Diversidad:</strong> Necesidad de abordar la discriminación y los estereotipos en la IA.</li>
    </ul>

    <h3>Recomendaciones de la UNESCO sobre la Ética de la IA</h3>
    <p>La UNESCO ha proporcionado orientaciones éticas para que los sistemas de IA trabajen por el bien común y mitiguen daños potenciales. Estas guías incluyen recomendaciones para implementar políticas educativas con IA de manera equitativa y ética.</p>

    <h3>Adaptación de ChatGPT en Instituciones de Educación Superior</h3>
    <ul>
        <li><strong>Usar ChatGPT con Cuidado y Creatividad:</strong> Crear directrices claras y oportunidades de debate sobre su impacto.</li>
        <li><strong>Formación y Desarrollo de Capacidades:</strong> Incluir alfabetización en IA y ética de la IA en programas de formación.</li>
    </ul>
    <ul>
        <li><a href="sandbox:/mnt/data/Prompt Guide to ChatGPT (1).pdf" target="_blank">Descargar Guía Rápida de ChatGPT</a></li>
        <li><a href="sandbox:/mnt/data/385146spa (1).pdf" target="_blank">Descargar Documento de la UNESCO</a></li>
    </ul>
</div>
              <Button onClick={() => handleNext('unit3')} className="mt-3">Siguiente Unidad</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="unit3">
              <h4>IAs para el diseño de imagen</h4>
              <div className="video-container">
                <iframe
                  width="49%"
                  height="500"
                  src={videos.unit3[0]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ marginRight: '1%' }}
                ></iframe>
                <iframe
                  width="49%"
                  height="500"
                  src={videos.unit3[1]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div class="content-summary">
    <h2>Uso de la IA para el Diseño de Imágenes</h2>
    <p>Explora cómo la inteligencia artificial está revolucionando el diseño de imágenes con herramientas avanzadas como Leonardo AI y Midjourney.</p>

    <h3>Introducción a la Creación de Imágenes con IA</h3>
    <p>La inteligencia artificial (IA) ha revolucionado el diseño de imágenes, permitiendo a artistas y diseñadores generar arte digital de alta calidad de manera rápida y eficiente. Las herramientas de IA para la generación de imágenes ofrecen múltiples beneficios, como la aceleración del proceso creativo, la experimentación con diferentes estilos artísticos, y la personalización de contenido visual según necesidades específicas. Sin embargo, también plantean riesgos éticos, como la posible replicación de sesgos, problemas de derechos de autor y la dependencia excesiva de la tecnología.</p>

    <h3>Beneficios de la Creación de Imágenes con IA</h3>
    <ul>
        <li><strong>Aceleración del Proceso Creativo:</strong> Permite generar múltiples variaciones de un diseño en poco tiempo.</li>
        <li><strong>Exploración de Nuevos Estilos:</strong> Facilita la experimentación con diferentes estilos y técnicas artísticas.</li>
        <li><strong>Personalización y Precisión:</strong> Ofrece control sobre la salida generada para cumplir con los requisitos específicos del proyecto.</li>
    </ul>

    <h3>Riesgos Éticos</h3>
    <ul>
        <li><strong>Sesgos Algorítmicos:</strong> Los modelos de IA pueden perpetuar sesgos presentes en los datos de entrenamiento.</li>
        <li><strong>Derechos de Autor:</strong> La generación de imágenes basadas en estilos de artistas vivos puede violar derechos de autor.</li>
        <li><strong>Dependencia Tecnológica:</strong> El uso excesivo de IA puede limitar la creatividad humana y la habilidad artística.</li>
    </ul>

    <h3>Leonardo AI</h3>
    <p>Leonardo AI es una plataforma de generación de imágenes impulsada por IA que permite a los diseñadores crear arte digital de alta calidad, ilustraciones, diseño de personajes, y más. Utiliza modelos avanzados de IA para ofrecer resultados sorprendentes y personalizados.</p>
    <ul>
        <li><strong>Generación de Imágenes:</strong> Crear imágenes a partir de descripciones textuales, con una amplia biblioteca de modelos y configuraciones.</li>
        <li><strong>Editor de Lienzo en Tiempo Real:</strong> Convierte dibujos en imágenes rápidamente, explorando nuevas ideas de diseño.</li>
        <li><strong>Universal Upscaler:</strong> Mejora la resolución y los detalles de las imágenes existentes.</li>
        <li><strong>Versatilidad:</strong> Adecuado para diseño web, impresiones y gráficos en redes sociales.</li>
        <li><strong>Herramientas de Edición:</strong> Incluye herramientas avanzadas para modificar y perfeccionar las imágenes.</li>
    </ul>

    <h3>Midjourney</h3>
    <p>Midjourney es otro potente generador de imágenes basado en IA que se especializa en crear arte digital a partir de descripciones textuales. Es conocido por su capacidad de generar imágenes artísticas de alta calidad y por su facilidad de uso.</p>
    <ul>
        <li><strong>Generación de Arte:</strong> Transforma descripciones textuales en impresionantes piezas de arte.</li>
        <li><strong>Estilos Diversos:</strong> Ofrece una amplia gama de estilos artísticos, permitiendo experimentar con diferentes enfoques visuales y técnicas.</li>
        <li><strong>Interfaz Intuitiva:</strong> Diseñado para ser fácil de usar, incluso para aquellos sin experiencia en diseño.</li>
        <li><strong>Inspiración y Exploración:</strong> Facilita la exploración de conceptos artísticos y fomenta la creatividad.</li>
    </ul>
    <ul>
        <li><a href="https://leonardo.ai" target="_blank">Visita Leonardo AI</a></li>
        <li><a href="https://www.midjourney.com" target="_blank">Visita Midjourney</a></li>
    </ul>
</div>

              <Button onClick={() => handleNext('unit4')} className="mt-3">Siguiente Unidad</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="unit4">
              <h4>IAs para presentaciones</h4>
              <div className="video-container">
                <iframe
                  width="49%"
                  height="500"
                  src={videos.unit4[0]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ marginRight: '1%' }}
                ></iframe>
                <iframe
                  width="49%"
                  height="500"
                  src={videos.unit4[1]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div class="content-summary">
    <h2>Uso de la IA para la Creación de Presentaciones</h2>
    <p>Explora cómo la inteligencia artificial está transformando la creación de presentaciones con herramientas avanzadas como Tome y Microsoft Copilot.</p>

    <h3>Introducción a la Creación de Presentaciones con IA</h3>
    <p>La inteligencia artificial (IA) ha simplificado y mejorado significativamente el proceso de creación de presentaciones. Utilizando herramientas avanzadas como Tome y Microsoft Copilot, los usuarios pueden generar presentaciones profesionales de manera rápida y eficiente. Estas herramientas no solo ayudan a ahorrar tiempo, sino que también garantizan un diseño cohesivo y atractivo. Sin embargo, es importante considerar los riesgos éticos asociados con el uso de IA, como la privacidad de los datos y el posible sesgo en los contenidos generados.</p>

    <h3>Beneficios de la Creación de Presentaciones con IA</h3>
    <ul>
        <li><strong>Ahorro de Tiempo:</strong> Genera presentaciones rápidamente a partir de descripciones textuales.</li>
        <li><strong>Diseño Profesional:</strong> Ofrece plantillas y sugerencias de diseño que aseguran una apariencia cohesiva.</li>
        <li><strong>Personalización:</strong> Permite ajustar el contenido y el diseño para alinearse con la marca o las preferencias personales.</li>
    </ul>

    <h3>Riesgos Éticos</h3>
    <ul>
        <li><strong>Privacidad de Datos:</strong> La necesidad de proteger la información sensible utilizada para generar contenido.</li>
        <li><strong>Sesgo Algorítmico:</strong> Posibilidad de que los modelos de IA reflejen sesgos presentes en los datos de entrenamiento.</li>
    </ul>

    <h3>Tome</h3>
    <p>Tome es una plataforma de generación de presentaciones impulsada por IA que permite a los usuarios crear presentaciones atractivas y profesionales de manera rápida.</p>
    <ul>
        <li><strong>Generación de Presentaciones:</strong> Genera presentaciones completas a partir de descripciones textuales, con opciones para ajustar y personalizar el contenido.</li>
        <li><strong>Sugerencias de Diseño Inteligente:</strong> Ofrece recomendaciones automáticas de diseño para organizar el contenido de manera efectiva.</li>
        <li><strong>Elementos Interactivos:</strong> Permite incorporar elementos interactivos como botones clicables, enlaces y multimedia embebido para aumentar la participación de la audiencia.</li>
        <li><strong>Integración de Datos:</strong> Facilita la creación de gráficos y diagramas dinámicos a partir de datos externos, con integración en tiempo real para mantener la información actualizada.</li>
    </ul>

    <h3>Microsoft Copilot</h3>
    <p>Microsoft Copilot es una herramienta impulsada por IA integrada en las aplicaciones de Microsoft 365 que asiste en la creación de contenido, incluyendo presentaciones en PowerPoint.</p>
    <ul>
        <li><strong>Asistente de Presentaciones:</strong> Ayuda a crear diapositivas a partir de esbozos o documentos de texto, sugiriendo diseño, imágenes y contenido relevante.</li>
        <li><strong>Edición de Texto:</strong> Proporciona recomendaciones para mejorar la redacción, ajustar el tono y optimizar la longitud del texto.</li>
        <li><strong>Diseño Automático:</strong> Ofrece sugerencias de diseño basadas en el contenido de la presentación, asegurando que todas las diapositivas sean visualmente atractivas y coherentes.</li>
        <li><strong>Integración con Otras Herramientas:</strong> Permite la integración con otras aplicaciones de Microsoft 365, como Excel para gráficos y Word para texto, facilitando la incorporación de diferentes tipos de contenido en la presentación.</li>
    </ul>

    <h3>Enlaces de Interés</h3>
    <ul>
        <li><a href="https://tome.app" target="_blank">Visita Tome</a></li>
        <li><a href="https://www.microsoft.com/en-us/microsoft-365/blog/introducing-microsoft-copilot-your-copilot-for-work/" target="_blank">Visita Microsoft Copilot</a></li>
    </ul>
</div>

              <Button onClick={() => handleNext('unit5')} className="mt-3">Siguiente Unidad</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="unit5">
              <h4>IAs para el diseño de vídeo</h4>
              <div className="video-container">
                <iframe
                  width="49%"
                  height="500"
                  src={videos.unit5[0]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ marginRight: '1%' }}
                ></iframe>
                <iframe
                  width="49%"
                  height="500"
                  src={videos.unit5[1]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div class="content-summary">
    <h2>Uso de la IA para la Creación de Videos</h2>
    <p>Explora cómo la inteligencia artificial está transformando la creación de videos con herramientas avanzadas como Fliki, D-ID y SORA.</p>

    <h3>Introducción a la Creación de Videos con IA</h3>
    <p>La inteligencia artificial (IA) ha revolucionado la creación de videos, facilitando la producción de contenido de alta calidad de manera eficiente y accesible. Herramientas como Fliki, D-ID y SORA ofrecen capacidades avanzadas para convertir texto en videos, generar avatares realistas y mejorar la calidad de producción. Sin embargo, es importante considerar los riesgos éticos asociados con el uso de IA, como la privacidad de los datos y el posible sesgo en los contenidos generados.</p>

    <h3>Beneficios de la Creación de Videos con IA</h3>
    <ul>
        <li><strong>Eficiencia:</strong> Reduce significativamente el tiempo y esfuerzo necesarios para crear videos.</li>
        <li><strong>Accesibilidad:</strong> Permite a cualquier persona, independientemente de su experiencia en edición de video, crear contenido de alta calidad.</li>
        <li><strong>Personalización:</strong> Ofrece opciones para personalizar videos con voces, avatares y estilos visuales.</li>
    </ul>

    <h3>Riesgos Éticos</h3>
    <ul>
        <li><strong>Privacidad de Datos:</strong> La necesidad de proteger la información sensible utilizada para generar contenido.</li>
        <li><strong>Sesgo Algorítmico:</strong> Posibilidad de que los modelos de IA reflejen sesgos presentes en los datos de entrenamiento.</li>
    </ul>

    <h3>Fliki</h3>
    <p>Fliki es una plataforma que convierte texto en videos con voces realistas utilizando IA. Es ideal para crear contenido educativo, marketing y redes sociales.</p>
    <ul>
        <li><strong>Generación de Videos a partir de Texto:</strong> Convierte textos y guiones en videos, incorporando imágenes y videos relevantes.</li>
        <li><strong>Voces Realistas:</strong> Ofrece más de 1300 voces en 75 idiomas para crear narraciones naturales.</li>
        <li><strong>Avatares de IA:</strong> Permite la creación de videos con avatares que leen los guiones de manera realista.</li>
        <li><strong>Biblioteca de Medios:</strong> Acceso a una vasta biblioteca de imágenes, videos y música para enriquecer el contenido.</li>
    </ul>

    <h3>D-ID</h3>
    <p>D-ID es una plataforma especializada en la creación de videos con avatares realistas y animaciones de rostros, ideal para narrativas personalizadas y marketing.</p>
    <ul>
        <li><strong>Avatares Realistas:</strong> Genera avatares que pueden hablar y mostrar expresiones faciales realistas.</li>
        <li><strong>Integración de Texto a Voz:</strong> Convierte textos en discursos naturales, sincronizando perfectamente con las animaciones faciales.</li>
        <li><strong>Uso en Marketing y Educación:</strong> Ideal para crear contenido de marketing atractivo y educativo que capte la atención del público.</li>
    </ul>

    <h3>SORA</h3>
    <p>SORA es una plataforma avanzada de creación de videos impulsada por IA, destacándose por sus capacidades superiores en la generación de contenido visual y narrativo.</p>
    <ul>
        <li><strong>Generación Avanzada de Videos:</strong> Utiliza IA para crear videos altamente detallados y personalizados.</li>
        <li><strong>Edición de Video Basada en IA:</strong> Ofrece herramientas avanzadas de edición que permiten modificar y perfeccionar los videos generados.</li>
        <li><strong>Análisis de Contenido:</strong> Integra capacidades analíticas para optimizar la calidad y la relevancia del contenido.</li>
        <li><strong>Superación de Otras IAs:</strong> SORA sobresale por su capacidad de integrar múltiples fuentes de datos y herramientas de IA, proporcionando una experiencia de creación de video más completa y sofisticada.</li>
    </ul>

    <h3>Enlaces de Interés</h3>
    <ul>
        <li><a href="https://fliki.ai" target="_blank">Visita Fliki</a></li>
        <li><a href="https://www.d-id.com" target="_blank">Visita D-ID</a></li>
        <li><a href="https://www.sora.co" target="_blank">Visita SORA</a></li>
    </ul>
</div>
              <Button onClick={() => handleNext('unit6')} className="mt-3">Siguiente Unidad</Button>
            </Tab.Pane>
            <Tab.Pane eventKey="unit6">
              <h4>IAs para audio</h4>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="500"
                  src={videos.unit6[0]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div class="content-summary">
    <h2>Generación de Audio con IA</h2>
    <p>Explora cómo la inteligencia artificial está transformando la generación de audio con herramientas avanzadas como ElevenLabs y Aiva.</p>

    <h3>Introducción a la Generación de Audio con IA</h3>
    <p>La inteligencia artificial (IA) ha revolucionado la generación de audio, permitiendo a los creadores de contenido producir narraciones y música de alta calidad de manera eficiente. Herramientas como ElevenLabs y Aiva ofrecen capacidades avanzadas para transformar texto en audio realista y componer música personalizada, complementando perfectamente los recursos audiovisuales generados también con IA. Sin embargo, es crucial considerar los riesgos éticos asociados, como la privacidad de los datos y el posible sesgo en los contenidos generados.</p>

    <h3>Beneficios de la Generación de Audio con IA</h3>
    <ul>
        <li><strong>Eficiencia:</strong> Acelera significativamente el proceso de creación de audio.</li>
        <li><strong>Calidad Profesional:</strong> Produce voces y música de alta calidad que pueden competir con las producciones tradicionales.</li>
        <li><strong>Accesibilidad:</strong> Facilita la creación de contenido accesible para personas con discapacidades visuales o de lectura.</li>
    </ul>

    <h3>Riesgos Éticos</h3>
    <ul>
        <li><strong>Privacidad de Datos:</strong> La necesidad de proteger la información sensible utilizada para generar contenido.</li>
        <li><strong>Sesgo Algorítmico:</strong> Posibilidad de que los modelos de IA reflejen sesgos presentes en los datos de entrenamiento.</li>
    </ul>

    <h3>ElevenLabs</h3>
    <p>ElevenLabs es una plataforma avanzada de generación de audio que ofrece capacidades de conversión de texto a voz y clonación de voz realista, ideal para crear narraciones y doblajes.</p>
    <ul>
        <li><strong>Generación de Voz Realista:</strong> Transforma texto en audio con voces naturales que incluyen tonos emocionales y acentos diversos.</li>
        <li><strong>Clonación de Voz:</strong> Permite crear clones de voz digitales a partir de muestras de audio, útiles para audiolibros y narraciones personalizadas.</li>
        <li><strong>Doblaje y Traducción en Tiempo Real:</strong> Ofrece doblaje de video en varios idiomas manteniendo las características emocionales y tonales del orador original.</li>
        <li><strong>Multilingüe:</strong> Soporta 29 idiomas y múltiples acentos, facilitando la creación de contenido accesible y global.</li>
    </ul>

    <h3>Aiva</h3>
    <p>Aiva es una herramienta de inteligencia artificial especializada en la composición de música, ideal para crear bandas sonoras personalizadas y piezas musicales para diversos usos.</p>
    <ul>
        <li><strong>Composición Musical:</strong> Utiliza IA para componer música original basada en los requisitos y preferencias del usuario.</li>
        <li><strong>Estilos Diversos:</strong> Ofrece una variedad de estilos musicales, desde música clásica hasta géneros modernos.</li>
        <li><strong>Personalización:</strong> Permite ajustar la composición musical según el tono y el ritmo deseados, creando piezas únicas y adaptadas a las necesidades específicas del proyecto.</li>
        <li><strong>Integración con Recursos Audiovisuales:</strong> Complementa los videos y otros recursos audiovisuales generados por IA, mejorando la experiencia general del contenido.</li>
        </ul>

<ul>
    <li><a href="https://elevenlabs.io" target="_blank">Visita ElevenLabs</a></li>
    <li><a href="https://www.aiva.ai" target="_blank">Visita Aiva</a></li>
</ul>
<Button as={Link} to="/test" variant="primary" className="mt-3">
      Realizar Test de Finalización
    </Button>
    <Button onClick={openOutlookEmail} variant="Primary" className="mt-3 ml-3">Enviar Correo</Button>

</div>

      </Tab.Pane>

      </Tab.Content>
    </Tab.Container>
  </Container>
  
</div>

);
<Footer />
};

export default CourseContent;
