import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import img from "@/assets/images/company-img2.png";

const CustomAvatar = ({name, industry}) => {
  return (
    <Stack direction="row" alignItems="center" gap="11px">
      <Avatar sx={{ width: "45px" }} src={img.src} />
      <Box>
        <Typography
          variant="body1"
          color="#4B465C"
          sx={{ fontSize: {xs:'14px',sm:"18px"}, fontWeight: 600, opacity: ".9" }}
        >
          {name}
        </Typography>
        <Stack direction="row" gap="4px">
          <Typography
            variant="body1"
            color="#4B465C"
            sx={{ fontSize: {xs:'10px',sm:"15px"}, fontWeight: 500, opacity: ".9" }}
          >
            Industry:
          </Typography>
          <Typography
            variant="body1"
            color="#4B465C"
            sx={{ fontSize: {xs:'10px',sm:"15px"}, fontWeight: 400, opacity: ".7" }}
          >
            {industry}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default CustomAvatar;
