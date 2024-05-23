import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'
import { Provider } from 'react-redux'
//************Routes*******************
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlogPage from './pages/BlogPage.jsx'
import CtaPage from './pages/CtaPage.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx'
import CardSinglePage from './pages/CardSinglePage.jsx'
//************End-Routes*******************

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/cards/:cardID',
    element: <CardSinglePage />,
  },
  // {
  //   path: '/cards-children',
  //   element: <CardsChildren />,
  //   children: [
        // {
        //   path: ':cardID',
        //   element: <Card />,
        // },
  //]
  // },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/cta',
    element: <CtaPage />,
  },
  {
    path: '/features',
    element: <FeaturesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
