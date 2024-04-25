import React from "react";
import {
  Box,
  Stack,
  Grid,
  Typography,
  Pagination,
  Card,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import Sidebar from "@/components/sidebar";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import BreedCrumb from "@/components/mui/breedcrumbs";
import { BlueButton } from "@/components/styles/Buttons";
import AddIcon from "@mui/icons-material/Add";
import AlumniTable from "@/components/alumni/AlumniTable";
import Link from "next/link";

const values = {
  title: "List",
  links: [
    {
      title: "Alumni's",
      path: "/alumni",
    },
  ],
};

const Alumnis = () => {
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
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ px: "24px" }}
                >
                    <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    gap={{ xs: "10px", sm: "16px" }}
                    >
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
                            fontSize: "12px",
                            },
                        },
                        }}
                        sx={{
                        fontSize: { xs: "12px", sm: "16px" },
                        width: { xs: "107px", sm: "107px", md: "200px" },
                        borderRadius: "6px",
                        }}
                    />

                    <Select
                        id="outlined-basic"
                        placeholder="Select Status"
                        variant="outlined"
                        value=""
                        displayEmpty
                        sx={{
                        width: { xs: "120px", sm: "120px", md: "155px" },
                        height: "38px",
                        borderRadius: "6px",
                        color: "#4B465C",
                        fontSize: { xs: "12px", sm: "16px" },
                        "& .MuiSelect-root": {
                            color: "#757575",
                        },
                        }}
                    >
                        <MenuItem value="" disabled>
                        Select Status
                        </MenuItem>
                        <MenuItem value="Active">Active</MenuItem>
                    </Select>
                    </Stack>
                    <Link href="/add-alumni">
                    <BlueButton
                        variant="contained"
                        sx={{
                        minWidth: "120px",
                        textTransform: "capitalize",
                        bgcolor: "#00318B",
                        ml: { xs: "10px", sm: "16px" },
                        fontSize: { xs: "12px", sm: "16px" },
                        }}
                    >
                        <AddIcon
                        sx={{
                            color: "white",
                            fontSize: { sm: "8px", sm: "14px", md: "22px" },
                            mr: { xs: 0, sm: 1 },
                        }}
                        />{" "}
                        Add Alumni
                    </BlueButton>
                    </Link>
                </Stack>
              <Box sx={{ mt: "17px", width: "100%", overflowX: "auto" }}>
                <AlumniTable />
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

export default Alumnis;
