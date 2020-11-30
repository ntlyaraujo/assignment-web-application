/* VEHICLES */
export const REQUEST_SERVICES = 'REQUEST_SERVICES';

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
  id: number
  msidn: string;
  engineStatus: string;
  fleet: string;
  brand: string;
  countryOfOperation: string;
  chassisNumber: string;
  cassisSeries: string;
}
export interface Service {
  serviceName: string;
  status: string;
  lastUpdate: string;
}
export interface VehicleServices {
  communicationStatus: string;
  services: Service[];
}

export interface ServicesState {
  ServicesReducer:{
    communicationStatus: string;
    services: Service[];
  }
  
}

interface RequestServicesAction {
  type: typeof REQUEST_SERVICES
  payload: VehicleServices
}



export type RequestActionTypes = RequestServicesAction

