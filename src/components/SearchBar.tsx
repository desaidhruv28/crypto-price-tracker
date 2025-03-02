
import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  totalResults: number;
}

const SearchBar = ({ searchTerm, setSearchTerm, totalResults }: SearchBarProps) => {
  return (
    <div className="w-full max-w-md mx-auto mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
          <Search size={18} />
        </div>
        <input
          type="text"
          className="w-full py-3 pl-10 pr-4 text-sm bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all-200 glass-dark"
          placeholder="Search cryptocurrencies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {searchTerm && (
        <div className="mt-2 text-sm text-muted-foreground animate-fade-in">
          Found {totalResults} result{totalResults !== 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
