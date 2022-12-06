import create from "zustand";
import { redux } from "zustand/middleware";
import { brandReducer, initialState } from "./brandReducer";

const brandStore = create(redux(brandReducer, initialState));
export default brandStore;
