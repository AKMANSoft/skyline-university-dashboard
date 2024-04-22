'use client'
import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logoImg from "@/assets/images/logoImg.png";
import styled from "@emotion/styled";
import AddToCard from "./modals/AddToCard";

const DiscountText = styled(Box)(({ theme }) => ({
    width: "48px",
    height: '21px',
    backgroundColor: "#00318B",
    borderRadius: '5px',
    position: "absolute",
    top: '10px',
    right: '10px',
    zIndex: 1000,
    color:'white',
    fontSize: '14px',
    fontWeight: '600',
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
  }));

const ApparelCard = ({values}) => {
  const[open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
    <AddToCard open={open} handleClose={handleClose} />
    <Card
      sx={{
        p: "30px",
        pt:'54px',
        border: "1px solid #D9D9D9",
        bgcolor: "#FAFAFA",
        borderRadius: "10px",
        width: "100%",
        aspectRatio: "0.76",
        minHeight: '385px',
        maxHeight: '405px',
        position: 'relative',
      }}
    >
      {values?.discount &&
      <DiscountText>
      {values?.discount}
    </DiscountText>
      }
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Image
          src={logoImg}
          alt="logo-image"
          style={{
            width: "100%",
            maxWidth: "153px",
            aspectRatio: "1.224",
            objectFit: "cover",
          }}
        />

        <CardContent sx={{ mt: "47px", p:0 }}>
          <Typography
            component="div"
            variant="p"
            sx={{
              color: "#000",
              fontSize: "18px",
              lineHeight: "22px",
              textAlign: 'center',
            }}
          >
            Product Name
          </Typography>

          <Typography
            component="div"
            variant="p"
            sx={{
              color: "#289D67",
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "22px",
              mt: "13px",
              textAlign: 'center',
            }}
          >
            $23.80
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#00318B",
              fontSize: "16px",
              width: "129px",
              height: "42px",
              mt: "27px",
              borderRadius: '50px',
              padding: '10px 0px',
              textTransform: 'capitalize',
            }}
            onClick={handleOpen}
          >
            Add To Cart
          </Button>
        </CardContent>
      </Stack>
    </Card>
    </>
  );
};

export default ApparelCard;
