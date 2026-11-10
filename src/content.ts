import type { ImageMetadata } from 'astro';
import galaxy from './assets/inner-stars/galaxy-overview.png';
import constellation from './assets/inner-stars/constellation.png';
import skyAreas from './assets/inner-stars/sky-areas.png';
import stats from './assets/inner-stars/stats-overview.png';
import reflection from './assets/inner-stars/reflection-detail.png';
import share from './assets/inner-stars/share-composition.png';

export type Lang = 'it' | 'en';
type Text = Record<Lang, string>;

export const contacts = {
  email: 'chiriac.adrian2296@gmail.com',
  phone: '+39 393 430 7178',
  phoneHref: 'tel:+393934307178',
  linkedin: 'https://www.linkedin.com/in/chiriacadrian2296/',
  github: 'https://github.com/chiriacadrian2296',
  cv: 'cv/Adrian-Chiriac-CV.pdf',
};

export const ui = {
  role: { it: 'AI Product Builder', en: 'AI Product Builder' },
  intro: {
    it: 'Progetto e rilascio prodotti completi dirigendo agenti AI, dall’idea alla produzione. Alle spalle ho esperienza backend in ambito enterprise (Generali) e mobile (Flutter).',
    en: 'I design and ship complete products by directing AI agents, from idea to production. Behind that is backend experience in enterprise (Generali) and mobile (Flutter).',
  },
  location: { it: 'Monza, Milano, Europa – remoto', en: 'Monza, Milan, Europe – remote' },
  downloadCv: { it: 'Scarica il CV', en: 'Download CV' },
  writeMe: { it: 'Scrivimi', en: 'Email me' },
  projects: { it: 'Progetti', en: 'Projects' },
  featured: { it: 'In evidenza', en: 'Featured' },
  readCase: { it: 'Leggi il case study', en: 'Read the case study' },
  howIWork: { it: 'Come lavoro', en: 'How I work' },
  howIWorkLead: {
    it: 'Lavoro come il responsabile di una piccola squadra di agenti AI: io decido cosa costruire e come deve essere, loro scrivono il codice dentro regole precise.',
    en: 'I work like the lead of a small team of AI agents: I decide what to build and how it should behave, they write the code within clear rules.',
  },
  experience: { it: 'Esperienza', en: 'Experience' },
  contact: { it: 'Contatti', en: 'Contact' },
  contactLead: {
    it: 'Cerco un ruolo in cui costruire e mettere in produzione prodotti e agenti AI. Scrivimi pure.',
    en: 'I’m looking for a role building and shipping AI products and agents. Feel free to reach out.',
  },
  problem: { it: 'Il problema', en: 'The problem' },
  built: { it: 'Cosa ho costruito', en: 'What I built' },
  how: { it: 'Come l’ho costruito', en: 'How I built it' },
  numbers: { it: 'In numeri', en: 'By the numbers' },
  learned: { it: 'Cosa ho imparato', en: 'What I learned' },
  gallery: { it: 'Immagini', en: 'Screenshots' },
  back: { it: 'Tutti i progetti', en: 'All projects' },
  visit: { it: 'Apri il prodotto', en: 'Open the product' },
  code: { it: 'Codice', en: 'Code' },
  switchLang: { it: 'English', en: 'Italiano' },
} satisfies Record<string, Text>;

export const method: { icon: string; title: Text; body: Text }[] = [
  {
    icon: 'fa-scroll',
    title: { it: 'Regole scritte', en: 'Written rules' },
    body: {
      it: 'Ogni progetto ha un file di regole (AGENTS.md) con convenzioni, terminologia e flusso di lavoro. Gli agenti lo leggono prima di toccare il codice.',
      en: 'Each project has a rules file (AGENTS.md) with conventions, terminology and workflow. Agents read it before touching the code.',
    },
  },
  {
    icon: 'fa-brain',
    title: { it: 'Memoria tra sessioni', en: 'Memory across sessions' },
    body: {
      it: 'Decisioni, correzioni e trappole già incontrate restano in una memoria persistente, così lo stesso errore non si ripete.',
      en: 'Decisions, corrections and known pitfalls live in a persistent memory, so the same mistake is not made twice.',
    },
  },
  {
    icon: 'fa-diagram-project',
    title: { it: 'Piani e orchestrazione', en: 'Plans and orchestration' },
    body: {
      it: 'Il lavoro lungo diventa un piano a passi, che un orchestratore fa eseguire agli agenti senza che debba dire “vai avanti” a ogni passo.',
      en: 'Long work becomes a step-by-step plan that an orchestrator runs through the agents, without me saying “next” at every step.',
    },
  },
  {
    icon: 'fa-shield-halved',
    title: { it: 'Verifiche e produzione protetta', en: 'Checks and a protected production' },
    body: {
      it: 'Analisi e test mirati a ogni modifica, CI per sottosistema, branch separati: in produzione arriva solo ciò che ho approvato.',
      en: 'Targeted analysis and tests on every change, CI per subsystem, separate branches: only what I approve reaches production.',
    },
  },
];

