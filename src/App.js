import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
