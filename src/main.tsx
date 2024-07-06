import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { TestComponent } from './components/TestsComponent.tsx';
import { SlackComponent } from './components/SlackComponent.tsx';
import SignInComponent from './components/SignInComponent.tsx';
import FormsComponent from './components/FormsComponent.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/test', element: <TestComponent /> },
      { path: '/test/:id', element: <TestComponent /> },
      { path: '/slack', element: <SlackComponent /> },
      { path: '/signin', element: <SignInComponent /> },
      { path: '/forms', element: <FormsComponent/> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