export const experience: { when: string; title: Text; org: Text; body: Text }[] = [
  {
    when: '2026 –',
    title: { it: 'Progetti AI indipendenti', en: 'Independent AI projects' },
    org: { it: 'Inner Stars, Codex Autonomous Loop, Paps Tutor, Sgherro', en: 'Inner Stars, Codex Autonomous Loop, Paps Tutor, Sgherro' },
    body: {
      it: 'Prodotti progettati e rilasciati da solo, dirigendo agenti AI.',
      en: 'Products designed and shipped on my own, directing AI agents.',
    },
  },
  {
    when: '2023 – 2026',
    title: { it: 'Produzione musicale indipendente', en: 'Independent music production' },
    org: { it: 'Freelance', en: 'Freelance' },
    body: {
      it: 'Produzione, pubblicazione e promozione autogestite di numerose uscite; grafica e identità visiva curate in proprio.',
      en: 'Self-managed production, release and promotion of many tracks; artwork and visual identity done in-house.',
    },
  },
  {
    when: '2020 – 2023',
    title: { it: 'Backend Developer', en: 'Backend Developer' },
    org: { it: 'Generali', en: 'Generali' },
    body: {
      it: 'Backend di un’app iOS interna per agenti assicurativi e responsabili di team: SQL Server, stored procedure, web service in C# ASP.NET MVC.',
      en: 'Backend of an internal iOS app for insurance agents and team managers: SQL Server, stored procedures, C# ASP.NET MVC web services.',
    },
  },
  {
    when: '2019 – 2020',
    title: { it: 'Software Developer', en: 'Software Developer' },
    org: { it: 'GisData', en: 'GisData' },
    body: {
      it: 'Sistemi di ticketing automatico in Python; avvio della riscrittura in Flutter dell’app mobile inforMAPP.',
      en: 'Automated ticketing systems in Python; started rewriting the inforMAPP mobile app in Flutter.',
    },
  },
  {
    when: '2019',
    title: { it: 'Web Developer', en: 'Web Developer' },
    org: { it: 'VioTrans', en: 'VioTrans' },
    body: {
      it: 'Sito aziendale per un cliente, seguito da solo dal design al deploy.',
      en: 'Company website for a client, handled alone from design to deployment.',
    },
  },
];

export interface Project {
  slug: Record<Lang, string>;
  name: string;
  featured?: boolean;
  icon: string;
  tagline: Text;
  period: Text;
  stack: string[];
  link?: string;
  code?: string;
  cover?: ImageMetadata;
  problem: Text;
  built: Record<Lang, string[]>;
  how: Record<Lang, string[]>;
  numbers: { value: string; label: Text }[];
  learned: Text;
  gallery?: { image: ImageMetadata; caption: Text }[];
}

