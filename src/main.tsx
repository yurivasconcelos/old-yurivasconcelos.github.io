import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TestComponent } from './components/TestsComponent.tsx';
import { SlackComponent } from './components/SlackComponent.tsx';
import SignInComponent from './components/LoginComponent.tsx';
import FormsComponent from './components/FormsComponent.tsx';
import { MarketingCard } from './components/MarketingCard.tsx';
import './index.css';
import { FlexboxContainer } from './components/FlexboxContainer.tsx';
import { FlexboxContainerItem } from './components/FlexboxContainerItem.tsx';
import LoginComponent from './components/LoginComponent.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <LoginComponent /> },
      { path: '/test', element: <TestComponent /> },
      { path: '/test/:id', element: <TestComponent /> },
      { path: '/slack', element: <SlackComponent /> },
      { path: '/signin', element: <SignInComponent /> },
      { path: '/forms', element: <FormsComponent /> },
      { path: '/marketing', element: <MarketingCard /> },
      { path: '/flex', element: <FlexboxContainer /> },
      { path: '/flexitem', element: <FlexboxContainerItem /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);
