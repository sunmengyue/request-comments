import React from 'react';
import Header from './Header';
import Requests from './Requests';
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Requests />
    </div>
  );
};

export default Main;
