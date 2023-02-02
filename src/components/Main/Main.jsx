import React, { useContext } from 'react';
import './styles.css';
import { FilterContext } from '../../contexts/FilterProvider';
import { News, Images, Videos } from '../index';
import useGetSearch from '../../hooks/useGetSearch';

const Main = () => {
  const {
    filter: { type },
  } = useContext(FilterContext);

  const { data, isFetching } = useGetSearch();

  if (type === 'news') {
    return <News />;
  }

  if (type === 'images') {
    return <Images />;
  }

  if (type === 'videos') {
    return <Videos />;
  }

  return <div>Main</div>;
};

export default Main;
