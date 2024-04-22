"use client";
import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Checkbox,
} from "@mui/material";

import styled from "@emotion/styled";
import productImg from "@/assets/images/woodenchair.png"
import CustomProductWraper from "@/components/common/CustomProductWraper";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#5D596C",
}));

const rows = [
  {
    productImg: productImg,
    productName: "Wooden Chair",
    variant: "Material: Wooden",
    price: 841,
    qty: 2,
    total: 1682,
  },
  {
    productImg: productImg,
    productName: "Wooden Chair",
    variant: "Material: Wooden",
    price: 841,
    qty: 2,
    total: 1682,
  },
  {
    productImg: productImg,
    productName: "Wooden Chair",
    payment: "Material: Wooden",
    price: 841,
    qty: 2,
    total: 1682,
  },
  {
    productImg: productImg,
    productName: "Wooden Chair",
    payment: "Material: Wooden",
    price: 841,
    qty: 2,
    total: 1682,
  },
];

const OrderDetailListTable = () => {
  return (
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "460px" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>
            <CustomTableLabel>Products</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>price</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Qty</CustomTableLabel>
          </TableCell>
          <TableCell sx={{textAlign: 'right'}}>
            <CustomTableLabel sx={{textAlign: 'right'}}>Total</CustomTableLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              <CustomProductWraper
                name={row.productName}
                variant={row.variant}
                img={row.productImg}
              />
            </TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {row.price}
            </TableCell>
            <TableCell
              sx={{ color: "#6F6B7D", fontSize: "13px", fontWeight: 500 }}
            >
                {row?.qty}
            </TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
                textAlign: 'right',
                pr:'40px',
              }}
            >
              ${row.total}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderDetailListTable;
