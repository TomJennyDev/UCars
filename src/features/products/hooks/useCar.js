import { useQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useReducer } from "react";
import { toast } from "react-toastify";
import { calItemsByNumberPages, calTotalPage } from "utils/paging";
import { defaultValues } from "../components/search/SearchOption";
import carApi from "../services/carApi";

export const actionTypes = {
  GET_ALL_CARS: "CARS.GET_ALL_CARS",
  SET_PAGE_CARS: "CARS.SET_PAGE_CARS",
  SET_TOTALPAGE_CARS: "CARS.SET_TOTALPAGE_CARS",
  SET_FILTERS_CARS: "CARS.SET_FILTERS_CARS",
};

const initialState = {
  cars: [],
  filters: defaultValues,
  page: 1,
  limit: 8,
  totalPage: 0,
};

const carReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CARS: {
      return {
        ...state,
        cars: action.payload.cars,
      };
    }
    case actionTypes.SET_PAGE_CARS: {
      return { ...state, page: action.payload };
    }
    case actionTypes.SET_TOTALPAGE_CARS: {
      return { ...state, totalPage: action.payload };
    }
    case actionTypes.SET_FILTERS: {
      return { ...state, filters: action.payload, page: 1 };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
};

function useCar() {
  const [{ cars, page, limit, filters }, dispatch] = useReducer(
    carReducer,
    initialState
  );

  const { isError, error, isLoading } = useQuery(
    ["car"],
    () => carApi.getProductAll(),
    {
      onSuccess: (data) => {
        dispatch({
          type: actionTypes.GET_ALL_CARS,
          payload: { cars: data },
        });
      },
    }
  );

  if (isError) {
    toast.error(error);
  }

  // change page
  const setPage = useCallback((page) => {
    dispatch({ type: actionTypes.SET_PAGE_CARS, payload: page });
  }, []);

  const setFilters = useCallback((filters) => {
    dispatch({ type: actionTypes.SET_FILTERS, payload: filters });
  }, []);

  //set total Page
  const setTotalPage = useCallback((totalPage) => {
    dispatch({ type: actionTypes.SET_TOTALPAGE_CARS, action: totalPage });
  }, []);

  //filters option
  let filterCars = useMemo(() => {
    return cars.filter((car) => {
      let isType = true;
      let isStatus = true;

      let isRangePrice =
        car.price.total >= filters.minPrice &&
        car.price.total <= filters.maxPrice;

      if (filters.status) {
        isStatus = car.status.toLowerCase() === filters.status.toLowerCase();
      }

      if (filters.type.length > 0) {
        isType = filters.type.includes(car.type);
      }

      return isStatus && isRangePrice && isType;
    });
  }, [filters, cars]);

  // calculate total Page base on items
  let totalPage = useMemo(
    () => calTotalPage(filterCars, limit, setTotalPage),
    [filterCars, limit, setTotalPage]
  );

  // return number of items base on pages and limit
  filterCars = useMemo(
    () => calItemsByNumberPages(filterCars, page, limit),
    [page, filterCars, limit]
  );

  return {
    cars: filterCars,
    isLoading,
    setPage,
    setFilters,
    totalPage,
  };
}

export default useCar;
