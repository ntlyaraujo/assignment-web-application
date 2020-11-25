import axios from "axios";
import { VehicleResponse } from "../core/types";
export const api = axios.create({
  baseURL: "http://localhost:1337",
});

// GET ALL AVAILABLE VEHICLES
export const getAllAvailableVehicles = () => {
  return api.get("/vehicle/list").then((response) => response.data as VehicleResponse);
};
