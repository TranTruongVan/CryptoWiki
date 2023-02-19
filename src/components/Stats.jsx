import React from 'react';
import millify from 'millify';

function Stats({ stats }) {
  return (
    <div>
      <div className="text-bold text-4xl mb-6 font-bold">
        Global Crypto Stats
      </div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col header-info">
            <h3>Total Cryptocurrencies:</h3>
            <p>{millify(stats.total)}</p>
          </div>
          <div className="flex flex-col header-info">
            <h3>Total Market Cap:</h3>
            <p>
              $
              {millify(stats.totalMarketCap)}
            </p>
          </div>
          <div className="flex flex-col header-info">
            <h3>Total Exchanges</h3>
            <p>{millify(stats.totalExchanges)}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col header-info">
            <h3>Total 24h Volume:</h3>
            <p>
              $
              {millify(stats.total24hVolume)}
            </p>
          </div>
          <div className="flex flex-col header-info">
            <h3>Total Markets:</h3>
            <p>{millify(stats.totalMarkets)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
