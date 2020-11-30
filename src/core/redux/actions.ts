import {
  RequestActionTypes,
  REQUEST_SERVICES,
  VehicleServices,
} from "../types";

export function requestServicesAction(newServices: VehicleServices): RequestActionTypes {
  return {
    type: REQUEST_SERVICES,
    payload: newServices,
  };
}
