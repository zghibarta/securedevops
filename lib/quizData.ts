// lib/quizData.ts

// Define the structure for a single question
interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string; // Optional explanation
}

// --- OWASP Top 10 2021 Quiz Data (Updated) ---
export const owaspQuizData: Question[] = [
  {
    id: 'owasp1_upd',
    question: 'Un utilizator poate modifica ID-ul unui obiect într-un URL (ex: /api/orders/123 -> /api/orders/456) și poate vizualiza comanda altui client. Ce vulnerabilitate OWASP este cel mai probabil exploatată?',
    options: [
      'A01: Broken Access Control',
      'A03: Injection',
      'A05: Security Misconfiguration',
      'A10: Server-Side Request Forgery (SSRF)'
    ],
    correctAnswer: 'A01: Broken Access Control',
    explanation: 'Acesta este un exemplu clasic de Insecure Direct Object References (IDOR), o subcategorie a Broken Access Control, unde aplicația nu verifică dacă utilizatorul curent are permisiunea de a accesa obiectul solicitat.'
  },
  {
    id: 'owasp2_upd',
    question: 'O aplicație stochează token-urile de sesiune în localStorage, fără flag-ul HttpOnly. Ce atac devine semnificativ mai ușor de realizat?',
    options: [
      'SQL Injection (A03)',
      'Cross-Site Scripting (XSS) pentru furtul sesiunii (parte din A07)',
      'XML External Entity (XXE) (parte din A05)',
      'Server-Side Request Forgery (SSRF) (A10)'
    ],
    correctAnswer: 'Cross-Site Scripting (XSS) pentru furtul sesiunii (parte din A07)',
    explanation: 'Stocarea token-urilor în localStorage le face accesibile scripturilor JavaScript. O vulnerabilitate XSS poate permite unui atacator să execute scripturi care citesc localStorage și fură token-ul, ocolind mecanismele de autentificare (A07).'
  },
  {
    id: 'owasp3_upd',
    question: 'Ce tehnică de apărare este cea mai eficientă pentru a preveni majoritatea vulnerabilităților de tip Injection (A03), cum ar fi SQL Injection?',
    options: [
      'Validarea inputului pe partea clientului folosind JavaScript.',
      'Utilizarea Web Application Firewalls (WAF).',
      'Folosirea interogărilor parametrizate (prepared statements) sau ORM-urilor.',
      'Codificarea (encoding) datelor la afișarea în pagină.'
    ],
    correctAnswer: 'Folosirea interogărilor parametrizate (prepared statements) sau ORM-urilor.',
    explanation: 'Interogările parametrizate separă codul SQL de datele utilizatorului, prevenind interpretarea datelor ca instrucțiuni SQL. Validarea inputului și WAF-urile sunt utile, dar nu la fel de fundamentale ca parametrizarea.'
  },
  {
    id: 'owasp4_upd',
    question: 'În timpul unei revizuiri de cod, descoperi că o funcționalitate nouă de export permite generarea unui raport complex direct pe server, consumând resurse semnificative, fără limite impuse utilizatorului. Ce categorie OWASP (2021) reflectă cel mai bine acest risc?',
    options: [
      'A04: Insecure Design',
      'A09: Security Logging and Monitoring Failures',
      'A05: Security Misconfiguration',
      'A01: Broken Access Control'
    ],
    correctAnswer: 'A04: Insecure Design',
    explanation: 'Lipsa mecanismelor de limitare a resurselor (rate limiting, query complexity limits) într-o funcționalitate este o problemă de proiectare (Insecure Design) care poate duce la Denial of Service, chiar dacă implementarea tehnică este corectă.'
  },
  {
    id: 'owasp5_upd',
    question: 'Un bucket S3 este configurat accidental cu permisiuni publice de scriere. Ce categorie OWASP este cel mai direct implicată?',
    options: [
      'A02: Cryptographic Failures',
      'A05: Security Misconfiguration',
      'A07: Identification and Authentication Failures',
      'A08: Software and Data Integrity Failures'
    ],
    correctAnswer: 'A05: Security Misconfiguration',
    explanation: 'Configurarea incorectă a permisiunilor pentru resursele cloud (cum ar fi bucket-urile S3) este un exemplu tipic de Security Misconfiguration.'
  },
  {
    id: 'owasp6_upd',
    question: 'Echipa ta folosește o bibliotecă populară de procesare a imaginilor care nu a mai fost actualizată de 2 ani. O scanare automată descoperă o vulnerabilitate critică (CVE) cunoscută în acea versiune. Ce categorie OWASP este relevantă?',
    options: [
      'A03: Injection',
      'A06: Vulnerable and Outdated Components',
      'A08: Software and Data Integrity Failures',
      'A09: Security Logging and Monitoring Failures'
    ],
    correctAnswer: 'A06: Vulnerable and Outdated Components',
    explanation: 'Utilizarea componentelor cu vulnerabilități cunoscute este exact ceea ce descrie categoria A06. Este esențială gestionarea dependențelor și actualizarea lor regulată.'
  },
  {
    id: 'owasp7_upd',
    question: 'O aplicație permite utilizatorilor să își reseteze parola doar pe baza adresei de email, fără un token unic și cu durată limitată trimis pe email. Ce risc principal apare?',
    options: [
      'Cross-Site Scripting (XSS)',
      'Server-Side Request Forgery (SSRF)',
      'Account takeover (compromiterea contului) din cauza lipsei unei validări adecvate (A07)',
      'Security Misconfiguration (A05)'
    ],
    correctAnswer: 'Account takeover (compromiterea contului) din cauza lipsei unei validări adecvate (A07)',
    explanation: 'Lipsa unui mecanism sigur de verificare a posesiei emailului (cum ar fi un token unic) în procesul de resetare a parolei facilitează preluarea neautorizată a conturilor, încadrându-se în A07: Identification and Authentication Failures.'
  },
  {
    id: 'owasp8_upd',
    question: 'Un pipeline CI/CD descarcă dependențe folosind HTTP în loc de HTTPS și nu verifică semnăturile digitale ale pachetelor. Ce categorie OWASP (2021) este cel mai probabil afectată?',
    options: [
      'A08: Software and Data Integrity Failures',
      'A04: Insecure Design',
      'A06: Vulnerable and Outdated Components',
      'A05: Security Misconfiguration'
    ],
    correctAnswer: 'A08: Software and Data Integrity Failures',
    explanation: 'Descărcarea nesecurizată a dependențelor și lipsa verificării integrității acestora (prin hash-uri sau semnături) pot permite unui atacator să injecteze cod malițios în procesul de build, compromițând integritatea software-ului final (A08).'
  },
  {
    id: 'owasp9_upd',
    question: 'După un incident de securitate, se constată că log-urile aplicației nu conțin informații despre adresele IP ale utilizatorilor care au efectuat acțiuni critice. Ce categorie OWASP a contribuit la dificultatea investigației?',
    options: [
      'A01: Broken Access Control',
      'A07: Identification and Authentication Failures',
      'A09: Security Logging and Monitoring Failures',
      'A05: Security Misconfiguration'
    ],
    correctAnswer: 'A09: Security Logging and Monitoring Failures',
    explanation: 'Lipsa jurnalizării informațiilor relevante pentru securitate (cum ar fi IP-urile sursă, acțiunile eșuate etc.) face dificilă sau imposibilă detectarea, investigarea și răspunsul la incidente (A09).'
  },
  {
    id: 'owasp10_upd',
    question: 'O funcționalitate permite utilizatorilor să specifice un URL de unde aplicația va descărca o imagine pentru avatar. Un atacator specifică URL-ul `http://169.254.169.254/latest/meta-data/`. Ce vulnerabilitate este exploatată?',
    options: [
      'A03: Injection',
      'A10: Server-Side Request Forgery (SSRF)',
      'A01: Broken Access Control',
      'A06: Vulnerable and Outdated Components'
    ],
    correctAnswer: 'A10: Server-Side Request Forgery (SSRF)',
    explanation: 'Aplicația este forțată să facă o cerere către o resursă internă a infrastructurii cloud (metadata service), un atac clasic SSRF (A10), deoarece URL-ul furnizat de utilizator nu este validat corespunzător.'
  },
];

