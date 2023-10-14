import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const BillContext = createContext();

function reducer(state, action) {
  const { type, payload } = action;
  if (type === "updateProductName")
    return {
      ...state,
      products: state.products.map((product) => {
        if (product.id === payload.id)
          return { ...product, productName: payload.name };
        return product;
      }),
    };

  if (type === "updateNumber")
    return {
      ...state,
      products: state.products.map((product) => {
        if (product.id === payload.id)
          return {
            ...product,
            numProducts: payload.number,
            // String(payload.number).length === 1 && payload.number === 0
            //   ? ""
            //   : payload.number,
          };
        return product;
      }),
    };

  if (type === "updatePrice")
    return {
      ...state,
      products: state.products.map((product) => {
        if (product.id === payload.id)
          return {
            ...product,
            price: payload.price,
            // String(payload.price).length === 1 && payload.price === 0
            //   ? ""
            //   : payload.price,
          };
        return product;
      }),
    };
  return state;
}

const initial = {
  products: Array.from({ length: 10 }, (_, i) => {
    return {
      productName: "",
      numProducts: 0,
      price: 0,
      id: i,
    };
  }),
};

function BillProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  const value = { state, dispatch };

  return <BillContext.Provider value={value}>{children}</BillContext.Provider>;
}

function useBill() {
  const context = useContext(BillContext);
  if (!BillContext) throw new Error("wrong context");
  return context;
}

export { BillProvider, useBill };
