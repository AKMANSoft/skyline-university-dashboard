import React from "react";
import {
  Box,
  Grid,
  Stack
} from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import WelcomeCard from "@/components/alumni-student-dashboard/WelcomeCard";
import ReviewCard from "@/components/alumni-student-dashboard/ReviewCard";
import ShortlistedCard from "@/components/alumni-student-dashboard/ShortlistedCard";
import ProfileViewChartCard from "@/components/alumni-student-dashboard/ProfileViewChartCard";
import AnalyticsCard from "@/components/alumni-student-dashboard/AnalyticsChartCard";
import SearchAppearancceCard from "@/components/alumni-student-dashboard/SearchAppearanceCard";
import JobsForYouCard from "@/components/alumni-student-dashboard/JobsForYouCard";
import UpcomingEvents from "@/components/alumni-student-dashboard/UpcomingEvents";
import TimelineCard from "@/components/company-dashboard/TimelineCard";

const Page = () => {
  
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
            <Grid container columnSpacing={{xs:2,sm:3}} rowSpacing={{xs:2,sm:3}} sx={{mt: '60px'}}>
              <Grid item xs={12} xl={6}>
                <WelcomeCard />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <ReviewCard />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <ShortlistedCard />
              </Grid>
              <Grid item xs={12} lg={6}>
                <ProfileViewChartCard />
              </Grid>
              <Grid item xs={12} lg={6}>
                <AnalyticsCard />
              </Grid>
              
              <Grid item xs={12} sm={6} xl={3}>
                <SearchAppearancceCard 
                    title="How many times you appeared in LinkedIn Searches"
                    percentage="10"
                    total="61"
                />
              </Grid>
              <Grid item xs={12} sm={6} xl={3}>
                <SearchAppearancceCard 
                    title="Impressions"
                    percentage="185.8"
                    total="20"
                />
              </Grid>
              <Grid item xs={12} sm={12} xl={6}>
              <UpcomingEvents />
              </Grid>
              <Grid item xs={12} sm={12} xl={6}>
              <JobsForYouCard />
              </Grid>
              <Grid item xs={12} sm={12} xl={6}>
                <TimelineCard />
              </Grid>
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
