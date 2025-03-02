
import React from "react";

const LoadingState = () => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      {[...Array(5)].map((_, index) => (
        <div 
          key={index} 
          className="w-full h-32 bg-white/50 rounded-xl border border-border animate-pulse-subtle shadow-sm glass"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="p-6 flex items-center">
            <div className="w-10 h-10 bg-muted/50 rounded-full mr-3"></div>
            <div className="flex-1">
              <div className="h-5 bg-muted/50 rounded w-1/4 mb-2"></div>
              <div className="h-3 bg-muted/30 rounded w-1/6"></div>
            </div>
            <div className="h-6 bg-muted/50 rounded-full w-16"></div>
          </div>
          <div className="px-6 flex justify-between">
            <div>
              <div className="h-3 bg-muted/30 rounded w-20 mb-2"></div>
              <div className="h-6 bg-muted/50 rounded w-24"></div>
            </div>
            <div className="text-right">
              <div className="h-3 bg-muted/30 rounded w-20 mb-2"></div>
              <div className="h-4 bg-muted/50 rounded w-16"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingState;
