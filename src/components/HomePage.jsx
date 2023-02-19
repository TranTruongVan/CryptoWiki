import React from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Stats from './Stats';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import { useGetCryptoGlobalQuery } from '../service/cryptoGlobalAPi';

function Homepage() {
  const { data, isFetching } = useGetCryptoGlobalQuery();
  const stats = data?.data?.stats;
  if (isFetching) {
    return (
      <div className="flex justify-center">
        <CircularProgress size="120px" />
      </div>
    );
  }

  return (
    <div className="px-4">
      <Stats stats={stats} />

      <div className="flex justify-between items-center">
        <div className="text-2xl lg:text-3xl xl:text-4xl font-bold">
          Top 12 Cryptocurrencies in the world
        </div>
        <div className="hidden md:block md:text-lg lg:text-2xl font-bold text-blue-500">
          <Link to="/cryptocurrencies">Show More</Link>
        </div>
      </div>
      <Cryptocurrencies simplified />

      <div className="flex justify-between items-center mt-6">
        <div className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
          Latest Crypto News
        </div>
        <div className="hidden md:block md:text-lg lg:text-2xl font-bold text-blue-500">
          <Link to="/news">Show More</Link>
        </div>
      </div>
      <News simplified />
    </div>
  );
}

export default Homepage;
