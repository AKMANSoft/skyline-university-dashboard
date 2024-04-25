'use client'
import { Stack, Typography } from "@mui/material";
import React from "react";
import { CustomButton } from "../styles/Buttons";
import { useRouter } from "next/navigation";

const StackBetweenWraper = ({ title, btnText, link }) => {
  const router = useRouter()
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography
        variant="body1"
        color="#4B465C"
        sx={{ fontSize: { xs: "20px", sm: "22px" }, fontWeight: 600 }}
      >
        {title}
      </Typography>
      <CustomButton
        sx={{
          fontSize: { xs: "12px", sm: "16px" },
          width: { xs: "110px", sm: "140px" },
          height: "38px",
          bgcolor: "rgba(0, 49, 139, 0.10)",
        }}
        onClick={() => router.push(link)}
      >
        {btnText}
      </CustomButton>
    </Stack>
  );
};

export default StackBetweenWraper;
