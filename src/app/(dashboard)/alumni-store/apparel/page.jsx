"use client";
import React, { useState } from "react";
import {
  Box,
  Stack,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { ContentBox } from "@/components/styles/Box";
import Appbar from "@/components/appbar";
import { CustomCard } from "@/components/styles/Card";
import SearchIcon from "@mui/icons-material/Search";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CustomDivider } from "@/components/styles/CustomDivider";
import ApparelCard from "@/components/alumni-store/ApparelCard";
import ShopingCartModal from "@/components/alumni-store/modals/ShopingCartModal";

const cards = [
  { discount: "20%" },
  {},
  { discount: "20%" },
  {},
  { discount: "20%" },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

const Apparel = () => {
  const [openCart, setOpenCart] = useState(false);
  const toggleDrawer = (newOpen) => {
    setOpenCart(newOpen);
  };
  return (
    <main>
      <ShopingCartModal open={openCart} toggleDrawer={toggleDrawer} />
      <Box sx={{ width: "100%", height: "auto" }}>
        <Stack direction="row">
          <Box sx={{ width: { md: "0px", lg: "260px" } }}></Box>
          <ContentBox
            sx={{ width: { xs: "100%", md: "100%", lg: "calc(100% - 260px)" } }}
          >
            <Appbar />

            <Grid sx={{ mt: "90px" }}>
              <CustomCard sx={{ py: "24px" }}>
                <Stack
                  direction="row"
                  alignItems="end"
                  justifyContent="space-between"
                  gap="1rem"
                  sx={{ px: "24px" }}
                >
                  <TextField
                    label=""
                    placeholder="Search (Ctrl+/)"
                    sx={{
                      width: "100%",
                      maxWidth: "596px",
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <SearchIcon color="#4B465C" />
                          </IconButton>
                        </InputAdornment>
                      ),
                      sx: {
                        borderRadius: "50px",
                        bgcolor: "#F8F7FA",
                        height: "45px",
                        maxHeight: "45px",
                        "& fieldset": {
                          border: "1px solid #DDD",
                          borderRadius: "50px",
                        },
                      },
                    }}
                  />

                  <Stack
                    direction="row"
                    alignItems="center"
                    gap="10px"
                    sx={{ pt: "16px" }}
                  >
                    <Box
                      sx={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        bgcolor: "rgba(0, 202, 153, 0.10)",
                        border: "1px solid #D9D9D9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => toggleDrawer(true)}
                    >
                      <AiOutlineShoppingCart color="#00CA99" fontSize="22px" />
                    </Box>
                    <Typography
                      component="div"
                      variant="p"
                      sx={{ color: "#5D586C", fontWeight: "500" }}
                    >
                      Cart
                    </Typography>
                  </Stack>
                </Stack>
                <CustomDivider sx={{ mt: "25px", mb: "23px" }} />

                <Grid
                  container
                  columnSpacing={{ xs: 2, sm: "24px" }}
                  rowSpacing={{ xs: 2, sm: "24px" }}
                  sx={{ mt: "60px", px: "24px" }}
                >
                  {cards?.map((card, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      xl={2.4}
                    >
                      <ApparelCard values={card} />
                    </Grid>
                  ))}
                </Grid>
              </CustomCard>
            </Grid>
          </ContentBox>
        </Stack>
      </Box>
    </main>
  );
};

export default Apparel;
