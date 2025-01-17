import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Sass/style.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loading from './Component/Loading';

const Home = React.lazy(() => import('./Pages/Home'));
const Policy = React.lazy(() => import('./Pages/Policy'));
const PrankLink = React.lazy(() => import('./Pages/PrankLink'));
const Termsofuse = React.lazy(() => import('./Pages/Terms'));

const queryClient = new QueryClient();

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error occurred:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/privacy-policy',
    element: (
      <Suspense fallback={<Loading />}>
        <Policy />
      </Suspense>
    ),
  },
  {
    path: '/termsofuse',
    element: (
      <Suspense fallback={<Loading />}>
        <Termsofuse />
      </Suspense>
    ),
  },
  {
    path: '/:prankName',
    element: (
      <Suspense fallback={<Loading />}>
        <PrankLink />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
