import { createContext } from "react";
import useCar from "../features/products/hooks/useCar";

export const CarContext = createContext();

export function CarProvider({ children }) {
  return <CarContext.Provider value={useCar()}>{children}</CarContext.Provider>;
}
