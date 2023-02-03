import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex-1 flex items-center border-b border-b-gray-500">
      <SearchIcon />
      <input
        className="flex-1 py-3 px-4 bg-transparent w-0 text-black outline-none"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
