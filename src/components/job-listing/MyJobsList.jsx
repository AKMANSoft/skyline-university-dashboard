"use client";
import React, { useState } from "react";
import {
  Stack,
  Typography,
  MenuItem,
  TextField,
  Box,
  Pagination,
  Select,
} from "@mui/material";
import { CustomCard } from "@/components/styles/Card";
import AddIcon from "@mui/icons-material/Add";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BlueButton } from "../styles/Buttons";
import MyJobListTable from "./MyJobsListTable";
import Link from "next/link";

const MyJobsList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CustomCard sx={{ py: "24px" }}>
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
              inputProps: {
                style: { fontSize: "12px" },
              },
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
            IconComponent={RiArrowDropDownLine}
            sx={{
              width: { xs: "111px", sm: "120px", md: "155px" },
              height: "38px",
              borderRadius: "6px",
              color: "#4B465C",
              fontSize: { xs: "12px", sm: "16px" },
              px: "0px",
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
        <Link href='/post-a-job'>
        <BlueButton
          variant="contained"
          sx={{
            minWidth: { xs: "60px", sm: "120px" },
            textTransform: "capitalize",
            bgcolor: "#00318B",
            ml: { xs: "10px", sm: "16px" },
            fontSize: { xs: "12px", sm: "16px" },
            px: { xs: "6px", sm: "10px" },
          }}
        >
          <AddIcon
            sx={{
              color: "white",
              fontSize: { xs: "10px", sm: "14px", md: "22px" },
              mr: { xs: 0, sm: 1 },
            }}
          />{" "}
          Post a Job
        </BlueButton>
        </Link>
      </Stack>

      <Box
        sx={{
          width: "100%",
          mt: '17px',
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            width: "4px",
            height: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            width: "3px",
            height: "3px",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
            borderRadius: "4px",
          },
        }}
      >
        <MyJobListTable />
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
    </CustomCard>
  );
};

export default MyJobsList;
