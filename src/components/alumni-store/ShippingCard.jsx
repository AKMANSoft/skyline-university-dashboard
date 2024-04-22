import React from "react";
import { CustomCard } from "../styles/Card";
import { Typography } from "@mui/material";

const ShippingCard = () => {
  return (
    <CustomCard sx={{ p: "24px", mt: '25px' }}>
      <Typography
        component="div"
        variant="p"
        sx={{ fontSize: "15px", fontWeight: 500, color: "#5D596C", mb: "25px" }}
      >
        Shipping address
      </Typography>
      <Typography
        component="div"
        variant="p"
        sx={{ fontSize: "15px", fontWeight: 400, color: "#6F6B7D", maxWidth: '135px' }}
      >
        45 Roker Terrace Latheronwheel KW5 8NW,London UK
      </Typography>
    </CustomCard>
  );
};

export default ShippingCard;
