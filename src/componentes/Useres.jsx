import React from 'react'
import { useLoaderData } from 'react-router'

const Useres = () => {
  const users = useLoaderData();
  console.log(users);
  
  return (
    <div>
      it' Users
    </div>
  )
}

export default Useres
