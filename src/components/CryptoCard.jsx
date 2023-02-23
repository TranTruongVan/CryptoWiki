import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

function CryptoCard({ crypto }) {
  return (
    <div className="min-w-[284px] max-w-[320px] m-1 bg-white rounded-md hover:shadow-xl mx-auto lg:mx-1">
      <Link to={`/crypto/${crypto.id}`}>
        <div className="flex items-center justify-between border-b p-3 border-b-gray-200">
          <div className="font-medium text-lg">
            {crypto.market_cap_rank}
            .
            {' '}
            {crypto.name}
          </div>
          <img alt="crypto_icon" src={crypto.image} className="w-11 h-11" />
        </div>
        <div className="py-3 flex flex-col p-4">
          <div>
            Price: $
            {millify(crypto.current_price)}
          </div>
          <div className="my-2">
            Market Cap: $
            {millify(crypto.market_cap)}
          </div>
          <div>
            Daily Change:
            {millify(crypto.price_change_percentage_24h)}
            %
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CryptoCard;
