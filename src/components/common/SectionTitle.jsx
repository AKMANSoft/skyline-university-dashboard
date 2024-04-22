import { Box, Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({title}) => {
  return (
    <Box sx={{ width: "100%", height: "40px", pt: "10px", pl: "16px" }}>
      <Typography
        variant="p"
        component="p"
        sx={{
          fontSize: "11px",
          clor: "#4B465C",
          lineHeight: "14px",
          mb: 1,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
