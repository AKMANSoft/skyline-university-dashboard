import { FileUploadBox } from '@/components/styles/Box';
import { Box, Button, Card, FormControl, FormControlLabel, InputLabel, MenuItem, Modal, Select, Stack, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import { MdOutlineFileUpload } from "react-icons/md";
import img1 from "@/assets/images/img2.png"
import img2 from "@/assets/images/img3.png"

const AddNewModal = (props) => {
  if (!props) return null; // Handle the case where props are undefined

  const { open, handleClose } = props;
  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 690,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 3,
      }}>
        <Box>
        <InputLabel id="demo-simple-select-label" sx={{ color: '#4B465C', fontWeight: 400, mb: '11px' }}>
            Category
        </InputLabel>
        <FormControl fullWidth>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="Please Select"
            sx={{height: '38px'}}
            >
            <MenuItem value="" disabled>
                Please Select
            </MenuItem>
            <MenuItem value="category 1">category 1</MenuItem>
            <MenuItem value="category 2">category 2</MenuItem>
            <MenuItem value="category 3">category 3</MenuItem>
            </Select>
        </FormControl>
        </Box>

        <Box sx={{mt:3, mb: '11px'}}>
            <InputLabel id="demo-simple-select-label" sx={{ color: '#5D596C', fontWeight: 400, mb: '11px', lineHeight: '24px' }}>
                Upload Image
            </InputLabel>
            <label>
                <input type="file" hidden />
                <FileUploadBox>
                    <Stack direction="column" gap='22px' alignItems='center' justifyContent='center'>
                        <MdOutlineFileUpload fontSize="50px" color="#6F6B7D" />
                        <Typography variant="p"
                            sx={{
                                color: '#6F6B7D',
                                fontWeight: 400,
                                fontSize: '22px',
                                lineHeight: '32px',
                            }}
                        >
                            Drag and drop your image here
                        </Typography>
                        <Box
                            sx={{
                                color: '#00318B',
                                fontSize: '15px',
                                width: '138px',
                                height: '36px',
                                lineHeight: '38px',
                                fontWeight: 400,
                                textAlign: 'center',
                                lineHeight: '36px',
                                cursor: 'pointer',
                                borderRadius: '6px',
                                background: 'rgba(0, 49, 139, 0.10)',
                            }}
                        >
                            Browse image
                        </Box>
                    </Stack>
                </FileUploadBox>
            </label>

            <Stack direction="row" gap="1rem" sx={{mt: '22px'}}>
                <Card
                    sx={{
                        // boxShadow: ''
                        width: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        pt: 2,
                        pb:1
                    }}
                >
                    <Image 
                        src={img1}
                        width={102}
                        height={103}
                        layout='reponsive'
                    />
                    <Box
                    sx={{
                        width: '100%',
                        height: '70px',
                        borderTop: '1px solid #DBDADE',
                        borderBottom: '1px solid #DBDADE',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        px:2,
                        mt:2
                    }}
                    >
                        <Typography variant="p" 
                            sx={{
                                color: '#6F6B7D',
                                fontWeight: 500,
                                fontSize: '15px',
                                lineHeight: '24px',
                            }}
                        >
                            Flower.png <br />
                            10.2 MB
                        </Typography>
                    </Box>
                    <Box
                      sx={{
                        bgcolor: 'transparent',
                        width: '100%',
                        height: '30px',
                        color: '#6F6B7D',
                        boxShadow: 'none',
                        fontSize: '14px',
                        textTransform: 'capitalize',
                        textAlign:'center',
                        pt:1,
                        cursor: 'pointer',
                    }}>
                        Remove File
                    </Box>
                </Card>
                <Card
                    sx={{
                        // boxShadow: ''
                        width: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        pt: 2,
                        pb:1
                    }}
                >
                    <Image 
                        src={img1}
                        width={102}
                        height={103}
                        layout='reponsive'
                    />
                    <Box
                    sx={{
                        width: '100%',
                        height: '70px',
                        borderTop: '1px solid #DBDADE',
                        borderBottom: '1px solid #DBDADE',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        px:2,
                        mt:2
                    }}
                    >
                        <Typography variant="p" 
                            sx={{
                                color: '#6F6B7D',
                                fontWeight: 500,
                                fontSize: '15px',
                                lineHeight: '24px',
                            }}
                        >
                            Flower.png <br />
                            10.2 MB
                        </Typography>
                    </Box>
                    <Box
                      sx={{
                        bgcolor: 'transparent',
                        width: '100%',
                        height: '30px',
                        color: '#6F6B7D',
                        boxShadow: 'none',
                        fontSize: '14px',
                        textTransform: 'capitalize',
                        textAlign:'center',
                        pt:1,
                        cursor: 'pointer',
                    }}>
                        Remove File
                    </Box>
                </Card>
            </Stack>
        </Box>
      </Box>
    </Modal>
  </div>
  )
}

export default AddNewModal
