import { Box, Modal, } from '@mui/material'
import Image from 'next/image';
import React from 'react'

const ViewImgModal = (props) => {
  if (!props) return null; // Handle the case where props are undefined

  const { open, handleImgModal, image } = props;
  return (
    <Modal
      open={open}
      onClose={handleImgModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: "95%",
        width: {sm: '90vw', md: 'auto'},
        maxHeight: '98%',
        bgcolor: 'background.paper',
        boxShadow: 24,
      }}>
        <Image priority 
            src={image}
            width="100%"
            height='100%'
            alt="image"
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }}
        />
      </Box>
    </Modal>
  )
}

export default ViewImgModal