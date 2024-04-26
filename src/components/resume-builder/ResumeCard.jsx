import React from "react";
import { CustomCard } from "../styles/Card";
import { ResumeBuilderText, ResumeBuilderTitle } from "../styles/Typography";

const options = [{ label: "UAE", value: "uae" }];

const ResumeCard = () => {
  return (
    <CustomCard sx={{ p: "22px 30px" }}>
      <ResumeBuilderTitle>Select Your Resumes</ResumeBuilderTitle>
      <ResumeBuilderText sx={{ mt: "3px" }}>
      Select resume template with your choice
      </ResumeBuilderText>
    </CustomCard>
  );
};

export default ResumeCard;
