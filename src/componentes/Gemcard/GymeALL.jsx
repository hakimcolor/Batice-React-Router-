import React, { use } from 'react'
import GymeCards from './GymeCards';

const GymeALL = ({ GymeData }) => {
  const Gyme = use(GymeData);
  console.log(Gyme);
 
  return <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 '> 


    {Gyme.map((index)=><GymeCards key={index.id} index={index}></GymeCards>)}
   
  </div>;
};

export default GymeALL
