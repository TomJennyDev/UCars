import useFeatures from "features/features/hooks/useFeatures";
import { createContext } from "react";

export const FeatureContext = createContext();

export function StoreProvider({ children }) {
  return (
    <StoreContext.Provider value={useFeatures()}>
      {children}
    </StoreContext.Provider>
  );
}
