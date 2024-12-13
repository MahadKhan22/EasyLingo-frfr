import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, WifiOff, ServerCrash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ErrorType = "network" | "api" | "translation" | null;

interface ErrorDisplayProps {
  type?: ErrorType;
  message?: string;
  visible?: boolean;
}

const ErrorDisplay = ({
  type = null,
  message = "",
  visible = false,
}: ErrorDisplayProps) => {
  if (!visible || !type) return null;

  const errorConfig = {
    network: {
      icon: WifiOff,
      title: "Network Error",
      defaultMessage: "Please check your internet connection and try again.",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      titleColor: "text-red-800",
      textColor: "text-red-600",
    },
    api: {
      icon: ServerCrash,
      title: "Service Error",
      defaultMessage:
        "Translation service is currently unavailable. Please try again later.",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      titleColor: "text-yellow-800",
      textColor: "text-yellow-700",
    },
    translation: {
      icon: AlertCircle,
      title: "Translation Error",
      defaultMessage:
        "Unable to translate the text. Please try again with different text.",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      titleColor: "text-orange-800",
      textColor: "text-orange-600",
    },
  };

  const config = errorConfig[type];
  const Icon = config.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Alert
          variant="destructive"
          className={`w-full ${config.bgColor} ${config.borderColor} border-2 shadow-sm`}
        >
          <Icon className="h-5 w-5" />
          <AlertTitle className={`${config.titleColor} font-semibold`}>
            {config.title}
          </AlertTitle>
          <AlertDescription className={`${config.textColor} mt-1`}>
            {message || config.defaultMessage}
          </AlertDescription>
        </Alert>
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorDisplay;
