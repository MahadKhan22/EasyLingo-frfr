import React from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface QuizQuestionProps {
  french: string;
  userAnswer: string;
  correctAnswer?: string;
  onAnswerChange: (answer: string) => void;
  showAnswer: boolean;
  isCorrect?: boolean;
}

const QuizQuestion = ({
  french = "Bonjour, comment allez-vous?",
  userAnswer = "",
  correctAnswer,
  onAnswerChange,
  showAnswer = false,
  isCorrect,
}: QuizQuestionProps) => {
  return (
    <Card className="w-full bg-white p-6 space-y-4">
      {/* French Question */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-500">
          French Sentence
        </Label>
        <div className="text-xl font-semibold text-gray-900 p-4 bg-gray-50 rounded-lg border border-gray-200">
          {french}
        </div>
      </div>

      {/* English Answer Input */}
      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-500">
          Your English Translation
        </Label>
        <Textarea
          value={userAnswer}
          onChange={(e) => onAnswerChange(e.target.value)}
          placeholder="Type your English translation here..."
          className="min-h-[100px] resize-none"
          disabled={showAnswer}
        />
      </div>

      {/* Feedback Section */}
      {showAnswer && (
        <div
          className={`p-4 rounded-lg ${isCorrect ? "bg-green-50" : "bg-red-50"}`}
        >
          <p
            className={`text-sm font-medium ${isCorrect ? "text-green-800" : "text-red-800"}`}
          >
            {isCorrect ? "✓ Correct!" : "✗ Not quite right"}
          </p>
          {!isCorrect && correctAnswer && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">Correct translation:</p>
              <p className="text-sm font-medium text-gray-900 mt-1">
                {correctAnswer}
              </p>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default QuizQuestion;
