import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './componentes/Root';
import Home from './componentes/Home';
import About from './componentes/About';
import Useres from './componentes/Useres';
import Useres2 from './componentes/Useres2';
import UserDetils from './componentes/UserDetils';
import Post from './componentes/Post';
import PostDeteles from './componentes/PostDeteles';
const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
const PostApi = fetch(`https://jsonplaceholder.typicode.com/posts`).then(res=>res.json());
const route = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Useres,
      },
      {
        path: 'user2',
        element: (
          <Suspense fallback={<h1>Lodding................</h1>}>
            <Useres2 userPromise={userPromise}></Useres2>
          </Suspense>
        ),
      },
      {
        path: 'user2/:userId',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetils,
      },
      {
        path: 'user3',
        element: (
          <Suspense>
            <Post PostApi={PostApi}></Post>
          </Suspense>
        ),
      },
      {
        path: 'user3/:ID',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.ID}`),
        Component:PostDeteles,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
