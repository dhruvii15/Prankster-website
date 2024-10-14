import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Sass/style.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loading from './Component/Loading';

// Lazy load the components
const Home = React.lazy(() => import('./Pages/Home'));
const Policy = React.lazy(() => import('./Pages/Policy'));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div><Loading /></div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/privacy-policy',
    element: (
      <Suspense fallback={<div><Loading /></div>}>
        <Policy />
      </Suspense>
    ),
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
