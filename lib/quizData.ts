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


// --- OWASP Top 10 2021 Quiz Data (Expanded to 20) ---
export const owaspQuizData: Question[] = [
  // Existing 10 questions...
  {
    id: 'owasp1_upd',
    question: 'Un utilizator poate modifica ID-ul unui obiect într-un URL (ex: /api/orders/123 -> /api/orders/456) și poate vizualiza comanda altui client. Ce vulnerabilitate OWASP este cel mai probabil exploatată?',
    options: ['A01: Broken Access Control', 'A03: Injection', 'A05: Security Misconfiguration', 'A10: Server-Side Request Forgery (SSRF)'],
    correctAnswer: 'A01: Broken Access Control',
    explanation: 'Acesta este un exemplu clasic de Insecure Direct Object References (IDOR), o subcategorie a Broken Access Control.'
  },
  {
    id: 'owasp2_upd',
    question: 'O aplicație stochează token-urile de sesiune în localStorage, fără flag-ul HttpOnly. Ce atac devine semnificativ mai ușor de realizat?',
    options: ['SQL Injection (A03)', 'Cross-Site Scripting (XSS) pentru furtul sesiunii (parte din A07)', 'XML External Entity (XXE) (parte din A05)', 'Server-Side Request Forgery (SSRF) (A10)'],
    correctAnswer: 'Cross-Site Scripting (XSS) pentru furtul sesiunii (parte din A07)',
    explanation: 'Stocarea token-urilor în localStorage le face accesibile scripturilor JavaScript via XSS, permițând furtul sesiunii (A07).'
  },
  {
    id: 'owasp3_upd',
    question: 'Ce tehnică de apărare este cea mai eficientă pentru a preveni majoritatea vulnerabilităților de tip Injection (A03), cum ar fi SQL Injection?',
    options: ['Validarea inputului pe client', 'Utilizarea Web Application Firewalls (WAF)', 'Folosirea interogărilor parametrizate (prepared statements)', 'Codificarea datelor la afișare'],
    correctAnswer: 'Folosirea interogărilor parametrizate (prepared statements)',
    explanation: 'Interogările parametrizate separă codul SQL de date, prevenind interpretarea datelor ca instrucțiuni.'
  },
   {
    id: 'owasp4_upd',
    question: 'O funcționalitate nouă de export generează un raport complex pe server, fără limite impuse utilizatorului. Ce categorie OWASP (2021) reflectă cel mai bine acest risc?',
    options: ['A04: Insecure Design', 'A09: Security Logging and Monitoring Failures', 'A05: Security Misconfiguration', 'A01: Broken Access Control'],
    correctAnswer: 'A04: Insecure Design',
    explanation: 'Lipsa limitării resurselor este o problemă de proiectare (Insecure Design) ce poate duce la Denial of Service.'
  },
  {
    id: 'owasp5_upd',
    question: 'Un bucket S3 este configurat accidental cu permisiuni publice de scriere. Ce categorie OWASP este cel mai direct implicată?',
    options: ['A02: Cryptographic Failures', 'A05: Security Misconfiguration', 'A07: Identification and Authentication Failures', 'A08: Software and Data Integrity Failures'],
    correctAnswer: 'A05: Security Misconfiguration',
    explanation: 'Configurarea incorectă a permisiunilor pentru resursele cloud este un exemplu tipic de Security Misconfiguration.'
  },
  {
    id: 'owasp6_upd',
    question: 'Folosirea unei biblioteci de procesare a imaginilor care nu a mai fost actualizată de 2 ani, cu un CVE critic cunoscut. Ce categorie OWASP este relevantă?',
    options: ['A03: Injection', 'A06: Vulnerable and Outdated Components', 'A08: Software and Data Integrity Failures', 'A09: Security Logging and Monitoring Failures'],
    correctAnswer: 'A06: Vulnerable and Outdated Components',
    explanation: 'Utilizarea componentelor cu vulnerabilități cunoscute este exact ceea ce descrie categoria A06.'
  },
   {
    id: 'owasp7_upd',
    question: 'O aplicație permite resetarea parolei doar pe baza adresei de email, fără un token unic și cu durată limitată. Ce risc principal apare?',
    options: ['Cross-Site Scripting (XSS)', 'Server-Side Request Forgery (SSRF)', 'Account takeover (A07)', 'Security Misconfiguration (A05)'],
    correctAnswer: 'Account takeover (A07)',
    explanation: 'Lipsa unui mecanism sigur de verificare facilitează preluarea neautorizată a conturilor (A07: Identification and Authentication Failures).'
  },
   {
    id: 'owasp8_upd',
    question: 'Un pipeline CI/CD descarcă dependențe folosind HTTP și nu verifică semnăturile digitale. Ce categorie OWASP (2021) este cel mai probabil afectată?',
    options: ['A08: Software and Data Integrity Failures', 'A04: Insecure Design', 'A06: Vulnerable and Outdated Components', 'A05: Security Misconfiguration'],
    correctAnswer: 'A08: Software and Data Integrity Failures',
    explanation: 'Descărcarea nesecurizată și lipsa verificării integrității pot permite injectarea de cod malițios în build (A08).'
  },
  {
    id: 'owasp9_upd',
    question: 'După un incident, se constată că log-urile nu conțin adresele IP ale utilizatorilor care au efectuat acțiuni critice. Ce categorie OWASP a contribuit?',
    options: ['A01: Broken Access Control', 'A07: Identification and Authentication Failures', 'A09: Security Logging and Monitoring Failures', 'A05: Security Misconfiguration'],
    correctAnswer: 'A09: Security Logging and Monitoring Failures',
    explanation: 'Lipsa jurnalizării informațiilor relevante (A09) face dificilă detectarea și investigarea incidentelor.'
  },
   {
    id: 'owasp10_upd',
    question: 'O funcționalitate permite specificarea unui URL pentru avatar, iar un atacator introduce `http://169.254.169.254/latest/meta-data/`. Ce vulnerabilitate este exploatată?',
    options: ['A03: Injection', 'A10: Server-Side Request Forgery (SSRF)', 'A01: Broken Access Control', 'A06: Vulnerable and Outdated Components'],
    correctAnswer: 'A10: Server-Side Request Forgery (SSRF)',
    explanation: 'Aplicația este forțată să facă o cerere către o resursă internă (metadata service), un atac clasic SSRF (A10).'
  },
  // New 10 questions for OWASP
  {
    id: 'owasp11',
    question: 'Ce tip de header HTTP ajută la prevenirea atacurilor de tip Clickjacking, instruind browserul să nu randeze pagina într-un frame?',
    options: ['Content-Security-Policy', 'X-Content-Type-Options', 'X-Frame-Options', 'Strict-Transport-Security'],
    correctAnswer: 'X-Frame-Options',
    explanation: 'X-Frame-Options (cu valorile DENY sau SAMEORIGIN) este principalul header pentru prevenirea Clickjacking-ului (menționat în contextul A05).'
  },
  {
    id: 'owasp12',
    question: 'O aplicație folosește `eval()` pentru a parsa date JSON primite de la utilizator. Ce vulnerabilitate principală introduce această practică?',
    options: ['A01: Broken Access Control', 'A03: Injection (specific Code Injection)', 'A02: Cryptographic Failures', 'A10: Server-Side Request Forgery (SSRF)'],
    correctAnswer: 'A03: Injection (specific Code Injection)',
    explanation: 'Folosirea `eval()` pe date nevalidate provenite de la utilizator permite injectarea și execuția de cod JavaScript arbitrar (Code Injection), o formă de A03.'
  },
  {
    id: 'owasp13',
    question: 'Ce consecință majoră poate avea lipsa validării tipului și lungimii fișierelor încărcate de utilizatori (File Upload)?',
    options: ['Denial of Service (DoS)', 'Execuția de cod pe server (Remote Code Execution - RCE)', 'Cross-Site Scripting (XSS) stocat', 'Toate cele de mai sus'],
    correctAnswer: 'Toate cele de mai sus',
    explanation: 'Lipsa validării la upload poate permite încărcarea de fișiere foarte mari (DoS), fișiere executabile (RCE) sau fișiere HTML/JS malițioase (XSS Stocat) - probleme legate de A03, A05, A08.'
  },
  {
    id: 'owasp14',
    question: 'Ce înseamnă "Salt" în contextul stocării parolelor (A02: Cryptographic Failures)?',
    options: ['Un algoritm de hashing lent.', 'O valoare unică, aleatorie, adăugată la parolă înainte de hashing.', 'Cheia secretă folosită pentru criptarea parolelor.', 'O metodă de a limita numărul de încercări de login.'],
    correctAnswer: 'O valoare unică, aleatorie, adăugată la parolă înainte de hashing.',
    explanation: 'Salt-ul previne atacurile de tip rainbow table, asigurând că parole identice vor avea hash-uri diferite.'
  },
  {
    id: 'owasp15',
    question: 'O aplicație web afișează mesaje de eroare detaliate, inclusiv stack trace-uri, direct utilizatorului final. Ce categorie OWASP este afectată?',
    options: ['A05: Security Misconfiguration', 'A09: Security Logging and Monitoring Failures', 'A02: Cryptographic Failures', 'A04: Insecure Design'],
    correctAnswer: 'A05: Security Misconfiguration',
    explanation: 'Expunerea informațiilor tehnice detaliate în mesajele de eroare este o configurare nesigură (A05) care poate oferi informații utile unui atacator.'
  },
  {
    id: 'owasp16',
    question: 'Ce este un atac de tip "Credential Stuffing" (relevant pentru A07)?',
    options: ['Ghicirea parolelor folosind dicționare.', 'Folosirea listelor de credențiale (email/parolă) compromise în alte breșe pentru a încerca autentificarea pe site-ul tău.', 'Injectarea de credențiale false în baza de date.', 'Furtul cookie-urilor de sesiune.'],
    correctAnswer: 'Folosirea listelor de credențiale (email/parolă) compromise în alte breșe pentru a încerca autentificarea pe site-ul tău.',
    explanation: 'Atacatorii automatizează testarea credențialelor furate pe multiple site-uri, profitând de reutilizarea parolelor de către utilizatori.'
  },
  {
    id: 'owasp17',
    question: 'Un API nu implementează limitarea numărului de cereri (rate limiting). Ce vulnerabilitate OWASP API Top 10 este cel mai probabil expusă?',
    options: ['API1: Broken Object Level Authorization', 'API3: Excessive Data Exposure', 'API4: Lack of Resources & Rate Limiting', 'API5: Broken Function Level Authorization'],
    correctAnswer: 'API4: Lack of Resources & Rate Limiting',
    explanation: 'Lipsa rate limiting-ului poate duce la atacuri de tip Denial of Service sau la abuzul funcționalităților API.'
  },
  {
    id: 'owasp18',
    question: 'Ce rol joacă Content Security Policy (CSP) în prevenirea atacurilor XSS (A03)?',
    options: ['Validează input-ul utilizatorului pe server.', 'Criptează datele sensibile în tranzit.', 'Definește sursele valide de unde browserul poate încărca și executa scripturi.', 'Scanează codul sursă pentru vulnerabilități.'],
    correctAnswer: 'Definește sursele valide de unde browserul poate încărca și executa scripturi.',
    explanation: 'CSP instruiește browserul să blocheze scripturile provenite din surse neaprobate sau scripturile inline nesigure, mitigând impactul XSS.'
  },
  {
    id: 'owasp19',
    question: 'Ce mecanism HTTP previne trimiterea cookie-urilor de sesiune în cererile cross-site, ajutând la prevenirea CSRF (relevant pentru A01)?',
    options: ['Flag-ul HttpOnly pe cookie', 'Flag-ul Secure pe cookie', 'Atributul SameSite pe cookie (setat la Lax sau Strict)', 'Header-ul Access-Control-Allow-Origin'],
    correctAnswer: 'Atributul SameSite pe cookie (setat la Lax sau Strict)',
    explanation: 'Atributul SameSite instruiește browserul să nu trimită cookie-ul în cereri inițiate de pe alte site-uri, prevenind astfel atacurile CSRF.'
  },
  {
    id: 'owasp20',
    question: 'Deserializarea datelor nesigure primite dintr-o sursă externă poate duce la ce tip de atacuri (A08)?',
    options: ['SQL Injection', 'Remote Code Execution (RCE)', 'Cross-Site Scripting (XSS)', 'Server-Side Request Forgery (SSRF)'],
    correctAnswer: 'Remote Code Execution (RCE)',
    explanation: 'Dacă datele serializate conțin obiecte malițioase, procesul de deserializare le poate instanția și executa cod arbitrar pe server.'
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

