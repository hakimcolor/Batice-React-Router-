import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
const Root = () => {
  return (
    <div>
      <Navber />
      <br /><br /> <br /><br /><br />
      <div className='max-w-[1200px] mx-auto
      '> <Outlet   /></div>
     
      <Footer></Footer>
    </div>
  );
};

export default Root;
