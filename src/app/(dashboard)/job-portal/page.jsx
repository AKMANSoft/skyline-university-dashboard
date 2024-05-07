import React from "react";
import {
  Box,
  Grid,
  Stack,
} from "@mui/material";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import PortalListWraper from "@/components/job-portal/PortalListWraper";

const values = {
    title: 'Jobs Feed'
}

const Page = () => {
  return (
    <main>
      <Box sx={{ width: "100%", height: "auto" }}>
        <Stack direction="row">
          <Box sx={{ width: { md: "0px", lg: "260px" } }}></Box>
          <ContentBox
            sx={{ width: { xs: "100%", md: "100%", lg: "calc(100% - 260px)" } }}
          >
            <Appbar />
            <Grid sx={{mt: "90px"}}>
                <BreedCrumb values={values} />
            </Grid>

            <Grid sx={{mt:'25px'}}>
                <PortalListWraper />
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
