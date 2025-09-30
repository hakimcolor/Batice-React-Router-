import React from 'react';

const ShowAllpost = ({ post }) => {
  const { id, title, body, userId } = post; // Destructure object

  return (
    <div className="border rounded-lg shadow-md p-4 mb-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <p className="text-sm text-gray-500">
        Post ID: {id} | User ID: {userId}
      </p>
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Read More
      </button>
    </div>
  );
};

export default ShowAllpost;
