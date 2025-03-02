
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoData, type CryptoCurrency } from "../services/api";
import { useState, useMemo } from "react";

export const useCryptoData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Fetch crypto data with React Query
  const { 
    data: cryptoData,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ["cryptoData"],
    queryFn: fetchCryptoData,
    refetchInterval: 60000, // Auto-refresh every minute
    staleTime: 30000, // Consider data stale after 30 seconds
  });
  
  // Filter crypto data based on search term
  const filteredCryptoData = useMemo(() => {
    if (!cryptoData) return [];
    
    return cryptoData.filter((crypto) => 
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [cryptoData, searchTerm]);
  
  // Return top 5 cryptocurrencies by default (or all filtered results)
  const displayData = useMemo(() => {
    return filteredCryptoData.slice(0, 5);
  }, [filteredCryptoData]);
  
  return {
    cryptoData: displayData,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
    searchTerm,
    setSearchTerm,
    totalResults: filteredCryptoData.length
  };
};
