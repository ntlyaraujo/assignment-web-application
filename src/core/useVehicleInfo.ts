import { useEffect, useState } from "react";
import { getInfoVehicle, getAllServices } from "./api";
import { VehicleInfo, VehicleServices } from "./types";

const useInfoVehicle = (id: string) => {
  const [data, setInfoVehicle] = useState<VehicleInfo>();
  const [services, setInfoVehicleServices] = useState<VehicleServices>();
  const [isPendingInfo, setIsPending] = useState(false);
  const [errorCodeInfo, setErrorCode] = useState(0);

  useEffect(() => {
    setIsPending(true);
    /* GET INFO VEHICLE */
    Promise.all([getInfoVehicle(id), getAllServices(id)])
    
      .then((values) => {
        setInfoVehicle(values[0])
        setInfoVehicleServices(values[1])
      })
      .then(() => {
        setErrorCode(0);
      })
      .catch((error) => {
        setInfoVehicle({});
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
