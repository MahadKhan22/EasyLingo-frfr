const GOOGLE_TRANSLATE_API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;
const GOOGLE_TRANSLATE_API_URL =
  "https://translation.googleapis.com/language/translate/v2";

export interface TranslationResponse {
  data: {
    translations: Array<{
      translatedText: string;
    }>;
  };
}

export class TranslationError extends Error {
  constructor(
    message: string,
    public type: "network" | "api" | "translation",
  ) {
    super(message);
    this.name = "TranslationError";
  }
}

export const translateText = async (text: string): Promise<string> => {
  try {
    // Check network connectivity
    if (!navigator.onLine) {
      throw new TranslationError(
        "No internet connection. Please check your network.",
        "network",
      );
    }

    const response = await fetch(
      `${GOOGLE_TRANSLATE_API_URL}?key=${GOOGLE_TRANSLATE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: text,
          source: "en",
          target: "fr",
          format: "text",
        }),
      },
    );

    if (!response.ok) {
      throw new TranslationError(
        "Translation service is currently unavailable.",
        "api",
      );
    }

    const data: TranslationResponse = await response.json();

    if (!data.data?.translations?.[0]?.translatedText) {
      throw new TranslationError(
        "Unable to translate the provided text.",
        "translation",
      );
    }

    return data.data.translations[0].translatedText;
  } catch (error) {
    if (error instanceof TranslationError) {
      throw error;
    }

    // Handle unexpected errors
    throw new TranslationError(
      "An unexpected error occurred during translation.",
      "api",
    );
  }
};
