import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Provider } from 'react-redux';
import { store } from './app/store';
import News from './components/News/News';
import HomePage from './components/HomePage/HomePage';
import Exchanges from './components/Exchanges/Exchanges';
import CryptoDetail from './components/CryptoDetail/CryptoDetail';
import Cryptocurrencies from './components/Cryptocurrencies/Cryptocurrencies';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="flex flex-col md:flex-row relative">
          <NavBar />
          <div className="flex-1 max-h-screen overflow-y-auto pt-28 md:p-8 md:pt-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/news" element={<News />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/coin/:coinId" element={<CryptoDetail />} />
            </Routes>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
