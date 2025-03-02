
import React from "react";

const Header = () => {
  return (
    <header className="w-full py-6 mb-6">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium animate-fade-in">
            Live Crypto Prices
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight animate-slide-up">
            Crypto Price Snap
          </h1>
          <p className="text-muted-foreground max-w-[600px] animate-slide-up" style={{ animationDelay: "100ms" }}>
            Track real-time prices of top cryptocurrencies with beautiful, minimal design
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
