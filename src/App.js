import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from "./pages/Cart";
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
    children: [
      // {
      //   path: "products",
      //   element: <Products />,
      // },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
    children: [
      // {
      //   path: "products",
      //   element: <Products />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

