
import React from "react";
import { useCryptoData } from "../hooks/useCryptoData";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RefreshButton from "../components/RefreshButton";
import CryptoCard from "../components/CryptoCard";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import { toast } from "sonner";

const Index = () => {
  const {
    cryptoData,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
    searchTerm,
    setSearchTerm,
    totalResults
  } = useCryptoData();

  const handleRefresh = () => {
    toast.promise(refetch(), {
      loading: "Refreshing cryptocurrency data...",
      success: "Cryptocurrency data updated!",
      error: "Failed to refresh data. Please try again."
    });
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-8">
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            totalResults={totalResults}
          />
          
          <RefreshButton 
            onClick={handleRefresh}
            isLoading={isFetching}
          />
        </div>
        
        {isLoading ? (
          <LoadingState />
        ) : isError ? (
          <ErrorState 
            message={error?.message || "Failed to load cryptocurrency data"} 
            onRetry={handleRefresh} 
          />
        ) : cryptoData.length === 0 ? (
          <div className="text-center py-12 animate-fade-in">
            <h3 className="text-lg font-medium mb-2">No results found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or clear the search field to see all cryptocurrencies.
            </p>
          </div>
        ) : (
          <div className="w-full space-y-4">
            {cryptoData.map((crypto, index) => (
              <CryptoCard key={crypto.id} crypto={crypto} index={index} />
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center text-sm text-muted-foreground animate-fade-in">
          <p>Data provided by CoinGecko API</p>
          <p className="mt-1">Prices refresh automatically every minute</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
