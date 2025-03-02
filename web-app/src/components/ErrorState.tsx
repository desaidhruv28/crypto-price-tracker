
import React from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorStateProps {
  message?: string;
  onRetry: () => void;
}

const ErrorState = ({ message = "Failed to load cryptocurrency data", onRetry }: ErrorStateProps) => {
  return (
    <div className="w-full max-w-md mx-auto text-center py-12 animate-fade-in">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-500 mb-6">
        <AlertTriangle size={28} />
      </div>
      <h3 className="text-lg font-medium mb-2">Something went wrong</h3>
      <p className="text-muted-foreground mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all-200"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorState;
