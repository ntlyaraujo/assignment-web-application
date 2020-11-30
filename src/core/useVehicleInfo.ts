import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getInfoVehicle, getAllServices } from "./api";
import { VehicleInfo, VehicleServices } from "./types";
import {requestServicesAction} from './redux/actions'

const useInfoVehicle = (id: string) => {
  const [data, setInfoVehicle] = useState<VehicleInfo>();
  const [services, setInfoVehicleServices] = useState<VehicleServices>();
  const [isPendingInfo, setIsPending] = useState(false);
  const [errorCodeInfo, setErrorCode] = useState(0);

  const dispatch = useDispatch()

  useEffect(() => {
    setIsPending(true);
    /* GET INFO VEHICLE */
    Promise.all([getInfoVehicle(id), getAllServices(id)])
      .then((values) => {
         /* ADD ID TO THE DATA TO BE POSSIBLE CREATE TABLE */
        values[0].id=1
        setInfoVehicle(values[0])
        setInfoVehicleServices(values[1])
        dispatch(requestServicesAction(values[1]))
      })
      .then(() => {
        setErrorCode(0);
      })
      .catch((error) => {
        setInfoVehicleServices({communicationStatus: '',
          services: []})
        return error.response ? setErrorCode(error.response.status) : null;
      })
      .finally(() => {
        setIsPending(false);
      });
  }, [id]);

  return { data, isPendingInfo, errorCodeInfo, services };
};
export default useInfoVehicle;
