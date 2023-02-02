import React, { useState } from 'react';

export const FilterContext = React.createContext();

export default function FilterProvider({ children }) {
  const [filter, setFilter] = useState({
    searchQuery: "",
    type: 'all',
  });

  const setType = (value) => {
    setFilter((prev) => ({
      ...prev,
      type: value,
    }));
  };

  const setSearchQuery = (value) => {
    setFilter((prev) => ({
      ...prev,
      searchQuery: value,
    }));
  };

  return (
    <FilterContext.Provider value={{ filter, setType, setSearchQuery }}>
      {children}
    </FilterContext.Provider>
  );
}
