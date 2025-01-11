import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import FlashCardControls from "./FlashCardControls";
import { Card } from "@/components/ui/card";

interface Translation {
  english: string;
  french: string;
}

interface FlashCardScreenProps {
  translations?: Translation[];
}

const FlashCardScreen = ({
  translations = [
    { english: "Hello, how are you?", french: "Bonjour, comment allez-vous?" },
    { english: "What is your name?", french: "Comment vous appelez-vous?" },
    { english: "Nice to meet you", french: "Enchanté(e)" },
    { english: "Have a good day!", french: "Bonne journée!" },
  ],
}: FlashCardScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState(translations);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(cards.length - 1, prev + 1));
  };

  const handleShuffle = () => {
    setCards((prevCards) => {
      const shuffled = [...prevCards].sort(() => Math.random() - 0.5);
      setCurrentIndex(0);
      return shuffled;
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <Card className="p-6 bg-white shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Flashcards</h1>
          <p className="text-gray-500 mb-6">
            Review your translations with flashcards. Click a card to flip it
            and use the controls to navigate.
          </p>
        </Card>

        <div className="space-y-6">
          <FlashCard
            english={cards[currentIndex].english}
            french={cards[currentIndex].french}
          />

          <FlashCardControls
            onPrevious={handlePrevious}
            onNext={handleNext}
            onShuffle={handleShuffle}
            currentIndex={currentIndex}
            totalCards={cards.length}
          />
        </div>
      </div>
    </div>
  );
};

export default FlashCardScreen;
