import { useEffect, useState } from "react";
import { getAllAvailableVehicles } from "./api";
import { VehicleResponse } from "./types";

const useVehicle = () => {
  const [data, setVehicles] = useState<VehicleResponse>();
  const [isPending, setIsPending] = useState(false);
  const [errorCode, setErrorCode] = useState(0);

  useEffect(() => {
    setIsPending(true);
    getAllAvailableVehicles()
      .then(setVehicles)
      .then(() => {
        setErrorCode(0);
      })
      .catch((error) => {
        setVehicles({vehicles:[]})
       return error.response ? setErrorCode(error.response.status) : null
      }
      )
      .finally(() => {
        setIsPending(false);
      });
  }, []);

  return { data, isPending, errorCode };
};
export default useVehicle;
