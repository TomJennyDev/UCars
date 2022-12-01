import { createContext } from "react";
import useCar from "../features/products/hooks/useCar";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  return (
    <StoreContext.Provider value={useCar()}>{children}</StoreContext.Provider>
  );
}
