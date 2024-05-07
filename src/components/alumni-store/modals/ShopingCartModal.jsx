'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Avatar, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { CloseIcon, CrossIcon } from "@/utils/svg-icons";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import logoImg from "@/assets/images/logoImg.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

const GreenText = styled(Typography)(({ theme }) => ({
  color: "#289D67",
  fontsize: "16px",
  lineHeight: "22px",
}));

const orders = [{id:1}, {id:2}, {id:3}];

const ShopingCartModal = ({ open, toggleDrawer }) => {
  const router = useRouter()
  const[productCounter, setProductCounter] = useState({count: 1})
  return (
    <>
    {/* <CancelOrderModal open={openModal} handleClose={handleCloseModal} /> */}
    {/* <SelectOneModal open={openModal} handleClose={handleCloseModal} /> */}
    {/* <SuccessMsgModal open={openModal} handleClose={handleCloseModal} /> */}

    <Drawer
      anchor="right"
      open={open}
      onClose={() => toggleDrawer(false)}
      PaperProps={{ elevation: 0, style: { backgroundColor: "transparent" } }}
    >
      <Box
        sx={{
          width: { xs: "100vw", md: 465, lg: 565 },
          minHeight: "100vh",
          height: "100%",
          bgcolor: "white",
          borderRadius: "10px",
          px: 0,
          py: "42px",
          overflow: "auto",
        }}
        role="presentation"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: "30px", mb: "34px" }}
        >
          <Typography variant="body1" sx={{ display: "flex" }}>
            Shopping Cart <GreenText>(3)</GreenText>
          </Typography>
          <Box sx={{ cursor: "pointer" }} onClick={() => toggleDrawer(false)}>
            <CrossIcon />
          </Box>
        </Stack>

        {orders?.map((order, index) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              borderBottom: "1px solid #DDD",
              borderTop: "1px solid #DDD",
              py: "20px",
              px: { xs: "1rem", sm: "30px" },
              mb: "20px",
            }}
          >
            <Stack direction="row" alignItems="center" gap="15px">
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  width: "38px",
                  height: "102px",
                  bgcolor: "#FAFAFA",
                  border: "1px solid #D9D9D9",
                  borderRadius: "50px",
                  p: "10px 12px",
                }}
              >
                <AiOutlinePlus
                  color="#696969"
                  fontSize="20px"
                  cursor="pointer"
                  onClick={() => setProductCounter({index: order?.id, count: productCounter.count+1})}
                />
                <Typography variant="body1" color="#959595">
                  {productCounter?.index && productCounter.index===order?.id ? productCounter?.count : 1}
                </Typography>
                <AiOutlineMinus
                  color="#696969"
                  fontSize="20px"
                  cursor="pointer"
                  onClick={() => setProductCounter({index: order?.id, count: productCounter.count===1 ? 1 : productCounter.count-1})}
                />
              </Stack>
              <Avatar
                src={logoImg.src}
                sx={{
                  width: "60px",
                  height: "60px",
                  border: "1px solid rgba(59, 183, 126, 0.22)",
                  bgcolor: "#E5FAF5",
                  p: "14px",
                  ml: { xs: "0px", sm: "15px" },
                }}
              />
              <Box>
                <Typography
                  variant="body1"
                  color="#696969"
                  sx={{ fontWeight: "600" }}
                >
                  Product Name
                </Typography>
                <GreenText sx={{ fontWeight: 600, my: "6px" }}>
                  $23.80
                </GreenText>
                <Typography variant="body1" color="rgba(105, 105, 105, 0.60)">
                  2 x 1 pc(s)
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap={{ xs: "15px", sm: "27px" }}
            >
              <Typography
                variant="body1"
                color="#000"
                sx={{ fontSize: { xs: "14px", sm: "18px" }, fontWeight: 600 }}
              >
                $23.80
              </Typography>
              <Box sx={{ cursor: "pointer" }}>
                <CloseIcon />
              </Box>
            </Stack>
          </Stack>
        ))}

        <Box sx={{ px: "30px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              width: "100%",
              height: "65px",
              borderRadius: "100px",
              bgcolor: "#00318B",
              p: "9px 11px",
              mt: "328px",
            }}
            onClick={() => {
              router.push(`/alumni-store/my-orders/checkout`)
              toggleDrawer(false)
            }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{ fontSize: "18px", pl: "17px" }}
            >
              Checkout
            </Typography>
            <Box
              sx={{
                width: "94px",
                height: "45px",
                borderRadius: "50px",
                bgcolor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                fontWeight: 700,
              }}
            >
              $201.95
            </Box>
          </Stack>
        </Box>
      </Box>
    </Drawer>
    </>
  );
};

export default ShopingCartModal;
