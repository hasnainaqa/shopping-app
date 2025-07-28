import Cart from "./Cart";
import React, { useEffect, useState } from "react";

function handleCartItem(product) {
  const cartItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity: 1,
  };
}
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data fetching failed");
        }
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

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="dark:text-gray-800 text-6xl font-semibold m-6">
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
              <a
                onClick={() => handleCartItem(product)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buy now
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
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
              </a>
            </div>
          </div>
        ))}
        <a href="/cart">
          {/* <Cart item = {                                  handleCartItem.cartItem}/> */}
        </a>
      </div>
    </>
  );
}

export default Products;
