import React from "react";
import { Stack, Box, Typography, Modal, Button } from "@mui/material";
import cancelImg from "@/assets/images/order-cancel.png";
import Image from "next/image";
import { BlueButton } from "@/components/styles/Buttons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "94%",
  maxWidth: "526px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderColor: "0px solid transparent",
  borderRadius: "6px",
  p: "50px",
  maxHeight: "374px",
  overflowX: "auto",
};

const CancelOrderModal = ({ handleClose, open }) => {
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
              src={cancelImg}
              alt="image"
              style={{ width: "100px", height: "100px" }}
            />
            <Typography
              component="div"
              variant="p"
              sx={{
                color: "#696969",
                fontSize: "18px",
                fontWeight: 600,
                mt: "1rem",
                letterSpacing: "1px",
                textTransform: "capitalize",
              }}
            >
              Are you sure you want to cancel your order
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap="20px"
              sx={{ mt: "1rem" }}
            >
              <BlueButton
                sx={{
                  bgcolor: "#00318B",
                  width: "110px",
                  height: "45px !important",
                  fontSize: '18px',
                  "&:hover": {
                    bgcolor: "#00318B",
                  },
                }}
              >
                Yes
              </BlueButton>
              <Button
                sx={{
                  border: "2px solid #00318B",
                  width: "110px",
                  height: "45px !important",
                  color: "#00318B",
                  borderRadius: "6px",
                  fontSize: '18px',
                  textTransform: 'capitalize',
                  "&:hover": {
                    borderColor: "#00318B",
                  },
                }}
              >
                No
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default CancelOrderModal;
