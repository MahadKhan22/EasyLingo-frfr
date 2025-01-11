import React from "react";
import { Button } from "@/components/ui/button";
import { Shuffle, ChevronLeft, ChevronRight } from "lucide-react";

interface FlashCardControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onShuffle: () => void;
  currentIndex: number;
  totalCards: number;
  disabled?: boolean;
}

const FlashCardControls = ({
  onPrevious,
  onNext,
  onShuffle,
  currentIndex = 0,
  totalCards = 10,
  disabled = false,
}: FlashCardControlsProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
          disabled={disabled || currentIndex === 0}
          className="h-10 w-10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="text-sm text-gray-500">
          Card {currentIndex + 1} of {totalCards}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={disabled || currentIndex === totalCards - 1}
          className="h-10 w-10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <Button
        variant="secondary"
        onClick={onShuffle}
        disabled={disabled || totalCards <= 1}
        className="gap-2"
      >
        <Shuffle className="h-4 w-4" />
        Shuffle Cards
      </Button>
    </div>
  );
};

export default FlashCardControls;
