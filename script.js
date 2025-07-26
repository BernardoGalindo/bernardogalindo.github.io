document.addEventListener('DOMContentLoaded', function() {

    // --- DICTIONARY FOR TRANSLATIONS ---
    // All text is stored here. Revisions for a more human tone have been applied.
    const translations = {
        jobTitle: { es: 'Supervisor Ambiental', en: 'Environmental Supervisor' },
        langLabelEs: { es: 'ES', en: 'ES' },
        langLabelEn: { es: 'EN', en: 'EN' },
        downloadBtn: { es: 'Descargar PDF', en: 'Download PDF' },
        summary: { 
            es: 'Ingeniero en Procesos Biotecnológicos con 6 años de experiencia en gestión de residuos y tratamiento de aguas para la industria hidrocarburífera ecuatoriana. Mi enfoque es optimizar la supervisión de proyectos ambientales, integrando información de múltiples disciplinas para una toma de decisiones más eficaz. Utilizo tecnologías como <span class="highlight-text">drones, fotogrametría y ciencia de datos</span> para generar información precisa, mejorar el uso de los recursos, minimizar la huella ambiental y asegurar el cumplimiento de la normativa vigente.',
            en: 'Biotechnology Process Engineer with 6 years of experience in waste management and water treatment for the Ecuadorian hydrocarbon industry. My focus is to optimize environmental project supervision by integrating multidisciplinary information for more effective decision-making. I use technologies like <span class="highlight-text">drones, photogrammetry, and data science</span> to generate precise data, improve resource use, minimize the environmental footprint, and ensure regulatory compliance.'
        },
        educationTitle: { es: 'FORMACIÓN & CERTIFICACIONES', en: 'EDUCATION & CERTIFICATIONS' },
        certGoogleTitle: { es: 'Google Data Analytics Professional Certificate | 2024', en: 'Google Data Analytics Professional Certificate | 2024' },
        certGoogleDesc: { es: 'Certificación en el ciclo completo del análisis de datos, desde la preparación y limpieza hasta el análisis y la visualización para la toma de decisiones.', en: 'Certified in the complete data analysis cycle, from data preparation and cleaning to analysis and visualization for decision-making.' },
        certGoogleSkills: { es: 'Dominio:', en: 'Proficiency:' },
        degreeTitle: { es: 'Ingeniería en Procesos Biotecnológicos', en: 'B.S. in Biotechnology Process Engineering' },
        degreeUni: { es: 'Universidad San Francisco de Quito, 2012 - 2016', en: 'San Francisco de Quito University, 2012 - 2016' },
        skillsTitle: { es: 'COMPETENCIAS PROFESIONALES', en: 'PROFESSIONAL SKILLS' },
        skillGroup1Title: { es: 'Gestión Ambiental y Remediación', en: 'Environmental Management & Remediation' },
        skillGroup1Item1: { es: 'Gestión integral de desechos y remediación de suelos.', en: 'Integrated waste management and soil remediation.' },
        skillGroup1Item2: { es: 'Tratamiento y gestión de efluentes industriales.', en: 'Industrial effluent treatment and management.' },
        skillGroup2Title: { es: 'Tecnologías de Supervisión y Análisis', en: 'Monitoring & Analysis Technologies' },
        skillGroup2Item1: { es: 'Ciencia de Datos, Inspecciones y Planificación con Drones (UAV).', en: 'Data Science, Drone (UAV) Inspections and Planning.' },
        skillGroup2Item2: { es: 'Fotogrametría, Modelado 3D y Fotografía 360°.', en: 'Photogrammetry, 3D Modeling, and 360° Photography.' },
        skillGroup3Title: { es: 'Gestión Operativa y Liderazgo', en: 'Operations Management & Leadership' },
        skillGroup3Item1: { es: 'Liderazgo de equipos industriales y coordinación logística.', en: 'Leadership of industrial teams and logistical coordination.' },
        keySkillsTitle: { es: 'APTITUDES CLAVE', en: 'KEY SKILLS' },
        keySkill1: { es: '<i class="fas fa-users"></i>Liderazgo de Operaciones', en: '<i class="fas fa-users"></i>Operations Leadership' },
        keySkill2: { es: '<i class="fas fa-brain"></i>Pensamiento Estratégico', en: '<i class="fas fa-brain"></i>Strategic Thinking' },
        keySkill3: { es: '<i class="fas fa-lightbulb"></i>Resolución de Problemas', en: '<i class="fas fa-lightbulb"></i>Problem Solving' },
        keySkill4: { es: '<i class="fas fa-microscope"></i>Rigor Técnico y Analítico', en: '<i class="fas fa-microscope"></i>Technical & Analytical Rigor' },
        keySkill5: { es: '<i class="fas fa-infinity"></i>Adaptabilidad y Aprendizaje', en: '<i class="fas fa-infinity"></i>Adaptability & Learning' },
        keySkill1Icon: { es: '<i class="fas fa-users"></i> Liderazgo de Operaciones', en: '<i class="fas fa-users"></i> Operations Leadership'},
        keySkill2Icon: { es: '<i class="fas fa-brain"></i> Pensamiento Estratégico', en: '<i class="fas fa-brain"></i> Strategic Thinking'},
        keySkill3Icon: { es: '<i class="fas fa-lightbulb"></i> Resolución de Problemas', en: '<i class="fas fa-lightbulb"></i> Problem Solving'},
        keySkill4Icon: { es: '<i class="fas fa-microscope"></i> Rigor Técnico y Analítico', en: '<i class="fas fa-microscope"></i> Technical & Analytical Rigor'},
        keySkill5Icon: { es: '<i class="fas fa-infinity"></i> Adaptabilidad y Aprendizaje', en: '<i class="fas fa-infinity"></i> Adaptability & Learning'},
        languagesTitle: { es: 'IDIOMAS', en: 'LANGUAGES' },
        languagesList: { es: 'Español - Nativo<br>Inglés - Avanzado<br>Francés - Intermedio', en: 'Spanish - Native<br>English - Advanced<br>French - Intermediate' },
        experienceTitle: { es: 'EXPERIENCIA LABORAL', en: 'WORK EXPERIENCE' },
        job1Title: { es: 'Supervisor de Operaciones | GPower Group S.A. | Mayo 2019 - Actualidad', en: 'Operations Supervisor | GPower Group S.A. | May 2019 - Present' },
        job1Desc1: { es: 'Dirijo la gestión integral de residuos (peligrosos, no peligrosos y reciclables) para las operaciones en los <span class="highlight-text">Bloques 14 y 17</span>, en el sensible entorno de la <span class="highlight-text">Amazonía ecuatoriana</span>. Mi especialización se centra en la planificación logística y ejecución para la evacuación segura de grandes volúmenes de materiales de alta complejidad.', en: 'I lead the integrated waste management (hazardous, non-hazardous, and recyclable) for operations in <span class="highlight-text">Blocks 14 and 17</span> within the sensitive environment of the <span class="highlight-text">Ecuadorian Amazon</span>. My specialization is in logistical planning and execution for the safe removal of large volumes of highly complex materials.' },
        job1Desc2: { es: 'Aseguro la integridad de cada proyecto aplicando con rigor los más altos estándares de seguridad industrial (HSE) en cada operación.', en: 'I ensure project integrity by rigorously applying the highest Health, Safety, and Environment (HSE) standards in every operation.' },
        job1Desc3: { es: 'Coordino la logística de recursos clave para la operación (equipos, insumos y personal), garantizando la continuidad y el éxito de cada proyecto.', en: 'I coordinate the logistics of key operational resources (equipment, supplies, and personnel), ensuring the continuity and success of each project.' },
        job1Desc4: { es: 'Promuevo la correcta clasificación de desechos con un enfoque en la economía circular, para optimizar el uso de recursos y minimizar los residuos.', en: 'I promote proper waste segregation with a focus on the circular economy to optimize resource use and minimize waste.' },
        job2Title: { es: 'Promotor de Salud (Inocuidad Alimentaria) | Municipio de Quito | Mayo 2017 - Diciembre 2018', en: 'Health Promoter (Food Safety) | Municipality of Quito | May 2017 - December 2018' },
        job2Desc1: { es: 'Planifiqué y supervisé la logística de muestreo en campo a través de un extenso territorio urbano y rural, garantizando el cumplimiento sistemático del cronograma de monitoreo de inocuidad alimentaria.', en: 'Planned and supervised the logistics of field sampling across a vast urban and rural territory, ensuring systematic compliance with the food safety monitoring schedule.' },
        job2Desc2: { es: 'Diseñé y facilité programas de capacitación sobre buenas prácticas sanitarias dirigidos a cientos de manipuladores de alimentos, enfocados en la prevención de las enfermedades de transmisión alimentaria (ETAs).', en: 'Designed and facilitated training programs on good sanitary practices for hundreds of food handlers, focused on preventing foodborne illnesses (FBIs).' },
        job3Title: { es: 'Asistente de Investigación | USFQ | Dic.15 - Nov.16', en: 'Research Assistant | USFQ | Dec. 2015 - Nov. 2016' },
        job3Desc1: { es: 'Contribuí en un proyecto para evaluar el estrés ambiental en primates en la Estación de Biodiversidad Tiputini (Reserva de Biosfera Yasuní), realizando trabajo de campo y análisis en laboratorio (extracción y cuantificación de cortisol fecal).', en: 'Contributed to a project evaluating environmental stress in primates at the Tiputini Biodiversity Station (Yasuní Biosphere Reserve), performing fieldwork and laboratory analysis (fecal cortisol extraction and quantification).' },
        portfolioTitle: { es: 'CERTIFICADOS Y PORTAFOLIO', en: 'CERTIFICATES & PORTFOLIO' },
        portfolio1Title: { es: 'Google Data Analytics', en: 'Google Data Analytics' },
        portfolio1Desc: { es: 'Certificado Profesional de 8 cursos emitido por Google.', en: '8-course Professional Certificate issued by Google.' },
        viewCert: { es: 'Ver Certificado', en: 'View Certificate' },
        portfolio2Title: { es: 'Prompting Essentials | Google', en: 'Prompting Essentials | Google' },
        portfolio2Desc: { es: 'Fundamentos de ingeniería de prompts y comunicación efectiva con IAs.', en: 'Fundamentals of prompt engineering and effective communication with AIs.' },
        viewCert2: { es: 'Ver Certificado', en: 'View Certificate' },
        referencesTitle: { es: 'REFERENCIAS', en: 'REFERENCES' },
        ref2Desc: { es: 'Docente COCIBA<br><em>Universidad San Francisco de Quito</em>', en: 'Professor, COCIBA<br><em>San Francisco de Quito University</em>' },
        ref3Desc: { es: 'Jefe de la Unidad de Salud, Zona la Delicia<br><em>Municipio de Quito</em>', en: 'Head of Health Unit, La Delicia Zone<br><em>Municipality of Quito</em>' },
        contactTitle: { es: 'CONTACTO DIRECTO', en: 'DIRECT CONTACT' },
        formName: { es: 'Tu Nombre', en: 'Your Name' },
        formEmail: { es: 'Tu Correo Electrónico', en: 'Your Email' },
        formSubject: { es: 'Asunto del Mensaje', en: 'Message Subject' },
        formMessage: { es: 'Escribe tu mensaje aquí...', en: 'Write your message here...' },
        formSubmit: { es: 'Enviar Mensaje', en: 'Send Message' },
        footerText: { 
            es: `© ${new Date().getFullYear()} Bernardo Galindo | Última actualización: Julio de 2024`, 
            en: `© ${new Date().getFullYear()} Bernardo Galindo | Last updated: July 2024` 
        }
    };

    // --- LANGUAGE SWITCHING LOGIC ---
    const languageToggle = document.getElementById('language-toggle');
    const bodyEl = document.body;

    function setLanguage(lang) {
        // Toggle class on body for CSS styling
        if (lang === 'en') {
            bodyEl.classList.add('show-en');
        } else {
            bodyEl.classList.remove('show-en');
        }

        // Update all elements with a data-lang-key
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[key] && translations[key][lang]) {
                el.innerHTML = translations[key][lang];
            }
        });

        // Update all form placeholders
        document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => {
            const key = el.dataset.langKeyPlaceholder;
            if (translations[key] && translations[key][lang]) {
                el.placeholder = translations[key][lang];
            }
        });
        
        // Update html lang attribute for accessibility
        document.documentElement.lang = lang;
    }

    languageToggle.addEventListener('change', function() {
        const lang = this.checked ? 'en' : 'es';
        setLanguage(lang);
    });

    // Set initial language on page load
    setLanguage('es');

    // --- FADE-IN ANIMATION ON SCROLL ---
    const sections = document.querySelectorAll('.fade-in-section');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });

    // --- CONTACT FORM SUBMISSION ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            const isEnglish = languageToggle.checked;
            
            const mailtoBody = isEnglish 
                ? `Hello Bernardo,\n\n${message}\n\nRegards,\n${name}\n(${email})`
                : `Hola Bernardo,\n\n${message}\n\nSaludos cordiales,\n${name}\n(${email})`;
            
            const mailtoLink = `mailto:juanber3gs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
            window.location.href = mailtoLink;
        });
    }
});
