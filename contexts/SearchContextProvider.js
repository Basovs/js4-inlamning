import { useState, createContext } from "react";

export const SearchContext = createContext({});

const SearchContextProvider = ({ children }) => {
  const [searchFor, setSearchFor] = useState("");

  return (
    <SearchContext.Provider value={{ searchFor, setSearchFor }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
