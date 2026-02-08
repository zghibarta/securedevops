// lib/quizData.ts

// Define the structure for a single question
interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string; // Optional explanation
}

// Helper function to shuffle an array (Fisher-Yates algorithm)
// Used by the Quiz component, but defined here for potential reuse
export function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length, randomIndex;
  const newArray = [...array]; // Create a copy

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }

  return newArray;
}


// --- OWASP Top 10 2025 Quiz Data ---
export const owaspQuizData: Question[] = [
  // OWASP 2025 questions...
  {
    id: 'owasp1_2025',
    question: 'Un utilizator poate modifica ID-ul unui obiect într-un URL (ex: /api/orders/123 -> /api/orders/456) și poate vizualiza comanda altui client. Ce vulnerabilitate OWASP 2025 este cel mai probabil exploatată?',
    options: ['A01: Broken Access Control', 'A05: Injection', 'A02: Security Misconfiguration', 'A06: Insecure Design'],
    correctAnswer: 'A01: Broken Access Control',
    explanation: 'Acesta este un exemplu clasic de Insecure Direct Object References (IDOR), o subcategorie a Broken Access Control. A01:2025 rămâne pe poziția #1.'
  },
  {
    id: 'owasp2_2025',
    question: 'O bibliotecă popular pe npm a fost compromisă și versiunea nouă conține cod malware. Ce categorie OWASP 2025 este implicată?',
    options: ['A02: Security Misconfiguration', 'A03: Software Supply Chain Failures', 'A05: Injection', 'A06: Insecure Design'],
    correctAnswer: 'A03: Software Supply Chain Failures',
    explanation: 'A03:2025 este o categorie nouă care acoperi compromiterea componentelor, proceselor de build și infrastructurii de distribuție.'
  },
  {
    id: 'owasp3_2025',
    question: 'Un bucket S3 este configurat accidental cu permisiuni publice de scriere. Ce categorie OWASP 2025 este cel mai direct implicată?',
    options: ['A02: Security Misconfiguration', 'A04: Cryptographic Failures', 'A07: Authentication Failures', 'A08: Software or Data Integrity Failures'],
    correctAnswer: 'A02: Security Misconfiguration',
    explanation: 'Configurarea incorectă a resurselor cloud este un exemplu direct de A02:2025, care a urcat de la poziția #5 în 2021 la #2 în 2025.'
  },
  {
    id: 'owasp4_2025',
    question: 'Ce tehnică de apărare este cea mai eficientă pentru a preveni majoritatea vulnerabilităților de tip Injection (A05), cum ar fi SQL Injection?',
    options: ['Validarea inputului pe client', 'Utilizarea Web Application Firewalls (WAF)', 'Folosirea interogărilor parametrizate (prepared statements)', 'Codificarea datelor la afișare'],
    correctAnswer: 'Folosirea interogărilor parametrizate (prepared statements)',
    explanation: 'Interogările parametrizate separă codul SQL de date. A05:2025 (Injection) rămâne o amenințare critică, coborând de la #3 în 2021 la #5 în 2025.'
  },
  {
    id: 'owasp5_2025',
    question: 'Aplicația transmite date sensibile prin HTTP în loc de HTTPS. Ce categorie OWASP 2025 este cea mai relevantă?',
    options: ['A02: Security Misconfiguration', 'A04: Cryptographic Failures', 'A06: Insecure Design', 'A07: Authentication Failures'],
    correctAnswer: 'A04: Cryptographic Failures',
    explanation: 'Transmiterea datelor sensibile în text clar este o eșec criptografic (A04:2025).'
  },
  {
    id: 'owasp6_2025',
    question: 'Folosirea unei biblioteci de procesare a imaginilor care nu a mai fost actualizată, cu un CVE critic cunoscut. Ce categorie OWASP 2025 este implicată?',
    options: ['A03: Software Supply Chain Failures', 'A06: Insecure Design', 'A08: Software or Data Integrity Failures', 'A09: Security Logging & Alerting Failures'],
    correctAnswer: 'A03: Software Supply Chain Failures',
    explanation: 'A03:2025 cuprinde componentele vulnerabile și compromise din lanțul de aprovizionare.'
  },
  {
    id: 'owasp7_2025',
    question: 'O aplicație permite resetarea parolei doar pe baza adresei de email, fără token unic și durată limitată. Ce risc apare?',
    options: ['Cross-Site Scripting (XSS)', 'Server-Side Request Forgery', 'Account takeover (A07)', 'Security Misconfiguration'],
    correctAnswer: 'Account takeover (A07)',
    explanation: 'Mecanismul de resetare nesigur facilitează preluarea neautorizată a conturilor (A07:2025).'
  },
  {
    id: 'owasp8_2025',
    question: 'Un pipeline CI/CD descarcă dependențe fără verificarea semnăturilor digitale. Ce categoria OWASP este afectată?',
    options: ['A08: Software or Data Integrity Failures', 'A06: Insecure Design', 'A03: Software Supply Chain Failures', 'A02: Security Misconfiguration'],
    correctAnswer: 'A03: Software Supply Chain Failures',
    explanation: 'A03:2025 cuprinde securi în lanțul de construcție și distribuție.'
  },
  {
    id: 'owasp9_2025',
    question: 'După un incident, se constată că log-urile nu conțin metadata relevantă. Ce categorie OWASP trebuie aplicată?',
    options: ['A01: Broken Access Control', 'A07: Authentication Failures', 'A09: Security Logging & Alerting Failures', 'A02: Security Misconfiguration'],
    correctAnswer: 'A09: Security Logging & Alerting Failures',
    explanation: 'A09:2025 se concentrează pe eșecurile de jurnalizare și alertare a securității.'
  },
  {
    id: 'owasp10_2025',
    question: 'O aplicație nu validează mesajele de eroare și permit overflow de memorie. Ce categorie OWASP 2025 acoperă acest tip de defect?',
    options: ['A06: Insecure Design', 'A10: Mishandling of Exceptional Conditions', 'A05: Injection', 'A04: Cryptographic Failures'],
    correctAnswer: 'A10: Mishandling of Exceptional Conditions',
    explanation: 'A10:2025 este categoria nouă care acoperi gestionarea defectuoasă a condițiilor excepționale.'
  },
  {
    id: 'owasp11_2025',
    question: 'Ce header HTTP previne Clickjacking-ul?',
    options: ['Content-Security-Policy', 'X-Content-Type-Options', 'X-Frame-Options', 'Strict-Transport-Security'],
    correctAnswer: 'X-Frame-Options',
    explanation: 'X-Frame-Options instruiește browserul să nu randeze pagina în frame-uri de pe alte site-uri.'
  },
  {
    id: 'owasp12_2025',
    question: 'Folosirea `eval()` pe date nevalidate permite execuția de cod neautorizat. Ce categorie OWASP este afectată?',
    options: ['A01: Broken Access Control', 'A05: Injection', 'A02: Security Misconfiguration', 'A04: Cryptographic Failures'],
    correctAnswer: 'A05: Injection',
    explanation: 'A05:2025 (Injection) cuprinde injecția de cod și alte forme de injectare de date.'
  },
  {
    id: 'owasp13_2025',
    question: 'Lipsa validării fișierelor încărcate poate permite ce tipuri de atacuri?',
    options: ['SQL Injection', 'Denial of Service și Remote Code Execution', 'Only XSS', 'Credential stuffing'],
    correctAnswer: 'Denial of Service și Remote Code Execution',
    explanation: 'Fişierele nevalidate pot fi mari (DoS) sau executabile (RCE).'
  },
  {
    id: 'owasp14_2025',
    question: 'Cum trebuie stocate parolele pentru a preveni rainbow table attacks (A04)?',
    options: ['În text clar', 'Cu salt unic și algoritm lent', 'Criptate cu o singură cheie', 'Cu MD5'],
    correctAnswer: 'Cu salt unic și algoritm lent',
    explanation: 'Salt-ul și algoritmi lenti (bcrypt, scrypt) sunt esențiali pentru A04:2025.'
  },
  {
    id: 'owasp15_2025',
    question: 'Expunerea detaliilor de sistem în mesajele de eroare permite ce fel de atac?',
    options: ['Buffer overflow', 'Information disclosure (A02)', 'CSRF', 'Clickjacking'],
    correctAnswer: 'Information disclosure (A02)',
    explanation: 'Mesajele de eroare detaliate sunt parte a A02:2025 (Security Misconfiguration).'
  },
  {
    id: 'owasp16_2025',
    question: 'Ce este Credential Stuffing?',
    options: ['Ghicire de parole', 'Refolosirea credențialelor compromise pe alte site-uri', 'Injectarea de parole false', 'Furt de sesiuni'],
    correctAnswer: 'Refolosirea credențialelor compromise pe alte site-uri',
    explanation: 'Atacatorii testează automat credențiale furate pe multiple aplicații (A07:2025).'
  },
  {
    id: 'owasp17_2025',
    question: 'Cum poate o aplicație să verifice că o cerere vine din același site și nu de pe un site extern?',
    options: ['HTTPS', 'Authorization header', 'CSRF token și SameSite cookie', 'Cookies'],
    correctAnswer: 'CSRF token și SameSite cookie',
    explanation: 'Acestea previn atacurile CSRF (Cross-Site Request Forgery) legate de A01.'
  },
  {
    id: 'owasp18_2025',
    question: 'Ce rol joacă CSP în prevenirea XSS (A05)?',
    options: ['Validare server-side', 'Restricționează sursele de script browserul może executa', 'Criptare date', 'Logging'],
    correctAnswer: 'Restricționează sursele de script browserul poate executa',
    explanation: 'CSP mitigează XSS prin controlul scripturilor care pot rula.'
  },
  {
    id: 'owasp19_2025',
    question: 'Ce previne flag-ul HttpOnly pe cookies?',
    options: ['XSS', 'Accesul JavaScript din XSS la cookies', 'CSRF', 'SQL Injection'],
    correctAnswer: 'Accesul JavaScript din XSS la cookies',
    explanation: 'HttpOnly face cookie-uri inaccesibile din JavaScript, reducând damage în cazul XSS.'
  },
  {
    id: 'owasp20_2025',
    question: 'Deserializarea nesigură a datelor permite ce atac?',
    options: ['SQL Injection', 'Remote Code Execution (RCE)', 'XSS', 'SSRF'],
    correctAnswer: 'Remote Code Execution (RCE)',
    explanation: 'Datele serializate malițioase pot executa cod arbitrarydar (legat de A08:2025).'
  },
];

