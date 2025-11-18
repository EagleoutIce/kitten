import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './pages/main/MainPage.js';
import { RouterProvider, createHashRouter } from "react-router-dom";
import { SiteNoticePage } from './pages/SiteNoticePage.js';
import { ThemeButton } from './components/ThemeButton.js';
import { NotFound } from './pages/NotFound.js';
import { scrollTo } from './components/QuickLinks.js';
import { pageName } from './util/m.js';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createHashRouter([
  { 
    path: '/', 
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <NotFound />},
      { path: '/' + pageName, element: <MainPage /> },
      /* for any other path, try to jump to an id with the same name */
      { 
        path: pageName + '/*',
        element: <MainPage />,
        loader: async ({ params }) => {
          const id = params['*'];
          if (id) {
            setTimeout(() => scrollTo(id, false), 100);
          }
          return null;
      }},
      { path: `${pageName}/site-notice`, element: <SiteNoticePage
      legalName="Katzenpflegestelle"
      legalEmail=""
      legalAddress={
        <div>
          This is a personal website and does not represent any institution. <br />
        </div>
      }
    />
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeButton />
  </React.StrictMode>
);
