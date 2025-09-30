import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetils = () => {
  const userDtl = useLoaderData();
  console.log(userDtl);

  const { address, company, email, id, name, phone, username, website } =
    userDtl;

  return (
    <div className="max-w-lg mx-auto mt-8 border rounded-lg shadow-lg p-6 bg-white">

      <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-500 mb-4">{email}</p>


      <div className="text-sm text-gray-700 space-y-2">
        <p>
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-semibold">Website:</span> {website}
        </p>
      </div>

 
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
        <p>
          {address?.suite}, {address?.street}
        </p>
        <p>
          {address?.city} - {address?.zipcode}
        </p>
        <p className="text-sm text-gray-500">
          Geo: {address?.geo?.lat}, {address?.geo?.lng}
        </p>
      </div>

      
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Company</h3>
        <p className="font-medium">{company.name}</p>
        <p className="italic text-gray-600">"{company.catchPhrase}"</p>
        <p className="text-sm text-gray-500">{company.bs}</p>
      </div>

      <p className="mt-6 text-xs text-gray-400">User ID: {id}</p>
    </div>
  );
};

export default UserDetils;
