import { CustomCard } from "@/components/styles/Card";
import { Box, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import product1 from "@/assets/images/product1.png";
import product2 from "@/assets/images/product2.png";
import product3 from "@/assets/images/product3.png";
import Image from "next/image";

const rows = [
  {
    title: "Apple iPhone 13",
    subtitle: "Item: #FXZ-4567",
    price: "999.29",
    img: product1,
  },
  {
    title: "Apple iPhone 13",
    subtitle: "Item: #FXZ-4567",
    price: "999.29",
    img: product2,
  },
  {
    title: "Apple iPhone 13",
    subtitle: "Item: #FXZ-4567",
    price: "999.29",
    img: product3,
  },
  {
    title: "Apple iPhone 13",
    subtitle: "Item: #FXZ-4567",
    price: "999.29",
    img: product1,
  },
  {
    title: "Apple iPhone 13",
    subtitle: "Item: #FXZ-4567",
    price: "999.29",
    img: product1,
  },
  {
    title: "Apple iPhone 13",
    subtitle: "Item: #FXZ-4567",
    price: "999.29",
    img: product1,
  },
];

const ProductsList = () => {
  return (
    <CustomCard sx={{ p: "24px" }}>
      <CardContent sx={{ pb: 0, mb: '24px' }}>
        <Typography
          component="div"
          variant="h5"
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "24px",
            color: "#4B465C",
          }}
        >
          Most Selling Products
        </Typography>
        <Typography
          component="div"
          variant="body2"
          sx={{
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
            color: "#4B465C",
            opacity: ".7",
          }}
        >
          Total 10.4k Sells
        </Typography>
      </CardContent>
      {rows?.map((row, index) => (
        <Stack key={index} direction="row" justifyContent="space-between" alignItems="center" sx={{mb: '18px'}}>
        <Stack direction="row" alignItems="center" gap="16px">
          <Image priority
            src={row.img}
            alt="image"
            style={{ width: "46px", height: "46px", objectFit: "cover" }}
          />
          <Box>
            <Typography
              component="div"
              variant="h6"
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "21px",
                color: "#4B465C",
              }}
            >
              {row.title}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              sx={{
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "20px",
                color: "#4B465C",
                opacity: ".7",
              }}
            >
              {row.subtitle}
            </Typography>
          </Box>
        </Stack>
        <Typography
          component="div"
          variant="h6"
          sx={{
            fontSize: "15px",
            fontWeight: "500",
            lineHeight: "22px",
            color: "#4B465C",
          }}
        >
          ${row.price}
        </Typography>
      </Stack>
      ))}
    </CustomCard>
  );
};

export default ProductsList;
