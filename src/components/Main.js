import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import SystemRec from './SystemRec';
import ForSale from './ForSale';
import Financing from './Financing';
import Quote from './Quote';

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={SystemRec} />
      <Route exact path='/equipment-for-sale' component={ForSale} />
      <Route exact path='/financing' component={Financing} />
      <Route exact path='/quote' component={Quote} />
    </div>
  )
}

export default Main;