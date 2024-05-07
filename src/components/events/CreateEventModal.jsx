import React from "react";
import { Stack, Box, Typography, Modal, InputLabel, TextField, Button } from "@mui/material";
import CustomTextArea from "../mui/textarea/CustomTextArea";
import { GoUpload } from "react-icons/go";
import { BlueButton } from "../styles/Buttons";
import { SlLocationPin } from "react-icons/sl";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {xs:320,sm:600},
    bgcolor: "background.paper",
    boxShadow: 24,
    borderColor: "0px solid transparent",
    borderRadius: '6px',
    py: "30px",
    px: "18px",
};

const CreateEventModal = ({ handleClose, open, modalType }) => {
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
                        Create New Event
                    </Typography>

                    <Box sx={{ mt: '25px' }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" gap='20px'>
                            <Box sx={{ width: '100%' }}>
                                <InputLabel
                                    id="demo-simple-select-label"
                                    sx={{
                                        color: "#4B465C",
                                        fontWeight: 400,
                                        mb: "11px",
                                    }}
                                >
                                    Event Name
                                </InputLabel>
                                <TextField
                                    id="outlined-basic"
                                    placeholder="Write here"
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
                            </Box>
                            <Box sx={{ width: '100%' }}>
                                <InputLabel
                                    id="demo-simple-select-label"
                                    sx={{
                                        color: "#4B465C",
                                        fontWeight: 400,
                                        mb: "11px",
                                    }}
                                >
                                    Event Date
                                </InputLabel>
                                <TextField
                                    id="outlined-basic"
                                    placeholder="United Arab Emirates"
                                    variant="outlined"
                                    type="date"
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
                            </Box>
                        </Stack>
                        <Box sx={{ mt: '20px' }}>
                            <CustomTextArea
                                label="Description"
                                placeholder="Write here"
                                minRows={3}
                                maxRows={3}
                            />
                        </Box>
                        <Box sx={{mt: '20px'}}>
                            <InputLabel
                                id="demo-simple-select-label"
                                sx={{
                                    color: "#4B465C",
                                    fontWeight: 400,
                                    mb:'6px'
                                }}
                            >
                                Event Location
                            </InputLabel>
                            <TextField
                                id="outlined-basic"
                                placeholder="United Arab Emirates"
                                variant="outlined"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <SlLocationPin style={{ marginRight: '8px', color: 'grey' }} />
                                    ),
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
                        </Box>

                        <Box sx={{ mt: '20px' }}>
                            <label> Upload Image
                                <input type="file" hidden />
                                <Box
                                    sx={{
                                        mt: '6px',
                                        width: '100%',
                                        height: '200px',
                                        border: '1px dashed gray',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Box sx={{
                                        width: '50px',
                                        height: '50px',
                                        bgcolor: '#E1E1E1',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: '1rem',
                                    }}>
                                        <GoUpload />
                                    </Box>
                                    <Typography variant="body1" color="initial">
                                        Drag and drop your image here
                                    </Typography>
                                    <Button
                                        sx={{
                                            mt: '10px'
                                        }}
                                    >
                                        Browse Image
                                    </Button>
                                </Box>
                            </label>
                        </Box>
                        <Stack direction='row' alignItems='center' justifyContent='end' sx={{mt: '20px'}} gap='1rem'>
                            <Button
                                sx={{
                                    bgcolor: 'transparent',
                                    border: '1px solid #00318B',
                                    width: '128px',
                                    height: '38px'
                                }}
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <BlueButton sx={{
                                bgcolor: '#00318B',
                                width: '128px',
                                height: '38px',
                                "&:hover": {
                                    bgcolor: '#00318B'
                                }
                            }}>
                                Save
                            </BlueButton>
                        </Stack>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default CreateEventModal;
