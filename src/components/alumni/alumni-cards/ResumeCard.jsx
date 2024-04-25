"use client";
import CustomProductWraper from "@/components/common/CustomProductWraper";
import styled from "@emotion/styled";
import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import pdfImg from "@/assets/images/pdf-img.png";
import { GoTrash } from "react-icons/go";
import { LuEye } from "react-icons/lu";

const resumes = [
  { listTitle: "React Resume" },
  { listTitle: "WordPress Resume" },
  { listTitle: "MERN Resume" },
];

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#4B465C",
  fontWeight: 600,
  lineHeight: "30px",
  textTransform: "capitalize",
}));

const ListTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#00318B",
  fontWeight: 500,
  lineHeight: "20px",
}));

const ListHead = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#6F6B7D",
  fontWeight: 500,
  lineHeight: "20px",
}));

const ListText = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  color: "#6F6B7D",
  fontWeight: 500,
  lineHeight: "20px",
  opacity: ".7",
}));

const ResumeCard = () => {
  return (
    <Card
      sx={{
        px: "30px",
        py: "22px",
        mb: "26px",
        boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
      }}
    >
      <CardTitle>Resumes</CardTitle>
      {resumes?.map((resume, index) => (
        <Box key={index} sx={{ mb: 5 }}>
          <ListTitle sx={{ mt: 2, mb: 1 }}>{resume?.listTitle}</ListTitle>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <CustomProductWraper
              name="My Resume"
              variant="Updated on 20--05-2023"
              img={pdfImg}
            />
            <Stack direction="row" alignItems="center" gap="20px">
              <LuEye color="#00318B" fontSize="24px" cursor="pointer" />
              <GoTrash color="#00318B" fontSize="22px" cursor="pointer" />
            </Stack>
          </Stack>
        </Box>
      ))}
    </Card>
  );
};

export default ResumeCard;
