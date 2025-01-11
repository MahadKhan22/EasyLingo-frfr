import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface TranslationInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const TranslationInput = ({
  value = "",
  onChange = () => {},
  placeholder = "Type or paste your English text here...",
  disabled = false,
}: TranslationInputProps) => {
  return (
    <div className="w-full space-y-2 bg-white p-4 rounded-lg">
      <Label htmlFor="translation-input" className="text-sm font-medium">
        English Text
      </Label>
      <Textarea
        id="translation-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="min-h-[100px] resize-none focus:ring-2 focus:ring-blue-500"
        aria-label="English text to translate"
      />
    </div>
  );
};

export default TranslationInput;
