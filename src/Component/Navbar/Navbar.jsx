import React from 'react';
import logoImg from '../../assets/logo.png'
import dolarlogo from '../../assets/dollar.png'
const Navbar = ({balance}) => {
    return (
        <div className="mx-auto bg-blue-400 shadow-sm" >
        <div className="navbar container py-2 mx-auto">
          <div className="flex-1">
            <a className="text-xl"><img src={logoImg} alt="Logo" /></a>
          </div>
          <div className="flex item-center gap-2">
           <span>{balance}</span>
           <span> Coin</span>
            <img src={dolarlogo} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Navbar;