import axios from "axios";
import { VehicleResponse, VehicleInfo } from "../core/types";
export const api = axios.create({
  baseURL: "http://localhost:1337",
});

// GET ALL AVAILABLE VEHICLES
export const getAllAvailableVehicles = () => {
  return api.get("/vehicle/list").then((response) => response.data as VehicleResponse);
};

// GET INFO VEHICLE
export const getInfoVehicle = (id: string) => {
  return api.get("/vehicle/info", {
    params: { id }}).then((response) => response.data as VehicleInfo);
};

