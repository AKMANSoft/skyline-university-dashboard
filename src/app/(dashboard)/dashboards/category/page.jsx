import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import CategoryList from "@/components/dashboards/category/CategoryList";

const values = {
    title: "Category",
    links: [
      {
        title: "eCommerce",
        path: "/dashboards/ecommerce-dashboard",
      },
    ]
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
            <Grid sx={{mt: '90px', mb: '18px'}}>
                <BreedCrumb values={values} />
            </Grid>

            <Grid sx={{mt: '27px'}}>
              <CategoryList />
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
