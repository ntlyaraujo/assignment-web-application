import { ServicesState, RequestActionTypes, REQUEST_SERVICES } from "../types";

const initialState: ServicesState = {
    ServicesReducer:{
        communicationStatus: "",
        services: [],
    }
  
};

export function ServicesReducer(
  state = initialState,
  action: RequestActionTypes
) {
  switch (action.type) {
    case REQUEST_SERVICES:
      return{
        communicationStatus: action.payload.communicationStatus,
        services: action.payload.services,
      };

    default:
      return state;
  }
}
