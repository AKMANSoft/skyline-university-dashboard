import React from "react";
import { Stack, Box, Typography, Modal, Button } from "@mui/material";
import succImg from "@/assets/images/placed-success.png";
import Image from "next/image";
import { BlueButton } from "@/components/styles/Buttons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "94%",
  maxWidth: "541px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderColor: "0px solid transparent",
  borderRadius: "6px",
  p: "50px",
  maxHeight: "361px",
  overflowX: "auto",
};

const SuccessMsgModal = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: { xs: "auto", sm: "auto", md: "100%" } }}>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Image
              src={succImg}
              alt="image"
              style={{ width: "100px", height: "100px" }}
            />
            <Typography
              component="div"
              variant="p"
              sx={{
                color: "#000",
                fontWeight: 600,
                mt: "1rem",
                textAlign: 'center',
              }}
            >
              Your application has been summited successfully, you will be notified soon
            </Typography>

            <BlueButton
              sx={{
                bgcolor: "#00318B",
                width: "100%",
                height: "50px !important",
                mt: "1rem",
                borderRadius: "6px",
                "&:hover": {
                    bgcolor: "#00318B",
                }
              }}
            >
              Back To Dashboard
            </BlueButton>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default SuccessMsgModal;
