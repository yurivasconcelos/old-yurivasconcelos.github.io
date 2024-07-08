import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { HomeComponent } from './components/HomeComponent.tsx';
import { TestComponent } from './components/TestComponent.tsx';
import { CardComponent } from './components/CardComponent.tsx';
import { SlackComponent } from './components/SlackComponent.tsx';
import { LoginComponent } from './components/LoginComponent.tsx';
import { FormsComponent } from './components/FormsComponent.tsx';
import { MarketingCard } from './components/MarketingCard.tsx';
import { NewComponent } from './components/NewComponent.tsx';
import { Calendar } from './components/Calendar.tsx';
import { Charts } from './components/Charts.tsx';
import { TabComponent } from './components/TabComponent.tsx';
import { GridComponent } from './components/GridComponent.tsx';
import { FormGridComponent } from './components/FormGridComponent.tsx';
import { FlexComponent } from './components/FlexboxComponent.tsx';
import Navbar from './components/Layout/Navbar.tsx';

//why hashrouter https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
export const hashRouter = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <LoginComponent /> },
      { path: '/home', element: <HomeComponent /> },
      { path: '/new', element: <NewComponent /> },
      { path: '/test', element: <TestComponent /> },
      { path: '/card', element: <CardComponent /> },
      { path: '/test/:id', element: <TestComponent /> },
      { path: '/slack', element: <SlackComponent /> },
      { path: '/login', element: <LoginComponent /> },
      { path: '/forms', element: <FormsComponent /> },
      { path: '/marketing', element: <MarketingCard /> },
      { path: '/flex', element: <FlexComponent /> },
      { path: '/calendar', element: <Calendar /> },
      { path: '/tab', element: <TabComponent /> },
      { path: '/grid', element: <GridComponent /> },
      { path: '/formgrid', element: <FormGridComponent /> },
      { path: '/navbar2', element: <Navbar /> },
      { path: '/charts', element: <Charts /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={hashRouter} />
  </React.StrictMode>
);
