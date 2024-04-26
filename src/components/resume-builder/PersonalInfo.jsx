import React from "react";
import { CustomCard } from "../styles/Card";
import { ResumeBuilderText, ResumeBuilderTitle } from "../styles/Typography";
import { Box, Divider, Stack, TextField, Typography } from "@mui/material";
import { BlueButton, ResetButton } from "../styles/Buttons";
import TextFieldWraper from "./TextFieldWraper";
import SelectWraper from "./SelectWraper";
import CustomTextArea from "../mui/textarea/CustomTextArea";

const options = [{ label: "UAE", value: "uae" }];

const PersonalInfo = () => {
  return (
    <CustomCard sx={{ p: "22px 30px", minHeight: '945px' }}>
      <ResumeBuilderTitle>Select to Fill Details</ResumeBuilderTitle>
      <ResumeBuilderText sx={{ mt: "3px" }}>
        Select and fill details Individually.
      </ResumeBuilderText>
      <Stack direction="row" alignItems="center" gap="20px" sx={{ mt: "27px" }}>
        <Box
          sx={{
            width: "81px",
            height: "81px",
            borderRadius: "5px",
            borderRadius: "50%",
            background: "rgba(0, 0, 0, 0.20)",
          }}
        ></Box>
        <Stack direction="column" justifyContent="end">
          <Stack direction="row" sx={{ mb: "10px" }}>
            <label>
              <input type="file" hidden />
              <BlueButton
                variant="contained"
                sx={{
                  mr: "20px",
                  bgcolor: "#00318B",
                  boxShadow: "none !important",
                }}
              >
                Upload Your Photo
              </BlueButton>
            </label>
            <ResetButton variant="secondary">Reset</ResetButton>
          </Stack>
          <Typography
            variant="p"
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "#4B465C",
              maxWidth: "332px",
              opacity: ".7",
            }}
          >
            Allowed JPG, GIF or PNG. Max size of 800K
          </Typography>
        </Stack>
      </Stack>
      <Box sx={{ mt: "23px" }}>
        <form>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="20px"
          >
            <TextFieldWraper
              type="text"
              label="Full Name"
              placeholder="John Dev"
            />
            <TextFieldWraper type="text" label="Title" placeholder="Engr" />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="20px"
          >
            <TextFieldWraper
              type="text"
              label="Email Address"
              placeholder="john@gmail.com"
            />
            <TextFieldWraper
              type="text"
              label="Phone Number"
              placeholder="000 000 000"
            />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="20px"
          >
            <TextFieldWraper
              type="date"
              label="Email Address"
              placeholder="john@gmail.com"
            />
            <SelectWraper
              label="Country"
              placeholder="UAE"
              options={options}
              value="uae"
            />
          </Stack>
          <CustomTextArea
            placeholder="Villa #1234, Street XYZ, Jumeirah Beach Residence (JBR), Dubai Marina Dubai, United Arab Emirates"
            minRows={3}
            maxRow={8}
            label="Address"
          />

          <Divider sx={{ mt: "25px", mb: "15px" }} />

          <TextFieldWraper
            type="text"
            label="LinkedIn URL"
            placeholder="type here"
          />

          <TextFieldWraper
            type="text"
            label="Indeed URL"
            placeholder="type here"
          />

          <TextFieldWraper
            type="text"
            label="Professional URL"
            placeholder="type here"
          />

          <BlueButton sx={{bgcolor: '#00318B', width: '75px', height: '38px', float: 'right'}}>
            Next
          </BlueButton>
        </form>
      </Box>
    </CustomCard>
  );
};

export default PersonalInfo;
