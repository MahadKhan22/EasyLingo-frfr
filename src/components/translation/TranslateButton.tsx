import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface TranslateButtonProps {
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const TranslateButton = ({
  onClick = () => {},
  loading = false,
  disabled = false,
}: TranslateButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className="w-[200px] bg-blue-500 hover:bg-blue-600 text-white"
      size="lg"
    >
      {loading ? (
        <>
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          Translating...
        </>
      ) : (
        "Translate"
      )}
    </Button>
  );
};

export default TranslateButton;
