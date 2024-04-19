"use client";
import { AppBar, Avatar, Box, Stack, Toolbar } from "@mui/material";
import { IoIosNotificationsOutline } from "react-icons/io";
import React from "react";
import img from "@/assets/images/img1.png";
import { DarkMode } from "@/utils/svg-icons";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { toggleHamburger } from "@/redux/slices/hamburger";

const Appbar = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: "100%", float: "right", height: "62px" }}>
      <AppBar
        position="relative"
        sx={{
          bgcolor: "white",
          boxShadow: "none",
          boxShadow: "0px 2px 4px 0px rgba(165, 163, 174, 0.30)",
          borderRadius: "6px",
        }}
      >
        <Toolbar sx={{ height: "62px" }}>
          <Stack
            direction="row"
            gap="1rem"
            alignItems="center"
            justifyContent={{
              xs: "space-between",
              md: "space-between",
              lg: "end",
            }}
            sx={{ width: "100%" }}
          >
            <MenuIcon
              sx={{
                color: "#4B465C",
                fontSize: "25px",
                cursor: "pointer",
                display: { xs: "block", md: "block", lg: "none" },
              }}
              onClick={() => dispatch(toggleHamburger(true))}
            />
            <Stack
              direction="row"
              gap="1rem"
              alignItems="center"
              justifyContent="end"
            >
              <DarkMode />
              <IoIosNotificationsOutline
                fontSize="30px"
                color="#4B465C"
                cursor="pointer"
              />
              <Avatar
                alt="Remy Sharp"
                sx={{ width: "38px", height: "38px", cursor: "pointer" }}
                src={img.src}
              />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
