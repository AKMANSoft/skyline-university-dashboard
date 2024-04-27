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
  Select,
} from "@mui/material";
import { CustomCard } from "@/components/styles/Card";
import { IoIosArrowDown } from "react-icons/io";
import ProductTable from "./ProductTable";
import ProductTableMobile from "./ProductMobileTable";
import { RiArrowDropDownLine } from "react-icons/ri";

const ProductsList = () => {
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
        direction={{xs:'row',sm:'column',xl:"row"}}
        alignItems={{xs:'center',sm:'start',xl:"center"}}
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
            mb:{xs: 2,xl:0}
          }}
        >
          Product List
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={{ xs: "10px", sm: "21px" }}
        >
          <Select
            id="outlined-basic"
            placeholder="Select Status"
            variant="outlined"
            value=""
            displayEmpty
            sx={{
              width: { xs:'92px', sm: "170px", lg: "270px" },
              height: "38px",
              borderRadius: "6px",
              color: "#4B465C",
              bgcolor: '#F6F6F6',
              fontSize: { xs: "12px", sm: "16px" },
              px: "0px",
              "& .MuiSelect-root": {
                color: "#757575",
              },
            }}
          >
            <MenuItem value="" disabled>
              Status
            </MenuItem>
            <MenuItem value="Active">Active</MenuItem>
          </Select>

          <Select
            id="outlined-basic"
            placeholder="Select Status"
            variant="outlined"
            value=""
            displayEmpty
            sx={{
              width: { xs:'92px', sm: "170px", lg: "270px" },
              height: "38px",
              display: {xs:'none',sm: 'flex'},
              borderRadius: "6px",
              color: "#4B465C",
              bgcolor: '#F6F6F6',
              fontSize: { xs: "12px", sm: "16px" },
              px: "0px",
              "& .MuiSelect-root": {
                color: "#757575",
              },
            }}
          >
            <MenuItem value="" disabled>
            Category
            </MenuItem>
            <MenuItem value="Active">Active</MenuItem>
          </Select>

          <Select
            id="outlined-basic"
            placeholder="Select Status"
            variant="outlined"
            value=""
            displayEmpty
            sx={{
              width: { xs:'92px', sm: "170px", lg: "270px" },
              height: "38px",
              display: {xs:'none',sm: 'flex'},
              borderRadius: "6px",
              color: "#4B465C",
              bgcolor: '#F6F6F6',
              fontSize: { xs: "12px", sm: "16px" },
              px: "0px",
              "& .MuiSelect-root": {
                color: "#757575",
              },
            }}
          >
            <MenuItem value="" disabled>
            Stock
            </MenuItem>
            <MenuItem value="Active">Active</MenuItem>
          </Select>

          <div>
            <Button
              onClick={handleClick}
              sx={{
                color: "white",
                fontSize: "15px",
                height: "24px",
                borderRadius: "6px",
                width: { xs: "92px", sm: "126px" },
                height: "38px",
                bgcolor: "#00318B",
                textTransform: "capitalize",
              }}
            >
              Export
              <IoIosArrowDown
                fontSize="15px"
                style={{ marginLeft: "10px" }}
                color="#A8AAAE"
              />
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
              <MenuItem onClick={() => handleOptionSelect("Export")}>
                Export
              </MenuItem>
            </Menu>
          </div>
        </Stack>
      </Stack>

      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          display: { xs: "none", sm: "block" },
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
        <ProductTable />
      </Box>
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          display: { xs: "block", sm: "none" },
        }}
      >
        <ProductTableMobile />
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

export default ProductsList;
