"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Lightbulb, CheckSquare, XSquare } from "lucide-react"; // Import icons
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import for syntax highlighting
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a style (sau alt stil preferat)
import { Scenario } from '@/lib/scenarioData'; // Importăm interfața Scenario

// Define the props for the ScenarioViewer component
interface ScenarioViewerProps {
  scenario: Scenario;
  onCancel: () => void; // Callback to go back to the list
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

        {/* Vulnerable Code (if exists) */}
        {scenario.vulnerableCode && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Cod Vulnerabil:</h3>
            {/* Componenta pentru afișarea codului cu evidențiere */}
            <SyntaxHighlighter
              language="javascript" // Specifică limbajul (sau typescript, python, etc.)
              style={vscDarkPlus} // Alege o temă de culori
              className="rounded-md text-sm" // Adaugă clase Tailwind dacă e necesar
              wrapLines={true} // Permite împărțirea liniilor lungi
              showLineNumbers={true} // Afișează numerele liniilor
            >
              {scenario.vulnerableCode.trim()}
            </SyntaxHighlighter>
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
                  {/* Secure Code (if exists) */}
                  {scenario.secureCode && (
                     <div>
                        <h4 className="text-md font-semibold mb-2">Cod Securizat (Exemplu):</h4>
                         <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                            className="rounded-md text-sm"
                            wrapLines={true}
                            showLineNumbers={true}
                          >
                           {scenario.secureCode.trim()}
                        </SyntaxHighlighter>
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

