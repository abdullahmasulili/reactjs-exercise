import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext({
  products: [],
  addItemToCart: function () {},
  updateItemQuantity: function () {},
});

function productCartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedCart = [...state.products];
      const existingItemIndex = state.products.findIndex(
        (product) => product.id === action.payload.productId
      );
      const existingCartItem = updatedCart[existingItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedCart[existingItemIndex] = updatedItem;
      }
      break;
    }
    case "UPDATE_ITEM":
      break;
  }
}

export default function CartContextProvider({ children }) {
  const [productCartState, productCartDispatch] = useReducer(
    productCartReducer,
    {
      products: [],
    }
  );

  function handleAddProductToCart(productId) {
    productCartDispatch({
      type: "ADD_ITEM",
      payload: productId,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    productCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  const contextValue = useContext({
    products: productCartState.products,
    addItemToCart: handleAddProductToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  });

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
