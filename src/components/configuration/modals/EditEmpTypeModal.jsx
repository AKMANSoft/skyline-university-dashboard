import React from "react";
import { Stack, Box, Typography, Modal, InputLabel, TextField, Button, Select, MenuItem } from "@mui/material";
import { TbEdit } from "react-icons/tb";
import { LuEye } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import { AntSwitch } from "@/components/styles/Switch";
import { BlueButton } from "@/components/styles/Buttons";

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

const EditEmpTypeModal = ({ handleClose, open, modalType }) => {
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
              fontSize: "18px",
              fontWeight: 600,
              color: "#4B465C",
              lineHeight: "30px",
            }}
          >
            {modalType} Employment Information
          </Typography>

          <Box sx={{mt: '31px'}}>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#4B465C",
                fontWeight: 400,
                mb: "11px",
              }}
            >
              Employment Type
            </InputLabel>
            <TextField
              id="outlined-basic"
              placeholder="Full Time"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: {
                  height: {
                    xs: "38px !important",
                    sm: "42px !important",
                  },
                },
              }}
              sx={{
                width: "100%",
                borderRadius: "6px",
                bgcolor: "white",
              }}
            />

            <Stack direction="row" spacing={1} alignItems="center" sx={{mt: '15px'}}>
                <InputLabel
                id="demo-simple-select-label"
                sx={{
                    color: "#4B465C",
                    fontWeight: 400,
                    mb: "11px",
                    mt: '15px'
                }}
                >
                Status
                </InputLabel>
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
            </Stack>

            <Stack
                direction='row'
                justifyContent='end'
                alignItems='center'
                gap='19px'
                sx={{mt: '31px'}}
            >
                <Button
                variant="outlined"
                sx={{
                    width: '127px',
                    height: '38px',
                    bgcolor: 'transparent',
                    border: '1px solid #00318B',
                    color: '#00318B'
                }}
                onClick={handleClose}
                >
                    Cancel
                </Button>
                <BlueButton
                sx={{
                    minWidth: '127px',
                    bgcolor: '#00318B'
                }}
                >
                    Save
                </BlueButton>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EditEmpTypeModal;
