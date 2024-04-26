import React from "react";
import { CustomCard } from "../styles/Card";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(
  () => import('@/components/text-editor'),
  { ssr: false }
);
import { ResumeBuilderText, ResumeBuilderTitle } from "../styles/Typography";
import { Box, Stack, Typography } from "@mui/material";
import { BlueButton } from "../styles/Buttons";
import { GoTrash } from "react-icons/go";

const Summary = () => {
  return (
    <CustomCard sx={{ p: "22px 30px", minHeight: "945px" }}>
      <ResumeBuilderTitle>Summary Statement</ResumeBuilderTitle>
      <ResumeBuilderText sx={{ mt: "3px" }}>
        Fill your details
      </ResumeBuilderText>

      <Box sx={{ mt: "24px" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            p: "16px 20px",
            borderRadius: "6px 6px 0px 0px",
            bgcolor: "rgba(75, 70, 92, 0.04)",
            border: "1px solid #DBDADE",
            borderBottom: "none",
          }}
        >
          <Typography
            variant="body1"
            color="#4B465C"
            sx={{ fontSize: "18px", fontWeight: 600 }}
          >
            Write Description
          </Typography>
        </Stack>
        <RichTextEditor />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            p: "16px 20px",
            mt: "40px",
            borderRadius: "0px 0px 6px 6px",
            bgcolor: "rgba(75, 70, 92, 0.04)",
            border: "1px solid #DBDADE",
            borderTop: "none",
          }}
        >
          <BlueButton sx={{ bgcolor: "#00318B", width: "78px" }}>
            Done
          </BlueButton>
          <GoTrash color="#4B465C" />
        </Stack>

        <BlueButton
          sx={{
            bgcolor: "#00318B",
            width: "75px",
            height: "38px",
            float: "right",
            mt: "23px",
          }}
        >
          Next
        </BlueButton>
      </Box>
    </CustomCard>
  );
};

export default Summary;
