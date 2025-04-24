// Define the structure for a single question (can be shared or redefined)
interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation?: string; // Optional explanation
  }
  
  // Define the quiz data for OWASP Top 10 2021
  export const owaspQuizData: Question[] = [
    {
      id: 'owasp1',
      question: 'Care vulnerabilitate OWASP Top 10 (2021) se referă la probleme legate de controlul accesului, permițând utilizatorilor să acceseze resurse sau funcționalități neautorizate?',
      options: [
        'A01: Broken Access Control',
        'A02: Cryptographic Failures',
        'A03: Injection',
        'A04: Insecure Design'
      ],
      correctAnswer: 'A01: Broken Access Control',
      explanation: 'Broken Access Control permite atacatorilor să ocolească autorizarea și să efectueze sarcini ca utilizatori privilegiați.'
    },
    {
      id: 'owasp2',
      question: 'Ce categorie OWASP Top 10 acoperă utilizarea incorectă sau slabă a criptografiei, ducând la expunerea datelor sensibile?',
      options: [
        'A01: Broken Access Control',
        'A02: Cryptographic Failures',
        'A07: Identification and Authentication Failures',
        'A05: Security Misconfiguration'
      ],
      correctAnswer: 'A02: Cryptographic Failures',
      explanation: 'Această categorie include probleme precum stocarea parolelor în text clar, utilizarea algoritmilor criptografici slabi sau gestionarea incorectă a cheilor.'
    },
    {
      id: 'owasp3',
      question: 'Vulnerabilitățile de tip SQL Injection, NoSQL Injection, OS Command Injection și LDAP Injection se încadrează în principal în categoria OWASP:',
      options: [
        'A03: Injection',
        'A06: Vulnerable and Outdated Components',
        'A08: Software and Data Integrity Failures',
        'A10: Server-Side Request Forgery (SSRF)'
      ],
      correctAnswer: 'A03: Injection',
      explanation: 'Atacurile de tip Injection apar atunci când date nesigure sunt trimise către un interpretor ca parte a unei comenzi sau interogări.'
    },
     {
      id: 'owasp4',
      question: 'Care categorie nouă în OWASP Top 10 2021 se concentrează pe riscurile asociate cu defectele de proiectare și arhitectură a securității?',
      options: [
        'A04: Insecure Design',
        'A05: Security Misconfiguration',
        'A08: Software and Data Integrity Failures',
        'A09: Security Logging and Monitoring Failures'
      ],
      correctAnswer: 'A04: Insecure Design',
      explanation: 'Insecure Design este o categorie largă ce reprezintă diferite slăbiciuni, exprimate ca "lipsa sau ineficiența controlului de proiectare".'
    },
    {
      id: 'owasp5',
      question: 'Configurarea incorectă a permisiunilor în cloud, lăsarea unor funcționalități de administrare activate inutil sau utilizarea conturilor și parolelor implicite sunt exemple de:',
      options: [
        'A02: Cryptographic Failures',
        'A05: Security Misconfiguration',
        'A07: Identification and Authentication Failures',
        'A09: Security Logging and Monitoring Failures'
      ],
      correctAnswer: 'A05: Security Misconfiguration',
      explanation: 'Această categorie include configurări de securitate lipsă sau incorecte la diferite niveluri ale aplicației sau infrastructurii.'
    },
    {
      id: 'owasp6',
      question: 'Folosirea bibliotecilor sau componentelor software cu vulnerabilități cunoscute se încadrează în categoria OWASP:',
      options: [
        'A03: Injection',
        'A06: Vulnerable and Outdated Components',
        'A08: Software and Data Integrity Failures',
        'A04: Insecure Design'
      ],
      correctAnswer: 'A06: Vulnerable and Outdated Components',
      explanation: 'Utilizarea componentelor software (biblioteci, framework-uri) care sunt vechi, neactualizate sau au vulnerabilități cunoscute poate expune întreaga aplicație.'
    },
     {
      id: 'owasp7',
      question: 'Ce categorie OWASP se referă la implementarea incorectă a funcțiilor legate de identitatea utilizatorului, parole și managementul sesiunilor?',
      options: [
        'A01: Broken Access Control',
        'A07: Identification and Authentication Failures',
        'A02: Cryptographic Failures',
        'A05: Security Misconfiguration'
      ],
      correctAnswer: 'A07: Identification and Authentication Failures',
      explanation: 'Aceasta include permiterea atacurilor automate (credential stuffing), parole slabe, management defectuos al sesiunilor etc.'
    },
     {
      id: 'owasp8',
      question: 'Deserializarea nesigură sau actualizările software fără validarea integrității pot duce la vulnerabilități din categoria:',
      options: [
        'A08: Software and Data Integrity Failures',
        'A04: Insecure Design',
        'A06: Vulnerable and Outdated Components',
        'A10: Server-Side Request Forgery (SSRF)'
      ],
      correctAnswer: 'A08: Software and Data Integrity Failures',
      explanation: 'Această categorie se concentrează pe presupuneri legate de integritatea software-ului și a datelor, incluzând probleme în pipeline-ul CI/CD sau la deserializare.'
    },
    {
      id: 'owasp9',
      question: 'Lipsa jurnalizării adecvate a evenimentelor de securitate (login-uri, erori de control acces) sau lipsa monitorizării și alertării în timp util se încadrează în:',
      options: [
        'A05: Security Misconfiguration',
        'A07: Identification and Authentication Failures',
        'A09: Security Logging and Monitoring Failures',
        'A01: Broken Access Control'
      ],
      correctAnswer: 'A09: Security Logging and Monitoring Failures',
      explanation: 'Detectarea și răspunsul la incidente sunt îngreunate sau imposibile fără o jurnalizare și monitorizare corespunzătoare.'
    },
     {
      id: 'owasp10',
      question: 'Care vulnerabilitate permite unui atacator să forțeze o aplicație server-side să trimită cereri către o destinație neintenționată, posibil în rețeaua internă?',
      options: [
        'A03: Injection',
        'A10: Server-Side Request Forgery (SSRF)',
        'A01: Broken Access Control',
        'A04: Insecure Design'
      ],
      correctAnswer: 'A10: Server-Side Request Forgery (SSRF)',
      explanation: 'Vulnerabilitățile SSRF apar atunci când o aplicație web preia o resursă la distanță fără a valida URL-ul furnizat de utilizator.'
    },
  ];
  
  // Placeholder data for other quizzes (to be developed)
  export const ssdlcQuizData: Question[] = [
     { id: 'ssdlc1', question: 'Ce înseamnă SSDLC?', options: ['Software Security Development Life Cycle', 'System Security Design Language Code', 'Secure Software Deployment Lifecycle', 'Standard System Development Logic Control'], correctAnswer: 'Software Security Development Life Cycle', explanation: 'SSDLC integrează practicile de securitate în fiecare fază a ciclului de viață al dezvoltării software.' },
     // Add more SSDLC questions here...
  ];
  
  export const devsecopsQuizData: Question[] = [
    { id: 'dso1', question: 'Care este principiul fundamental DevSecOps?', options: ['Securitatea este responsabilitatea exclusivă a echipei de securitate', 'Securitatea este integrată de la început ("Shift Left")', 'Testarea de securitate se face doar la final', 'Automatizarea nu este importantă pentru securitate'], correctAnswer: 'Securitatea este integrată de la început ("Shift Left")', explanation: 'DevSecOps promovează integrarea securității în toate etapele ciclului DevOps, nu doar la final.' },
     // Add more DevSecOps questions here...
  ];
  
  