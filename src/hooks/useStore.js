import { useContext } from "react";
import { StoreContext } from "../contexts/storeContext";

function useStore() {
  return useContext(StoreContext);
}

export default useStore;
