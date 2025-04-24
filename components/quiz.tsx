"use client"; // This component needs client-side interactivity

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress"; // Import Progress component

// Define the structure for a single question
interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string; // Optional explanation for the correct answer
}

// Define the props for the Quiz component
interface QuizProps {
  quizData: Question[];
  quizTitle: string;
  onComplete: (score: number, totalQuestions: number) => void; // Callback when quiz finishes
  onCancel: () => void; // Callback to cancel/go back
}

export function Quiz({ quizData, quizTitle, onComplete, onCancel }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Store answers as an object: { questionId: selectedAnswer }
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const totalQuestions = quizData.length;
  const currentQuestion = quizData[currentQuestionIndex];

  // Handle selecting an answer
  const handleAnswerSelect = (questionId: string, answer: string) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  // Move to the next question or finish the quiz
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Finish the quiz
      calculateScore();
      setQuizFinished(true);
    }
  };

  // Calculate the final score
  const calculateScore = () => {
    let currentScore = 0;
    quizData.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    onComplete(currentScore, totalQuestions); // Call the onComplete callback
  };

  // Restart the quiz
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizFinished(false);
    setScore(0);
  };

  // Calculate progress percentage
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Render the results screen
  if (quizFinished) {
    return (
      <Card className="w-full max-w-2xl mx-auto mt-6">
        <CardHeader>
          <CardTitle>Rezultate Test: {quizTitle}</CardTitle>
          <CardDescription>
            Ai răspuns corect la {score} din {totalQuestions} întrebări.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">Scor: {((score / totalQuestions) * 100).toFixed(0)}%</p>
          {/* Optional: Display detailed results or explanations */}
          <div className="mt-4 space-y-3">
            {quizData.map((q, index) => (
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
          Întrebarea {currentQuestionIndex + 1} din {totalQuestions}
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
          {currentQuestionIndex < totalQuestions - 1 ? "Următoarea Întrebare" : "Finalizează Testul"}
        </Button>
      </CardFooter>
    </Card>
  );
}
