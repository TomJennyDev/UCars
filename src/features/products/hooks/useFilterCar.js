import { useCallback, useEffect, useMemo } from "react";
import { calItemsByNumberPages, calTotalPage } from "utils/paging";
import carStore from "../store/carStore";
import { carActionTypes } from "../store/type";

function useFilterCar() {
  const { dispatch, cars, page, limit, filters } = carStore();

  // change page
  const setPage = useCallback(
    (page) => {
      dispatch({ type: carActionTypes.SET_PAGE_CARS, payload: page });
    },
    [dispatch]
  );

  const setFilters = useCallback(
    (filters) => {
      dispatch({
        type: carActionTypes.SET_FILTERS_CARS,
        payload: filters,
      });
    },
    [dispatch]
  );

  const setTotalPage = useCallback(
    (totalPage) => {
      dispatch({
        type: carActionTypes.SET_TOTALPAGE_CARS,
        payload: totalPage,
      });
    },
    [dispatch]
  );

  //filters option
  let filterCars = useMemo(() => {
    return cars?.filter((car) => {
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
    () => calTotalPage(filterCars, limit),
    [filterCars, limit]
  );

  // return number of items base on page and limit
  filterCars = useMemo(
    () => calItemsByNumberPages(filterCars, page, limit),
    [page, filterCars, limit]
  );

  useEffect(() => {
    setTotalPage(totalPage);
  }, [totalPage, setTotalPage]);

  return {
    cars: filterCars,
    setPage,
    setFilters,
  };
}

export default useFilterCar;
