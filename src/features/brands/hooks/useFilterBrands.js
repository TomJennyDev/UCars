import { useCallback, useEffect, useMemo } from "react";

import { calItemsByNumberPages, calTotalPage } from "utils/paging";
import { alphabetCompare, dateCompare, numCompare } from "utils/until";
import brandStore from "../store/brandStore";
import { brandActionTypes } from "../store/type";

function useFilterBrands() {
  const { dispatch, brands, page, limit, filters } = brandStore();

  // change page
  const setPage = useCallback(
    (page) => {
      dispatch({ type: brandActionTypes.SET_PAGE_BRANDS, payload: page });
    },
    [dispatch]
  );

  const setFilters = useCallback(
    (filters) => {
      dispatch({
        type: brandActionTypes.SET_FILTERS_BRANDS,
        payload: filters,
      });
    },
    [dispatch]
  );

  const setTotalPage = useCallback(
    (totalPage) => {
      dispatch({
        type: brandActionTypes.SET_TOTALPAGE_BRANDS,
        payload: totalPage,
      });
    },
    [dispatch]
  );

  //filters option
  let filterBrands = useMemo(() => {
    if (filters.name) {
      return brands?.filter((brand) =>
        brand.name.toLowerCase().includes(filters.name)
      );
    }
    return brands;
  }, [filters.name, brands]);

  //sort brands
  filterBrands = useMemo(() => {
    if (filters.sorts === "name") {
      return [...filterBrands?.sort(alphabetCompare)];
    }
    if (filters.sorts === "lastUpdated") {
      return [...filterBrands?.sort(dateCompare)];
    }
    if (filters.sorts === "numModels") {
      return [...filterBrands?.sort(numCompare)];
    }
    return filterBrands;
  }, [filterBrands, filters.sorts]);

  // calculate total Page base on items
  let totalPage = useMemo(
    () => calTotalPage(filterBrands, limit),
    [filterBrands, limit]
  );

  // return number of items base on page and limit
  filterBrands = useMemo(
    () => calItemsByNumberPages(filterBrands, page, limit),
    [page, filterBrands, limit]
  );

  useEffect(() => {
    setTotalPage(totalPage);
  }, [totalPage, setTotalPage]);

  return {
    brands: filterBrands,
    setPage,
    setFilters,
  };
}

export default useFilterBrands;
