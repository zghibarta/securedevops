"use client";

import React, { useState } from 'react';
import Link from "next/link" // Păstrăm Link, deși nu mai e folosit pentru scenarii momentan
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, ArrowRight, FileText, Code } from "lucide-react"
import { Quiz } from '@/components/quiz';
// import { ScenarioViewer } from '@/components/scenario-viewer'; // Comentat - Scenarii dezactivate temporar
import { owaspQuizData, ssdlcQuizData, devsecopsQuizData } from '@/lib/quizData';
// import { scenarioData, Scenario } from '@/lib/scenarioData'; // Comentat - Scenarii dezactivate temporar
import { useToast } from "@/components/ui/use-toast"; // Importăm hook-ul pentru toast

// Definim tipul pentru QuizMeta
type QuizMeta = {
  id: string;
  title: string;
  description: string;
  questions: number;
  time: number;
  data: any[];
};

// Definim tipul pentru ScenarioMeta (păstrăm pentru structura cardului)
type ScenarioMeta = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  // time: number; // Eliminăm timpul dacă nu mai e afișat
  // data: any; // Eliminăm data dacă nu mai e folosită
};


export default function EvaluarePage() {
  const { toast } = useToast(); // Inițializăm hook-ul toast
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  // const [activeScenario, setActiveScenario] = useState<string | null>(null); // Comentat

  // Datele pentru cardurile de quiz
  const quizzes: QuizMeta[] = [
    { id: "owasp", title: "Test OWASP Top Ten 2021", description: "Testează-ți cunoștințele despre cele mai critice vulnerabilități web conform OWASP.", questions: owaspQuizData.length, time: 15, data: owaspQuizData },
    { id: "ssdlc", title: "Test SSDLC", description: "Verifică-ți înțelegerea Ciclului de Viață pentru Dezvoltarea Securizată a Software-ului.", questions: ssdlcQuizData.length, time: 15, data: ssdlcQuizData },
    { id: "devsecops", title: "Test DevSecOps", description: "Evaluează-ți cunoștințele despre integrarea securității în DevOps.", questions: devsecopsQuizData.length, time: 15, data: devsecopsQuizData },
  ];

  // Datele pentru cardurile de scenarii (păstrăm structura pentru afișare)
  // Am eliminat maparea din scenarioData, definim direct cardurile
   const scenarios: ScenarioMeta[] = [
    {
      id: "broken-auth",
      title: "Autentificare defectuoasă",
      description: "Identifică și remediază vulnerabilitățile de autentificare într-o aplicație web.",
      difficulty: "Mediu",
    },
    {
      id: "sql-injection",
      title: "Injecție SQL",
      description: "Descoperă și corectează vulnerabilitățile de injecție SQL într-o aplicație.",
      difficulty: "Dificil",
    },
    {
      id: "xss",
      title: "Cross-Site Scripting (XSS)",
      description: "Identifică și remediază vulnerabilitățile XSS într-o aplicație web.",
      difficulty: "Mediu",
    },
    {
      id: "secure-api",
      title: "Securizarea unui API",
      description: "Implementează măsuri de securitate pentru un API RESTful.",
      difficulty: "Dificil",
    },
  ]

  // --- Handlers pentru Quiz ---
  const handleStartQuiz = (quizId: string) => {
    // setActiveScenario(null); // Comentat
    setActiveQuiz(quizId);
  };
  const handleQuizComplete = (score: number, totalQuestions: number) => {
    console.log(`Quiz completed! Score: ${score}/${totalQuestions}`);
  };
   const handleCancelQuiz = () => {
    setActiveQuiz(null);
   };

   // --- Handlers pentru Scenarii (modificat pentru toast) ---
   const handleStartScenario = (scenarioTitle: string) => {
     // setActiveQuiz(null); // Comentat
     // setActiveScenario(scenarioId); // Comentat
     toast({
        title: "În curând...",
        description: `Scenariul "${scenarioTitle}" este în curs de dezvoltare.`,
        variant: "default", // Sau altă variantă dacă ai definit
     });
   };
   // const handleCancelScenario = () => { setActiveScenario(null); }; // Comentat

   // Găsim datele pentru quiz-ul activ
   const currentQuiz = quizzes.find(q => q.id === activeQuiz);
   // const currentScenario = scenarios.find(s => s.id === activeScenario); // Comentat

  return (
    <div className="flex flex-col">
      <main className="flex-1 mx-auto w-full">
        <section className="w-full py-6 md:py-8 lg:py-10 bg-muted">
           {/* ... Titlu secțiune ... */}
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

        {/* Afișăm Quiz-ul activ SAU Tab-urile */}
        {/* Am eliminat condiția pentru activeScenario */}
        {activeQuiz && currentQuiz ? (
            // --- Afișare QUIZ ---
            <section className="w-full py-3 md:py-6 lg:py-8">
              <div className="container px-4 md:px-6">
                <Quiz
                  quizData={currentQuiz.data}
                  quizTitle={currentQuiz.title}
                  onComplete={handleQuizComplete}
                  onCancel={handleCancelQuiz}
                />
              </div>
            </section>
        ) : (
          // --- Afișare TAB-uri (default) ---
          <section className="w-full py-3 md:py-6 lg:py-8">
           <div className="container px-4 md:px-6">
              <Tabs defaultValue="teste" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="teste">Teste</TabsTrigger>
                  <TabsTrigger value="scenarii">Scenarii Practice</TabsTrigger>
                </TabsList>

                {/* Tabul Teste */}
                <TabsContent value="teste" className="mt-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {quizzes.map((quiz) => (
                      <Card key={quiz.id} className="flex flex-col h-full">
                         {/* ... conținut card quiz ... */}
                         <CardHeader>
                          <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            <CardTitle>{quiz.title}</CardTitle>
                          </div>
                          <CardDescription>{quiz.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Întrebări: {quiz.questions}</span>
                            <span>•</span>
                            <span>Timp estimat: {quiz.time} minute</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                             variant="default"
                             size="sm"
                             className="w-full"
                             onClick={() => handleStartQuiz(quiz.id)}
                           >
                            Începe Testul
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Tabul Scenarii Practice - Modificat pentru toast */}
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
                          </div>
                        </CardContent>
                        <CardFooter>
                          {/* Modificat: Butonul apelează handleStartScenario care afișează toast */}
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => handleStartScenario(scenario.title)} // Apelăm handler-ul cu titlul
                          >
                            Începe Scenariul
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}
        {/* ... restul paginii ... */}
      </main>
    </div>
  )
}
