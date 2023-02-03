import React from 'react';
import './styles.css';
import millify from 'millify';

//yêu cầu: thẻ có chiều rộng cố định là 288px

const cryptoDemo = {
  id: 'bitcoin',
  name: 'Bitcoin',
  image:
    'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
  current_price: 23451,
  market_cap: 452660183587,
  market_cap_rank: 1,
  price_change_percentage_24h: -1.39063,
};

const CryptoCard = ({ crypto }) => {
  // return <div className="w-72 mx-auto">CryptoCard</div>;
  console.log({crypto})
  return <div>CryptoCard</div>;
};

export default CryptoCard;
