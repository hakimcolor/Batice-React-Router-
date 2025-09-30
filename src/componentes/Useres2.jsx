import React, { use } from 'react'
import UserCard from './UserCard';

const Useres2 = ({ userPromise }) => {
  const usses = use(userPromise);
  console.log(usses);
  
  return <div>
    {usses.map((e)=><UserCard key={e.id} e={e}></UserCard>)}
  </div>;
};

export default Useres2
