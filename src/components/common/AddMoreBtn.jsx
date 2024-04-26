import { Stack, Typography } from "@mui/material";
import React from "react";
import { IoIosAddCircle } from "react-icons/io";

const AddMoreBtn = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="end"
      gap="4px"
      sx={{ mt: "20px", mb: "23px", cursor: "pointer" }}
    >
      <IoIosAddCircle color="#00318B" fontSize="20px" />
      <Typography
        variant="body1"
        color="#00318B"
        sx={{ fontSize: "14px", fontWeight: 600 }}
      >
        Add More
      </Typography>
    </Stack>
  );
};

export default AddMoreBtn;
