const cartReducer = (state = {
  cart: [],
  totalPrice: 0
}, action) => {
  switch(action.type) {
    case "ADD_CART_ITEM":
      state = {
        ...state,
        width: action.payload
      }; break;
    case "DELETE_CART_ITEM":
      state = {
        ...state,
        scroll: action.payload
      }; break;
  }
  return state;
};

export default cartReducer;