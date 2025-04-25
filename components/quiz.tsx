"use client"; // This component needs client-side interactivity

import React, { useState, useEffect, useMemo } from 'react'; // Import useEffect and useMemo
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { shuffleArray } from '@/lib/quizData'; // Importăm funcția shuffle

// Define the structure for a single question
interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

// Define the props for the Quiz component
interface QuizProps {
  quizData: Question[]; // Primește TOATE întrebările (ex: 20)
  quizTitle: string;
  onComplete: (score: number, totalQuestions: number) => void;
  onCancel: () => void;
}

const QUESTIONS_PER_QUIZ = 10; // Definim numărul de întrebări per test

export function Quiz({ quizData, quizTitle, onComplete, onCancel }: QuizProps) {
  // State pentru subsetul de întrebări selectate aleatoriu
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  // Efect pentru a selecta întrebările aleatoriu la încărcarea componentei
  // sau când quizData se schimbă (deși nu ar trebui să se schimbe în timpul unui test)
  useEffect(() => {
    // Amestecăm toate întrebările primite și selectăm primele 10
    const shuffled = shuffleArray(quizData);
    setSelectedQuestions(shuffled.slice(0, QUESTIONS_PER_QUIZ));
    // Resetăm starea internă la schimbarea setului de întrebări
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizFinished(false);
    setScore(0);
  }, [quizData]); // Re-rulează efectul dacă quizData se schimbă

  // Folosim useMemo pentru a evita recalcularea inutilă dacă selectedQuestions nu s-a schimbat
  const totalQuestions = useMemo(() => selectedQuestions.length, [selectedQuestions]);
  const currentQuestion = useMemo(() => selectedQuestions[currentQuestionIndex], [selectedQuestions, currentQuestionIndex]);

  // Handle selecting an answer
  const handleAnswerSelect = (questionId: string, answer: string) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  // Move to the next question or finish the quiz
  const handleNext = () => {
    // Verificăm indexul curent față de numărul de întrebări SELECTATE
    if (currentQuestionIndex < QUESTIONS_PER_QUIZ - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Finish the quiz
      calculateScore();
      setQuizFinished(true);
    }
  };

  // Calculate the final score based on SELECTED questions
  const calculateScore = () => {
    let currentScore = 0;
    selectedQuestions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    // Raportăm scorul față de numărul de întrebări afișate (10)
    onComplete(currentScore, QUESTIONS_PER_QUIZ);
  };

  // Restart the quiz (re-selectează întrebări dacă e necesar, dar useEffect o face deja)
  const handleRestart = () => {
     // Re-amestecăm și selectăm un nou set de întrebări
     const shuffled = shuffleArray(quizData);
     setSelectedQuestions(shuffled.slice(0, QUESTIONS_PER_QUIZ));
     // Resetăm starea
     setCurrentQuestionIndex(0);
     setUserAnswers({});
     setQuizFinished(false);
     setScore(0);
  };

  // Calculate progress percentage based on SELECTED questions
  // Adăugăm +1 la index pentru a începe de la 1, nu 0
  const progress = totalQuestions > 0 ? ((currentQuestionIndex + 1) / QUESTIONS_PER_QUIZ) * 100 : 0;

  // Așteptăm ca întrebările să fie selectate
  if (selectedQuestions.length === 0 || !currentQuestion) {
     return <p>Se încarcă testul...</p>; // Sau un loader/spinner
  }

  // Render the results screen
  if (quizFinished) {
    return (
      <Card className="w-full max-w-2xl mx-auto mt-6">
        <CardHeader>
          <CardTitle>Rezultate Test: {quizTitle}</CardTitle>
          <CardDescription>
            {/* Afișăm scorul față de numărul de întrebări afișate */}
            Ai răspuns corect la {score} din {QUESTIONS_PER_QUIZ} întrebări.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">Scor: {((score / QUESTIONS_PER_QUIZ) * 100).toFixed(0)}%</p>
          {/* Afișăm detaliile pentru întrebările RĂSPUNSE */}
          <div className="mt-4 space-y-3">
            {selectedQuestions.map((q, index) => (
              <div key={q.id} className={`p-2 rounded ${userAnswers[q.id] === q.correctAnswer ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                <p className="font-medium">{index + 1}. {q.question}</p>
                <p className="text-sm">Răspunsul tău: {userAnswers[q.id] || "Niciun răspuns"}</p>
                {userAnswers[q.id] !== q.correctAnswer && (
                   <p className="text-sm font-semibold">Răspuns corect: {q.correctAnswer}</p>
                )}
                 {q.explanation && userAnswers[q.id] !== q.correctAnswer && (
                   <p className="text-xs mt-1 italic text-gray-600 dark:text-gray-400">Explicație: {q.explanation}</p>
                 )}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
           <Button variant="outline" onClick={onCancel}>Înapoi la Evaluări</Button>
           <Button onClick={handleRestart}>Reîncepe Testul</Button>
        </CardFooter>
      </Card>
    );
  }

  // Render the current question
  return (
    <Card className="w-full max-w-2xl mx-auto mt-6">
      <CardHeader>
        <CardTitle>{quizTitle}</CardTitle>
        <CardDescription>
           {/* Afișăm progresul față de numărul de întrebări afișate */}
          Întrebarea {currentQuestionIndex + 1} din {QUESTIONS_PER_QUIZ}
        </CardDescription>
        {/* Progress Bar */}
        <Progress value={progress} className="w-full mt-2" />
        <p className="mt-4 text-lg font-semibold">{currentQuestion.question}</p>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={userAnswers[currentQuestion.id] || ""}
          onValueChange={(value) => handleAnswerSelect(currentQuestion.id, value)}
          className="space-y-2"
        >
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`${currentQuestion.id}-option-${index}`} />
              <Label htmlFor={`${currentQuestion.id}-option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onCancel} disabled={quizFinished}>
           Anulează
        </Button>
        <Button onClick={handleNext} disabled={!userAnswers[currentQuestion.id]}>
           {/* Verificăm indexul față de numărul de întrebări afișate */}
          {currentQuestionIndex < QUESTIONS_PER_QUIZ - 1 ? "Următoarea întrebare" : "Finalizează Testul"}
        </Button>
      </CardFooter>
    </Card>
  );
}
