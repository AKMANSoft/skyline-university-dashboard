import React from "react";
import { Stack, Box, Typography, Modal } from "@mui/material";
import { TbEdit } from "react-icons/tb";
import { LuEye } from "react-icons/lu";
import { GoTrash } from "react-icons/go";

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

const StateModal = ({ handleClose, open, handleOpenEdit }) => {
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
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "1px",
                color: "rgba(75, 70, 92, 0.70)",
                textTransform: "uppercase",
              }}
            >
              State Name
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: "22px",
                color: "rgba(75, 70, 92, 0.70)",
              }}
            >
              Sharjah
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
              Country Name:
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
              Pakistan
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
              Created Date:
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
              19 Nov 2024
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
                width: "58px",
                borderRadius: "4px",
              }}
            >
              Active
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
              Action:
            </Typography>
            <Stack direction="row" gap="16px" alignItems="center">
              <TbEdit
                color="#4B465C"
                fontSize="22px"
                cursor="pointer"
                onClick={() => {
                  handleOpenEdit();
                  handleClose();
                }}
              />
              <GoTrash color="#4B465C" fontSize="22px" cursor="pointer" />
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default StateModal;
