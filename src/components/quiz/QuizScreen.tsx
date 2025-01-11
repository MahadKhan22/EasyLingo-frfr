import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import QuizQuestion from "./QuizQuestion";
import QuizProgress from "./QuizProgress";
import QuizControls from "./QuizControls";

interface Translation {
  french: string;
  english: string;
}

interface QuizScreenProps {
  translations?: Translation[];
}

const QuizScreen = ({
  translations = [
    { french: "Bonjour, comment allez-vous?", english: "Hello, how are you?" },
    { french: "Comment vous appelez-vous?", english: "What is your name?" },
    { french: "Au revoir!", english: "Goodbye!" },
    { french: "Merci beaucoup", english: "Thank you very much" },
  ],
}: QuizScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const currentTranslation = translations[currentQuestion - 1];
  const isLastQuestion = currentQuestion === translations.length;

  const checkAnswer = () => {
    if (!showAnswer && userAnswer.trim()) {
      setShowAnswer(true);
      if (isAnswerCorrect(userAnswer, currentTranslation.english)) {
        setCorrectAnswers((prev) => prev + 1);
      }
    }
  };

  const isAnswerCorrect = (userAnswer: string, correctAnswer: string) => {
    return (
      userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()
    );
  };

  const handleNextQuestion = () => {
    if (currentQuestion < translations.length) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer("");
      setShowAnswer(false);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(1);
    setUserAnswer("");
    setShowAnswer(false);
    setCorrectAnswers(0);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <Card className="p-6 bg-white shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Translation Quiz
          </h1>
          <p className="text-gray-500">
            Test your knowledge! Translate the French sentences into English.
          </p>
        </Card>

        <QuizProgress
          currentQuestion={currentQuestion}
          totalQuestions={translations.length}
          correctAnswers={correctAnswers}
        />

        <QuizQuestion
          french={currentTranslation.french}
          userAnswer={userAnswer}
          correctAnswer={currentTranslation.english}
          onAnswerChange={setUserAnswer}
          showAnswer={showAnswer}
          isCorrect={
            showAnswer &&
            isAnswerCorrect(userAnswer, currentTranslation.english)
          }
        />

        <QuizControls
          onCheckAnswer={checkAnswer}
          onNextQuestion={handleNextQuestion}
          onRestartQuiz={handleRestartQuiz}
          showAnswer={showAnswer}
          isLastQuestion={isLastQuestion}
          disabled={!userAnswer.trim()}
        />
      </div>
    </div>
  );
};

export default QuizScreen;
