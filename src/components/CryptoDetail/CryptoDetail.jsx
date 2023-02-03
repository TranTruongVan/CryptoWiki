import React, { useState } from 'react';
import './styles.css';
import { Link, useParams } from 'react-router-dom';
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from '../../services/cryptoApi';
import HTMLReactParser from 'html-react-parser';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DoNotDisturbOutlinedIcon from '@mui/icons-material/DoNotDisturbOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import millify from 'millify';
import LineChart from '../LineChart/LineChart';
import { CircularProgress } from '@mui/material';

const CryptoDetail = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState(7); //7 days
  const { data: cryptoDetails, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory, isFetching: isFetchingChart } =
    useGetCryptoHistoryQuery({ coinId, timePeriod });

  const time = [
    {
      value: 1,
      label: '24 Hours',
    },
    {
      value: 7,
      label: '7 Days',
    },
    {
      value: 30,
      label: '30 Days',
    },
    {
      value: 90,
      label: '3 Months',
    },
    {
      value: 365,
      label: '1 Year',
    },
    {
      value: 365 * 3,
      label: '3 Years',
    },
    {
      value: 365 * 5,
      label: '5 Years',
    },
  ];

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${millify(cryptoDetails?.market_data.current_price.usd)}`,
      icon: <MonetizationOnOutlinedIcon />,
    },
    {
      title: 'Rank',
      value: cryptoDetails?.market_cap_rank,
      icon: <NumbersOutlinedIcon />,
    },
    {
      title: '24h Volume',
      value: `$ ${millify(cryptoDetails?.market_data.total_volume.usd)}`,
      icon: <BoltOutlinedIcon />,
    },
    {
      title: 'Market Cap',
      value: `$ ${millify(cryptoDetails?.market_data.market_cap.usd)}`,
      icon: <MonetizationOnOutlinedIcon />,
    },
    {
      title: 'All-time-high',
      value: `$ ${millify(cryptoDetails?.market_data.ath.usd)}`,
      icon: <EmojiEventsOutlinedIcon />,
    },
  ];

  const genericStats = [
    {
      title: 'Facebook Likes',
      value: millify(cryptoDetails?.community_data.facebook_likes),
      icon: <FacebookOutlinedIcon />,
    },
    {
      title: 'Twitter Followers',
      value: millify(cryptoDetails?.community_data.twitter_followers),
      icon: <TwitterIcon />,
    },
    {
      title: 'Aprroved Supply',
      value: cryptoDetails?.market_data.total_supply ? (
        <CheckOutlinedIcon />
      ) : (
        <DoNotDisturbOutlinedIcon />
      ),
      icon: <ErrorOutlineOutlinedIcon />,
    },
    {
      title: 'Total Supply',
      value: `$ ${millify(cryptoDetails?.market_data.total_supply)}`,
      icon: <ErrorOutlineOutlinedIcon />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${millify(cryptoDetails?.market_data?.circulating_supply)}`,
      icon: <ErrorOutlineOutlinedIcon />,
    },
  ];

  if (isFetching)
    return (
      <div className="flex justify-center">
        <CircularProgress size="120px" />
      </div>
    );

  return (
    <div className='pb-6'>
      <div className="flex flex-col items-center text-center">
        <div className="text-3xl font-bold text-blue-500">
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
        </div>
        <div className="text-lg my-6">
          {cryptoDetails?.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </div>
      </div>
      <select
        onChange={(e) => setTimePeriod(e.target.value)}
        defaultValue={7}
        className="border border-black w-28 py-1 px-2 rounded-md mx-auto block md:mx-0"
      >
        {time.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      <LineChart
        isFetchingChart={isFetchingChart}
        timePeriod={timePeriod}
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails?.market_data.current_price.usd)}
        coinName={cryptoDetails?.name}
      />
      <div className="flex flex-col lg:flex-row lg:justify-around">
        <StatsTable
          name={`${cryptoDetails?.name} Value Statistics`}
          desc={`An overview showing the stats of ${cryptoDetails?.name}`}
          items={stats}
        />
        <StatsTable
          name="Other Stats Info"
          desc={`An overview showing the statistics of ${cryptoDetails?.name}, such as
          the base and quote currency, the rank, and trading volume.`}
          items={genericStats}
        />
      </div>

      <div className="px-4">
        <div className="text-2xl font-bold text-blue-500 mt-12 mb-2">
          What is {cryptoDetails?.name}?
        </div>
        <div className="desc">
          {HTMLReactParser(cryptoDetails?.description.en)}
        </div>
      </div>
    </div>
  );
};

const StatsTable = ({ name, desc, items }) => {
  return (
    <div className="flex flex-col justify-between items-center text-center mt-12 max-w-lg mx-auto lg:mx-6">
      <div className="text-2xl font-medium">{name}</div>
      <div className="text-lg my-2">{desc}</div>
      <div className="flex flex-col">
        {items.map(({ icon, title, value }) => {
          return (
            <div
              key={title}
              className="w-72 p-6 border-b border-b-black justify-between flex items-center"
            >
              <div className="flex items-center">
                <div className="mr-2">{icon}</div>
                <div>{title}</div>
              </div>
              <div className="font-bold">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoDetail;
