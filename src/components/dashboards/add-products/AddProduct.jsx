"use client";
import { CustomCard } from "@/components/styles/Card";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(
  () => import('@/components/text-editor'),
  { ssr: false }
);
import styled from "@emotion/styled";
import {
  InputLabel,
  Select,
  Stack,
  TextField,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import React from "react";

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "13px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: "#5D596C",
}));

const AddProduct = () => {
  return (
    <CustomCard sx={{ p: "24px", minHeight: '876px' }}>
      <Typography variant="body1" color="#5D596C" sx={{ fontSize: "18px" }}>
        Product Information
      </Typography>
      <Box>
        <form>
          <Box sx={{ mt: "25px", mb: "19px" }}>
            <CustomLabel id="demo-simple-select-label" sx={{ mb: "5px" }}>
              Name
            </CustomLabel>
            <TextField
              id="outlined-basic"
              placeholder="John"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: {
                  height: "38px !important",
                },
              }}
              sx={{
                width: "100%",
                borderRadius: "6px",
              }}
            />
          </Box>

          <Stack
            direction={{ xs: "column", lg: "row" }}
            alignItems={{ xs: "start", lg: "center" }}
            justifyContent="space-between"
            gap={{ xs: "20px", lg: "30px", xl: "51px" }}
            sx={{ mb: "19px" }}
          >
            <Box sx={{ width: "100%" }}>
              <CustomLabel id="demo-simple-select-label" sx={{ mb: "5px" }}>
                SKU
              </CustomLabel>
              <TextField
                id="outlined-basic"
                placeholder="John"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  sx: {
                    height: "38px !important",
                  },
                }}
                sx={{
                  width: "100%",
                  borderRadius: "6px",
                }}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <CustomLabel id="demo-simple-select-label" sx={{ mb: "5px" }}>
                Category
              </CustomLabel>
              <Select
                id="outlined-basic"
                placeholder="Select Status"
                variant="outlined"
                value="Bachelor in Computer Science"
                sx={{
                  width: "100%",
                  height: "38px",
                  borderRadius: "6px",
                  color: "#757575",
                  borderColor: "#DBDADE",
                  "& .MuiSelect-root": {
                    color: "#757575",
                  },
                }}
              >
                <MenuItem value="Bachelor in Computer Science">Shoes</MenuItem>
              </Select>
            </Box>
          </Stack>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            alignItems={{ xs: "start", lg: "center" }}
            justifyContent="space-between"
            gap={{ xs: "20px", lg: "30px", xl: "51px" }}
            sx={{ mb: "19px" }}
          >
            <Box sx={{ width: "100%" }}>
              <CustomLabel id="demo-simple-select-label" sx={{ mb: "5px" }}>
                Quantity
              </CustomLabel>
              <TextField
                id="outlined-basic"
                placeholder="John"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  sx: {
                    height: "38px !important",
                  },
                }}
                sx={{
                  width: "100%",
                  borderRadius: "6px",
                }}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <CustomLabel id="demo-simple-select-label" sx={{ mb: "5px" }}>
                Status
              </CustomLabel>
              <Select
                id="outlined-basic"
                placeholder="Select Status"
                variant="outlined"
                value="Bachelor in Computer Science"
                sx={{
                  width: "100%",
                  height: "38px",
                  borderRadius: "6px",
                  color: "#00CA99",
                  borderColor: "rgba(0, 202, 153, 0.21)",
                  bgcolor: "rgba(0, 202, 153, 0.10)",
                  "& .MuiSelect-root": {
                    color: "#00CA99",
                  },
                }}
              >
                <MenuItem value="Bachelor in Computer Science">
                  Published
                </MenuItem>
              </Select>
            </Box>
          </Stack>
        </form>

        <Box sx={{ mt: "30px" }}>
          <CustomLabel id="demo-simple-select-label" sx={{ mb: "5px" }}>
            Description (Optional)
          </CustomLabel>
          <RichTextEditor />
          {/* <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              mt: 5,
              width: "100%",
              padding: "16px 20px",
              border:
                "1px solid #DBDADE",
              borderTop: "0px",
            }}
          >
            <BlueButton
              sx={{
                bgcolor: "#00318B",
                textTransform: "capitalize",
                height: "38px !important",
                width: "99px",
                "&:hover": { bgcolor: "#00318B" },
              }}
            >
              <FiSend
                color="white"
                fontSize="25px"
                style={{ marginRight: "8px" }}
              />
              Post
            </BlueButton>
            <GoTrash color="#4B465C" />
          </Stack> */}
        </Box>
      </Box>
    </CustomCard>
  );
};

export default AddProduct;
