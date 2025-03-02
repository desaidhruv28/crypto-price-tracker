
import { toast } from "sonner";

export interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

// Function to fetch cryptocurrency data from CoinGecko API
export const fetchCryptoData = async (): Promise<CryptoCurrency[]> => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en"
    );
    
    if (!response.ok) {
      // Check rate limit errors (CoinGecko has strict rate limits)
      if (response.status === 429) {
        throw new Error("Rate limit exceeded. Please try again later.");
      }
      throw new Error(`API request failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch cryptocurrency data";
    toast.error(errorMessage);
    console.error("API Error:", error);
    throw error;
  }
};