// --- SSDLC Quiz Data (Expanded to 20) ---
export const ssdlcQuizData: Question[] = [
  // Existing 10 questions...
   {
     id: 'ssdlc1_upd',
     question: 'În ce fază a SSDLC este cel mai eficient și mai puțin costisitor să se identifice și să se remedieze defectele de design de securitate?',
     options: ['Testare', 'Mentenanță', 'Cerințe și Design', 'Implementare'],
     correctAnswer: 'Cerințe și Design',
     explanation: 'Identificarea problemelor devreme este mai ieftină decât remedierea lor târziu în ciclu.'
   },
   {
     id: 'ssdlc2_upd',
     question: 'Ce activitate specifică SSDLC implică analiza riscurilor potențiale și definirea contramăsurilor înainte de începerea dezvoltării?',
     options: ['Testare de penetrare', 'Scanare statică a codului (SAST)', 'Modelarea amenințărilor (Threat Modeling)', 'Revizuirea codului (Code Review)'],
     correctAnswer: 'Modelarea amenințărilor (Threat Modeling)',
     explanation: 'Modelarea amenințărilor este un proces structurat pentru identificarea proactivă a riscurilor în faza de design.'
   },
   {
     id: 'ssdlc3_upd',
     question: 'Ce tip de testare de securitate analizează codul sursă al aplicației fără a-l executa?',
     options: ['DAST', 'SAST', 'IAST', 'SCA'],
     correctAnswer: 'SAST',
     explanation: 'SAST (Static Application Security Testing) analizează codul sursă sau bytecode-ul.'
   },
    {
     id: 'ssdlc4_upd',
     question: 'Introducerea conceptului de "Security Champions" într-o echipă de dezvoltare este o practică specifică fazei de:',
     options: ['Training și Conștientizare', 'Testare', 'Deploy', 'Mentenanță'],
     correctAnswer: 'Training și Conștientizare',
     explanation: 'Security Champions ajută la diseminarea cunoștințelor și bunelor practici de securitate în echipă.'
   },
    {
     id: 'ssdlc5_upd',
     question: 'Ce document rezultat în urma procesului SSDLC ar trebui să listeze toate bibliotecile terțe utilizate?',
     options: ['Raport de testare de penetrare', 'Model de amenințări', 'Software Bill of Materials (SBOM)', 'Plan de răspuns la incident'],
     correctAnswer: 'Software Bill of Materials (SBOM)',
     explanation: 'Un SBOM este un inventar al componentelor software, esențial pentru gestionarea vulnerabilităților din dependențe.'
   },
   {
    id: 'ssdlc6',
    question: 'Ce activitate din SSDLC se concentrează pe testarea aplicației în timpul rulării, simulând atacuri externe?',
    options: ['SCA', 'SAST', 'DAST', 'Revizuirea Arhitecturii'],
    correctAnswer: 'DAST',
    explanation: 'DAST (Dynamic Application Security Testing) interacționează cu aplicația în execuție.'
   },
   {
    id: 'ssdlc7',
    question: 'Principiul "Least Privilege" în contextul SSDLC se referă cel mai bine la:',
    options: ['Acordarea doar a permisiunilor minime necesare funcționării.', 'Utilizarea celor mai puține dependențe.', 'Minimizarea log-urilor.', 'Scrierea celui mai mic număr de linii de cod.'],
    correctAnswer: 'Acordarea doar a permisiunilor minime necesare funcționării.',
    explanation: 'Principiul privilegiului minim reduce suprafața de atac și impactul compromiterilor.'
   },
   {
    id: 'ssdlc8',
    question: 'Ce fază SSDLC este responsabilă pentru gestionarea vulnerabilităților descoperite după lansarea produsului?',
    options: ['Cerințe', 'Design', 'Implementare', 'Mentenanță și Răspuns la Incident'],
    correctAnswer: 'Mentenanță și Răspuns la Incident',
    explanation: 'Faza de mentenanță include monitorizarea continuă și aplicarea patch-urilor post-lansare.'
   },
   {
    id: 'ssdlc9',
    question: 'Validarea input-ului (Input Validation) ar trebui implementată în primul rând:',
    options: ['Doar pe client.', 'Doar pe server.', 'Atât pe client (UX), cât și pe server (securitate).', 'În WAF.'],
    correctAnswer: 'Atât pe client (UX), cât și pe server (securitate).',
    explanation: 'Validarea pe server este esențială pentru securitate, cea pe client este pentru UX.'
   },
   {
    id: 'ssdlc10',
    question: 'Care dintre următoarele NU este considerată o activitate tipică în faza de Testare a Securității din SSDLC?',
    options: ['Testare de penetrare', 'Scanare SAST și DAST', 'Definirea cerințelor de securitate', 'Revizuirea manuală a codului'],
    correctAnswer: 'Definirea cerințelor de securitate',
    explanation: 'Definirea cerințelor de securitate are loc în faza de Cerințe și Design.'
   },
  // New 10 questions for SSDLC
  {
    id: 'ssdlc11',
    question: 'Metodologia STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) este cel mai des utilizată în cadrul cărei activități SSDLC?',
    options: ['Analiza Compoziției Software (SCA)', 'Modelarea Amenințărilor (Threat Modeling)', 'Testarea de Penetrale', 'Revizuirea Codului'],
    correctAnswer: 'Modelarea Amenințărilor (Threat Modeling)',
    explanation: 'STRIDE este un model popular folosit pentru a identifica și clasifica tipurile de amenințări în timpul modelării amenințărilor.'
  },
  {
    id: 'ssdlc12',
    question: 'Ce tip de cerință de securitate definește cum *nu* ar trebui să se comporte sistemul (ex: "Sistemul nu trebuie să permită injecții SQL")?',
    options: ['Cerință funcțională', 'Cerință non-funcțională (de securitate)', 'Abuse Case / Misuse Case', 'User Story'],
    correctAnswer: 'Abuse Case / Misuse Case',
    explanation: 'Abuse/Misuse Cases descriu scenarii în care un atacator încearcă să abuzeze de sistem, ajutând la definirea controalelor necesare.'
  },
  {
    id: 'ssdlc13',
    question: 'Implementarea unui mecanism de "Secure Defaults" (valori implicite sigure) în configurația unei aplicații este o practică recomandată în ce fază SSDLC?',
    options: ['Testare', 'Implementare și Configurare', 'Mentenanță', 'Retragere'],
    correctAnswer: 'Implementare și Configurare',
    explanation: 'Configurarea implicită a aplicației ar trebui să fie cât mai sigură posibil, necesitând acțiuni explicite pentru a reduce nivelul de securitate, nu invers.'
  },
  {
    id: 'ssdlc14',
    question: 'Ce reprezintă "Attack Surface" (Suprafața de Atac) a unei aplicații?',
    options: ['Numărul total de linii de cod.', 'Lista vulnerabilităților cunoscute.', 'Totalitatea punctelor de intrare și ieșire prin care un atacator poate interacționa cu aplicația.', 'Complexitatea arhitecturii software.'],
    correctAnswer: 'Totalitatea punctelor de intrare și ieșire prin care un atacator poate interacționa cu aplicația.',
    explanation: 'Înțelegerea și minimizarea suprafeței de atac (prin eliminarea funcționalităților inutile, expunerea minimă a API-urilor etc.) este un obiectiv cheie în designul securizat.'
  },
  {
    id: 'ssdlc15',
    question: 'Ce activitate SSDLC implică verificarea dacă controalele de securitate implementate funcționează conform așteptărilor în condiții reale sau simulate?',
    options: ['Modelarea Amenințărilor', 'Definirea Cerințelor', 'Testarea Securității', 'Trainingul Dezvoltatorilor'],
    correctAnswer: 'Testarea Securității',
    explanation: 'Testarea securității (SAST, DAST, Pen Testing etc.) validează eficacitatea controalelor implementate în fazele anterioare.'
  },
  {
    id: 'ssdlc16',
    question: 'Standardul OWASP ASVS (Application Security Verification Standard) oferă:',
    options: ['O listă a celor mai critice riscuri web.', 'Un set de cerințe și controale de securitate verificabile, structurate pe nivele.', 'O unealtă automată de scanare a vulnerabilităților.', 'Un ghid pentru modelarea amenințărilor.'],
    correctAnswer: 'Un set de cerințe și controale de securitate verificabile, structurate pe nivele.',
    explanation: 'ASVS este un cadru valoros pentru definirea cerințelor de securitate și pentru verificarea implementării acestora în faza de testare.'
  },
  {
    id: 'ssdlc17',
    question: 'De ce este importantă instruirea periodică a dezvoltatorilor în practici de codare securizată?',
    options: ['Pentru a îndeplini cerințele de conformitate.', 'Pentru a reduce numărul de vulnerabilități introduse în cod din neatenție sau lipsă de cunoștințe.', 'Pentru a crește viteza de dezvoltare.', 'Pentru a justifica bugetul echipei de securitate.'],
    correctAnswer: 'Pentru a reduce numărul de vulnerabilități introduse în cod din neatenție sau lipsă de cunoștințe.',
    explanation: 'Trainingul continuu ajută dezvoltatorii să scrie cod mai sigur din start, reducând costurile de remediere ulterioare.'
  },
  {
    id: 'ssdlc18',
    question: 'Ce înseamnă "Defense in Depth" (Apărare în Profunzime) în contextul securității aplicațiilor?',
    options: ['Utilizarea unui singur control de securitate foarte puternic.', 'Implementarea mai multor straturi de controale de securitate diferite, astfel încât eșecul unuia să nu compromită întregul sistem.', 'Concentrarea exclusivă pe securitatea perimetrală (firewall).', 'Criptarea tuturor datelor, indiferent de sensibilitate.'],
    correctAnswer: 'Implementarea mai multor straturi de controale de securitate diferite, astfel încât eșecul unuia să nu compromită întregul sistem.',
    explanation: 'Apărarea în profunzime presupune controale multiple (validare input, parametrizare, control acces, WAF etc.) pentru a oferi reziliență.'
  },
  {
    id: 'ssdlc19',
    question: 'Revizuirea periodică a regulilor de firewall și a listelor de control al accesului (ACL) face parte din ce fază SSDLC?',
    options: ['Design', 'Implementare', 'Testare', 'Mentenanță și Operațiuni'],
    correctAnswer: 'Mentenanță și Operațiuni',
    explanation: 'Verificarea și actualizarea regulată a configurațiilor de securitate existente este o activitate crucială în faza de mentenanță pentru a asigura relevanța și eficacitatea lor continuă.'
  },
  {
    id: 'ssdlc20',
    question: 'Care este scopul principal al unui plan de răspuns la incident (Incident Response Plan) în SSDLC?',
    options: ['Prevenirea tuturor incidentelor de securitate.', 'Documentarea modului în care s-a produs un incident, după ce acesta a avut loc.', 'Definirea pașilor și responsabilităților pentru detectarea, analiza, limitarea și recuperarea în urma unui incident de securitate.', 'Stabilirea bugetului anual pentru securitate.'],
    correctAnswer: 'Definirea pașilor și responsabilităților pentru detectarea, analiza, limitarea și recuperarea în urma unui incident de securitate.',
    explanation: 'Un plan de răspuns la incident bine definit permite o reacție rapidă și coordonată în cazul unei breșe de securitate, minimizând impactul.'
  },
];

