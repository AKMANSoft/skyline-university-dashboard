import React from "react";
import { Stack, Box, Typography, Modal, Radio, Divider } from "@mui/material";
import Image from "next/image";
import pdfImg from "@/assets/images/pdf-img.png";
import { RiUploadCloud2Line } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { BlueButton } from "@/components/styles/Buttons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 606,
  height: "auto",
  maxHeight: "844px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderColor: "0px solid transparent",
  borderRadius: "6px",
  py: "30px",
  px: "18px",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
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
};

const resumes = [
  {
    title: "React",
    name: "John Dev Resume",
    updatedAt: "Updated on 20-05-2023",
  },
  { title: "WordPress", name: "My Resume", updatedAt: "Updated on 20-05-2023" },
];

const options = [
  {
    title: "Build Your Resumes",
    text: "We will guide your throughout the process",
  },
  {
    title: "Upload New Resume",
    text: "You can upload your resumes from your gallery",
  },
  { title: "Apply Without Resume", text: "Resume is optional for this job" },
];

const AddResumeModal = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontSize: "26px",
              fontWeight: 600,
              color: "#4B465C",
              textAlign: "center",
            }}
          >
            Add a Resume For The Employer
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontSize: "15px",
              fontWeight: 400,
              opacity: ".7",
              color: "#4B465C",
              textAlign: "center",
            }}
          >
            Select or build Resumes or you can apply without resumes
          </Typography>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              color: "#4B465C",
              mt: "25px",
              mb: "6px",
            }}
          >
            Select a Resume
          </Typography>
          {resumes?.map((resume, index) => (
            <Box
              key={index}
              sx={{
                padding: "12px 19px",
                border: "1px solid #EAEAEA",
                borderRadius: "6px",
                mb: "20px",
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  fontSize: "18px",
                  color: "#00318B",
                  mb: "12px",
                }}
              >
                {resume?.title} Resume
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" alignItems="center" gap="4px">
                  <Image priority alt="pdf image" src={pdfImg} width={37} height={37} />
                  <Box>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{
                        fontSize: "15px",
                        color: "#00318B",
                      }}
                    >
                      {resume?.name}
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{
                        fontSize: "13px",
                        color: "#ADADAD",
                      }}
                    >
                      {resume?.updatedAt}
                    </Typography>
                  </Box>
                </Stack>
                <Radio />
              </Stack>
            </Box>
          ))}
          <Stack
            direction="row"
            alignItems="center"
            gap="19px"
            sx={{ my: "12px" }}
          >
            <Divider sx={{ width: "45%" }} />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "18px",
                color: "#ADADAD",
              }}
            >
              or
            </Typography>
            <Divider sx={{ width: "45%" }} />
          </Stack>

          {options?.map((option, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                p: "16px 23px",
                border: "1px solid #D2D4D9",
                bgcolor: "rgba(26, 38, 92, 0.06)",
                borderRadius: "6px",
                cursor: "pointer",
                mb: "20px",
              }}
            >
              <Stack direction="row" alignItems="center" gap="15px">
                <RiUploadCloud2Line fontSize="40px" color="#00318B" />
                <Box>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                      fontSize: "18px",
                      color: "#00318B",
                    }}
                  >
                    {option?.title}
                  </Typography>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                      fontSize: "12px",
                      color: "#ADADAD",
                    }}
                  >
                    {option?.text}
                  </Typography>
                </Box>
              </Stack>
              <FaChevronRight color="#00318B" fontSize="25px" />
            </Stack>
          ))}

          <BlueButton
            sx={{
              width: "100%",
              height: "45px !important",
              textTransform: "capitalize",
              bgcolor: "#00318B",
              "&:hover": {
                bgcolor: "#00318B",
              }
            }}
            onClick={handleClose}
          >
            Continue
          </BlueButton>
        </Box>
      </Modal>
    </div>
  );
};

export default AddResumeModal;
