import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import Stats from '../Stats/Stats';
import Cryptocurrencies from '../Cryptocurrencies/Cryptocurrencies';
import News from '../News/News';

const demoStats = {
  total: 23157,
  totalCoins: 23157,
  totalMarkets: 37226,
  totalExchanges: 179,
  totalMarketCap: '1122449042768',
  total24hVolume: '121885205173',
};

const Homepage = () => {
  // const { data, isFetching } = useGetCryptosQuery(12);
  // const stats = data?.data?.stats;
  // console.log(data);

  // if (isFetching) return 'Loading...';

  return (
    <>
      <Stats stats={demoStats} />

      <div className="flex justify-between items-center">
        <div className="sm:text-base md:text-lg lg:text-2xl font-bold">
          Top 12 Cryptocurrencies in the world
        </div>
        <div className="hidden md:block md:text-lg lg:text-2xl font-bold text-blue-500">
          <Link to="/cryptocurrencies">Show More</Link>
        </div>
      </div>
      <Cryptocurrencies simplified />

      <div className="flex justify-between items-center">
        <div className="sm:text-base md:text-lg lg:text-2xl font-bold">
          Latest Crypto News
        </div>
        <div className="hidden md:block md:text-lg lg:text-2xl font-bold text-blue-500">
          <Link to="/news">Show More</Link>
        </div>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
