import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </SearchContext.Provider>
  );
};
