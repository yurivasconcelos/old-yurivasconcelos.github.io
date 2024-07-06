import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { TestComponent } from './components/TestsComponent.tsx';
import { SlackComponent } from './components/SlackComponent.tsx';

const router = createBrowserRouter([
  { path: '/', element: <App/> },
  { path: '/test', element: <TestComponent/> },
  { path: '/slack', element: <SlackComponent/> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
