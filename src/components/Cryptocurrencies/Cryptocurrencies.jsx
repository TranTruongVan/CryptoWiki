import React, { useState } from 'react';
import CryptoCard from '../CryptoCard/CryptoCard';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const cryptoDemo = {
  uuid: 'Qwsogvtv82FCd',
  name: 'Bitcoin',
  iconUrl: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
  marketCap: '457911085451',
  price: '23825.13727093344',
  change: '3.41',
  rank: 1,
};

const Cryptocurrencies = ({ simplified }) => {
  const [searchTerm, setSearchTerm] = useState('');
  // const count = simplified ? 12 : 50;
  // const { data, isFetching } = useGetCryptosQuery(count);
  // const [cryptos, setCryptos] = useState(data?.data?.coins);

  // useEffect(() => {
  //   const filteredCryptos = data?.data?.coins.filter((coin) =>
  //     coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setCryptos(filteredCryptos);
  // }, [data, searchTerm]);
  // if (isFetching) {
  //   return 'Loading...';
  // }
  // return (
  //   <div className="flex flex-wrap justify-between">
  //     {cryptos?.map((crypto) => {
  //       return <CryptoCard id={crypto.uuid} crypto={crypto} />;
  //     })}
  //   </div>
  // );
  return (
    <div>
      {!simplified && (
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}
      <CryptoCard crypto={cryptoDemo} />
    </div>
  );
};

export default Cryptocurrencies;
