import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { TestComponent } from './components/TestComponent';
import { CardComponent } from './components/CardComponent';
import { SlackComponent } from './components/SlackComponent';
import { LoginComponent } from './components/LoginComponent';
import { FormsComponent } from './components/FormsComponent';
import { MarketingCard } from './components/MarketingCard';
import { Chart } from './components/Chart';
import { TabComponent } from './components/TabComponent';
import { GridComponent } from './components/GridComponent';
import { FlexComponent } from './components/FlexboxComponent';
import Navbar from './pages/Layout/Navbar';
import { OrdersComponent } from './components/OrdersComponent';
import { ShadcnTestComponent } from './components/ShadcnTestComponent';
import { ZForm } from './components/ZForm';
import { CustomersPage } from './pages/CustomersPage';
import { DataTableDemo } from './components/datatable/DataTableDemo';
import { Calendar } from './components/calendar/Calendar';
import { Toaster } from 'sonner';

//why hashrouter https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
export const hashRouter = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <LoginComponent /> },

      //tests
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
      { path: '/navbar2', element: <Navbar /> },
      { path: '/chart', element: <Chart /> },
      { path: '/orders', element: <OrdersComponent /> },
      { path: '/shadcn', element: <ShadcnTestComponent /> },
      { path: '/zform', element: <ZForm /> },
      { path: '/DataTableDemo', element: <DataTableDemo /> },
      //pages
      { path: '/customers', element: <CustomersPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={hashRouter} />
  </React.StrictMode>
);
