import React from "react";
import TranslationInput from "./TranslationInput";
import TranslateButton from "./TranslateButton";

interface TranslationFormProps {
  onTranslate?: (text: string) => void;
  loading?: boolean;
  disabled?: boolean;
  inputValue?: string;
  onInputChange?: (value: string) => void;
}

const TranslationForm = ({
  onTranslate = () => {},
  loading = false,
  disabled = false,
  inputValue = "",
  onInputChange = () => {},
}: TranslationFormProps) => {
  const handleTranslate = () => {
    if (inputValue.trim()) {
      onTranslate(inputValue);
    }
  };

  return (
    <div className="w-full space-y-4 bg-gray-50 p-6 rounded-lg">
      <TranslationInput
        value={inputValue}
        onChange={onInputChange}
        disabled={disabled || loading}
      />
      <div className="flex justify-center">
        <TranslateButton
          onClick={handleTranslate}
          loading={loading}
          disabled={disabled || !inputValue.trim()}
        />
      </div>
    </div>
  );
};

export default TranslationForm;
