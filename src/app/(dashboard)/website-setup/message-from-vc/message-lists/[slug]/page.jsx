"use client";
import Sidebar from "@/components/sidebar";
import React from "react";
import { Box, Stack } from "@mui/material";
import Appbar from "@/components/appbar";
import { ContentBox } from "@/components/styles/Box";
import { BlueButton } from "@/components/styles/Buttons";
import BreedCrumb from "@/components/mui/breedcrumbs";
import ReadMore from "./ReadMoreText";
import { useRouter } from "next/navigation";
import { CustomCard } from "@/components/styles/Card";

const values = {
  title: "Read More",
  links: [
    {
      title: "Message From VC",
      path: "/website-setup/message-from-vc",
    },
  ],
};

const Page = () => {
  const router = useRouter();
  return (
    <main>
      {/* <Sidebar /> */}
      <Box sx={{ width: "100%", height: "auto" }}>
        <Stack direction="row">
          <Box sx={{ width: {xs:'0px',lg:"260px"} }}></Box>
          <ContentBox
            sx={{ width: { xs: "100%", md: "100%", lg: "calc(100% - 260px)" } }}
          >
            <Appbar />
            <CustomCard sx={{ p: "20px", mt: "90px" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ width: "100%", mb: "17px" }}
              >
                <BreedCrumb values={values} />

                <Stack direction='row' gap={{xs:'10px',sm:'20px'}}>
                  <BlueButton
                    variant="outlined"
                    sx={{
                      textTransform: "capitalize",
                      border: "1px solid #00318B",
                      color: "#00318B !important",
                      padding: {xs:'3px 4px',sm:'5px 10px'}
                    }}
                  >
                    Delete
                  </BlueButton>
                  <BlueButton
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      bgcolor: "#00318B",
                      padding: {xs:'3px 4px',sm:'5px 10px'}
                    }}
                    onClick={() =>
                      router.push(`/website-setup/message-from-vc`)
                    }
                  >
                    Edit
                  </BlueButton>
                </Stack>
              </Stack>
              <ReadMore />
            </CustomCard>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
