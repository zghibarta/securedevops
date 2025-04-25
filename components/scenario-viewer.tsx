"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Lightbulb, CheckSquare, XSquare } from "lucide-react";
// Eliminăm importurile pentru react-syntax-highlighter
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Scenario } from '@/lib/scenarioData';

// Define the props for the ScenarioViewer component
interface ScenarioViewerProps {
  scenario: Scenario;
  onCancel: () => void;
}

export function ScenarioViewer({ scenario, onCancel }: ScenarioViewerProps) {
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Card className="w-full max-w-4xl mx-auto mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
           <Code className="h-6 w-6" /> {scenario.title}
        </CardTitle>
        <CardDescription>Dificultate: {scenario.difficulty}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Descriere Scenariu:</h3>
          <p className="text-muted-foreground">{scenario.description}</p>
        </div>

        {/* Vulnerable Code (if exists) - Folosim <pre> și <code> */}
        {scenario.vulnerableCode && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Cod Vulnerabil:</h3>
            {/* Utilizăm tag-uri standard pre/code cu stilizare Tailwind */}
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
              <code className="font-mono text-sm text-gray-800 dark:text-gray-200">
                {scenario.vulnerableCode.trim()}
              </code>
            </pre>
          </div>
        )}

        {/* Task */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sarcină:</h3>
          <p className="text-muted-foreground">{scenario.task}</p>
        </div>

        {/* Hints (collapsible) */}
        {scenario.hints && scenario.hints.length > 0 && (
          <div>
            <Button variant="outline" size="sm" onClick={() => setShowHints(!showHints)}>
              <Lightbulb className="mr-2 h-4 w-4" />
              {showHints ? 'Ascunde Indicii' : 'Arată Indicii'}
            </Button>
            {showHints && (
              <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-muted-foreground bg-muted p-3 rounded-md">
                {scenario.hints.map((hint, index) => (
                  <li key={index}>{hint}</li>
                ))}
              </ul>
            )}
          </div>
        )}

         {/* Solution (collapsible) */}
         <div>
            <Button variant="secondary" size="sm" onClick={() => setShowSolution(!showSolution)}>
               {showSolution ? <XSquare className="mr-2 h-4 w-4"/> : <CheckSquare className="mr-2 h-4 w-4" />}
              {showSolution ? 'Ascunde Soluția/Explicația' : 'Arată Soluția/Explicația'}
            </Button>
            {showSolution && (
               <div className="mt-3 space-y-4 bg-muted p-4 rounded-md">
                  {/* Secure Code (if exists) - Folosim <pre> și <code> */}
                  {scenario.secureCode && (
                     <div>
                        <h4 className="text-md font-semibold mb-2">Cod Securizat (Exemplu):</h4>
                         {/* Utilizăm tag-uri standard pre/code cu stilizare Tailwind */}
                         <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                           <code className="font-mono text-sm text-gray-800 dark:text-gray-200">
                             {scenario.secureCode.trim()}
                           </code>
                         </pre>
                     </div>
                  )}
                  {/* Explanation */}
                  <div>
                     <h4 className="text-md font-semibold mb-2 mt-4">Explicație Detaliată:</h4>
                     <p className="text-sm text-muted-foreground">{scenario.explanation}</p>
                  </div>
               </div>
            )}
         </div>

      </CardContent>
      <CardFooter className="flex justify-start">
        <Button variant="outline" onClick={onCancel}>
          Înapoi la Scenarii
        </Button>
      </CardFooter>
    </Card>
  );
}
