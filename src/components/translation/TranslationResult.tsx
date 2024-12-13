import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

interface TranslationResultProps {
  translation?: string;
  visible?: boolean;
  loading?: boolean;
}

const TranslationResult = ({
  translation = "La traduction apparaîtra ici...",
  visible = false,
  loading = false,
}: TranslationResultProps) => {
  if (!visible) return null;

  return (
    <Card className="w-full bg-white shadow-sm">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <Label className="text-base font-semibold text-gray-900">
            French Translation
          </Label>
        </div>
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ) : (
          <div className="min-h-[120px] p-4 rounded-lg bg-gray-50 border border-gray-200">
            <p className="text-gray-800 text-lg whitespace-pre-wrap break-words leading-relaxed">
              {translation}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TranslationResult;
