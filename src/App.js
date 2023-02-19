import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import store from './app/store';
import News from './components/News';
import HomePage from './components/HomePage';
import CryptoDetail from './components/CryptoDetail';
import Cryptocurrencies from './components/Cryptocurrencies';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="flex flex-col md:flex-row relative">
          <NavBar />
          <div className="flex-1 max-h-screen overflow-y-auto pt-28 md:p-8 md:pt-8 bg-slate-200">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/news" element={<News />} />
              <Route path="/crypto/:cryptoId" element={<CryptoDetail />} />
            </Routes>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
