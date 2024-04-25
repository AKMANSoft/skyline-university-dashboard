"use client";
import React, { useState } from "react";
import {
  Stack,
  Typography,
  Box,
  Pagination,
} from "@mui/material";
import { CustomCard } from "@/components/styles/Card";
import AddIcon from "@mui/icons-material/Add";
import { BlueButton } from "@/components/styles/Buttons";
import CategoryListTable from "./CategoryTable";
import AddCategoryDrawer from "./AddCategoryDrawer";

const CategoryList = () => {
  const [openCart, setOpenCart] = useState(false);
  const toggleDrawer = (newOpen) => {
    setOpenCart(newOpen);
  };
  return (
    <>
    <AddCategoryDrawer open={openCart} toggleDrawer={toggleDrawer}/>
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
          Category List
        </Typography>
        <BlueButton
          variant="contained"
          sx={{
            textTransform: "capitalize",
            bgcolor: "#00318B",
            fontSize: '15px',
          }}
          onClick={() => toggleDrawer(true)}
        >
          <AddIcon
            sx={{
              color: "white",
              fontSize: { xs: "10px", sm: "14px", md: "22px" },
              mr: { xs: 0, sm: 1 },
            }}
          />{" "}
          Add Category
        </BlueButton>
      </Stack>

      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          // display: { xs: "none", sm: "block" },
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
        <CategoryListTable />
      </Box>
      {/* <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          display: { xs: "block", sm: "none" },
        }}
      >
        <OrderListTableMobile />
      </Box> */}
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
    </>
  );
};

export default CategoryList;
