import React, { useState } from "react";
import { CustomCard } from "../styles/Card";
import { ResumeBuilderText, ResumeBuilderTitle } from "../styles/Typography";
import { Box, Stack, Typography } from "@mui/material";
import { BlueButton } from "../styles/Buttons";
import TextFieldWraper from "./TextFieldWraper";
import SelectWraper from "./SelectWraper";
import { IoIosAddCircle } from "react-icons/io";
import AddMoreBtn from "../common/AddMoreBtn";

const options1 = [
  { label: "English", value: "English" },
  { label: "Urdu", value: "Urdu" },
];

const options2 = [
  { label: "Fluent", value: "Fluent" },
  { label: "Conversational", value: "Conversational" },
  { label: "Intermediate", value: "Intermediate" },
];

const LanguageCard = () => {
  const [values, setValues] = useState({
    language: "English",
    proficiencyLevel: "Fluent",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <CustomCard sx={{ p: "22px 30px", minHeight: '945px' }}>
      <ResumeBuilderTitle>Language</ResumeBuilderTitle>
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
            <SelectWraper
              label="Languages Spoken "
              placeholder="Languages Spoken "
              options={options1}
              value={values?.language}
              handleChange={handleChange}
              name="language"
            />

            <SelectWraper
              label="Proficiency level"
              placeholder="Proficiency level"
              options={options2}
              value={values?.proficiencyLevel}
              handleChange={handleChange}
              name="proficiencyLevel"
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

export default LanguageCard;
