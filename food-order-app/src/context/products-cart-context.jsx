import { createContext, useReducer } from "react";

export const CartContext = createContext({
  products: [],
  addItemToCart: function () {},
  updateItemQuantity: function () {},
  cartTotal: 0,
});

function productCartReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM": {
      const updatedCart = [...state.products];
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
        updatedCart.push({
          id: payload.product.id,
          name: payload.product.name,
          price: payload.product.price,
          quantity: 1,
        });
      }

      return {
        ...state,
        products: updatedCart,
      };
    }

    case "UPDATE_ITEM": {
      const updatedCart = [...state.products];
      const cartItemIndex = updatedCart.findIndex(
        (item) => item.id === payload.product.id
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
        updatedCart,
      };
    }
  }
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

  function handleUpdateCartItemQuantity(product, amount) {
    productCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        product,
        amount,
      },
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
    cartTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
