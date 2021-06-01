import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./sass/main.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/common/Navbar";
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Reservation from './components/pages/Reservation';
import Pizza from './components/pages/pizza';
import PizzaShop from './components/pages/PizzaShop';
import Error from './components/pages/Error';


function App() {
  return (
    <>
   <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Gallery' component={Gallery} />
          <Route path='/Reservation' component={Reservation} />
          <Route path='/pizza' component={Pizza} />
          <Route path='/PizzaShop' component={PizzaShop} />
          <Route component = {Error}/>
          
        </Switch>
     </Router>
    </>
  );
}

export default App;
