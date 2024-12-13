import React, { useState } from "react";
import InstructionsCard from "./translation/InstructionsCard";
import TranslationForm from "./translation/TranslationForm";
import TranslationResult from "./translation/TranslationResult";
import ErrorDisplay from "./translation/ErrorDisplay";
import { translateText, TranslationError } from "@/services/translationService";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [translation, setTranslation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{
    type: "network" | "api" | "translation" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleTranslate = async () => {
    if (!inputValue.trim()) return;

    setLoading(true);
    setError({ type: null, message: "" });
    setTranslation("");

    try {
      const translatedText = await translateText(inputValue);
      setTranslation(translatedText);
    } catch (err) {
      if (err instanceof TranslationError) {
        setError({
          type: err.type,
          message: err.message,
        });
      } else {
        setError({
          type: "api",
          message: "An unexpected error occurred during translation.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <InstructionsCard />

        <ErrorDisplay
          type={error.type}
          message={error.message}
          visible={!!error.type}
        />

        <TranslationForm
          onTranslate={handleTranslate}
          loading={loading}
          disabled={loading}
          inputValue={inputValue}
          onInputChange={setInputValue}
        />

        <TranslationResult
          translation={translation}
          visible={!!translation || loading}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Home;
