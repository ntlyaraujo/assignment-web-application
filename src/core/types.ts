/* VEHICLES */
export interface Vehicle {
  name: string;
  id:string;
}
export interface VehicleResponse {
  vehicles: Vehicle[]
  errorCode?: number
  isPending?: boolean
}