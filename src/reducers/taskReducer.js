const initialState = {
  cart: [],
};

const taskReducer = (state = initialState, action) => {
  // console.log("store", action);

  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
