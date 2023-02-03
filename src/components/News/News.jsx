import React, { useEffect, useState } from 'react';
import './styles.css';
import NewsCard from '../NewsCard/NewsCard';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import SearchBar from '../SearchBar/SearchBar';

const newsDemo = {
  source: {
    id: 'business-insider',
    name: 'Business Insider',
  },
  author: 'insider@insider.com (Sam Becker,Lisa Niser, EA)',
  title: 'Is exchanging one cryptocurrency for another taxable?',
  description:
    "Exchanging Ether for bitcoin, for example, is a taxable event in the eyes of the IRS, even if you didn't receive any US dollars.",
  url: 'https://www.businessinsider.com/personal-finance/is-exchanging-crypto-a-taxable-event',
  urlToImage:
    'https://i.insider.com/63b8214464499e001852e1b9?width=1200&format=jpeg',
  publishedAt: '2023-01-09T14:09:40Z',
  content:
    "Insider's experts choose the best products and services to help make smart decisions with your money (heres how). In some cases, we receive a commission from our partners, however, our opinions are o… [+6331 chars]",
};

const News = ({ simplified }) => {
  const [searchTerm, setSearchTerm] = useState('');
  // const count = simplified ? 6 : 30;
  // const { data, isFetching } = useGetCryptoNewsQuery({
  //   newsCategory: 'Cryptocurrency',
  //   count,
  // });
  // const [articles, setArticles] = useState(data?.articles);

  // console.log(articles);

  // useEffect(() => {
  //   console.log("haha");
  //   if (!simplified) {
  //     const filteredArticles = data?.articles.filter((article) =>
  //       article.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setArticles(filteredArticles);
  //   } else {
  //     setArticles(data?.articles);
  //   }
  // }, [data, searchTerm, simplified]);

  return (
    // <div>
    //   {!simplified && (
    //     <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    //   )}
    //   {articles?.map((article) => {
    //     return <NewsCard news={article} />;
    //   })}
    // </div>
    <div>
      {!simplified && (
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      )}
      <NewsCard news={newsDemo} />
    </div>
  );
};

export default News;
