import React, { useState } from "react";
import { CustomCard } from "../styles/Card";
import { ResumeBuilderText, ResumeBuilderTitle } from "../styles/Typography";
import { Box, Stack, Typography } from "@mui/material";
import { BlueButton } from "../styles/Buttons";
import TextFieldWraper from "./TextFieldWraper";
import SelectWraper from "./SelectWraper";
import { IoIosAddCircle } from "react-icons/io";
import AddMoreBtn from "../common/AddMoreBtn";

const options = [
  { label: "2024", value: "2024" },
  { label: "2023", value: "2023" },
];

const EducationCard = () => {
  const [values, setValues] = useState({ passingYear: "2024" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <CustomCard sx={{ p: "22px 30px", minHeight: '945px' }}>
      <ResumeBuilderTitle>Last Degree</ResumeBuilderTitle>
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
              label="Level of Education"
              placeholder="Masters"
            />
            <TextFieldWraper
              type="text"
              label="Field of Study"
              placeholder="Computer Science"
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
              label="University / Collage / School"
              placeholder="Oxford University"
            />

            <SelectWraper
              label="Passing Year"
              placeholder="Passing Year"
              options={options}
              value={values?.passingYear}
              handleChange={handleChange}
            />
          </Stack>

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

export default EducationCard;
