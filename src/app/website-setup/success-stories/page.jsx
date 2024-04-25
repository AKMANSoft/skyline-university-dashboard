"use client";
import React from "react";
import { Box, Stack, Typography, Card, Pagination } from "@mui/material";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import { BlueButton } from "@/components/styles/Buttons";
import AddIcon from "@mui/icons-material/Add";
import List from "@/components/success-stories/List";
import Link from "next/link";

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

            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ width: "100%", mt: "90px", mb: "1px" }}
            >
              <Typography
                component="p"
                variant="p"
                sx={{
                  fontSize: { xs: "14px", sm: "18px", md: "22px" },
                  fontWeight: "600",
                  color: "#4B465C",
                  lineHeight: "30px",
                  fontFamily: "Public sans",
                }}
              >
                Success Story List
              </Typography>

              <Link href="/website-setup/success-stories/add">
                <BlueButton
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    bgcolor: "#00318B",
                    fontSize: { xs: "12px", sm: "13px", md: "15px" },
                    px:{xs:'5px',sm:'8px',md:'10px'}
                  }}
                >
                  <AddIcon
                    sx={{
                      color: "white",
                      fontSize: { xs: "14px", sm: "18px", md: "22px" },
                      mr: {xs:'1px',sm:1},
                    }}
                  />{" "}
                  Add New Success Story
                </BlueButton>
              </Link>
            </Stack>

            <Card
              sx={{
                px: "0px",
                pb: "23px",
                mt: "14px",
                boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
              }}
            >
              <Box sx={{ width: "100%", overflowX: "auto" }}>
                <List />
              </Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: "14px", px: "24px" }}
              >
                <Typography
                  component="div"
                  variant="p"
                  sx={{
                    fontSize: "13px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    color: "#4B465C",
                  }}
                >
                  Showing 1 to 10 of 100 entries
                </Typography>
                <Box>
                  <Pagination
                    count={5}
                    color="primary"
                    shape="rounded"
                    sx={{
                      "& .MuiPaginationItem-root.Mui-selected": {
                        backgroundColor: "#00318B",
                        color: "#fff",
                      },
                    }}
                    slots={{ previous: "Previous", next: "Next" }}
                  />
                </Box>
              </Stack>
            </Card>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Page;
