import React from 'react';

import Header from '../common/Header';

import About from '../common/About';

import Showcase from '../common/Showcase';
import Portfolio from '../common/Portfolio';
import Footer from '../common/Footer';

function Home() {
  return (
    <>
        <Header/>

        <About/>
        <Showcase/>
        <Portfolio/>
        <Footer/>
    </>
  );
}

export default Home;
