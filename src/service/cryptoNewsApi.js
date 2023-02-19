import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/everything' }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ categoryNews, count }) => `?q=${categoryNews}&language=en&apiKey=a1942ee9d8a646b5ae2f3a3fa6fd3f49&page=1&pageSize=${count}`,
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
