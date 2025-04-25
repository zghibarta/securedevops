"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Adăugăm RefreshCw pentru iconița testului general
import { Shield, ArrowRight, FileText, Code, RefreshCw } from "lucide-react";
import { Quiz } from '@/components/quiz';
import { ScenarioViewer } from '@/components/scenario-viewer';
import { owaspQuizData, ssdlcQuizData, devsecopsQuizData } from '@/lib/quizData';
import { scenarioData, Scenario } from '@/lib/scenarioData';

// Define types
type QuizMeta = {
  id: string;
  title: string;
  description: string;
  questions: number; // Numărul total de întrebări disponibile
  time: number;
  data: any[];
};

type ScenarioMeta = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  data: Scenario;
};


export default function EvaluarePage() {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("teste"); // Păstrăm starea pentru tab-ul activ

  // Combinăm toate întrebările într-un singur array pentru testul general
  const allQuizData = [...owaspQuizData, ...ssdlcQuizData, ...devsecopsQuizData];

  // Datele pentru cardurile de quiz, corectate pentru testul general
  const quizzes: QuizMeta[] = [
    // Preluăm definițiile din fișierul tău, dar corectăm numărul de întrebări și datele
    { id: "owasp", title: "Test OWASP Top Ten 2021", description: "Testează-ți cunoștințele despre cele mai critice vulnerabilități web conform OWASP.", questions: owaspQuizData.length, time: 15, data: owaspQuizData }, // Folosim lungimea reală
    { id: "ssdlc", title: "Test SSDLC", description: "Verifică-ți înțelegerea Ciclului de Viață pentru Dezvoltarea Securizată a Software-ului.", questions: ssdlcQuizData.length, time: 15, data: ssdlcQuizData }, // Folosim lungimea reală
    { id: "devsecops", title: "Test DevSecOps", description: "Evaluează-ți cunoștințele despre integrarea securității în DevOps.", questions: devsecopsQuizData.length, time: 15, data: devsecopsQuizData }, // Folosim lungimea reală
    // Corectăm definiția pentru testul general
    {
      id: "general", // ID schimbat din "tbd"
      title: "Test general recapitulativ", // Titlu schimbat
      description: "Un test combinat cu întrebări din OWASP, SSDLC și DevSecOps.", // Descriere schimbată
      questions: allQuizData.length, // Numărul total din care se aleg 10
      time: 15, // Timp estimat pentru 10 întrebări
      data: allQuizData, // Folosim datele combinate
    },
  ];

  // Datele pentru cardurile de scenarii (din fișierul tău)
  const scenarios: ScenarioMeta[] = scenarioData.map(sc => ({
      id: sc.id,
      title: sc.title,
      description: sc.description,
      difficulty: sc.difficulty,
      data: sc
  }));

  // --- Handlers (din fișierul tău, cu modificarea pentru activeTab) ---
  const handleStartQuiz = (quizId: string) => {
    setActiveScenario(null);
    setActiveQuiz(quizId);
  };
  const handleQuizComplete = (score: number, totalQuestions: number) => {
    console.log(`Quiz completed! Score: ${score}/${totalQuestions}`);
  };
   const handleCancelQuiz = () => {
    setActiveQuiz(null);
   };

   const handleStartScenario = (scenarioId: string) => {
     setActiveQuiz(null);
     setActiveScenario(scenarioId);
   };

   // Modificat: La anularea unui scenariu, setăm tab-ul activ la "scenarii"
   const handleCancelScenario = () => {
     setActiveScenario(null);
     setActiveTab("scenarii"); // Setăm tab-ul dorit
   };

   // Găsim datele active
   const currentQuiz = quizzes.find(q => q.id === activeQuiz);
   const currentScenario = scenarios.find(s => s.id === activeScenario);

  return (
    <div className="flex flex-col">
      {/* Preluăm structura din fișierul tău, aplicând max-w-4xl */}
      <main className="flex-1 mx-auto w-full max-w-4xl">
        <section className="w-full py-6 md:py-8 lg:py-10 bg-muted">
           <div className="container px-4 md:px-6"> {/* Păstrăm container pentru padding */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">Evaluare cunoștințe</h1>
                {/* Textul din fișierul tău */}
                <p className="max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Teste și Scenarii practice despre securitatea în DevOps
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Afișăm Quiz-ul activ SAU Scenariul activ SAU Tab-urile */}
        {activeQuiz && currentQuiz ? (
            <section className="w-full py-3 md:py-6 lg:py-8">
              <div className="container px-4 md:px-6"> {/* Păstrăm container pentru padding */}
                <Quiz
                  quizData={currentQuiz.data}
                  quizTitle={currentQuiz.title}
                  onComplete={handleQuizComplete}
                  onCancel={handleCancelQuiz}
                />
              </div>
            </section>
        ) : activeScenario && currentScenario ? (
             <section className="w-full py-3 md:py-6 lg:py-8">
               <div className="container px-4 md:px-6"> {/* Păstrăm container pentru padding */}
                 <ScenarioViewer
                    scenario={currentScenario.data}
                    onCancel={handleCancelScenario}
                  />
               </div>
             </section>
        ) : (
          // Afișare TAB-uri (default)
          <section className="w-full py-3 md:py-6 lg:py-8">
           <div className="container px-4 md:px-6"> {/* Păstrăm container pentru padding */}
              {/* Modificat: Folosim 'value' și 'onValueChange' pentru a controla tab-ul */}
              <Tabs
                 value={activeTab} // Controlăm tab-ul activ cu starea
                 onValueChange={setActiveTab} // Actualizăm starea la schimbarea tab-ului
                 className="w-full"
               >
                 {/* Modificat: max-w-md pentru TabsList (așa era în versiunea anterioară) */}
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="teste">Teste</TabsTrigger>
                   {/* Modificat textul trigger-ului */}
                  <TabsTrigger value="scenarii">Scenarii practice</TabsTrigger>
                </TabsList>

                {/* Tabul Teste - Modificat pentru 4 carduri */}
                <TabsContent value="teste" className="mt-6">
                   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"> {/* Ajustat grid-cols la 2 */}
                    {quizzes.map((quiz) => (
                      <Card key={quiz.id} className="flex flex-col h-full">
                         <CardHeader>
                          <div className="flex items-center gap-2">
                             {/* Adăugăm iconița RefreshCw pentru testul general */}
                             {quiz.id === 'general' ? <RefreshCw className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                            <CardTitle>{quiz.title}</CardTitle>
                          </div>
                          <CardDescription>{quiz.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                             {/* Modificat textul pentru claritate */}
                             <span>Disponibile: {quiz.questions}</span>
                             <span>•</span>
                             <span>Test: 10 întrebări</span>
                            {/* <span>•</span>
                            <span>Timp estimat: {quiz.time} minute</span> */}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                             // Adăugăm variantă diferită pentru testul general
                             variant={quiz.id === 'general' ? "secondary" : "default"}
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

                {/* Tabul Scenarii practice */}
                <TabsContent value="scenarii" className="mt-6">
                   {/* Modificat grid-cols la 3 (așa era în versiunea anterioară) */}
                   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {scenarios.map((scenario) => (
                      <Card key={scenario.id} className="flex flex-col h-full">
                        {/* ... conținut card scenariu (din fișierul tău) ... */}
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
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => handleStartScenario(scenario.id)}
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
        {/* ... restul paginii (secțiunea comentată etc.) ... */}
      </main>
    </div>
  )
}
