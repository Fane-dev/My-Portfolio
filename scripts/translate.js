const translations = {
  it: {
    portfolio: "Portfolio Github",
    about: "Chi Sono",
    skills: "Competenze",
    projects: "Progetti",
    contact: "Contatti",
    heroGreeting: "Ciao, sono",
    heroSubtitle: "Junior Front End Developer | I Love Coding",
    heroProjectsBtn: "Scopri i miei progetti",
    heroDownloadCV: "Scarica il mio CV",
    aboutTitle: "Chi Sono",
    aboutP1: "Sono Mattia Fanelli, Junior Front-End Developer con una forte motivazione a crescere nel mondo dello sviluppo web. Ho iniziato il mio percorso formativo imparando le basi di HTML, CSS, SCSS e JavaScript, per poi approfondire framework come Angular.",
    aboutP2: "Attraverso progetti personali e studio costante, ho acquisito competenze tecniche, affiancate da una buona sensibilità per l’usabilità e il design responsivo.",
    aboutP3: "Mi considero una persona curiosa, con una forte propensione all'apprendimento continuo e alla sperimentazione. Affronto con entusiasmo anche contesti nuovi o complessi, nella convinzione che ogni sfida sia un'opportunità per migliorare le mie competenze e crescere professionalmente.",
    skill: "Competenze",
    projectsTitle: "Progetti",
    project1Title: "Calendar App📅",
    project1Description: "Calendar App è un’app Angular con login via Firebase che consente agli utenti di gestire eventi personali in un calendario mensile. Gli eventi sono salvati in LocalStorage separatamente per ogni utente, permettendo aggiunte, modifiche e cancellazioni in modo semplice e sicuro.",
    project1Link: "Guarda il progetto",
    project2Title: "Sushi World🍣",
    project2Description: "Sushi World è un'applicazione per la prenotazione di sushi, sviluppata con Java Sping Boot lato backend e SQL per la gestione del database. Gli utenti possono visualizzare il menu, scegliere i piatti desiderati e inviare l'ordine. Il sistema gestisce le prenotazioni in modo efficiente, memorizzando i dati in un database relazionale e offrendo un’interfaccia semplice e funzionale.",
    project2Link: "Guarda il progetto",
    viewAllRepos: "Vedi tutti i miei repository su GitHub",
    contactTitle: "Contattami"
  },
  en: {
    portfolio: "Github Portfolio",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    heroGreeting: "Hi, I'm",
    heroSubtitle: "Junior Front End Developer | I Love Coding",
    heroProjectsBtn: "Discover my projects",
    heroDownloadCV: "Download my CV",
    aboutTitle: "About Me",
    aboutP1: "I'm Mattia Fanelli, a Junior Front-End Developer highly motivated to grow in the web development world. I started learning the basics of HTML, CSS, SCSS and JavaScript, then deepened frameworks like Angular.",
    aboutP2: "Through personal projects and continuous study, I gained technical skills, coupled with a good sensitivity for usability and responsive design.",
    aboutP3: "I consider myself a curious person, with a strong inclination to continuous learning and experimentation. I enthusiastically face new or complex contexts, believing that every challenge is an opportunity to improve my skills and grow professionally.",
    skill: "Skills",
    projectsTitle: "Projects",
    project1Title: "Calendar App📅",
    project1Description: "Calendar App is an Angular app with Firebase login that lets users manage personal events in a monthly calendar. Events are saved in LocalStorage per user, allowing easy addition, editing, and deletion.",
    project1Link: "View Project",
    project2Title: "Sushi World🍣",
    project2Description: "Sushi World is a sushi booking app developed with Java Spring Boot backend and SQL for database management. Users can view the menu, select desired dishes, and place orders. The system efficiently manages bookings by storing data in a relational database and offers a simple, functional interface.",
    project2Link: "View Project",
    viewAllRepos: "See all my repositories on GitHub",
    contactTitle: "Contact Me"
  }
};

const languageSelector = document.getElementById('languageSelector');

function translatePage(lang) {
  document.getElementById('portfolioText').textContent = translations[lang].portfolio;
  document.getElementById('navAbout').textContent = translations[lang].about;
  document.getElementById('navSkills').textContent = translations[lang].skills;
  document.getElementById('navProjects').textContent = translations[lang].projects;
  document.getElementById('navContact').textContent = translations[lang].contact;

  document.getElementById('heroGreeting').textContent = translations[lang].heroGreeting;
  document.getElementById('heroSubtitle').textContent = translations[lang].heroSubtitle;
  document.getElementById('heroProjectsBtn').textContent = translations[lang].heroProjectsBtn;
  document.getElementById('heroDownloadCV').textContent = translations[lang].heroDownloadCV;

  document.getElementById('aboutTitle').textContent = translations[lang].aboutTitle;
  document.getElementById('aboutP1').textContent = translations[lang].aboutP1;
  document.getElementById('aboutP2').textContent = translations[lang].aboutP2;
  document.getElementById('aboutP3').textContent = translations[lang].aboutP3;

  document.getElementById('skill').textContent = translations[lang].skill

  document.getElementById('projectsTitle').textContent = translations[lang].projectsTitle;
  document.getElementById('project1Title').textContent = translations[lang].project1Title;
  document.getElementById('project1Description').textContent = translations[lang].project1Description;
  document.getElementById('project1Link').textContent = translations[lang].project1Link;

  document.getElementById('project2Title').textContent = translations[lang].project2Title;
  document.getElementById('project2Description').textContent = translations[lang].project2Description;
  document.getElementById('project2Link').textContent = translations[lang].project2Link;

  document.getElementById('viewAllRepos').textContent = translations[lang].viewAllRepos;

  document.getElementById('contactTitle').textContent = translations[lang].contactTitle;
}

languageSelector.addEventListener('change', (e) => {
  translatePage(e.target.value);
});

translatePage(languageSelector.value);