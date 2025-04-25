// lib/scenarioData.ts

// Interfața pentru Scenarii Practice
export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'Ușor' | 'Mediu' | 'Dificil';
  task: string;
  vulnerableCode?: string;
  secureCode?: string;
  hints?: string[];
  explanation: string;
}

// Datele pentru scenarii
export const scenarioData: Scenario[] = [
  {
    id: "sql-injection",
    title: "Injecție SQL - Autentificare",
    description: "Analizează funcția de autentificare de mai jos...", // Prescurtat
    difficulty: "Mediu",
    task: "Identifică vulnerabilitatea principală din acest cod și propune o metodă de remediere.",
    vulnerableCode:
`function login(username, password) {
  // ATENȚIE: Cod vulnerabil!
  const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
  // ... restul codului ...
}`,
    secureCode:
`function login(username, password) {
  // Folosind interogări parametrizate
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  // ... restul codului ...
}`,
    hints: [
      "Ce se întâmplă dacă un utilizator introduce ghilimele simple (') în câmpul username sau password?",
      "Cum poate fi separat codul SQL de datele introduse de utilizator?",
      "Ce sunt interogările parametrizate (prepared statements)?"
    ],
    explanation: "Codul vulnerabil concatenează direct inputul utilizatorului..." // Prescurtat
  },
  {
    id: "xss",
    title: "Cross-Site Scripting (XSS) - Reflected",
    description: "O pagină de căutare afișează termenul căutat de utilizator direct în pagină, fără nicio validare sau codificare.",
    difficulty: "Ușor",
    task: "Identifică riscul de securitate și explică cum ar putea fi exploatat. Cum poate fi prevenit?",
    // Modificat: Am eliminat ${searchTerm} din string
    vulnerableCode:
`// Server-side code (e.g., Node.js/Express)
app.get('/search', (req, res) => {
  const searchTerm = req.query.q || '';
  // ATENȚIE: Cod vulnerabil! Afișează inputul direct.
  // Exemplu: res.send('<h1>Rezultate pentru: ' + searchTerm + '</h1> ...');
  res.send('<h1>Rezultate pentru: [USER INPUT HERE]</h1> ...restul paginii...');
});`,
    // Modificat: Am eliminat ${escapedTerm} din string
    secureCode:
`// Server-side code (e.g., Node.js/Express)
import { escape } from 'html-escaper'; // Sau o funcție similară

app.get('/search', (req, res) => {
  const searchTerm = req.query.q || '';
  // Corect: Codificăm outputul înainte de a-l afișa
  const escapedTerm = escape(searchTerm);
  // Exemplu: res.send('<h1>Rezultate pentru: ' + escapedTerm + '</h1> ...');
  res.send('<h1>Rezultate pentru: [ESCAPED USER INPUT HERE]</h1> ...restul paginii...');
});`,
    hints: [
      "Ce se întâmplă dacă un utilizator caută `<script>alert('XSS')</script>`?",
      "Cum interpretează browserul tag-urile HTML și JavaScript?",
      "Ce înseamnă 'output encoding'?"
    ],
    explanation: "Codul vulnerabil inserează direct termenul de căutare în HTML..." // Prescurtat
  },
  {
    id: "broken-auth-jwt",
    title: "Autentificare Defectuoasă - JWT",
    description: "O aplicație folosește JSON Web Tokens (JWT) pentru autentificare...", // Prescurtat
    difficulty: "Mediu",
    task: "Care este riscul principal al neverificării datei de expirare a JWT-ului și cum ar trebui remediată problema?",
    vulnerableCode:
`// Server-side pseudo-code
function verifyToken(token, secret) {
  try {
    // ATENȚIE: Verifică doar semnătura, NU și expirarea!
    const decoded = jwt.verify(token, secret, { algorithms: ['HS256'] /* ignoreExpiration: true */ });
    return { valid: true, payload: decoded };
  } catch (err) { return { valid: false }; }
}`,
    secureCode:
`// Server-side pseudo-code
function verifyToken(token, secret) {
  try {
    // Corect: Verifică semnătura ȘI expirarea
    const decoded = jwt.verify(token, secret, { algorithms: ['HS256'] });
    return { valid: true, payload: decoded };
  } catch (err) { return { valid: false }; }
}`,
    hints: [
      "Ce informații conține de obicei un JWT în payload?",
      "Ce se întâmplă dacă un token expirat este acceptat de server?",
      "Ce opțiuni oferă bibliotecile JWT standard pentru validare?"
    ],
    explanation: "JWT-urile conțin un câmp standard `exp` (expiration time)..." // Prescurtat
  },
  {
    id: "secure-api-placeholder",
    title: "Securizarea unui API (Placeholder)",
    description: "Acest scenariu va acoperi aspecte cheie ale securizării unui API RESTful...", // Prescurtat
    difficulty: "Dificil",
    task: "Identifică principalele controale de securitate care lipsesc dintr-un endpoint API neprotejat.",
    vulnerableCode: `// Exemplu API Endpoint (Node.js/Express) - NEPROTEJAT
app.get('/api/users/:userId', (req, res) => {
  const userId = req.params.userId;
  // !!! Lipsesc: Autentificare, Autorizare, Validare ID, Rate Limiting !!!
  res.json({ id: userId, name: 'Placeholder Name', email: 'placeholder@example.com' });
});`,
    secureCode: `// Concept - Necesită implementare completă
app.get('/api/users/:userId',
  authenticateToken, authorizeUserAccess, validateInput(['userId']), rateLimiter,
  (req, res) => { /* ... */ }
);`,
    hints: ["Ce se întâmplă dacă nu verifici cine face cererea?", "Poate utilizatorul A să ceară datele utilizatorului B?", "Ce se întâmplă dacă cineva trimite un ID invalid?", "Ce se întâmplă dacă un bot face mii de cereri pe secundă?"],
    explanation: "Securizarea unui API necesită multiple straturi: Autentificare, Autorizare, Validarea Inputului și Rate Limiting..." // Prescurtat
  },
];
