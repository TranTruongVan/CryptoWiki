import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import CryptoCard from './CryptoCard';
import { useGetCryptosQuery } from '../service/cryptoApi';
import { SearchIcon } from '../constants/icons';

function Cryptocurrencies({ simplified }) {
  const [searchTerm, setSearchTerm] = useState('');
  const count = simplified ? 12 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(data);

  useEffect(() => {
    if (!simplified) {
      // eslint-disable-next-line max-len
      const filteredCryptos = data?.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setCryptos(filteredCryptos);
    } else {
      setCryptos(data);
    }
  }, [data, searchTerm, simplified]);

  if (isFetching) {
    return (
      <div className="flex justify-center">
        <CircularProgress size="120px" />
      </div>
    );
  }
  return (
    <>
      {!simplified && (
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}
      <div className="flex flex-wrap justify-start mt-6">
        {cryptos?.map((crypto) => (
          <CryptoCard key={crypto.uuid} id={crypto.uuid} crypto={crypto} />
        ))}
      </div>
    </>
  );
}

export default Cryptocurrencies;

function SearchBar({ searchTerm, setSearchTerm }) {
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
}
