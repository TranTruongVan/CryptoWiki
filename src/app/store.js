import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../service/cryptoApi';
import { cryptoNewsApi } from '../service/cryptoNewsApi';
import { cryptoGlobalApi } from '../service/cryptoGlobalAPi';

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoGlobalApi.reducerPath]: cryptoGlobalApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(cryptoApi.middleware)
    .concat(cryptoNewsApi.middleware)
    .concat(cryptoGlobalApi.middleware),
});

export default store;
