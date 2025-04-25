import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
 

export const Cart = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeitem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; 
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

 
  const calculateTotalPrice = () => {
    return data.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
        {data.cart.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.cart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-between space-y-4"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold text-gray-800">Item Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <div>
                  <button
                    type="button"
                    onClick={() => removeitem(item.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {data.cart.length > 0 && (
          <div className="mt-6 text-right">
            <h3 className="text-xl font-semibold text-gray-800">
              Total Price: ${calculateTotalPrice()}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