// --- SSDLC Quiz Data (Updated) ---
export const ssdlcQuizData: Question[] = [
   {
     id: 'ssdlc1_upd',
     question: 'În ce fază a SSDLC este cel mai eficient și mai puțin costisitor să se identifice și să se remedieze defectele de design de securitate?',
     options: ['Testare', 'Mentenanță', 'Cerințe și Design', 'Implementare'],
     correctAnswer: 'Cerințe și Design',
     explanation: 'Identificarea problemelor de securitate în fazele timpurii (Cerințe, Design) este mult mai ieftină și mai ușoară decât remedierea lor după ce codul a fost scris sau aplicația a fost lansată.'
   },
   {
     id: 'ssdlc2_upd',
     question: 'Ce activitate specifică SSDLC implică analiza riscurilor potențiale și definirea contramăsurilor înainte de începerea dezvoltării?',
     options: ['Testare de penetrare', 'Scanare statică a codului (SAST)', 'Modelarea amenințărilor (Threat Modeling)', 'Revizuirea codului (Code Review)'],
     correctAnswer: 'Modelarea amenințărilor (Threat Modeling)',
     explanation: 'Modelarea amenințărilor este un proces structurat pentru identificarea amenințărilor de securitate, vulnerabilităților și definirea contramăsurilor, realizat ideal în faza de design.'
   },
   {
     id: 'ssdlc3_upd',
     question: 'Ce tip de testare de securitate analizează codul sursă al aplicației fără a-l executa, căutând modele de cod vulnerabile?',
     options: ['Testare Dinamică a Securității Aplicațiilor (DAST)', 'Testare Statică a Securității Aplicațiilor (SAST)', 'Testare Interactivă a Securității Aplicațiilor (IAST)', 'Analiza Compoziției Software (SCA)'],
     correctAnswer: 'Testare Statică a Securității Aplicațiilor (SAST)',
     explanation: 'SAST (Static Application Security Testing) analizează codul sursă sau bytecode-ul pentru a găsi defecte de securitate și vulnerabilități.'
   },
    {
     id: 'ssdlc4_upd',
     question: 'Introducerea conceptului de "Security Champions" într-o echipă de dezvoltare este o practică specifică fazei de:',
     options: ['Training și Conștientizare', 'Testare', 'Deploy', 'Mentenanță'],
     correctAnswer: 'Training și Conștientizare',
     explanation: 'Security Champions sunt dezvoltatori cu interes în securitate, instruiți pentru a promova bunele practici și a fi un punct de contact pentru securitate în cadrul echipei lor, fiind o componentă cheie a culturii de securitate și a training-ului.'
   },
    {
     id: 'ssdlc5_upd',
     question: 'Ce document rezultat în urma procesului SSDLC ar trebui să listeze toate bibliotecile și framework-urile terțe utilizate, împreună cu versiunile și licențele lor?',
     options: ['Raport de testare de penetrare', 'Model de amenințări', 'Software Bill of Materials (SBOM)', 'Plan de răspuns la incident'],
     correctAnswer: 'Software Bill of Materials (SBOM)',
     explanation: 'Un SBOM este un inventar formal al componentelor software, bibliotecilor și dependențelor utilizate în construirea unei aplicații, esențial pentru gestionarea vulnerabilităților din A06.'
   },
   // Add 5 more SSDLC questions here...
   {
    id: 'ssdlc6',
    question: 'Ce activitate din SSDLC se concentrează pe testarea aplicației în timpul rulării, simulând atacuri externe?',
    options: [
        'Analiza Compoziției Software (SCA)',
        'Testare Statică a Securității Aplicațiilor (SAST)',
        'Testare Dinamică a Securității Aplicațiilor (DAST)',
        'Revizuirea Arhitecturii'
    ],
    correctAnswer: 'Testare Dinamică a Securității Aplicațiilor (DAST)',
    explanation: 'DAST (Dynamic Application Security Testing) interacționează cu aplicația în execuție pentru a identifica vulnerabilități din exterior, fără a avea acces la codul sursă.'
   },
   {
    id: 'ssdlc7',
    question: 'Principiul "Least Privilege" (Privilegiul Minim) în contextul SSDLC se referă cel mai bine la:',
    options: [
        'Acordarea doar a permisiunilor minime necesare pentru ca o componentă sau un utilizator să funcționeze.',
        'Utilizarea celor mai puține dependențe software posibile.',
        'Minimizarea cantității de log-uri generate de aplicație.',
        'Scrierea celui mai mic număr de linii de cod pentru o funcționalitate.'
    ],
    correctAnswer: 'Acordarea doar a permisiunilor minime necesare pentru ca o componentă sau un utilizator să funcționeze.',
    explanation: 'Principiul privilegiului minim este fundamental în securitate și se aplică în design și implementare pentru a reduce suprafața de atac și impactul unei eventuale compromiteri.'
   },
   {
    id: 'ssdlc8',
    question: 'Ce fază SSDLC este responsabilă pentru gestionarea vulnerabilităților descoperite după lansarea produsului?',
    options: [
        'Cerințe',
        'Design',
        'Implementare',
        'Mentenanță și Răspuns la Incident'
    ],
    correctAnswer: 'Mentenanță și Răspuns la Incident',
    explanation: 'Faza de mentenanță include monitorizarea continuă, aplicarea patch-urilor de securitate și gestionarea incidentelor și vulnerabilităților descoperite post-lansare.'
   },
   {
    id: 'ssdlc9',
    question: 'Validarea input-ului (Input Validation) este o contramăsură crucială în SSDLC. Unde ar trebui implementată în primul rând?',
    options: [
        'Doar pe partea client (în browser).',
        'Doar pe partea server.',
        'Atât pe partea client (pentru UX), cât și pe partea server (pentru securitate).',
        'În Web Application Firewall (WAF).'
    ],
    correctAnswer: 'Atât pe partea client (pentru UX), cât și pe partea server (pentru securitate).',
    explanation: 'Validarea pe client îmbunătățește experiența utilizatorului, dar validarea pe server este esențială pentru securitate, deoarece validarea pe client poate fi ocolită.'
   },
   {
    id: 'ssdlc10',
    question: 'Care dintre următoarele NU este considerată o activitate tipică în faza de Testare a Securității din SSDLC?',
    options: [
        'Testare de penetrare (Penetration Testing)',
        'Scanare SAST și DAST',
        'Definirea cerințelor de securitate non-funcționale',
        'Revizuirea manuală a codului (Manual Code Review)'
    ],
    correctAnswer: 'Definirea cerințelor de securitate non-funcționale',
    explanation: 'Definirea cerințelor de securitate are loc în faza de Cerințe și Design, la începutul ciclului SSDLC, nu în faza de Testare.'
   }
];

