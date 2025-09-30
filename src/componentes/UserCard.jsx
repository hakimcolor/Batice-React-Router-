import React from 'react';
import { Link } from 'react-router';

const UserCard = ({ e }) => {
  const { id, name, username, email } = e;

  return (
    <div
      key={id}
      className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition max-w-[1000px] mx-auto mt-5"
    >
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm text-gray-500">{email}</p>
      <Link to={`/user2/${id}`}> show data</Link>
     
    </div>
  );
};

export default UserCard;
