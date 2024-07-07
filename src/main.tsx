import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TestComponent } from './components/TestsComponent.tsx';
import { SlackComponent } from './components/SlackComponent.tsx';
import SignInComponent from './components/LoginComponent.tsx';
import FormsComponent from './components/FormsComponent.tsx';
import { MarketingCard } from './components/MarketingCard.tsx';
import { FlexboxContainer } from './components/FlexboxContainer.tsx';
import { FlexboxContainerItem } from './components/FlexboxContainerItem.tsx';
import { NewComponent } from './components/NewComponent.tsx';
import LoginComponent from './components/LoginComponent.tsx';
import Calendar from './components/Calendar.tsx';
import './index.css';
import { TabComponent } from './components/TabComponent.tsx';
import { GridComponent } from './components/GridComponent.tsx';
import HomeComponent from './components/HomeComponent.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <LoginComponent /> },
      { path: '/home', element: <HomeComponent /> },
      { path: '/new', element: <NewComponent /> },
      { path: '/test', element: <TestComponent /> },
      { path: '/test/:id', element: <TestComponent /> },
      { path: '/slack', element: <SlackComponent /> },
      { path: '/signin', element: <SignInComponent /> },
      { path: '/forms', element: <FormsComponent /> },
      { path: '/marketing', element: <MarketingCard /> },
      { path: '/flex', element: <FlexboxContainer /> },
      { path: '/flexitem', element: <FlexboxContainerItem /> },
      { path: '/calendar', element: <Calendar /> },
      { path: '/tab', element: <TabComponent /> },
      { path: '/grid', element: <GridComponent /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
