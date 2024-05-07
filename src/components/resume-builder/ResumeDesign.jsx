"use client";
import React, { useState } from "react";
import { CustomCard } from "../styles/Card";
import { ResumeBuilderText, ResumeBuilderTitle } from "../styles/Typography";
import {
  Box,
  Stack,
} from "@mui/material";
import Image from "next/image";
import resume1 from "@/assets/images/resume1.png";
import resume2 from "@/assets/images/resume2.png";

const resumeDesigns = [{ img: resume1 }, { img: resume2 }, { img: resume1 }];

const ResumeDesign = () => {
    const[active, setActive] = useState({index:0, file: resume1})
  return (
    <CustomCard sx={{ p: "22px 30px", minHeight: "945px" }}>
      <ResumeBuilderTitle>Select Your Resumes</ResumeBuilderTitle>
      <ResumeBuilderText sx={{ mt: "3px" }}>
        Select resume template with your choice
      </ResumeBuilderText>

      <Box sx={{ width: "100%", height: "735px", mt: "14px" }}>
        <Image priority
          alt="resume image"
          src={active?.file}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap="15px"
      >
        {resumeDesigns?.map((design, index) => (
          <Box
            key={index}
            sx={{
              width: "45px",
              height: "57px",
              mt: "26px",
              padding: "5px",
              border: active.index===index ? "1px solid #00318B" : "0.5px solid #E1E1E1",
              borderRadius: "2px",
              cursor: 'pointer',
              boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.10)',
            }}
            onClick={() => setActive({index:index, file: design?.img})}
          >
            <Image priority
              alt="resume image"
              src={design?.img}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        ))}
      </Stack>
    </CustomCard>
  );
};

export default ResumeDesign;
