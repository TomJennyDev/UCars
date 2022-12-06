import { carActionTypes } from "./type";

export const initialState = {
  cars: [],
  filters: {
    status: "",
    minPrice: 0,
    maxPrice: 1000000,
    type: [],
  },
  page: 1,
  limit: 8,
  totalPage: 0,
};

export const carReducer = (state, action) => {
  switch (action.type) {
    case carActionTypes.GET_ALL_CARS: {
      return { ...state, cars: action.payload.cars };
    }
    case carActionTypes.SET_PAGE_CARS: {
      return { ...state, page: action.payload };
    }
    case carActionTypes.SET_TOTALPAGE_CARS: {
      return { ...state, totalPage: action.payload };
    }
    case carActionTypes.SET_FILTERS_CARS: {
      return { ...state, filters: action.payload, page: 1 };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
};
