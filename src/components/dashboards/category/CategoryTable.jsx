"use client";
import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Stack,
  Checkbox,
  Avatar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import { GoTrash } from "react-icons/go";
import styled from "@emotion/styled";
import img from "@/assets/images/profile.png";
import productImg from "@/assets/images/product-img.png";
import avatarImg from "@/assets/images/avatar8.png";
import { LuEye } from "react-icons/lu";
import CustomListAvatar from "@/components/common/CustomListAvatar";
import CustomDropdown from "@/components/common/CustomDropdown";
import CustomProductWraper from "@/components/common/CustomProductWraper";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#5D596C",
}));

const rows = [
  {
    name: "Smart Phone",
    img: productImg,
    totalProducts: 4186,
    totalSold: 4186,
    totalEarning: 343456,
    status: "Active",
  },
  {
    name: "Smart Phone",
    img: productImg,
    totalProducts: 4186,
    totalSold: 4186,
    totalEarning: 343456,
    status: "Active",
  },
  {
    name: "Smart Phone",
    img: productImg,
    totalProducts: 4186,
    totalSold: 4186,
    totalEarning: 343456,
    status: "Active",
  },
  {
    name: "Smart Phone",
    img: productImg,
    totalProducts: 4186,
    totalSold: 4186,
    totalEarning: 343456,
    status: "Inactive",
  },
  {
    name: "Smart Phone",
    img: productImg,
    totalProducts: 4186,
    totalSold: 4186,
    totalEarning: 343456,
    status: "Active",
  },
];

const CategoryListTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "1000px" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <CustomTableLabel>
              <Checkbox />
            </CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Category Name</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Total Products</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Total Products Sold</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>TOTAL EARNING</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Status</CustomTableLabel>
          </TableCell>
          <TableCell
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              textAlign: "right",
              textTransform: "uppercase",
            }}
          >
            Actions
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            <TableCell
              sx={{ color: "#6F6B7D", fontSize: "15px", fontWeight: 400 }}
            >
              <Checkbox />
            </TableCell>
            <TableCell>
              <Stack direction="row" alignItems="center" gap="8px">
                <Avatar
                  src={row?.img?.src}
                  sx={{ width: "38px", height: "38px" }}
                  variant="rounded"
                />
                <Typography
                  variant="body1"
                  color="#6F6B7D"
                  sx={{ ontSize: "15px" }}
                >
                  {row?.name}
                </Typography>
              </Stack>
            </TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {row.totalProducts}
            </TableCell>
            <TableCell>{row.totalSold}</TableCell>
            <TableCell
              sx={{
                color: "#6F6B7D",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              ${row.totalEarning}
            </TableCell>
            <TableCell
              sx={{ color: "#28C76F", fontSize: "13px", fontWeight: 500 }}
            >
              {row?.status === "Delivered" ? (
                row?.status
              ) : (
                <div>
                  <Button
                    onClick={handleClick}
                    sx={{
                      color: row?.status==="Active" ? "#00CA99" : "#EA5455",
                      fontSize: "13px",
                      height: "24px",
                      padding: "5px 10px",
                      bgcolor:
                        row?.status === "Active"
                          ? "rgba(0, 202, 153, 0.10)"
                          : "rgba(243, 16, 60, 0.15)",
                      textTransform: "capitalize",
                    }}
                  >
                    {row?.status}
                    {/* {anchorEl ? anchorEl : row?.status} */}
                    <IoIosArrowDown
                      fontSize="18px"
                      style={{ marginLeft: "10px" }}
                      color={row?.status==="Active" ? "#00CA99" : "#EA5455"}
                    />
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                      sx: {
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    <MenuItem onClick={() => handleOptionSelect("Active")}>
                      Active
                    </MenuItem>
                    <MenuItem onClick={() => handleOptionSelect("Inactive")}>
                      Inactive
                    </MenuItem>
                  </Menu>
                </div>
              )}
            </TableCell>
            <TableCell>
              <Stack
                direction="row"
                gap="16px"
                alignItems="center"
                justifyContent="end"
              >
                <Link href={`/dashboards/orders/order-details`}>
                  <LuEye color="#4B465C" fontSize="20px" cursor="pointer" />
                </Link>
                <GoTrash color="#4B465C" fontSize="22px" cursor="pointer" />
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryListTable;
