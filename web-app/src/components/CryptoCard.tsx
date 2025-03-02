
import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { type CryptoCurrency } from "../services/api";

interface CryptoCardProps {
  crypto: CryptoCurrency;
  index: number;
}

const CryptoCard = ({ crypto, index }: CryptoCardProps) => {
  const isPriceUp = crypto.price_change_percentage_24h >= 0;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  }).format(crypto.current_price);
  
  const formattedPriceChange = Math.abs(crypto.price_change_percentage_24h).toFixed(2) + "%";
  
  const animationDelay = `${index * 100}ms`;
  
  return (
    <div 
      className="relative w-full bg-white rounded-xl shadow-sm border border-border overflow-hidden glass transition-all-300 hover:shadow-md animate-slide-up"
      style={{ animationDelay }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 mr-3 rounded-full overflow-hidden bg-muted/30 p-0.5">
              <img 
                src={crypto.image} 
                alt={crypto.name} 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="font-medium text-lg">{crypto.name}</h3>
              <p className="text-sm text-muted-foreground uppercase">{crypto.symbol}</p>
            </div>
          </div>
          <div className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center ${
            isPriceUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {isPriceUp ? <ArrowUp size={12} className="mr-1" /> : <ArrowDown size={12} className="mr-1" />}
            {formattedPriceChange}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Current Price</p>
            <p className="text-2xl font-display font-semibold">{formattedPrice}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Market Cap</p>
            <p className="text-sm font-medium">{formatMarketCap(crypto.market_cap)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to format market cap
const formatMarketCap = (marketCap: number): string => {
  if (marketCap >= 1_000_000_000) {
    return `$${(marketCap / 1_000_000_000).toFixed(2)}B`;
  } else if (marketCap >= 1_000_000) {
    return `$${(marketCap / 1_000_000).toFixed(2)}M`;
  } else {
    return `$${(marketCap / 1_000).toFixed(2)}K`;
  }
};

export default CryptoCard;
