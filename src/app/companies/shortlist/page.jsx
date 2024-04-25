import React from "react";
import {
  Box,
  Stack,
  Grid,
  Link,
  Typography,
  Pagination,
  Card,
  TextField,
} from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import ApplicantTable from "@/components/companies/applicants/ApplicantTable";

const values = {
  title: "Shortlist",
  links: [
    {
      title: "Companies",
      path: "/companies",
    },
  ],
};

const ShortList = () => {
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

            <Stack sx={{ width: "100%", mt: "90px", mb: "17px" }}>
              <BreedCrumb values={values} />
            </Stack>

            <Card
              sx={{
                px: "0px",
                py: "23px",
                mt: "25px",
                boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
              }}
            >
              <Box sx={{ px: "24px" }}>
                <TextField
                  id="outlined-basic"
                  placeholder="Search"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    sx: {
                      height: "38px !important",
                      "&::placeholder": {
                        fontSize: "15px",
                      },
                    },
                  }}
                  sx={{
                    fontSize: { xs: "12px", sm: "16px" },
                    width: "100%",
                    maxWidth: "449px",
                    borderRadius: "6px",
                  }}
                />
              </Box>
              <Box sx={{ mt: "17px", width: "100%", overflowX: "auto" }}>
                <ApplicantTable />
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
                  Showing 1 to 8 of 100 entries
                </Typography>
                <Box>
                  <Pagination
                    count={10}
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

export default ShortList;
