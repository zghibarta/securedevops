 // lib/firebaseConfig.ts
 import { initializeApp } from 'firebase/app';
 import { getAuth } from 'firebase/auth';
 import { getAnalytics } from "firebase/analytics"; // Decomentat pentru Analytics

 // Obține configurația Firebase din variabilele de mediu
 const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID // Folosit de Analytics
 };

 // Inițializează aplicația Firebase
 const app = initializeApp(firebaseConfig);
 // Obține instanța serviciului de Autentificare
 const auth = getAuth(app);
 // Obține instanța serviciului Analytics
 const analytics = getAnalytics(app); // Decomentat pentru Analytics

 // Exportă instanțele pentru a fi folosite în alte părți ale aplicației
 export { app, auth, analytics }; // Adăugat analytics la export
