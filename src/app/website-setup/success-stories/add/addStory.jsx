import BreedCrumb from "@/components/mui/breedcrumbs";
import { BlueButton, ResetButton } from "@/components/styles/Buttons";
import RichTextEditor from "@/components/text-editor";
import {
  Card,
  Grid,
  Stack,
  Typography,
  Box,
  TextField,
  InputLabel,
} from "@mui/material";
import React from "react";
import { FiSend } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

const values = {
  title: "Add New Success Stories",
  links: [
    {
      title: "Success Stories List",
      path: "/website-setup/success-stories",
    },
  ],
};

const AddStory = () => {
  return (
        <Card
          sx={{
            boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
            border: "none",
            p: "24px",
            width: '100vw',
            mt: '90px',
          }}
        >
          <BreedCrumb values={values} />

          <Stack direction="row" gap="20px" sx={{ mt: "27px" }}>
            <Box
              sx={{
                width: "155px",
                height: "149px",
                borderRadius: "5px",
                background: "#D9D9D9",
              }}
            ></Box>
            <Stack
              direction="column"
              justifyContent="end"
              sx={{
                height: "149px",
              }}
            >
              <Stack direction="row" sx={{ mb: "10px" }}>
                <BlueButton
                  variant="contained"
                  sx={{ mr: "20px", bgcolor: "#00318B" }}
                >
                  Upload Image*
                </BlueButton>
                <ResetButton variant="secondary">Reset</ResetButton>
              </Stack>
              <Typography
                variant="p"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#4B465C",
                  maxWidth: "332px",
                }}
              >
                Allowed JPG, or PNG. Max size of 800K, Maximum width 440px ,
                Maximum Hight 600px
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" gap="104px" sx={{ mt: "30px" }}>
            <Box sx={{ width: "100%", maxWidth: "450px" }}>
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
                Title*
              </InputLabel>
              <TextField
                id="outlined-basic"
                placeholder="enter here"
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
          </Stack>

          <Box sx={{ mt: "30px" }}>
            <Box
              sx={{
                width: "100%",
                padding: "16px 20px",
                borderRdius: "6px 6px 0px 0px",
                background: "rgba(75, 70, 92, 0.04)",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "#4B465C",
                  fontSize: "18px",
                  lineHeight: "24px",
                  fontWeight: 600,
                }}
              >
                Description
              </Typography>
            </Box>
            <RichTextEditor />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                mt: 5,
                width: "100%",
                padding: "16px 20px",
                border:
                  "1px solid var(--Light-Solid-Color-Extra-Divider, #DBDADE)",
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
            </Stack>
          </Box>
        </Card>
  );
};

export default AddStory;
