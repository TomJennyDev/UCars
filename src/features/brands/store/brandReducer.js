import { brandActionTypes } from "./type";

export const initialState = {
  brands: [],
  filters: {
    name: "",
    sorts: "",
  },
  page: 1,
  limit: 6,
  totalPage: 0,
};

export const brandReducer = (state, action) => {
  switch (action.type) {
    case brandActionTypes.GET_ALL_BRANDS: {
      return { ...state, brands: action.payload };
    }
    case brandActionTypes.SET_PAGE_BRANDS: {
      return { ...state, page: action.payload };
    }
    case brandActionTypes.SET_TOTALPAGE_BRANDS: {
      return { ...state, totalPage: action.payload };
    }
    case brandActionTypes.SET_FILTERS_BRANDS: {
      return {
        ...state,
        filters: action.payload,
        page: 1,
      };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
};
