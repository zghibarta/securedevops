"use client";

import React, { useState } from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, ArrowRight, FileText, Code } from "lucide-react"
import { Quiz } from '@/components/quiz';
import { ScenarioViewer } from '@/components/scenario-viewer';
import { owaspQuizData, ssdlcQuizData, devsecopsQuizData } from '@/lib/quizData'; // Import date quiz
import { scenarioData, Scenario } from '@/lib/scenarioData'; // Importăm datele și interfața Scenario din noul fișier

// Definim tipul pentru QuizMeta
type QuizMeta = {
  id: string;
  title: string;
  description: string;
  questions: number;
  time: number;
  data: any[];
};

// Definim tipul pentru ScenarioMeta
// Folosim interfața Scenario importată pentru tipul 'data'
type ScenarioMeta = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  time: number; // Poate fi eliminat dacă nu e folosit în card
  data: Scenario; // Folosim interfața importată
};


export default function EvaluarePage() {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [activeScenario, setActiveScenario] = useState<string | null>(null);

  // Datele pentru cardurile de quiz
  const quizzes: QuizMeta[] = [
    { id: "owasp", title: "Test OWASP Top Ten 2021", description: "...", questions: owaspQuizData.length, time: 15, data: owaspQuizData },
    { id: "ssdlc", title: "Test SSDLC", description: "...", questions: ssdlcQuizData.length, time: 15, data: ssdlcQuizData },
    { id: "devsecops", title: "Test DevSecOps", description: "...", questions: devsecopsQuizData.length, time: 15, data: devsecopsQuizData },
  ];

  // Datele pentru cardurile de scenarii (mapate din scenarioData importat)
  const scenarios: ScenarioMeta[] = scenarioData.map(sc => ({
      id: sc.id,
      title: sc.title,
      description: sc.description,
      difficulty: sc.difficulty,
      time: 30, // Eliminat din card, dar lăsat aici temporar
      data: sc
  }));

  // --- Handlers ---
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
   const handleCancelScenario = () => {
     setActiveScenario(null);
   };

   // Găsim datele active
   const currentQuiz = quizzes.find(q => q.id === activeQuiz);
   const currentScenario = scenarios.find(s => s.id === activeScenario);

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

        {/* Afișare condiționată */}
        {activeQuiz && currentQuiz ? (
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
        ) : activeScenario && currentScenario ? (
             <section className="w-full py-3 md:py-6 lg:py-8">
               <div className="container px-4 md:px-6">
                 <ScenarioViewer
                    scenario={currentScenario.data} // Trimitem obiectul scenariu
                    onCancel={handleCancelScenario}
                  />
               </div>
             </section>
        ) : (
          // Afișare Tab-uri (default)
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

                {/* Tabul Scenarii Practice */}
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
                            {/* Timpul estimat a fost eliminat din cardul scenariului */}
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
