import { useQuery } from "@tanstack/react-query";

import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { calItemsByNumberPages, calTotalPage } from "utils/paging";
import create from "zustand";
import { devtools, redux } from "zustand/middleware";
import carApi from "../../products/services/carApi";

export const actionTypes = {
  GET_ALL_FEATURES: "FEATURES.GET_ALL",
  SET_PAGE_FEATURES: "FEATURES.SET_PAGE",
  SET_TOTALPAGE_FEATURES: "FEATURES.SET_TOTALPAGE",
};

const initialState = {
  features: [],
  page: 1,
  limit: 8,
  totalPage: 0,
};

export const featureReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_FEATURES: {
      return {
        ...state,
        features: action.payload.features,
      };
    }
    case actionTypes.SET_PAGE_FEATURES: {
      return { ...state, page: action.payload };
    }
    case actionTypes.SET_TOTALPAGE_FEATURES: {
      return { ...state, totalPage: action.payload };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
};

const featuresStore = create(devtools(redux(featureReducer, initialState)));

function useFeatures() {
  const { dispatch, features, page, limit } = featuresStore();
  const { isError, error, isLoading } = useQuery(
    ["feature"],
    () => carApi.getProductAll(),
    {
      onSuccess: (data) => {
        dispatch({
          type: actionTypes.GET_ALL_FEATURES,
          payload: { features: data },
        });
      },
    }
  );

  if (isError) toast.error(error);

  //set total Page
  const setTotalPage = useCallback(
    (totalPage) => {
      dispatch({ type: actionTypes.SET_TOTALPAGE_FEATURES, action: totalPage });
    },
    [dispatch]
  );

  // calculate total Page base on items
  let totalPage = useCallback(
    () => calTotalPage(features, setTotalPage),
    [setTotalPage, features]
  );

  // change page
  const setPage = useCallback(
    (page) => {
      dispatch({ type: actionTypes.SET_PAGE_FEATURES, payload: page });
    },
    [dispatch]
  );

  // return number of items base on pages and limit
  let featuresFilters = useMemo(
    () => calItemsByNumberPages(features, page, limit),
    [page, features, limit]
  );

  return {
    features: featuresFilters,
    isLoading,
    setPage,
    totalPage,
  };
}

export default useFeatures;
