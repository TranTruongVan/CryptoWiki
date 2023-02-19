/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  HomeOutlinedIcon,
  MenuOutlinedIcon,
  MonetizationOnOutlinedIcon,
  NewspaperOutlinedIcon,
} from '../constants/icons';

function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="fixed md:static w-full md:w-auto">
      <div className="flex items-center justify-between bg-[#001529] md:justify-start md:items-stretch md:w-64 md:h-screen md:flex-col text-white">
        <Link
          to="/"
          className="flex items-center p-6 md:p-0 md:mx-auto md:my-6"
        >
          <img className="w-10 h-10" alt="logo" src={logo} />
          <div className="ml-3 text-3xl font-bold">CryptoWiki</div>
        </Link>
        <Link
          to="/"
          className="hidden md:flex items-center px-6 py-3 cursor-pointer hover:bg-blue-800"
        >
          <HomeOutlinedIcon />
          <div className="text-xl ml-2">Home</div>
        </Link>
        <Link
          to="/cryptocurrencies"
          className="hidden md:flex items-center px-6 py-3 cursor-pointer hover:bg-blue-800"
        >
          <MonetizationOnOutlinedIcon />
          <div className="text-xl ml-2">Cryptocurrencies</div>
        </Link>
        <Link
          to="/news"
          className="hidden md:flex items-center px-6 py-3 cursor-pointer hover:bg-blue-800"
        >
          <NewspaperOutlinedIcon />
          <div className="text-xl ml-2">News</div>
        </Link>
        <div
          className="mr-6 cursor-pointer md:hidden relative"
          onClick={() => setOpenNav((prev) => !prev)}
        >
          <MenuOutlinedIcon />
          {openNav && (
            <div className="absolute flex flex-col right-0 bg-[#001529] shadow-xl">
              <Link
                to="/"
                className="flex items-center px-6 py-3 cursor-pointer hover:bg-blue-800"
              >
                <HomeOutlinedIcon />
                <div className="text-xl ml-2">Home</div>
              </Link>
              <Link
                to="/cryptocurrencies"
                className="flex items-center px-6 py-3 cursor-pointer hover:bg-blue-800"
              >
                <MonetizationOnOutlinedIcon />
                <div className="text-xl ml-2">Cryptocurrencies</div>
              </Link>
              <Link
                to="/news"
                className="flex items-center px-6 py-3 cursor-pointer hover:bg-blue-800"
              >
                <NewspaperOutlinedIcon />
                <div className="text-xl ml-2">News</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
