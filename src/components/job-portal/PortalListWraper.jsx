"use client";
import React, { useState } from "react";
import {
  Stack,
  Typography,
  MenuItem,
  TextField,
  Box,
  Pagination,
  Button,
  Menu,
} from "@mui/material";
import { CustomCard } from "@/components/styles/Card";
import { FilterIcon } from "@/utils/svg-icons";
import JobsListTable from "./JobsListTable";

const PortalListWraper = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleClose();
  };

  return (
    <CustomCard sx={{ py: "24px" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: "24px", mb: "14px" }}
      >
        <Typography
          component="div"
          variant="h5"
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "24px",
            color: "#4B465C",
          }}
        >
          Jobs List
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={{ xs: "10px", sm: "21px" }}
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
                style: { fontSize: "14px" },
              },
              sx: {
                height: "38px !important",
                "&::placeholder": {
                  fontSize: { xs: "12px", sm: "16px" },
                },
              },
            }}
            sx={{
              fontSize: { xs: "12px", sm: "16px" },
              width: { xs: "107px", sm: "107px", md: "200px" },
              borderRadius: "6px",
            }}
          />

          <div>
            <Button
              onClick={handleClick}
              sx={{
                color: "#00318B",
                fontSize: "18px",
                height: "24px",
                borderRadius: "6px",
                width: {xs:'92px', sm:"126px"},
                height: "38px",
                bgcolor: "#D9E0EE",
                textTransform: "capitalize",
                border: "1px sold rgba(0, 49, 139, 0.05)"
              }}
            >
              Filter
              <span style={{marginLeft: '10px', paddingTop:"10px"}}>
                <FilterIcon />
              </span>
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <MenuItem onClick={() => handleOptionSelect("Name")}>
                Name
              </MenuItem>
            </Menu>
          </div>
        </Stack>
      </Stack>

      <Box
        sx={{
          width: "100%",
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
        <JobsListTable />
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

export default PortalListWraper;
