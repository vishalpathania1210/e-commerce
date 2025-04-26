import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const Healthproducts = () => {
  const dispatch = useDispatch();
  const [healthitems, setHealthitems] = useState([]);
  const [addedItems, setAddedItems] = useState(new Set());  
 
  const healthapi = async () => {
    try {
      const healthres = await axios.get('https://dummyjson.com/products');
      console.log(healthres);
      setHealthitems(healthres.data);  
    } catch (error) {
      console.log(error);
    }
  };
 
  const addtocart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: { item: item } });
    setAddedItems((prev) => new Set(prev.add(item.id)));  
  };

  useEffect(() => {
    healthapi();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {healthitems.products?.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-between space-y-4"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="flex justify-items-end-safe h-64 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="text-gray-500 text-sm">{item.description}</p>
            <div>
              <button
                type="button"
                onClick={() => addtocart(item)}
                disabled={addedItems.has(item.id)}  
                className={`${
                  addedItems.has(item.id) ? 'bg-green-500' : 'bg-indigo-600'
                } text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300`}
              >
                {addedItems.has(item.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
