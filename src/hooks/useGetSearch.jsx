import React, { useContext, useEffect, useState } from 'react';
import { FilterContext } from '../contexts/FilterProvider';
import axios from 'axios';

const useGetSearch = () => {
  const filter = useContext(FilterContext);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://google-search72.p.rapidapi.com/search',
    params: {
      query: filter.searchQuery,
      gl: 'us',
      lr: 'en',
      num: '10',
      start: '0',
      sort: 'relevance',
    },
    headers: {
      'X-RapidAPI-Key': '88738c8398msh53c868ef94b6e17p1a9fe2jsn22543a9d5b32',
      'X-RapidAPI-Host': 'google-search72.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const getSearch = async () => {
      console.log(filter.searchQuery);
      if (filter.searchQuery === '') {
        setData([]);
        setIsFetching(false);
        return;
      }

      console.log('???');

      setIsFetching(true);

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });

      setIsFetching(false);
    };

    getSearch();
  }, [filter]);

  return { data, isFetching };
};

export default useGetSearch;
