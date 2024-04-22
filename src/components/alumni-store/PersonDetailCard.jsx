import React from "react";
import { CustomCard } from "../styles/Card";
import { Typography } from "@mui/material";
import img from "@/assets/images/1.png";
import CustomProductWraper from "../common/CustomProductWraper";

const PersonDetailCard = () => {
  return (
    <CustomCard sx={{ p: "24px", mt:{xs:'25px',lg:'0px'} }}>
      <Typography
        component="div"
        variant="p"
        sx={{ fontSize: "15px", fontWeight: 500, color: "#5D596C", mb: "24px" }}
      >
        Your details
      </Typography>
      <CustomProductWraper
        name="Shamus Tuttle"
        variant="Customer ID: #58909"
        img={img}
      />
      <Typography
        component="div"
        variant="p"
        sx={{ fontSize: "15px", fontWeight: 500, color: "#5D596C", mt: "35px" }}
      >
        Contact info
      </Typography>

      <Typography
        component="div"
        variant="p"
        sx={{ fontSize: "15px", fontWeight: 400, color: "#6F6B7D", mt: "16px" }}
      >
        Email: Shamus889@yahoo.com
      </Typography>

      <Typography
        component="div"
        variant="p"
        sx={{ fontSize: "15px", fontWeight: 400, color: "#6F6B7D", mt: "4px" }}
      >
        Mobile: +1 (609) 972-22-22
      </Typography>
    </CustomCard>
  );
};

export default PersonDetailCard;
