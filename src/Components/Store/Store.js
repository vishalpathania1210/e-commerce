import { createStore } from "redux";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cart: [...state.cart, { ...action.payload.item, quantity: 1 }] };
    
    case "REMOVE_ITEM":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
    
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    
    case "CLEAR_CART":
      return { ...state, cart: [] };
    
    default:
      return state;
  }
};

export const Store = createStore(cartReducer);
