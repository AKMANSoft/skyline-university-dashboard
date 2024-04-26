'use client'
import React, { useState } from "react";
import {
  Box,
  Stack,
  Grid,
} from "@mui/material";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import OptionsCard from "@/components/resume-builder/OptionsCard";
import PersonalInfo from "@/components/resume-builder/PersonalInfo";
import Summary from "@/components/resume-builder/Summary";
import EducationCard from "@/components/resume-builder/EducationCard";
import WorkExpCard from "@/components/resume-builder/WorkExpCard";
import LanguageCard from "@/components/resume-builder/LanguageCard";
import AreaOfExpCard from "@/components/resume-builder/AreaOfExpCard";
import Certifications from "@/components/resume-builder/Certifications";
import ReferenceCard from "@/components/resume-builder/ReferenceCard";
import ResumeDesign from "@/components/resume-builder/ResumeDesign";

const values = {
    title: "Build Resume",
  };

const ResumeBuilder = () => {
    const[active, setActive] = useState(1)
  return (
    <main>
      <Box sx={{ width: "100%", height: "auto" }}>
        <Stack direction="row">
          <Box sx={{ width: { md: "0px", lg: "260px" } }}></Box>
          <ContentBox
            sx={{ width: { xs: "100%", md: "100%", lg: "calc(100% - 260px)" } }}
          >
            <Appbar />

            <Stack sx={{ width: "100%", mt: "90px", mb: "17px" }}>
              <BreedCrumb values={values} />
            </Stack>

            <Grid container columnSpacing={{xs:2,sm:3}}>
                <Grid item lg={3} sx={{zIndex:999}}>
                    <OptionsCard active={active} setActive={setActive} />
                </Grid>
                <Grid item lg={5}>
                    {active===1 && <PersonalInfo />}
                    {active===2 && <Summary />}
                    {active===3 && <EducationCard />}
                    {active===4 && <WorkExpCard />}
                    {active===5 && <LanguageCard />}
                    {active===6 && <AreaOfExpCard />}
                    {active===7 && <Certifications />}
                    {active===8 && <ReferenceCard />}
                </Grid>
                <Grid item lg={4}>
                  <ResumeDesign />
                </Grid>
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default ResumeBuilder;
