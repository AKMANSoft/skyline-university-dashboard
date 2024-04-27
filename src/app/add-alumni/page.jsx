import Appbar from "@/components/appbar";
import AddCardOne from "@/components/alumni/AddCardOne";
import AddCardTwo from "@/components/alumni/AddCardTwo";
import BreedCrumb from "@/components/mui/breedcrumbs";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import { BlueButton } from "@/components/styles/Buttons";
import { Box, Stack, Grid } from "@mui/material";
import React from "react";

const AddAlumni = () => {
  const values = {
    title: "Add Alumni",
    links: [
      {
        title: "Alumni",
        path: "/alumni",
      },
    ],
  };
  return (
    <main>
      <Box sx={{ width: "100%", height: "auto" }}>
        <Stack direction="row">
          <Box sx={{ width: { md: "0px", lg: "260px" } }}></Box>
          <ContentBox
            sx={{ width: { xs: "100%", md: "100%", lg: "calc(100% - 260px)" } }}
          >
            <Appbar />

            <Grid xs={12} sx={{ mt: "90px", mb: "18px" }}>
              <BreedCrumb values={values} />
            </Grid>

            <Stack direction={{ sm: "column", md: "row" }} gap="26px">
              <AddCardOne />
              <AddCardTwo />
            </Stack>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
                mt: "30px",
              }}
            >
              <BlueButton
                sx={{
                  bgcolor: "#00318B",
                  "&:hover": {
                    bgcolor: "#00318B",
                  },
                }}
              >
                Save
              </BlueButton>
            </Box>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default AddAlumni;
