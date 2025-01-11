import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  correctAnswers: number;
}

const QuizProgress = ({
  currentQuestion = 1,
  totalQuestions = 10,
  correctAnswers = 0,
}: QuizProgressProps) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <Card className="w-full bg-white p-6 space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">
            Question {currentQuestion} of {totalQuestions}
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Score: {correctAnswers} / {currentQuestion - 1}
          </p>
        </div>
        <div className="text-2xl font-bold text-blue-600">
          {Math.round((correctAnswers / (currentQuestion - 1)) * 100) || 0}%
        </div>
      </div>
      <Progress value={progress} className="h-2" />
    </Card>
  );
};

export default QuizProgress;