// --- DevSecOps Quiz Data (Updated) ---
export const devsecopsQuizData: Question[] = [
  {
    id: 'dso1_upd',
    question: 'Conceptul "Shift Left" în DevSecOps înseamnă:',
    options: [
      'Mutarea testării de securitate exclusiv la finalul pipeline-ului CI/CD.',
      'Integrarea activităților și controalelor de securitate cât mai devreme posibil în ciclul de viață al dezvoltării.',
      'Externalizarea completă a responsabilităților de securitate către o echipă dedicată.',
      'Folosirea exclusivă a uneltelor de securitate open-source.'
    ],
    correctAnswer: 'Integrarea activităților și controalelor de securitate cât mai devreme posibil în ciclul de viață al dezvoltării.',
    explanation: '"Shift Left" este un principiu cheie DevSecOps care promovează identificarea și remedierea problemelor de securitate în fazele incipiente (stânga) ale ciclului de dezvoltare, unde costurile sunt mai mici.'
  },
  {
    id: 'dso2_upd',
    question: 'Ce rol joacă automatizarea în implementarea DevSecOps?',
    options: [
      'Este opțională și utilizată doar pentru testele funcționale.',
      'Înlocuiește complet nevoia de intervenție umană în securitate.',
      'Este esențială pentru integrarea rapidă și consistentă a testelor și controalelor de securitate în pipeline-ul CI/CD.',
      'Se aplică doar la faza de deployment.'
    ],
    correctAnswer: 'Este esențială pentru integrarea rapidă și consistentă a testelor și controalelor de securitate în pipeline-ul CI/CD.',
    explanation: 'Automatizarea permite rularea frecventă a scanărilor SAST, DAST, SCA etc., în pipeline, oferind feedback rapid dezvoltatorilor și asigurând aplicarea consistentă a politicilor de securitate.'
  },
  {
    id: 'dso3_upd',
    question: 'Ce reprezintă "Infrastructure as Code (IaC)" și de ce este relevant pentru DevSecOps?',
    options: [
      'Scrierea documentației de infrastructură în fișiere text; nu are legătură cu securitatea.',
      'Gestionarea și provizionarea infrastructurii prin fișiere de configurare versionate (ex: Terraform, CloudFormation); permite scanarea și validarea securității infrastructurii.',
      'Un framework de programare pentru servere; irelevant pentru DevSecOps.',
      'O metodă de a rula cod direct pe hardware; crește riscurile de securitate.'
    ],
    correctAnswer: 'Gestionarea și provizionarea infrastructurii prin fișiere de configurare versionate (ex: Terraform, CloudFormation); permite scanarea și validarea securității infrastructurii.',
    explanation: 'IaC tratează infrastructura ca pe cod, permițând versionarea, revizuirea și, crucial pentru DevSecOps, scanarea automată a configurațiilor pentru probleme de securitate înainte de provizionare.'
  },
  {
    id: 'dso4_upd',
    question: 'Care dintre următoarele este un exemplu de integrare a securității în faza de "Commit/Build" a unui pipeline DevSecOps?',
    options: [
      'Testare de penetrare manuală a aplicației în producție.',
      'Rularea unei scanări SAST (Static Application Security Testing) pe codul nou adăugat.',
      'Monitorizarea log-urilor de securitate în timp real.',
      'Aplicarea patch-urilor de securitate pe serverele de producție.'
    ],
    correctAnswer: 'Rularea unei scanări SAST (Static Application Security Testing) pe codul nou adăugat.',
    explanation: 'Scanările SAST sunt ideale pentru a fi rulate devreme în pipeline, la fiecare commit sau build, pentru a oferi feedback rapid dezvoltatorilor despre potențiale vulnerabilități introduse în cod.'
  },
  {
    id: 'dso5_upd',
    question: 'Ce înseamnă "Security Chaos Engineering" în contextul DevSecOps?',
    options: [
      'Ignorarea intenționată a alertelor de securitate pentru a testa reziliența echipei.',
      'Introducerea haotică a vulnerabilităților în cod pentru a vedea dacă sunt detectate.',
      'Testarea proactivă a rezilienței sistemelor de securitate prin simularea controlată a unor condiții de eșec sau atac.',
      'Un atac real efectuat de o echipă externă (red team).'
    ],
    correctAnswer: 'Testarea proactivă a rezilienței sistemelor de securitate prin simularea controlată a unor condiții de eșec sau atac.',
    explanation: 'Security Chaos Engineering aplică principiile Chaos Engineering pentru a identifica proactiv slăbiciuni în controalele și răspunsurile de securitate, înainte ca un atacator real să le exploateze.'
  },
  // Add 5 more DevSecOps questions here...
  {
    id: 'dso6',
    question: 'Care este diferența principală dintre un instrument SAST și un instrument SCA (Software Composition Analysis)?',
    options: [
        'SAST analizează dependențele, SCA analizează codul custom.',
        'SAST rulează pe cod compilat, SCA rulează pe cod sursă.',
        'SAST caută vulnerabilități în codul scris de dezvoltatori, SCA caută vulnerabilități în bibliotecile terțe utilizate.',
        'Nu există nicio diferență semnificativă.'
    ],
    correctAnswer: 'SAST caută vulnerabilități în codul scris de dezvoltatori, SCA caută vulnerabilități în bibliotecile terțe utilizate.',
    explanation: 'SAST analizează codul propriu al aplicației, în timp ce SCA (parte din A06 OWASP) identifică componentele terțe (dependențe) și verifică dacă acestea au vulnerabilități cunoscute.'
   },
   {
    id: 'dso7',
    question: 'Ce este un "Security Gate" într-un pipeline CI/CD DevSecOps?',
    options: [
        'Un firewall fizic care protejează serverele de build.',
        'O etapă în pipeline care oprește procesul dacă nu sunt îndeplinite anumite criterii de securitate (ex: vulnerabilități critice detectate).',
        'Un proces manual de aprobare a deployment-ului de către echipa de securitate.',
        'O unealtă de scanare a containerelor.'
    ],
    correctAnswer: 'O etapă în pipeline care oprește procesul dacă nu sunt îndeplinite anumite criterii de securitate (ex: vulnerabilități critice detectate).',
    explanation: 'Security Gates sunt puncte de control automate în pipeline care impun respectarea standardelor de securitate, prevenind promovarea codului nesigur către etapele următoare sau producție.'
   },
   {
    id: 'dso8',
    question: 'Monitorizarea continuă și alertarea în DevSecOps se referă la:',
    options: [
        'Doar monitorizarea performanței aplicației (CPU, memorie).',
        'Verificarea manuală a log-urilor o dată pe săptămână.',
        'Colectarea și analiza în timp real a log-urilor de sistem și aplicație pentru detectarea activităților suspecte și generarea de alerte.',
        'Scanarea zilnică a dependențelor.'
    ],
    correctAnswer: 'Colectarea și analiza în timp real a log-urilor de sistem și aplicație pentru detectarea activităților suspecte și generarea de alerte.',
    explanation: 'Monitorizarea continuă (A09 OWASP) este crucială pentru detectarea rapidă a incidentelor de securitate în mediile de producție și necesită instrumente de colectare, corelare și alertare automată.'
   },
   {
    id: 'dso9',
    question: 'Ce rol are managementul secretelor (Secrets Management) în DevSecOps?',
    options: [
        'Stocarea parolelor utilizatorilor în baza de date.',
        'Gestionarea și stocarea sigură a credențialelor, cheilor API și altor date sensibile utilizate de aplicații și pipeline-uri CI/CD.',
        'Criptarea codului sursă în repository.',
        'Ascunderea log-urilor de securitate.'
    ],
    correctAnswer: 'Gestionarea și stocarea sigură a credențialelor, cheilor API și altor date sensibile utilizate de aplicații și pipeline-uri CI/CD.',
    explanation: 'Managementul inadecvat al secretelor (ex: stocarea lor în cod sau fișiere de configurare necriptate) este o vulnerabilitate comună. Soluții dedicate (ex: HashiCorp Vault, AWS Secrets Manager) sunt esențiale în DevSecOps.'
   },
   {
    id: 'dso10',
    question: 'Care este obiectivul final al adoptării unei culturi DevSecOps?',
    options: [
        'Eliminarea completă a echipei de securitate.',
        'Creșterea numărului de unelte de securitate utilizate.',
        'Încetinirea procesului de dezvoltare pentru a permite mai multe verificări manuale.',
        'Integrarea securității ca o responsabilitate partajată în întregul ciclu de viață DevOps, permițând livrarea rapidă și sigură de software.'
    ],
    correctAnswer: 'Integrarea securității ca o responsabilitate partajată în întregul ciclu de viață DevOps, permițând livrarea rapidă și sigură de software.',
    explanation: 'DevSecOps nu înseamnă doar unelte, ci o schimbare culturală unde securitatea este responsabilitatea tuturor și este integrată fluid în procesele DevOps pentru a livra valoare rapid și în siguranță.'
   }
];

