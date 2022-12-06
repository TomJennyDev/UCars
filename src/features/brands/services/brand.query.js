import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import brandStore from "../store/brandStore";
import { brandActionTypes } from "../store/type";
import brandApi from "./brandApi";

export const useQueryBrands = (params) => {
  const { dispatch } = brandStore();
  return useQuery(["brands", { params }], () => brandApi.getBrandsAll(), {
    onSuccess: (data) => {
      dispatch({
        type: brandActionTypes.GET_ALL_BRANDS,
        payload: data,
      });
    },
    onError: (error) => {
      toast.error(error);
    },
  });
};

export const useQueryBrand = (params) => {
  const { dispatch } = brandStore();
  const { id } = useParams;
  return useQuery(["brands", { params }], () => brandApi.getBrand(id), {
    onSuccess: (data) => {
      dispatch({
        type: brandActionTypes.GET_BRAND,
        payload: data,
      });
    },
    onError: (error) => {
      toast.error(error);
    },
  });
};

export const usePutBrand = (params) => {
  const { dispatch } = brandStore();
  return useMutation(["brands", { params }], () => brandApi.putEditBrand(), {
    onSuccess: (data) => {
      dispatch({
        type: brandActionTypes.SET_BRAND,
        payload: data,
      });
    },
    onError: (error) => {
      toast.error(error);
    },
  });
};
