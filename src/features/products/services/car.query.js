import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import carStore from "../store/carStore";
import { carActionTypes } from "../store/type";
import carApi from "./carApi";

export const useFetchCar = (params) => {
  const { dispatch } = carStore();

  return useQuery(["cars", { params }], () => carApi.getProductAll(), {
    onSuccess: (data) => {
      dispatch({
        type: carActionTypes.GET_ALL_CARS,
        payload: { cars: data },
      });
    },
    onError: (error) => {
      toast.error(error);
    },
  });
};
