import { createContext, useReducer } from "react";

export const CartContext = createContext({
  products: [],
  addItemToCart: function () {},
  updateItemQuantity: function () {},
  clearCart: function () {},
  cartTotal: 0,
});

function productCartReducer(state, action) {
  const { type, payload } = action;
  const updatedCart = [...state.products];

  switch (type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.products.findIndex(
        (product) => product.id === payload.product.id
      );
      const existingCartItem = updatedCart[existingItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };

        updatedCart[existingItemIndex] = updatedItem;
      } else {
        updatedCart.unshift({
          ...payload.product,
          quantity: 1,
        });
      }

      return {
        ...state,
        products: updatedCart,
      };
    }

    case "UPDATE_ITEM": {
      const cartItemIndex = updatedCart.findIndex(
        (item) => item.id === payload.id
      );
      const updatedCartItem = { ...updatedCart[cartItemIndex] };

      updatedCartItem.quantity += payload.amount;

      if (updatedCartItem.quantity <= 0) {
        updatedCart.splice(cartItemIndex, 1);
      } else {
        updatedCart[cartItemIndex] = updatedCartItem;
      }

      return {
        ...state,
        products: updatedCart,
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        products: [],
      };
    }
  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [productCartState, productCartDispatch] = useReducer(
    productCartReducer,
    {
      products: [],
    }
  );

  function handleAddProductToCart(product) {
    productCartDispatch({
      type: "ADD_ITEM",
      payload: { product },
    });
  }

  function handleUpdateCartItemQuantity(id, amount) {
    productCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        id,
        amount,
      },
    });
  }

  function clearCart() {
    productCartDispatch({
      type: "CLEAR_CART",
    });
  }

  const cartTotal = productCartState.products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const contextValue = {
    products: productCartState.products,
    addItemToCart: handleAddProductToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    clearCart,
    cartTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
