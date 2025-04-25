"use client"; // Necesar pentru state și event handling

import React, { useState } from 'react'; // Import useState
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, ArrowRight, FileText, Code } from "lucide-react" // Păstrăm iconițele originale
import { Quiz } from '@/components/quiz'; // Importăm componenta Quiz
import { owaspQuizData, ssdlcQuizData, devsecopsQuizData } from '@/lib/quizData'; // Importăm datele din lib

// Definim tipul pentru datele unui quiz (folosit intern pentru carduri)
type QuizMeta = {
  id: string; // ID simplu: 'owasp', 'ssdlc', 'devsecops'
  title: string;
  description: string;
  questions: number; // Numărul real de întrebări
  time: number;
  data: any[]; // Array cu obiectele întrebărilor
};

export default function EvaluarePage() {
  // Stare pentru a urmări quiz-ul activ
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);

  // Datele pentru cardurile de quiz, actualizate cu datele reale
  const quizzes: QuizMeta[] = [
    {
      id: "owasp",
      title: "Test OWASP Top Ten 2021",
      description: "Testează-ți cunoștințele despre cele mai critice vulnerabilități web conform OWASP.",
      questions: owaspQuizData.length, // Folosim lungimea reală
      time: 15,
      data: owaspQuizData,
    },
    {
      id: "ssdlc",
      title: "Test SSDLC",
      description: "Verifică-ți înțelegerea Ciclului de Viață pentru Dezvoltarea Securizată a Software-ului.",
      questions: ssdlcQuizData.length, // Folosim lungimea reală
      time: 15,
      data: ssdlcQuizData,
    },
    {
      id: "devsecops",
      title: "Test DevSecOps",
      description: "Evaluează-ți cunoștințele despre integrarea securității în DevOps.",
      questions: devsecopsQuizData.length, // Folosim lungimea reală
      time: 15,
      data: devsecopsQuizData,
    },
  ]

  // Datele pentru scenarii rămân neschimbate
  const scenarios = [
    {
      id: "broken-auth",
      title: "Autentificare defectuoasă",
      description: "Identifică și remediază vulnerabilitățile de autentificare într-o aplicație web.",
      difficulty: "Mediu",
      time: 30,
      link: "#",
    },
    {
      id: "sql-injection",
      title: "Injecție SQL",
      description: "Descoperă și corectează vulnerabilitățile de injecție SQL într-o aplicație.",
      difficulty: "Dificil",
      time: 45,
      link: "#",
    },
    {
      id: "xss",
      title: "Cross-Site Scripting (XSS)",
      description: "Identifică și remediază vulnerabilitățile XSS într-o aplicație web.",
      difficulty: "Mediu",
      time: 30,
      link: "#",
    },
    {
      id: "secure-api",
      title: "Securizarea unui API",
      description: "Implementează măsuri de securitate pentru un API RESTful.",
      difficulty: "Dificil",
      time: 60,
      link: "#",
    },
  ]

  // Funcție pentru a porni un quiz
  const handleStartQuiz = (quizId: string) => {
    setActiveQuiz(quizId);
  };

  // Funcție apelată la finalizarea quiz-ului
  const handleQuizComplete = (score: number, totalQuestions: number) => {
    console.log(`Quiz completed! Score: ${score}/${totalQuestions}`);
    // Componenta Quiz afișează rezultatele intern
  };

   // Funcție pentru a anula/închide quiz-ul
   const handleCancelQuiz = () => {
    setActiveQuiz(null);
   };

   // Găsim datele pentru quiz-ul activ (dacă există)
   const currentQuiz = quizzes.find(q => q.id === activeQuiz);

  return (
    <div className="flex flex-col">
      <main className="flex-1 mx-auto w-full"> {/* Păstrăm structura originală */}
        <section className="w-full py-6 md:py-8 lg:py-10 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">Evaluare cunoștințe</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Teste și scenarii practice despre securitatea în DevOps
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Afișăm Quiz-ul activ sau secțiunea cu Tab-uri */}
        {activeQuiz && currentQuiz ? (
            <section className="w-full py-3 md:py-6 lg:py-8">
              <div className="container px-4 md:px-6">
                {/* Randăm componenta Quiz */}
                <Quiz
                  quizData={currentQuiz.data}
                  quizTitle={currentQuiz.title}
                  onComplete={handleQuizComplete}
                  onCancel={handleCancelQuiz}
                />
              </div>
            </section>
        ) : (
          // Secțiunea originală cu Tab-uri
          <section className="w-full py-3 md:py-6 lg:py-8">
           <div className="container px-4 md:px-6">
           {/* <p className="text-red-500 text-center">Pagină în dezvoltare</p> */}
              <Tabs defaultValue="teste" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="teste">Teste</TabsTrigger>
                  <TabsTrigger value="scenarii">Scenarii Practice</TabsTrigger>
                </TabsList>

                {/* Tabul Teste - Modificat pentru a lansa Quiz */}
                <TabsContent value="teste" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {quizzes.map((quiz) => (
                      <Card key={quiz.id} className="flex flex-col h-full">
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            <CardTitle>{quiz.title}</CardTitle>
                          </div>
                          <CardDescription>{quiz.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow"> {/* Folosim flex-grow */}
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Întrebări: {quiz.questions}</span>
                            <span>•</span>
                            <span>Timp estimat: {quiz.time} minute</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          {/* Modificat: Butonul apelează handleStartQuiz */}
                          <Button
                             variant="default"
                             size="sm"
                             className="w-full"
                             onClick={() => handleStartQuiz(quiz.id)} // Apelăm handler-ul
                           >
                            Începe Testul
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Tabul Scenarii Practice (rămâne neschimbat) */}
                <TabsContent value="scenarii" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {scenarios.map((scenario) => (
                      <Card key={scenario.id} className="flex flex-col h-full">
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <Code className="h-5 w-5" />
                            <CardTitle>{scenario.title}</CardTitle>
                          </div>
                          <CardDescription>{scenario.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Dificultate: {scenario.difficulty}</span>
                            <span>•</span>
                            <span>Timp estimat: {scenario.time} minute</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          {/* Link-ul rămâne neschimbat */}
                          <Link href={scenario.link} className="w-full" title="În dezvoltare">
                            <Button variant="outline" size="sm" className="w-full">
                              Începe Scenariul
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {/* Secțiunea comentată pentru certificare rămâne comentată */}
        {/*
        <section className="w-full py-6 md:py-8 lg:py-10 bg-muted">
         ...
        </section>
        */}
      </main>
    </div>
  )
}
