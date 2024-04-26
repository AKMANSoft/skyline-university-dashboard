"use client";
import {
  Box,
  Card,
  InputLabel,
  TextField,
  Stack,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import CompanyDetailCard from "./CompanyDetailCard";
import styled from "@emotion/styled";
import { CustomDivider } from "../styles/CustomDivider";
import { BlueButton } from "../styles/Buttons";
import { FiSend } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(
  () => import('@/components/text-editor'),
  { ssr: false }
);

const CustomLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: '16px',
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontWeight: 400,
    color: '#4B465C'
}))

const styles = {
    color: '#4B465C',
    borderRadius: '6px',
}

const PostJobDetails = ({hideCompanyCard}) => {

  return (
    <Stack direction={{xs: 'column-reverse', sm: 'column-reverse', md: "row"}} alignItems="start" gap="23px">
      {!hideCompanyCard && <CompanyDetailCard />}
        <Box sx={{ width: "100%" }}>
            <Card
            sx={{
                px: {xs: '23px', sm:"30px"},
                py: "23px",
                boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
                minHeight: '826px'
              }}
            >
                <Typography
                component='div'
                variant="p"
                sx={{
                    color: '#4B465C',
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '30px'
                }}
                >
                    Add Basic Details
                </Typography>

                <Stack
                    direction={{lg: 'column', xl: 'row'}}
                    alignItems='center'
                    justifyContent='space-between'
                    gap={{xs: "1rem", lg: '1rem',xl:'42px'}}
                    sx={{
                        mt: '15px',
                    }}
                >
                    <Box sx={{width: '100%'}}>
                        <CustomLabel id="demo-simple-select-label" sx={{mb: '10px'}}>
                        Job Title
                        </CustomLabel>
                        <TextField
                            id="outlined-basic"
                            placeholder="Front End Developer"
                            variant="outlined"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            InputProps={{
                            sx: {
                                height: "38px !important",
                            },
                            }}
                            sx={{...styles, minWidth: '286px', width: '100%'}}
                        />
                    </Box>
                    <Box sx={{width: '100%'}}>
                        <CustomLabel id="demo-simple-select-label" sx={{mb: '10px'}}>
                        Designation
                        </CustomLabel>
                        <TextField
                            id="outlined-basic"
                            placeholder="Manager"
                            variant="outlined"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            InputProps={{
                            sx: {
                                height: "38px !important",
                            },
                            }}
                            sx={{...styles, minWidth: '286px', width: '100%'}}
                        />
                    </Box>
                    <Stack direction='row' gap='25px' sx={{width: '100%'}}>
                        <Box sx={{width: '100%'}}>
                            <CustomLabel id="demo-simple-select-label" sx={{mb: '10px'}}>
                            Experience (Years)
                            </CustomLabel>
                            <TextField
                                id="outlined-basic"
                                placeholder="05"
                                variant="outlined"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                InputProps={{
                                sx: {
                                    height: "38px !important",
                                },
                                }}
                                sx={{...styles, width: '100%'}}
                            />
                        </Box>
                        <Box sx={{width: '100%'}}>
                            <CustomLabel id="demo-simple-select-label" sx={{mb: '10px'}}>
                            No of Vacancies
                            </CustomLabel>
                            <TextField
                                id="outlined-basic"
                                placeholder="05"
                                variant="outlined"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                InputProps={{
                                sx: {
                                    height: "38px !important",
                                },
                                }}
                                sx={{...styles, width: '100%'}}
                            />
                        </Box>
                    </Stack>
                </Stack>

                <Stack
                    direction={{lg: 'column', xl: 'row'}}
                    alignItems='center'
                    justifyContent='space-between'
                    gap={{xs: "1rem", lg: '1rem',xl:'42px'}}
                    sx={{
                        mt: '15px',
                    }}
                >
                    <Box sx={{width: '100%'}}>
                        <CustomLabel id="demo-simple-select-label" sx={{mb: '10px'}}>
                        Employment Type (Full Time/Part Time)
                        </CustomLabel>
                        <Select
                            id="outlined-basic"
                            placeholder="Select Status"
                            variant="outlined"
                            value=""
                            displayEmpty
                            sx={{
                            width: "100%",
                            height: "38px",
                            minWidth: '286px',
                            borderRadius: "6px",
                            color: "#757575",
                            borderColor: '#DBDADE',
                            bgcolor: '#F6F6F6',
                            "& .MuiSelect-root": {
                                color: "#757575",
                            },
                            }}
                        >
                            <MenuItem value="" disabled>
                            Please Select
                            </MenuItem>
                            <MenuItem value="Part Time">Part Time</MenuItem>
                            <MenuItem value="Full Time">Full Time</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{width: '100%'}}>
                        <CustomLabel id="demo-simple-select-label" sx={{mb: '10px'}}>
                        Location (Onsite/Remote)
                        </CustomLabel>
                        <Select
                            id="outlined-basic"
                            placeholder="Select Status"
                            variant="outlined"
                            value=""
                            displayEmpty
                            sx={{
                            width: "100%",
                            minWidth: '286px',
                            height: "38px",
                            borderRadius: "6px",
                            color: "#757575",
                            borderColor: '#DBDADE',
                            bgcolor: '#F6F6F6',
                            "& .MuiSelect-root": {
                                color: "#757575",
                            },
                            }}
                        >
                            <MenuItem value="" disabled>
                            Please Select
                            </MenuItem>
                            <MenuItem value="Onsite">Onsite</MenuItem>
                            <MenuItem value="Remote">Remote</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{width: '100%'}}>
                        <CustomLabel id="demo-simple-select-label" sx={{mb: '10px'}}>
                        Budget (Minimum)
                        </CustomLabel>
                        <TextField
                            id="outlined-basic"
                            placeholder="5,000 AED"
                            variant="outlined"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            InputProps={{
                            sx: {
                                height: "38px !important",
                            },
                            }}
                            sx={{...styles, width: '100%', minWidth: '286px'}}
                        />
                    </Box>
                </Stack>

                <Stack
                    direction={{lg: 'column', xl: 'row'}}
                    alignItems='center'
                    justifyContent='space-between'
                    gap={{xs: "1rem", lg: '1rem',xl:'42px'}}
                    sx={{
                        mt: '15px',
                    }}
                >
                    <Box sx={{width: '100%'}}>
                        <CustomLabel id="demo-simple-select-label" sx={{mb: '10px'}}>
                        Budget (Maximum)
                        </CustomLabel>
                        <TextField
                            id="outlined-basic"
                            placeholder="5,000 AED"
                            variant="outlined"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            InputProps={{
                            sx: {
                                height: "38px !important",
                            },
                            }}
                            sx={{...styles, width: '100%', minWidth: '286px'}}
                        />
                    </Box>
                    <Box sx={{width: '100%'}}>
                        <CustomLabel id="demo-simple-select-label" sx={{mb: '10px'}}>
                        Give option to Upload CV
                        </CustomLabel>
                        <Select
                            id="outlined-basic"
                            placeholder="Select Status"
                            variant="outlined"
                            value=""
                            displayEmpty
                            sx={{
                            width: "100%",
                            height: "38px",
                            minWidth: '286px',
                            borderRadius: "6px",
                            color: "#757575",
                            borderColor: '#DBDADE',
                            bgcolor: '#F6F6F6',
                            "& .MuiSelect-root": {
                                color: "#757575",
                            },
                            }}
                        >
                            <MenuItem value="" disabled>
                            Please Select
                            </MenuItem>
                            <MenuItem value="Onsite">Onsite</MenuItem>
                            <MenuItem value="Remote">Remote</MenuItem>
                        </Select>
                    </Box>
                    <Stack direction='row' gap='25px' sx={{width: '100%'}}>
                        <Box sx={{width: '100%'}}>
                            <CustomLabel id="demo-simple-select-label" sx={{mb: '10px'}}>
                            Application Deadline
                            </CustomLabel>
                            <Select
                            id="outlined-basic"
                            placeholder="Select Status"
                            variant="outlined"
                            value="Yes"
                            displayEmpty
                            sx={{
                            width: "100%",
                            height: "38px",
                            borderRadius: "6px",
                            color: "#757575",
                            borderColor: '#DBDADE',
                            bgcolor: '#F6F6F6',
                            "& .MuiSelect-root": {
                                color: "#757575",
                            },
                            }}
                        >
                            <MenuItem value="" disabled>
                            Please Select
                            </MenuItem>
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                        </Select>
                        </Box>
                        <Box sx={{width: '100%', mt: '2rem'}}>
                            <TextField
                                id="outlined-basic"
                                placeholder="24/07/24"
                                variant="outlined"
                                type="date"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                InputProps={{
                                sx: {
                                    height: "38px !important",
                                },
                                }}
                                sx={{...styles, width: '100%'}}
                            />
                        </Box>
                    </Stack>
                </Stack>

                <CustomDivider sx={{mt: '30px', mb: '20px'}} />

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
        </Box>
    </Stack>
  );
};

export default PostJobDetails;
