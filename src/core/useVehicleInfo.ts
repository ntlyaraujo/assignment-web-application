import { useEffect, useState } from "react";
import { getInfoVehicle } from "./api";
import {  VehicleInfo } from "./types";

const useInfoVehicle = (id:string) => {
  const [data, setInfoVehicle] = useState<VehicleInfo>();
  const [isPendingInfo, setIsPending] = useState(false);
  const [errorCodeInfo, setErrorCode] = useState(0);

  useEffect(() => {
    setIsPending(true);
    getInfoVehicle(id)
      .then(setInfoVehicle)
      .then((resp) => {
        console.log('resp',resp)
        setErrorCode(0);
      })
      .catch((error) => {
        setInfoVehicle({})
       return error.response ? setErrorCode(error.response.status) : null
      }
      )
      .finally(() => {
        setIsPending(false);
      });
  }, []);

  return { data, isPendingInfo, errorCodeInfo };
};
export default useInfoVehicle;
