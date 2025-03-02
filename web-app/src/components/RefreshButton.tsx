
import React from "react";
import { RefreshCw } from "lucide-react";

interface RefreshButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const RefreshButton = ({ onClick, isLoading }: RefreshButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="flex items-center justify-center px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg hover:bg-primary/15 transition-all-200 disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in"
      style={{ animationDelay: "300ms" }}
    >
      <RefreshCw
        size={16}
        className={`mr-2 ${isLoading ? "animate-spin-slow" : ""}`}
      />
      {isLoading ? "Refreshing..." : "Refresh Prices"}
    </button>
  );
};

export default RefreshButton;
