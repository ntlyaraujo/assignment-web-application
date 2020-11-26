/* VEHICLES */
export interface Vehicle {
  name: string;
  id: string;
}
export interface VehicleResponse {
  vehicles: Vehicle[];
  errorCode?: number;
  isPending?: boolean;
}
export interface VehicleInfo {
  msidn?: string;
  engineStatus?: string;
  fleet?: string;
  brand?: string;
  countryOfOperation?: string;
  chassisNumber?: string;
  cassisSeries?: string;
}
export interface VehicleInfoResponse {
  info: VehicleInfo
  errorCode?: number;
  isPending?: boolean;
}
