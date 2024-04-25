import React from "react";
import { Stack, Box, Typography, Modal, Button } from "@mui/material";
import succImg from "@/assets/images/placed-success.png";
import Image from "next/image";
import { BlueButton } from "@/components/styles/Buttons";
import Link from "next/link";

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
  maxHeight: "440px",
  overflowX: "auto",
};

const OrderPlacedModal = ({ handleClose, open }) => {
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
                color: "#696969",
                fontSize: "18px",
                fontWeight: 600,
                mt: "1rem",
              }}
            >
              Your Order has been placed
            </Typography>
            <Typography
              component="div"
              variant="p"
              sx={{
                color: "#289D67",
                fontSize: "16px",
                fontWeight: 600,
                mt: "10px",
              }}
            >
              Reference# - 26562
            </Typography>
            <Typography
              component="div"
              variant="p"
              sx={{
                color: "#696969",
                fontSize: "16px",
                fontWeight: 500,
                textAlign: "center",
                mt: "10px",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              iste deserunt beatae dolorem animi. Ipsam repudiandae quibusdam
              libero dolores sapiente.
            </Typography>

            <Link style={{width: '100%'}} href="/alumni-store/apparel">
            <BlueButton
              sx={{
                bgcolor: "#00318B",
                width: "100%",
                height: "50px !important",
                mt: "1rem",
                borderRadius: "50px",
                "&:hover": {
                    bgcolor: "#00318B",
                }
              }}
            >
              Continue Shopping
            </BlueButton>
            </Link>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default OrderPlacedModal;
