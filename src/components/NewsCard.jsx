import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function NewsCard({ news }) {
  return (
    <div className="min-w-[320px] mx-auto lg:mx-1 mb-1 bg-white rounded-md p-3 hover:shadow-xl max-w-[384px] m-1">
      <Link target="_blank" to={news.url}>
        <div className="flex mb-3">
          <div
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              lineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
            className="flex-1 font-medium text-xl"
          >
            {news.title}
          </div>
          <img
            src={news.urlToImage}
            alt="news_thumbnail"
            className="w-20 h-20 rounded-sm"
          />
        </div>
        <p>{news.content}</p>
        <div className="mt-3">
          <div className="flex justify-between items-center">
            <div className="font-medium">{news.source.name}</div>
            <div className="font-medium">
              {moment(news.publishedAt).startOf('ss').fromNow()}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NewsCard;
