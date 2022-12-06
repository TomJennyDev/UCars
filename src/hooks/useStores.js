import { useContext } from "react";
import { useStore } from "zustand";
import { StoreContext } from "../contexts/storeContext";
function useStores() {
  return useStore(useContext(StoreContext));
}

export default useStores;
