import React from "react";
import { Stack, Box, Typography, Modal, Avatar } from "@mui/material";
import { TbEdit } from "react-icons/tb";
import { GoTrash } from "react-icons/go";

import img from "@/assets/images/profile.png"
import { LuEye } from "react-icons/lu";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderColor: "0px solid transparent",
  borderRadius: '6px',
  py: "30px",
  px: "18px",
};

const DetailsModal = ({ handleClose, open, handleOpenEdit }) => {
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
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "1px",
              color: "#000",
              textTransform: "uppercase",
            }}
          >
            Details of undefined
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: "20px" }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "rgba(75, 70, 92, 0.70)",
                textTransform: "uppercase",
              }}
            >
              Order ID:
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: "22px",
                color: "#7367F0",
              }}
            >
              #5089
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: "11px" }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "rgba(75, 70, 92, 0.70)",
                textTransform: "uppercase",
              }}
            >
              Date & Time:
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "1px",
                color: "rgba(75, 70, 92, 0.70)",
              }}
            >
              Apr 15, 2023 ( 10:21 )
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: "11px" }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "rgba(75, 70, 92, 0.70)",
                textTransform: "uppercase",
              }}
            >
              Customer:
            </Typography>
            <Stack
                direction='row'
                alignItems='center'
                gap='8px'
            >
                <Avatar alt="Cristine Easom" src={img.src} sx={{width: '38px', height: '38px'}}  />
                <Typography variant='body2' sx={{color: '#6F6B7D', fontWeight: 500, fontSize: '15px'}}>
                Cristine Easom
                </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: "11px" }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "rgba(75, 70, 92, 0.70)",
                textTransform: "uppercase",
              }}
            >
              Payment:
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "1px",
                color: "#FF9F43",
              }}
            >
              Pending
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: "11px" }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "rgba(75, 70, 92, 0.70)",
                textTransform: "uppercase",
              }}
            >
              Status:
            </Typography>
            <Box
              sx={{
                color: "#28C76F",
                fontSize: "13px",
                fontWeight: 400,
                bgcolor: "rgba(40, 199, 111, 0.15)",
                padding: "5px 10px",
                width: "74px",
                borderRadius: "4px",
              }}
            >
              Delivered
            </Box>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: "11px" }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "rgba(75, 70, 92, 0.70)",
                textTransform: "uppercase",
              }}
            >
              Amount:
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "1px",
                color: "#4B465C",
              }}
            >
              $250
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: "11px" }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1px",
                color: "rgba(75, 70, 92, 0.70)",
                textTransform: "uppercase",
              }}
            >
              Action:
            </Typography>
            <Stack direction="row" gap="16px" alignItems="center">
              <TbEdit
                color="#4B465C"
                fontSize="22px"
                cursor="pointer"
                // onClick={() => {
                //   handleOpenEdit();
                //   handleClose();
                // }}
              />
              <GoTrash color="#4B465C" fontSize="22px" cursor="pointer" />
              <LuEye color="#4B465C" fontSize='20px' cursor='pointer' />
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default DetailsModal;
