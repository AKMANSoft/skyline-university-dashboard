import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Item = ({ icon, orders, status, isHideBorder }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        borderRight: {
          xs: "0px solid transparent",
          md: !isHideBorder && "1px solid #DBDADE",
        },
        pr: { xs: "25px", md: "32px" },
        pl: { xs: "25px", md: "32px" },
        py: { xs: "25px", md: "0px" },
        bgcolor: "white",
        mb: { xs: "20px", md: "0px" },
      }}
    >
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: "22px",
            color: "#696969",
            lineHeight: "30px",
            fontWeight: 600,
          }}
        >
          {orders}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            color: "#6F6B7D",
            lineHeight: "30px",
            fontWeight: 400,
            mt: "7px",
          }}
        >
          {status}
        </Typography>
      </Box>
      <Image priority src={icon} alt="icon" />
    </Stack>
  );
};

export default Item;
