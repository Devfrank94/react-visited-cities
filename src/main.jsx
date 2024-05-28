import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    <ToastContainer 
      position="top-right"
      autoClose={5000}
      limit={5}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover={false}
      theme="light"
      transition= {Slide}/>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
