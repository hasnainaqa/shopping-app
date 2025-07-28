import { useEffect, useState } from "react";

function Cart({ isUpdated, onRemove }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(window.localStorage.getItem("cart")) || [];
    setItems(cartItems);
  }, [isUpdated]);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        🛒 Cart
      </h2>

      {!items.length ? (
        <p className="text-gray-600 dark:text-gray-300">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain rounded border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Price: ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6">
            <span className="text-xl font-semibold text-gray-800 dark:text-white">
              Total:
            </span>
            <span className="text-xl font-bold text-green-600 dark:text-green-400">
              ${total}
            </span>
          </div>

          <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
