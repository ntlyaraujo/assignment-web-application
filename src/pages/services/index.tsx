import React from "react";
import { Typography } from "@material-ui/core";
import { ServicesState } from "../../core/types";
import { useSelector } from "react-redux";
import ServiceList from "../../components/ServiceList";

const ServicesPage = (props: any) => {
  const { name } = props.history.location.state;
  const data = useSelector(
    (state: ServicesState) => state.ServicesReducer
  );
  return (
    <div>
      <Typography variant="h6" color="inherit" noWrap>
        All Services for the vehicle:
        <Typography variant="h6" color="primary" component={"span"}>
          {" "}
          {name}
        </Typography>
      </Typography>

      <ServiceList data={data} status={"ALL"} />
    </div>
  );
};

export default ServicesPage;
