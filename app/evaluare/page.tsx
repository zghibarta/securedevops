"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, ArrowRight, FileText, Code } from "lucide-react";
import { Quiz } from '@/components/quiz';
import { ScenarioViewer } from '@/components/scenario-viewer';
import { owaspQuizData, ssdlcQuizData, devsecopsQuizData } from '@/lib/quizData';
import { scenarioData, Scenario } from '@/lib/scenarioData';

// Define types
type QuizMeta = {
  id: string;
  title: string;
  description: string;
  questions: number;
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
  // NOU: Stare pentru a controla tab-ul activ ("teste" sau "scenarii")
  const [activeTab, setActiveTab] = useState<string>("teste");

  // Datele pentru cardurile de quiz
  const quizzes: QuizMeta[] = [
    { id: "owasp", title: "Test OWASP Top Ten 2021", description: "Testează-ți cunoștințele despre cele mai critice vulnerabilități web conform OWASP.", questions: 10, time: 10, data: owaspQuizData },
    { id: "ssdlc", title: "Test SSDLC", description: "Verifică-ți înțelegerea Ciclului de Viață pentru Dezvoltarea Securizată a Software-ului.", questions: 10, time: 10, data: ssdlcQuizData },
    { id: "devsecops", title: "Test DevSecOps", description: "Evaluează-ți cunoștințele despre integrarea securității în DevOps.", questions: 10, time: 10, data: devsecopsQuizData },
    { id: "tbd", title: "Testul testelor", description: "În curînd...", questions: 10, time: 10, data: devsecopsQuizData },
  ];

  // Datele pentru cardurile de scenarii
  const scenarios: ScenarioMeta[] = scenarioData.map(sc => ({
      id: sc.id,
      title: sc.title,
      description: sc.description,
      difficulty: sc.difficulty,
      data: sc
  }));

  // --- Handlers ---
  const handleStartQuiz = (quizId: string) => {
    setActiveScenario(null);
    setActiveQuiz(quizId);
    // Opțional: resetăm tab-ul la teste când pornim un quiz
    // setActiveTab("teste");
  };
  const handleQuizComplete = (score: number, totalQuestions: number) => {
    console.log(`Quiz completed! Score: ${score}/${totalQuestions}`);
  };
   const handleCancelQuiz = () => {
    setActiveQuiz(null);
    // Opțional: setăm tab-ul la teste la anularea unui quiz
    // setActiveTab("teste");
   };

   const handleStartScenario = (scenarioId: string) => {
     setActiveQuiz(null);
     setActiveScenario(scenarioId);
     // Opțional: resetăm tab-ul la scenarii când pornim unul
     // setActiveTab("scenarii");
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
      <main className="flex-1 mx-auto">
        <section className="w-full py-6 md:py-8 lg:py-10 bg-muted">
           {/* ... Titlu secțiune ... */}
           <div className="container max-w-4xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">Evaluare cunoștințe</h1>
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
              <div className="container max-w-4xl px-4 md:px-6">
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
               <div className="container max-w-4xl px-4 md:px-6">
                 <ScenarioViewer
                    scenario={currentScenario.data}
                    onCancel={handleCancelScenario} // Apelăm handler-ul actualizat
                  />
               </div>
             </section>
        ) : (
          // Afișare TAB-uri (default)
          <section className="w-full py-3 md:py-6 lg:py-8">
           <div className="container max-w-4xl px-4 md:px-6">
               {/* Modificat: Folosim 'value' și 'onValueChange' pentru a controla tab-ul */}
              <Tabs
                 value={activeTab} // Controlăm tab-ul activ cu starea
                 onValueChange={setActiveTab} // Actualizăm starea la schimbarea tab-ului
                 className="w-full"
               >
                <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2">
                  <TabsTrigger value="teste">Teste</TabsTrigger>
                  <TabsTrigger value="scenarii">Scenarii practice</TabsTrigger>
                </TabsList>

                {/* Tabul Teste */}
                <TabsContent value="teste" className="mt-6">
                   {/* ... conținut tab teste ... */}
                   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {quizzes.map((quiz) => (
                      <Card key={quiz.id} className="flex flex-col h-full">
                         {/* ... header, content ... */}
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

                {/* Tabul Scenarii practice */}
                <TabsContent value="scenarii" className="mt-6">
                   {/* ... conținut tab scenarii ... */}
                   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
        {/* ... restul paginii ... */}
      </main>
    </div>
  )
}
