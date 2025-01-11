import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, RotateCcw } from "lucide-react";

interface QuizControlsProps {
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onRestartQuiz: () => void;
  showAnswer: boolean;
  isLastQuestion: boolean;
  disabled?: boolean;
}

const QuizControls = ({
  onCheckAnswer,
  onNextQuestion,
  onRestartQuiz,
  showAnswer = false,
  isLastQuestion = false,
  disabled = false,
}: QuizControlsProps) => {
  return (
    <div className="flex justify-center gap-4">
      {!showAnswer ? (
        <Button
          onClick={onCheckAnswer}
          disabled={disabled}
          className="w-[200px] gap-2"
        >
          <Check className="h-4 w-4" />
          Check Answer
        </Button>
      ) : (
        <>
          {!isLastQuestion ? (
            <Button
              onClick={onNextQuestion}
              className="w-[200px] gap-2 bg-blue-500 hover:bg-blue-600"
            >
              <ArrowRight className="h-4 w-4" />
              Next Question
            </Button>
          ) : (
            <Button
              onClick={onRestartQuiz}
              variant="secondary"
              className="w-[200px] gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Restart Quiz
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default QuizControls;
