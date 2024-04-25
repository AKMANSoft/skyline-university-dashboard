import React from "react";
import { Box, Stack, Grid } from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import CardItem from "@/components/events/CardItem";

const values = { title: "Event List" };
const cards = [{}, {}, {}, {}];

const Events = () => {
  return (
    <main>
      {/* <Sidebar /> */}
      <Box sx={{ width: "100%", height: "auto" }}>
        <Stack direction="row">
          <Box sx={{ width: { md: "0px", lg: "260px" } }}></Box>
          <ContentBox
            sx={{ width: { xs: "100%", md: "100%", lg: "calc(100% - 260px)" } }}
          >
            <Appbar />

            <Grid xs={12} sx={{ mt: "90px", mb:'25px' }}>
              <BreedCrumb values={values} />
            </Grid>

            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {cards?.map((card, index) => (
                <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
                  <CardItem />
                </Grid>
              ))}
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Events;
