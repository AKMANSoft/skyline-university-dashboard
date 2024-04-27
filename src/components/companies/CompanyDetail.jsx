"use client";
import {
  Box,
  Card,
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
import JobCardItem from "./JobCardItem";
import icon1 from "@/assets/icons/print-icon.png"
import icon2 from "@/assets/icons/order-icon3.png"
import icon3 from "@/assets/icons/order-icon5.png"
import Link from "next/link";

const cardItems = [
  {
    total: 65,
    title: "Total Job Posted",
    icon: icon1,
    borderColor: '#00318B'
  },
  {
    total: 55,
    status: "Jobs Listed Currently",
    icon: icon2,
    borderColor: '#00CA99'
  },
  {
    total: 100,
    status: "Total Shortlist Alumni's",
    icon: icon3,
    borderColor: '#F7CA18'
  }
]

const CompanyDetail = () => {
  return (
      <Box sx={{ width: "100%" }}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap="24.5px"
          sx={{ width: "100%" }}
        >
          {cardItems?.map((item, index) => (
            <JobCardItem 
              title={item?.title}
              status={item?.status}
              total={item.total}
              icon={item.icon}
              borderColor={item.borderColor}
            />
          ))}
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
  );
};

export default CompanyDetail;
