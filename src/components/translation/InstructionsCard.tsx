import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";

interface InstructionsCardProps {
  instructions?: string;
}

const InstructionsCard = ({
  instructions = "Enter your English text in the box below and click 'Translate' to get the French translation.",
}: InstructionsCardProps) => {
  return (
    <Card className="w-full bg-white shadow-sm">
      <CardContent className="flex items-center gap-3 p-4">
        <InfoIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
        <p className="text-sm text-gray-600">{instructions}</p>
      </CardContent>
    </Card>
  );
};

export default InstructionsCard;
