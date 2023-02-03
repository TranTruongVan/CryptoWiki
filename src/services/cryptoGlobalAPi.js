import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoGlobalApi = createApi({
  reducerPath: 'cryptoGlobalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://coinranking1.p.rapidapi.com',
  }),
  endpoints: (builder) => ({
    getCryptoGlobal: builder.query({
      query: () => {
        return {
          url: `/coins?limit=1`,
          headers: {
            'X-RapidAPI-Key':
              '88738c8398msh53c868ef94b6e17p1a9fe2jsn22543a9d5b32',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          },
        };
      },
    }),
  }),
});

export const { useGetCryptoGlobalQuery } = cryptoGlobalApi;
