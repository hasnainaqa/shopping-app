import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import './App.css'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      
    ],
  },
  {
    path: "/products",
    element: <Products />,
    // children: [
    //   {
    //     path: "products",
    //     element: <Navbar />,
    //   },
    // ],
  },
  {
    path: "/cart",
    element: <Cart />,
    children: [
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />,
    children: [
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

