"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  Avatar,
  Divider,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import logoImg from "@/assets/images/logoImg.png";
import { useState } from "react";
import { BlueButton } from "@/components/styles/Buttons";

const GreenText = styled(Typography)(({ theme }) => ({
  color: "#289D67",
  fontsize: "16px",
  lineHeight: "22px",
}));

const orders = [{}, {}, {}];

const AddCategoryDrawer = ({ open, toggleDrawer }) => {
  const [values, setValues] = useState({
    title: "",
    slug: "",
    attachment: "",
    parentCategory: "",
    categoryStatus: "Published",
  })

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => toggleDrawer(false)}
        PaperProps={{ elevation: 0, style: { backgroundColor: "transparent" } }}
      >
        <Box
          sx={{
            width: { xs: "100vw", md: 465, lg: 565 },
            minHeight: "100vh",
            height: "100%",
            bgcolor: "white",
            borderRadius: "10px",
            px: 0,
            py: "42px",
            overflow: "auto",
          }}
          role="presentation"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: "30px", mb: "34px" }}
          >
            <Typography
              variant="body1"
              color="#5D596C"
              sx={{ fontWeight: 600, fontSize: "22px" }}
            >
              Add Category
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                width: "32px",
                height: "32px",
                boxShadow: "0px 2px 4px 0px rgba(165, 163, 174, 0.30)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => toggleDrawer(false)}
            >
              <IoCloseOutline color="#5D596C" fontSize="22px" />
            </Box>
          </Stack>

          <Divider sx={{ mt: "21px", mb: "30px" }} />

          <Box sx={{ width: "100%", px: "30px", mb:'20px' }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#4B465C",
                fontSize: "13px",
                fontWeight: 400,
                mb: "11px",
                lineHeight: "19px",
              }}
            >
              Title
            </InputLabel>
            <TextField
              id="outlined-basic"
              placeholder="Enter category title"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: {
                  height: "36px !important",
                },
              }}
              sx={{
                width: "100%",
              }}
            />
          </Box>

          <Box sx={{ width: "100%", px: "30px", mb:'20px' }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#4B465C",
                fontSize: "13px",
                fontWeight: 400,
                mb: "11px",
                lineHeight: "19px",
              }}
            >
              Slug
            </InputLabel>
            <TextField
              id="outlined-basic"
              placeholder="Enter Slug"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: {
                  height: "36px !important",
                },
              }}
              sx={{
                width: "100%",
              }}
            />
          </Box>

          <Box sx={{ width: "100%", px: "30px", mb:'20px' }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#4B465C",
                fontSize: "13px",
                fontWeight: 400,
                mb: "11px",
                lineHeight: "19px",
              }}
            >
              Attachment
            </InputLabel>
            <TextField
              id="outlined-basic"
              placeholder="Enter Slug"
              type="file"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: {
                  height: "36px !important",
                },
              }}
              sx={{
                width: "100%",
              }}
            />
          </Box>

          <Box sx={{ width: "100%", px: "30px", mb:'20px' }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#4B465C",
                fontSize: "13px",
                fontWeight: 400,
                mb: "5px",
                lineHeight: "19px",
              }}
            >
              Parent Category
            </InputLabel>
            <Select
            id="outlined-basic"
            placeholder="Select"
            variant="outlined"
            value=""
            displayEmpty
            sx={{
              width: "100%",
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
              Select
            </MenuItem>
            <MenuItem value="Active">Active</MenuItem>
          </Select>
          </Box>

          <Box sx={{ width: "100%", px: "30px", mb:'20px' }}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#4B465C",
                fontSize: "13px",
                fontWeight: 400,
                mb: "11px",
                lineHeight: "19px",
              }}
            >
              Parent Category
            </InputLabel>
            <Select
            id="outlined-basic"
            placeholder="Select category status"
            variant="outlined"
            value={values?.categoryStatus}
            displayEmpty
            sx={{
              width: "100%",
              height: "38px",
              borderRadius: "6px",
              color: values?.categoryStatus==="Published" ? "#4B465C" : "#B7B5BE",
              bgcolor: values?.categoryStatus==="Published" ? "rgba(0, 202, 153, 0.10)" : "",
              borderColor: values?.categoryStatus==="Published" ? "rgba(0, 202, 153, 0.21)" : "",
              fontSize: { xs: "12px", sm: "16px" },
              "& .MuiSelect-root": {
                color: values?.categoryStatus==="Published" ? "#4B465C" : "#B7B5BE",
              },
            }}
          >
            <MenuItem value="" disabled>
                Select category status
            </MenuItem>
            <MenuItem value="Published">Published</MenuItem>
          </Select>
          </Box>

          <Stack direction='row' justifyContent='end' sx={{width: '100%', px:'30px'}}>
            <BlueButton sx={{bgcolor: "#00318B", width: '123px', height: '38px', mt: '20px', "&:hover":{bgcolor: '#00318B'}}}>
                Save
            </BlueButton>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default AddCategoryDrawer;
