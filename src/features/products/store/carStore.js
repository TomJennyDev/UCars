import create from "zustand";
import { persist, redux } from "zustand/middleware";
import { carReducer, initialState } from "./carReducer";

const carStore = create(persist(redux(carReducer, initialState), {}));
export default carStore;
