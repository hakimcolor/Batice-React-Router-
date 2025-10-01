import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const PostDeteles = () => {
  const theDAta = useLoaderData();
  const { id, title, body, userId } = theDAta;
const usenav=useNavigate()

  return (
    <div className="max-w-lg mx-auto  p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700 mb-4">{body}</p>
      <div className="text-sm text-gray-500">
        <p>
          <strong>Post ID:</strong> {id}
        </p>
        <p>
          <strong>User ID:</strong> {userId}
        </p>
      </div>
      <Link to="/user3">
        {' '}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back to(Link)
        </button>
      </Link>
      <button className='ml-20  bg-cyan-400 p-2 rounded-xl
      ' onClick={() => usenav('/user3')}>btn back </button>
    </div>
  );
};

export default PostDeteles;
