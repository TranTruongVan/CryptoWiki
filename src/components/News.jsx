import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import NewsCard from './NewsCard';
import { useGetCryptoNewsQuery } from '../service/cryptoNewsApi';
import coins from '../constants/coins';

function News({ simplified }) {
  const [categoryNews, setCategoryNews] = useState('Cryptocurrency');
  const count = simplified ? 6 : 30;
  const { data, isFetching } = useGetCryptoNewsQuery({
    categoryNews,
    count,
  });

  return (
    <div className="my-6">
      {!simplified && (
        <>
          <div className="text-xl font-medium">Select a coin</div>
          <select
            onChange={(e) => setCategoryNews(e.target.value)}
            value={categoryNews}
            className="py-1 px-2 border border-black"
          >
            <option value="Cryptocurrency">Cryptocurrency</option>
            {coins.map((coin) => (
              <option key={coin} value={coin}>
                {coin}
              </option>
            ))}
          </select>
        </>
      )}
      {isFetching ? (
        <div className="flex justify-center">
          <CircularProgress size="120px" />
        </div>
      ) : (
        <div className="flex flex-wrap justify-start mt-4">
          {data?.articles?.map((article) => (
            <NewsCard key={article.id} news={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default News;
