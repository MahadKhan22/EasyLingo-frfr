import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

interface FlashCardProps {
  english: string;
  french: string;
  onFlip?: (isFlipped: boolean) => void;
}

const FlashCard = ({
  english = "Hello, how are you?",
  french = "Bonjour, comment allez-vous?",
  onFlip,
}: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    onFlip?.(!isFlipped);
  };

  return (
    <div
      className="perspective-1000 w-full h-[300px] cursor-pointer"
      onClick={handleFlip}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="w-full h-full relative preserve-3d"
      >
        {/* Front of card (English) */}
        <Card className="absolute w-full h-full backface-hidden bg-white p-6 flex flex-col items-center justify-center">
          <div className="text-sm text-gray-500 mb-4">English</div>
          <div className="text-2xl font-semibold text-center text-gray-900">
            {english}
          </div>
          <div className="absolute bottom-4 text-sm text-gray-400">
            Click to flip
          </div>
        </Card>

        {/* Back of card (French) */}
        <Card className="absolute w-full h-full backface-hidden bg-white p-6 flex flex-col items-center justify-center rotate-y-180">
          <div className="text-sm text-gray-500 mb-4">French</div>
          <div className="text-2xl font-semibold text-center text-gray-900">
            {french}
          </div>
          <div className="absolute bottom-4 text-sm text-gray-400">
            Click to flip back
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default FlashCard;
