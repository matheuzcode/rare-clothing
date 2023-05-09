import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';
import Products from './pages/Products/Products.jsx';

import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

import {Link} from "react-router-dom";

import "./App.scss";

const Layout = () => {
  
  return (
    <div className="app">
        <Navbar />
        <Outlet/>
        <Footer/>
    </div> 
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/products/:id",
        element:<Products/>,
      },
      {
        path:"/product/:id",
        element:<Product/>,
      },
    ],   
  },

])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
