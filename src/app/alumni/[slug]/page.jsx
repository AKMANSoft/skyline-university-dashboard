import React from "react";
import { Box, Stack } from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import BasicDetailCard from "@/components/alumni/alumni-cards/BasicDetailCard";
import VolunteeringCard from "@/components/alumni/alumni-cards/VolunteeringCard";
import ExperienceCard from "@/components/alumni/alumni-cards/ExperienceCard";
import { BlueButton, SuspendButton } from "@/components/styles/Buttons";

const values = {
  title: "View Details",
  links: [
    {
      title: "Alumni's",
      path: "/alumni",
    },
  ],
};

const details = [
  {
    cardTitle: "Experience",
    data: [
      {
        title1: "Chief Executive Officer",
        title2: "Codelabs Private Limited · Full-time",
        title3: "Jan 2020 - Present · 4 yrs 3 months, Karachi · On-site",
      },
      {
        title1: "Technology Consultant",
        title2: "DataGride FZ LLC · Full-time",
        title3:
          "Jan 2021 - Present · 3 yrs 3 months, United Arab Emirates · Hybrid",
      },
      {
        title1: "Director",
        title2: "S E T I GENERAL TRADING L.L.C · Full-time",
        title3:
          "Jan 2020 - Present · 4 yrs 3 months, Dubai, United Arab Emirates",
      },
    ],
  },
  {
    cardTitle: "Education",
    data: [
      {
        title1: "Institute of Business Administration",
        title2: "Graduation, Computer Science ",
        title3: "Jan 2006 - 2010",
      },
      {
        title1: "Pakistan Embassy School Jeddah",
        title2: "SSC, Science",
        title3: "1990-2002",
      },
    ],
  },
  {
    cardTitle: "Licenses & certifications",
    data: [
      {
        title1: "International Trade Council Membership Certificate",
        title2: "International Trade Council",
        title3: "Credential ID 52690899034568",
      },
      {
        title1: "Pakistan Embassy School Jeddah",
        title2: "SSC, Science",
        title3: "1990-2002",
      },
    ],
  },
  {
    cardTitle: "Volunteering",
    data: [
      {
        title1: "Assistant Secretary General",
        title2: "Pan African Game Changers",
        title3: "Apr 2023 - Present · 1 yr",
      },
      {
        title1: "Pakistan Embassy School Jeddah",
        title2: "SSC, Science",
        title3: "1990-2002",
      },
    ],
  },
];

const Page = () => {
  return (
    <main>
      <Sidebar />
      <Box sx={{ width: "100%", height: "auto" }}>
        <Stack direction="row">
          <Box sx={{ width: { md: "0px", lg: "260px" } }}></Box>
          <ContentBox
            sx={{ width: { xs: "100%", md: "100%", lg: "calc(100% - 260px)" } }}
          >
            <Appbar />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ width: "100%", mt: "90px", mb: "17px" }}
            >
              <BreedCrumb values={values} />
              <Stack direction="row" gap="1rem" alignItems='center'>
                <BlueButton sx={{bgcolor: '#00318B'}}>
                    Edit
                </BlueButton>
                <SuspendButton sx={{width: '105px',bgcolor: 'rgba(243, 16, 60, 0.15)'}}>
                    Suspend
                </SuspendButton>
              </Stack>
            </Stack>

            <Stack
              direction={{ xs: "column", md: "column", lg: "row" }}
              alignItems="start"
              justifyContent="space-between"
              gap="26px"
            >
              <Box sx={{ width: "100%" }}>
                <BasicDetailCard />
                <VolunteeringCard data={details[3]} />
              </Box>
              <Box sx={{ width: "100%" }}>
                <ExperienceCard data={details[0]} />
                <ExperienceCard data={details[1]} />
                <ExperienceCard data={details[2]} />
              </Box>
            </Stack>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
