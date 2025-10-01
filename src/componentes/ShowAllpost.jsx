import React from 'react';
import { Link, useNavigate } from 'react-router';

const ShowAllpost = ({ post }) => {
  const { id, title, body, userId } = post;
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg shadow-md p-4 mb-4 max-w-md mx-auto flex flex-col">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <p className="text-sm text-gray-500">
        Post ID: {id} | User ID: {userId}
      </p>

      <div className="mt-auto flex justify-between">
        <Link to={`/user3/${id}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Read More
          </button>
        </Link>

        <button
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
          onClick={() => navigate(`/user3/${id}`)}
        >
          Read More (Navigate)
        </button>
      </div>
    </div>
  );
};

export default ShowAllpost;
