import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
const Root = () => {
  return (
    <div>
      <Navber />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;
