import React from 'react';
import Navbar from '../common/Navbar';

import Shop from '../common/Shop';

import Menu from '../common/Menu';
import Client from '../common/Clients';
import Prices from '../common/Prices';
import Footer from '../common/Footer';

function PizzaShop() {
  return (
    <>
        <Navbar/>
        <Shop/>
        <Menu/>
        <Client/>
        <Prices/>
        <Footer/>
    </>
  );
}

export default PizzaShop;
