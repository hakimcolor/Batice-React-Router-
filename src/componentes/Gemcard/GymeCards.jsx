import React from 'react'

const GymeCards = ({ index
  
}) => {
   const { billingCycle, courrency, features, id, name, price } = index;
  return (
    <div className='p-4'>
      <div className="border-1 border-red-600 p-2">
        <h1>name :{name}</h1>
        <p>Price:${ price}</p>
        <button className=' bg-cyan-600 text-white w-full'>click
      
      </button>
      </div>
      
    </div>
  );
}

export default GymeCards
