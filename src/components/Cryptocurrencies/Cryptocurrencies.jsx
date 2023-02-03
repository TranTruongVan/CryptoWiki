import React, { useState } from 'react';
import CryptoCard from '../CryptoCard/CryptoCard';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { CircularProgress } from '@mui/material';

const Cryptocurrencies = ({ simplified }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const count = simplified ? 12 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(data);

  useEffect(() => {
    if (!simplified) {
      const filteredCryptos = data?.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCryptos(filteredCryptos);
    } else {
      setCryptos(data);
    }
  }, [data, searchTerm, simplified]);

  if (isFetching)
    return (
      <div className="flex justify-center">
        <CircularProgress size="120px" />
      </div>
    );
  return (
    <>
      {!simplified && (
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}
      <div className="flex flex-wrap justify-between mt-6">
        {cryptos?.map((crypto) => {
          return <CryptoCard key={crypto.uuid} id={crypto.uuid} crypto={crypto} />;
        })}
      </div>
    </>
  );
};

export default Cryptocurrencies;