// --- DevSecOps Quiz Data (Expanded to 20) ---
export const devsecopsQuizData: Question[] = [
  // Existing 10 questions...
  {
    id: 'dso1_upd',
    question: 'Conceptul "Shift Left" în DevSecOps înseamnă:',
    options: ['Mutarea testării la final.', 'Integrarea securității cât mai devreme posibil.', 'Externalizarea securității.', 'Folosirea doar a uneltelor open-source.'],
    correctAnswer: 'Integrarea securității cât mai devreme posibil.',
    explanation: '"Shift Left" promovează identificarea și remedierea problemelor de securitate în fazele incipiente.'
  },
  {
    id: 'dso2_upd',
    question: 'Ce rol joacă automatizarea în implementarea DevSecOps?',
    options: ['Opțională.', 'Înlocuiește complet intervenția umană.', 'Esențială pentru integrarea rapidă și consistentă a testelor de securitate.', 'Se aplică doar la deployment.'],
    correctAnswer: 'Esențială pentru integrarea rapidă și consistentă a testelor de securitate.',
    explanation: 'Automatizarea permite rularea frecventă a scanărilor și controalelor în pipeline-ul CI/CD.'
  },
  {
    id: 'dso3_upd',
    question: 'Ce reprezintă "Infrastructure as Code (IaC)" și de ce este relevant pentru DevSecOps?',
    options: ['Documentație text; irelevant.', 'Gestionarea infrastructurii prin cod versionat; permite scanarea de securitate a configurațiilor.', 'Framework de programare; irelevant.', 'Cod rulat pe hardware; riscant.'],
    correctAnswer: 'Gestionarea infrastructurii prin cod versionat; permite scanarea de securitate a configurațiilor.',
    explanation: 'IaC permite versionarea, revizuirea și scanarea automată a configurațiilor de infrastructură pentru probleme de securitate.'
  },
  {
    id: 'dso4_upd',
    question: 'Care este un exemplu de integrare a securității în faza de "Commit/Build" a unui pipeline DevSecOps?',
    options: ['Testare de penetrare manuală.', 'Rularea unei scanări SAST.', 'Monitorizarea log-urilor live.', 'Aplicarea patch-urilor în producție.'],
    correctAnswer: 'Rularea unei scanări SAST.',
    explanation: 'Scanările SAST oferă feedback rapid dezvoltatorilor despre vulnerabilități introduse în cod.'
  },
  {
    id: 'dso5_upd',
    question: 'Ce înseamnă "Security Chaos Engineering" în contextul DevSecOps?',
    options: ['Ignorarea alertelor.', 'Introducerea haotică a vulnerabilităților.', 'Testarea proactivă a rezilienței sistemelor de securitate prin simularea controlată a eșecurilor/atacurilor.', 'Un atac red team.'],
    correctAnswer: 'Testarea proactivă a rezilienței sistemelor de securitate prin simularea controlată a eșecurilor/atacurilor.',
    explanation: 'Security Chaos Engineering identifică proactiv slăbiciuni în controalele de securitate.'
  },
  {
    id: 'dso6',
    question: 'Diferența principală dintre SAST și SCA (Software Composition Analysis)?',
    options: ['SAST analizează dependențele, SCA codul custom.', 'SAST pe compilat, SCA pe sursă.', 'SAST analizează codul propriu, SCA bibliotecile terțe.', 'Nicio diferență.'],
    correctAnswer: 'SAST analizează codul propriu, SCA bibliotecile terțe.',
    explanation: 'SAST vizează codul scris intern, SCA (A06 OWASP) vizează vulnerabilitățile din dependențe.'
   },
   {
    id: 'dso7',
    question: 'Ce este un "Security Gate" într-un pipeline CI/CD DevSecOps?',
    options: ['Firewall fizic.', 'Etapă care oprește pipeline-ul dacă nu sunt îndeplinite criterii de securitate.', 'Proces manual de aprobare.', 'Scaner de containere.'],
    correctAnswer: 'Etapă care oprește pipeline-ul dacă nu sunt îndeplinite criterii de securitate.',
    explanation: 'Security Gates impun automat respectarea standardelor de securitate în pipeline.'
   },
   {
    id: 'dso8',
    question: 'Monitorizarea continuă și alertarea în DevSecOps se referă la:',
    options: ['Doar monitorizarea performanței.', 'Verificarea manuală a log-urilor.', 'Colectarea și analiza log-urilor în timp real pentru detectarea anomaliilor și alertare.', 'Scanarea zilnică a dependențelor.'],
    correctAnswer: 'Colectarea și analiza log-urilor în timp real pentru detectarea anomaliilor și alertare.',
    explanation: 'Monitorizarea continuă (A09 OWASP) este crucială pentru detectarea rapidă a incidentelor.'
   },
   {
    id: 'dso9',
    question: 'Ce rol are managementul secretelor (Secrets Management) în DevSecOps?',
    options: ['Stocarea parolelor utilizatorilor.', 'Gestionarea sigură a credențialelor, cheilor API etc., folosite de aplicații/pipeline-uri.', 'Criptarea codului sursă.', 'Ascunderea log-urilor.'],
    correctAnswer: 'Gestionarea sigură a credențialelor, cheilor API etc., folosite de aplicații/pipeline-uri.',
    explanation: 'Managementul inadecvat al secretelor este o vulnerabilitate comună; soluții dedicate sunt esențiale.'
   },
   {
    id: 'dso10',
    question: 'Care este obiectivul final al adoptării unei culturi DevSecOps?',
    options: ['Eliminarea echipei de securitate.', 'Creșterea numărului de unelte.', 'Încetinirea dezvoltării.', 'Integrarea securității ca responsabilitate partajată pentru livrare rapidă și sigură.'],
    correctAnswer: 'Integrarea securității ca responsabilitate partajată pentru livrare rapidă și sigură.',
    explanation: 'DevSecOps este o schimbare culturală pentru livrarea rapidă și sigură de software.'
   },
  // New 10 questions for DevSecOps
  {
    id: 'dso11',
    question: 'Ce tehnică DevSecOps implică rularea aplicației într-un mediu izolat și interacțiunea cu aceasta pentru a găsi vulnerabilități în timpul execuției?',
    options: ['SAST', 'SCA', 'DAST', 'IaC Scanning'],
    correctAnswer: 'DAST',
    explanation: 'DAST (Dynamic Application Security Testing) testează aplicația în timpul rulării, simulând atacuri externe.'
  },
  {
    id: 'dso12',
    question: 'Conceptul de "Immutability" (Imutabilitate) în contextul infrastructurii DevSecOps înseamnă:',
    options: ['Serverele nu pot fi modificate după provizionare; orice schimbare necesită înlocuirea serverului.', 'Configurația infrastructurii nu poate fi stocată în cod.', 'Log-urile de securitate nu pot fi șterse.', 'Dependențele software nu pot fi actualizate.'],
    correctAnswer: 'Serverele nu pot fi modificate după provizionare; orice schimbare necesită înlocuirea serverului.',
    explanation: 'Infrastructura imutabilă reduce drift-ul de configurare și simplifică managementul securității, deoarece serverele sunt tratate ca artefacte de unică folosință.'
  },
  {
    id: 'dso13',
    question: 'Ce tip de unealtă DevSecOps este cel mai potrivit pentru a verifica dacă imaginile Docker conțin vulnerabilități cunoscute în sistemul de operare sau pachetele instalate?',
    options: ['SAST', 'DAST', 'Container Security Scanner (ex: Trivy, Clair)', 'Secrets Scanner'],
    correctAnswer: 'Container Security Scanner (ex: Trivy, Clair)',
    explanation: 'Scanerele de securitate pentru containere analizează straturile imaginilor Docker pentru a identifica CVE-uri în componentele incluse.'
  },
  {
    id: 'dso14',
    question: 'Care este beneficiul principal al integrării Analizei Compoziției Software (SCA) direct în pipeline-ul CI/CD?',
    options: ['Îmbunătățirea performanței aplicației.', 'Detectarea timpurie a licențelor software incompatibile sau a vulnerabilităților din dependențe.', 'Generarea automată a documentației API.', 'Înlocuirea nevoii de testare manuală.'],
    correctAnswer: 'Detectarea timpurie a licențelor software incompatibile sau a vulnerabilităților din dependențe.',
    explanation: 'Integrarea SCA în CI/CD permite identificarea rapidă a riscurilor introduse de bibliotecile terțe, înainte ca acestea să ajungă în producție.'
  },
  {
    id: 'dso15',
    question: 'Ce înseamnă "Policy as Code" în DevSecOps?',
    options: ['Scrierea politicilor de securitate în documente Word.', 'Definirea și gestionarea politicilor de securitate (ex: reguli firewall, permisiuni IAM, controale CSP) folosind cod versionabil și testabil.', 'Un limbaj de programare specific pentru securitate.', 'Stocarea politicilor de securitate direct în codul aplicației.'],
    correctAnswer: 'Definirea și gestionarea politicilor de securitate (ex: reguli firewall, permisiuni IAM, controale CSP) folosind cod versionabil și testabil.',
    explanation: 'Similar cu IaC, Policy as Code permite automatizarea, testarea și auditarea aplicării politicilor de securitate în mod consistent.'
  },
  {
    id: 'dso16',
    question: 'Ce este un "Secrets Scanner" și unde ar trebui integrat într-un flux DevSecOps?',
    options: ['O unealtă care criptează secretele; integrată la runtime.', 'O unealtă care caută secrete hardcodate (parole, chei API) în codul sursă; integrată în faza de Commit/Build.', 'Un manager de parole pentru dezvoltatori.', 'O unealtă care generează secrete aleatoare; folosită la configurare.'],
    correctAnswer: 'O unealtă care caută secrete hardcodate (parole, chei API) în codul sursă; integrată în faza de Commit/Build.',
    explanation: 'Scanerele de secrete ajută la prevenirea expunerii accidentale a credențialelor în cod, fiind cel mai eficient integrate devreme în pipeline.'
  },
  {
    id: 'dso17',
    question: 'Abordarea "Security as Code" implică:',
    options: ['Scrierea testelor de securitate în același limbaj ca și aplicația.', 'Definirea controalelor, testelor și politicilor de securitate sub formă de cod.', 'Stocarea codului sursă într-un repository securizat.', 'Criptarea întregului pipeline CI/CD.'],
    correctAnswer: 'Definirea controalelor, testelor și politicilor de securitate sub formă de cod.',
    explanation: 'Security as Code extinde principiile IaC și Policy as Code la întregul spectru al securității, permițând automatizarea și integrarea acesteia în ciclul DevOps.'
  },
  {
    id: 'dso18',
    question: 'Ce tip de feedback este cel mai valoros pentru dezvoltatori într-un pipeline DevSecOps?',
    options: ['Un raport PDF lung generat la sfârșitul sprintului.', 'Feedback imediat, specific liniei de cod, direct în IDE sau la etapa de commit/pull request.', 'Alerte trimise doar echipei de securitate.', 'Un scor general de vulnerabilitate fără detalii.'],
    correctAnswer: 'Feedback imediat, specific liniei de cod, direct în IDE sau la etapa de commit/pull request.',
    explanation: 'Feedback-ul rapid și contextualizat permite dezvoltatorilor să remedieze problemele de securitate eficient, atunci când contextul este proaspăt.'
  },
  {
    id: 'dso19',
    question: 'Ce este un SBOM (Software Bill of Materials) și cum ajută în DevSecOps?',
    options: ['O listă a funcționalităților aplicației; ajută la testarea funcțională.', 'Un inventar al componentelor software terțe; ajută la identificarea dependențelor vulnerabile (SCA).', 'Un plan de arhitectură a securității.', 'O listă a membrilor echipei de dezvoltare.'],
    correctAnswer: 'Un inventar al componentelor software terțe; ajută la identificarea dependențelor vulnerabile (SCA).',
    explanation: 'SBOM oferă transparență asupra dependențelor, fiind esențial pentru gestionarea riscurilor asociate cu A06 și pentru conformitate.'
  },
  {
    id: 'dso20',
    question: 'De ce este importantă colaborarea strânsă între echipele de Dezvoltare, Securitate și Operațiuni (DevSecOps Culture)?',
    options: ['Pentru a reduce costurile cu licențele software.', 'Pentru a elimina nevoia de testare de securitate.', 'Pentru a sparge silozurile, a partaja responsabilitatea pentru securitate și a permite livrarea rapidă și sigură.', 'Pentru a crește numărul de întâlniri (meetings).'],
    correctAnswer: 'Pentru a sparge silozurile, a partaja responsabilitatea pentru securitate și a permite livrarea rapidă și sigură.',
    explanation: 'Cultura colaborativă este fundamentul DevSecOps, permițând integrarea naturală a securității în fluxurile de lucru existente.'
  },
];

