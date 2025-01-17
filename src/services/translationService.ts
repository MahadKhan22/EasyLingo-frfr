const DEEPL_API_KEY = import.meta.env.VITE_DEEPL_API_KEY;
const DEEPL_API_URL = "https://api-free.deepl.com/v2/translate";  // Use api.deepl.com for pro accounts

export interface TranslationResponse {
  translations: Array<{
    text: string;
  }>;
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
    if (!navigator.onLine) {
      throw new TranslationError(
        "No internet connection. Please check your network.",
        "network",
      );
    }

    const response = await fetch(DEEPL_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `DeepL-Auth-Key ${DEEPL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: [text],
        source_lang: "EN",
        target_lang: "FR",
      }),
    });

    if (!response.ok) {
      throw new TranslationError(
        "Translation service is currently unavailable.",
        "api",
      );
    }

    const data: TranslationResponse = await response.json();

    if (!data.translations?.[0]?.text) {
      throw new TranslationError(
        "Unable to translate the provided text.",
        "translation",
      );
    }

    return data.translations[0].text;
  } catch (error) {
    if (error instanceof TranslationError) {
      throw error;
    }

    throw new TranslationError(
      "An unexpected error occurred during translation.",
      "api",
    );
  }
};