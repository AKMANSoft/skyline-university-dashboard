"use client";
import {
  Box,
  Card,
  Link,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  JobListedIcon,
  JobShortlistedIcon,
  PostedIcon,
} from "@/utils/svg-icons";
import { BlueButton } from "../styles/Buttons";
import CompanyListTable from "./CompanyListTable";
import CompanyDetailCard from "./CompanyDetailCard";

const CompanyDetail = () => {
  return (
    <Stack
      direction={{ xs: "column-reverse", md: "column-reverse", lg: "row" }}
      alignItems="start"
      gap="23px"
    >
      <CompanyDetailCard />
      <Box sx={{ width: "100%" }}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap="24.5px"
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "104px",
              p: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "white",
              borderRadius: "6px",
              borderBottom: "2px solid #00318B",
              boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
            }}
          >
            <Stack direction="row" gap="10px" alignItems="center">
              <Box
                sx={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  border: "4px solid #00318B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component="div"
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "22px",
                    color: "#00318B",
                  }}
                >
                  65
                </Typography>
              </Box>
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                  lineHeight: "22px",
                  color: "#5D586C",
                }}
              >
                Total Job Posted
              </Typography>
            </Stack>
            <Box
              sx={{
                width: "37px",
                height: "39px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                background: "rgba(0, 49, 139, 0.06)",
              }}
            >
              <PostedIcon />
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "104px",
              // minWidth: "383px",
              p: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "white",
              borderRadius: "6px",
              borderBottom: "2px solid #00CA99",
              boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
            }}
          >
            <Box>
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "30px",
                  color: "#4B465C",
                }}
              >
                55
              </Typography>
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "22px",
                  color: "#4B465C",
                }}
              >
                Jobs Listed Currently
              </Typography>
            </Box>
            <Box
              sx={{
                width: "37px",
                height: "39px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                background: "rgba(0, 49, 139, 0.06)",
                borderRadius: "6px",
                background: "rgba(0, 202, 153, 0.10)",
              }}
            >
              <JobListedIcon />
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "104px",
              // minWidth: "383px",
              p: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "white",
              borderRadius: "6px",
              borderBottom: "2px solid #F7CA18",
              boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
            }}
          >
            <Box>
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "30px",
                  color: "#4B465C",
                }}
              >
                100
              </Typography>
              <Typography
                component="div"
                variant="p"
                sx={{
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: "22px",
                  color: "#4B465C",
                }}
              >
                Total Shortlist Alumni&apos;s
              </Typography>
            </Box>
            <Box
              sx={{
                width: "37px",
                height: "39px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                background: "rgba(247, 202, 24, 0.10)",
              }}
            >
              <JobShortlistedIcon />
            </Box>
          </Box>
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
            <Link href="/companies/social-company/post-a-job">
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
                Post a Job
              </BlueButton>
            </Link>
          </Stack>

          <Box>
            <Box sx={{ mt: "17px", width: "100%", overflowX: "auto" }}>
              <CompanyListTable />
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: "14px" }}
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
          </Box>
        </Card>
      </Box>
    </Stack>
  );
};

export default CompanyDetail;
