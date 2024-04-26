"use client";
import React, { useState } from "react";
import { CustomCard } from "../styles/Card";
import { ResumeBuilderText, ResumeBuilderTitle } from "../styles/Typography";
import { Box, Checkbox, FormControlLabel, InputLabel, Stack } from "@mui/material";
import { BlueButton } from "../styles/Buttons";
import TextFieldWraper from "./TextFieldWraper";
import AddMoreBtn from "../common/AddMoreBtn";
import styled from "@emotion/styled";
import TextFieldDate from "../mui/date-textfield/TextFieldDate";
import CustomTextArea from "../mui/textarea/CustomTextArea";

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "16px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: "#4B465C",
}));

const WorkExpCard = () => {
  const [values, setValues] = useState({ passingYear: "2024" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <CustomCard sx={{ p: "22px 30px", minHeight: '945px' }}>
      <ResumeBuilderTitle>Work Experience</ResumeBuilderTitle>
      <ResumeBuilderText sx={{ mt: "3px" }}>
        Fill your details
      </ResumeBuilderText>
      <Box sx={{ mt: "25px" }}>
        <form>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="20px"
          >
            <TextFieldWraper
              type="text"
              label="Job Title"
              placeholder="Front End Developer"
            />
            <TextFieldWraper
              type="text"
              label="Designation"
              placeholder="Manager"
            />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="20px"
          >
            <TextFieldWraper
              type="text"
              label="Company Name"
              placeholder="Suzuki"
            />
            <Box sx={{width: '48%'}}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap="5px"
                sx={{mt:'-25px'}}
              >
                <CustomLabel id="demo-simple-select-label">
                  Duration
                </CustomLabel>
                <FormControlLabel control={<Checkbox sx={{color: '#00318B'}} defaultChecked />} label="Onwards" />
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap="5px"
              >
                <CustomLabel
                  id="demo-simple-select-label"
                  sx={{ mb: "7px", fontSize: "12px !important" }}
                >
                  From
                </CustomLabel>
                <TextFieldDate placeholder="date" />
                <CustomLabel
                  id="demo-simple-select-label"
                  sx={{ mb: "7px", fontSize: "12px !important" }}
                >
                  To
                </CustomLabel>
                <TextFieldDate placeholder="date" />
              </Stack>
            </Box>
          </Stack>

          <CustomTextArea
            placeholder="Write here..."
            minRows={4}
            maxRow={8}
            label="Address"
          />

          <AddMoreBtn />

          <BlueButton
            sx={{
              bgcolor: "#00318B",
              width: "75px",
              height: "38px",
              float: "right",
            }}
          >
            Next
          </BlueButton>
        </form>
      </Box>
    </CustomCard>
  );
};

export default WorkExpCard;
