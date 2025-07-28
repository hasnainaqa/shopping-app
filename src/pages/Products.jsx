import Cart from "./Cart";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"

function handleCartItem(product) {
  let cart = JSON.parse(window.localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === product.id);

  existingItem
    ? (existingItem.quantity += 1)
    : cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      });

 
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function Products() {
  const [isUpdated, setIsUpdated] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) throw new Error("Data fetching failed");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleRemove = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    setIsUpdated((prev) => !prev);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <Navbar />,
      <h1 className="dark:text-gray-800 text-6xl font-semibold m-6  mt-16">
        Products
      </h1>

      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm bg-gray-600 dark:border-gray-700 m-4"
            key={product.id}
          >
            <a href={product.image}>
              <img
                className="rounded-t-lg object-contain h-48 w-full"
                src={product.image}
                alt={product.title}
              />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-white h-24 overflow-hidden text-ellipsis">
                {product.description}
              </p>
              <button
                onClick={() => {
                  handleCartItem(product);
                  setIsUpdated((prev) => !prev);
                }}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              >
                Buy now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {/* <Cart isUpdated={isUpdated} onRemove={handleRemove} /> */}
      </div>
    </>
  );
}

export default Products;