export const projects: Project[] = [
  {
    slug: { it: 'inner-stars', en: 'inner-stars' },
    name: 'Inner Stars',
    featured: true,
    icon: 'fa-star',
    tagline: {
      it: 'App di crescita personale: obiettivi, abitudini e vittorie diventano stelle di una galassia.',
      en: 'A personal growth app: goals, habits and victories become stars in a galaxy.',
    },
    period: { it: 'Agosto 2026 – oggi', en: 'August 2026 – present' },
    stack: ['Flutter', 'Dart', 'Firebase', 'GLSL', 'Astro', 'Claude Code', 'Codex'],
    link: 'https://innerstars.app',
    cover: galaxy,
    problem: {
      it: 'Le app di produttività tendono a punire: serie interrotte, contatori rossi, sensi di colpa. Volevo uno spazio dove ogni passo fatto resta visibile e la costanza è un desiderio, non un obbligo.',
      en: 'Productivity apps tend to punish: broken streaks, red counters, guilt. I wanted a space where every step taken stays visible and consistency is a wish, not an obligation.',
    },
    built: {
      it: [
        'Galaxy: un universo animato in cui aree, progetti e attività sono costellazioni e stelle, con shader scritti a mano.',
        'Sky: un browser a tre livelli per aree, progetti e attività, con ricerca e filtri.',
        'Statistiche che mostrano la luce accumulata, senza serie da non interrompere.',
        'Riflessioni, condivisione delle proprie costellazioni, sincronizzazione nel cloud, più lingue.',
        'Web app e app Android, con una landing dedicata.',
      ],
      en: [
        'Galaxy: an animated universe where areas, projects and activities are constellations and stars, with hand-written shaders.',
        'Sky: a three-level browser for areas, projects and activities, with search and filters.',
        'Statistics that show the light you have gathered, with no streaks to protect.',
        'Reflections, sharing your constellations, cloud sync, several languages.',
        'Web app and Android app, with a dedicated landing page.',
      ],
    },
    how: {
      it: [
        'Ho progettato prodotto, interfaccia e regole; gli agenti AI (Claude Code, Codex) hanno scritto il codice dentro quelle regole.',
        'Un file AGENTS.md fissa terminologia, convenzioni di interfaccia e flusso di lavoro; una memoria persistente conserva decisioni e trappole già incontrate.',
        'Branch separati, CI per sottosistema e suite completa solo prima della produzione: main pubblica in automatico e ci arriva solo ciò che ho approvato.',
      ],
      en: [
        'I designed the product, the interface and the rules; AI agents (Claude Code, Codex) wrote the code within those rules.',
        'An AGENTS.md file fixes terminology, interface conventions and workflow; a persistent memory keeps decisions and known pitfalls.',
        'Separate branches, CI per subsystem and the full suite only before production: main deploys automatically and only what I approve gets there.',
      ],
    },
    numbers: [
      { value: '~105.000', label: { it: 'righe di codice Dart', en: 'lines of Dart code' } },
      { value: '600+', label: { it: 'test automatici', en: 'automated tests' } },
      { value: '320+', label: { it: 'commit', en: 'commits' } },
      { value: '10', label: { it: 'settimane, da solo', en: 'weeks, solo' } },
    ],
    learned: {
      it: 'Con gli agenti il collo di bottiglia non è più scrivere codice ma decidere bene e verificare: regole chiare e controlli mirati valgono più di qualsiasi prompt.',
      en: 'With agents the bottleneck is no longer writing code but deciding well and checking: clear rules and targeted checks are worth more than any prompt.',
    },
    gallery: [
      { image: galaxy, caption: { it: 'Galaxy', en: 'Galaxy' } },
      { image: constellation, caption: { it: 'Una costellazione', en: 'A constellation' } },
      { image: skyAreas, caption: { it: 'Sky: le aree', en: 'Sky: areas' } },
      { image: stats, caption: { it: 'Statistiche', en: 'Statistics' } },
      { image: reflection, caption: { it: 'Una riflessione', en: 'A reflection' } },
      { image: share, caption: { it: 'Condivisione', en: 'Sharing' } },
    ],
  },
  {
    slug: { it: 'codex-autonomous-loop', en: 'codex-autonomous-loop' },
    name: 'Codex Autonomous Loop',
    icon: 'fa-diagram-project',
    tagline: {
      it: 'Un orchestratore in Python che fa eseguire a un agente AI un piano di sviluppo completo, in autonomia.',
      en: 'A Python orchestrator that has an AI agent carry out a whole development plan on its own.',
    },
    period: { it: '2026', en: '2026' },
    stack: ['Python', 'Codex CLI', 'Git', 'JSON'],
    problem: {
      it: 'Avevo piani di sviluppo completi, ma l’agente si fermava dopo ogni passo e aspettava che gli dicessi di continuare. Il collo di bottiglia ero io.',
      en: 'I had complete development plans, but the agent stopped after every step and waited for me to tell it to continue. I was the bottleneck.',
    },
    built: {
      it: [
        'Un supervisore che legge un piano JSON e fa eseguire a Codex un’attività alla volta.',
        'Verifiche indipendenti dopo ogni attività e commit descrittivo solo se passano.',
        'Limiti su tentativi, tempi e uscita; ripresa dall’ultimo checkpoint dopo un’interruzione.',
        'Esecuzione nella sandbox di Windows, controlli sull’ambiente prima di partire, nessuna dipendenza esterna.',
      ],
      en: [
        'A supervisor that reads a JSON plan and has Codex carry out one task at a time.',
        'Independent checks after every task, with a descriptive commit only if they pass.',
        'Limits on attempts, time and output; resume from the last checkpoint after an interruption.',
        'Runs in the Windows sandbox, checks the environment before starting, no external dependencies.',
      ],
    },
    how: {
      it: [
        'Scritto in Python standard, diviso in moduli (piano, processo, git, avanzamento, errori).',
        'Testato con un finto Codex che simula successi, errori e blocchi, così il ciclo si prova senza consumare richieste vere.',
      ],
      en: [
        'Written in plain Python, split into modules (plan, process, git, progress, errors).',
        'Tested with a fake Codex that simulates successes, failures and hangs, so the loop is tested without spending real requests.',
      ],
    },
    numbers: [
      { value: '~1.000', label: { it: 'righe di Python', en: 'lines of Python' } },
      { value: '0', label: { it: 'dipendenze esterne', en: 'external dependencies' } },
      { value: '2+', label: { it: 'progetti su cui l’ho usato', en: 'projects I used it on' } },
    ],
    learned: {
      it: 'Dare autonomia a un agente vuol dire soprattutto decidere quando deve fermarsi: i limiti e le verifiche sono la parte più importante.',
      en: 'Giving an agent autonomy is mostly about deciding when it must stop: limits and checks are the most important part.',
    },
  },
  {
    slug: { it: 'paps-tutor', en: 'paps-tutor' },
    name: 'Paps Tutor',
    icon: 'fa-chalkboard',
    tagline: {
      it: 'Una lavagna di studio per tablet con penna, con un tutor AI che legge i tuoi materiali.',
      en: 'A study whiteboard for pen tablets, with an AI tutor that reads your materials.',
    },
    period: { it: 'Ottobre 2026 – oggi', en: 'October 2026 – present' },
    stack: ['Flutter', 'Dart', 'SQLite', 'Sign in with ChatGPT'],
    problem: {
      it: 'Studiare su tablet vuol dire saltare tra PDF, appunti e chatbot. Serviva un unico posto dove scrivere a mano, tenere i materiali e chiedere aiuto, senza costi né account in più.',
      en: 'Studying on a tablet means jumping between PDFs, notes and chatbots. It needed one place to write by hand, keep materials and ask for help, with no extra costs or accounts.',
    },
    built: {
      it: [
        'Lavagna con penna, evidenziatore, testi, ritaglio, PDF e immagini, tutto offline.',
        'Biblioteca dei materiali per ogni esame, con backup.',
        'Tutor AI collegato all’account ChatGPT dell’utente, senza backend né chiavi API: legge lavagna, PDF e immagini.',
        'Risposte con formule e grafici, lezioni generate dai materiali, conversazioni salvate.',
      ],
      en: [
        'A whiteboard with pen, highlighter, text, cropping, PDFs and images, all offline.',
        'A materials library for each exam, with backups.',
        'An AI tutor connected to the user’s own ChatGPT account, with no backend or API keys: it reads the board, PDFs and images.',
        'Answers with formulas and graphs, lessons generated from the materials, saved conversations.',
      ],
    },
    how: {
      it: [
        'Costruita a stretto contatto con un’utente reale che la usa ogni giorno: ogni versione nasce dal suo feedback.',
        'Stesso metodo di Inner Stars, con l’orchestratore per i piani più lunghi.',
      ],
      en: [
        'Built closely with a real user who studies with it every day: every version comes from her feedback.',
        'Same method as Inner Stars, with the orchestrator for longer plans.',
      ],
    },
    numbers: [
      { value: '~26.000', label: { it: 'righe di codice', en: 'lines of code' } },
      { value: '43', label: { it: 'file di test', en: 'test files' } },
      { value: '~2', label: { it: 'settimane', en: 'weeks' } },
      { value: '1', label: { it: 'utente reale, ogni giorno', en: 'real user, every day' } },
    ],
    learned: {
      it: 'Un solo utente reale vale più di molte ipotesi: il prodotto è cambiato più per le sue domande che per le mie idee.',
      en: 'One real user is worth more than many assumptions: the product changed more because of her questions than my ideas.',
    },
  },
  {
    slug: { it: 'sgherro', en: 'sgherro' },
    name: 'Sgherro',
    icon: 'fa-music',
    tagline: {
      it: 'Una piattaforma per gestire artisti musicali AI, costruita per un cliente.',
      en: 'A platform for managing AI music artists, built for a client.',
    },
    period: { it: 'Novembre 2026 – oggi', en: 'November 2026 – present' },
    stack: ['Flutter', 'Dart', 'JSON', 'Codex'],
    problem: {
      it: 'Gestire artisti musicali creati con l’AI vuol dire tenere coerenti identità, voce e stile visivo tra immagini, testi, brani e post, su strumenti diversi. Senza una fonte unica, ogni contenuto rischia di allontanarsi dal personaggio.',
      en: 'Managing music artists created with AI means keeping identity, voice and visual style consistent across images, lyrics, tracks and posts, on different tools. Without a single source, every piece of content can drift away from the character.',
    },
    built: {
      it: [
        'Archivio di “bibbie” degli artisti: identità, personalità, voce, musica, aspetto e riferimenti visivi, con importazione ed esportazione JSON e un template da compilare in chat.',
        'Preparazione dei prompt: la bibbia dell’artista e l’idea del cliente diventano un testo pronto per gli strumenti AI esterni.',
        'Editor di post con anteprime per piattaforma e monitoraggio di album, brani e pubblicazioni confermate.',
      ],
      en: [
        'An archive of artist “bibles”: identity, personality, voice, music, look and visual references, with JSON import and export and a template to fill in a chat.',
        'Prompt preparation: the artist’s bible and the client’s idea become a text ready for external AI tools.',
        'A post editor with per-platform previews, and tracking of albums, tracks and confirmed releases.',
      ],
    },
    how: {
      it: [
        'Prima di scrivere codice, il flusso di lavoro del cliente: cosa si fa a mano, cosa va tenuto sotto controllo, da dove partire.',
        'Un “brain” di progetto ispirato ai sistemi di memoria per agenti: fatti confermati (semantica), diario datato delle discussioni (episodica), procedure ripetibili e un registro delle decisioni con fonte e motivazione.',
        'Le decisioni del cliente restano separate dalle proposte dell’agente; la direzione creativa resta al cliente.',
      ],
      en: [
        'Before writing code, the client’s workflow: what is done by hand, what the client wants to keep control of, where to start.',
        'A project “brain” inspired by agent memory systems: confirmed facts (semantic), a dated log of discussions (episodic), repeatable procedures and a decision log with source and rationale.',
        'The client’s decisions stay separate from the agent’s proposals; creative direction stays with the client.',
      ],
    },
    numbers: [
      { value: '12', label: { it: 'decisioni documentate', en: 'documented decisions' } },
      { value: '3', label: { it: 'aree: bibbie, generazione, monitoraggio', en: 'areas: bibles, generation, tracking' } },
      { value: '1', label: { it: 'cliente reale', en: 'real client' } },
    ],
    learned: {
      it: 'Con un cliente il lavoro più importante è capire e mettere per iscritto: un registro delle decisioni evita di ridiscutere ogni volta e tiene allineati persone e agenti.',
      en: 'With a client the most important work is understanding and writing things down: a decision log avoids re-discussing everything and keeps people and agents aligned.',
    },
  },
];

export const projectHref = (lang: Lang, p: Project) =>
  lang === 'it' ? `progetti/${p.slug.it}/` : `en/projects/${p.slug.en}/`;
