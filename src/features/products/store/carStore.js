import create from "zustand";
import { redux } from "zustand/middleware";
import { carReducer, initialState } from "./carReducer";

const carStore = create(redux(carReducer, initialState));
export default carStore;
