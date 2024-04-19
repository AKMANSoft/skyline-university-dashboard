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
  Avatar,
  Typography,
  MenuItem,
  Menu,
  Button,
  Checkbox,
  Box,
} from "@mui/material";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { GoTrash } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import styled from "@emotion/styled";
import img from "@/assets/images/profile.png"
import { LuEye } from "react-icons/lu";
import DetailsModal from "./modals/DetailsModal";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#5D596C",
  }));

  const rows = [
    {
      order: "#6979",
      date: "Apr 15, 2023 ( 10:21 )",
      name: "Cristine Easom",
      img: img,
      payment: "Pending",
      status: "Delivered",
      amount: '250'
    },
    {
      order: "#6979",
      date: "Apr 15, 2023 ( 10:21 )",
      name: "Cristine Easom",
      img: img,
      payment: "Pending",
      status: "Delivered",
      amount: '250'
    },
    {
      order: "#6979",
      date: "Apr 15, 2023 ( 10:21 )",
      name: "Cristine Easom",
      img: img,
      payment: "Pending",
      status: "Delivered",
      amount: '250'
    },
    {
      order: "#6979",
      date: "Apr 15, 2023 ( 10:21 )",
      name: "Cristine Easom",
      img: img,
      payment: "Pending",
      status: "Delivered",
      amount: '250'
    },
    {
      order: "#6979",
      date: "Apr 15, 2023 ( 10:21 )",
      name: "Cristine Easom",
      img: img,
      payment: "Pending",
      status: "Delivered",
      amount: '250'
    },
    {
      order: "#6979",
      date: "Apr 15, 2023 ( 10:21 )",
      name: "Cristine Easom",
      img: img,
      payment: "Pending",
      status: "Delivered",
      amount: '250'
    },
    {
      order: "#6979",
      date: "Apr 15, 2023 ( 10:21 )",
      name: "Cristine Easom",
      img: img,
      payment: "Pending",
      status: "Delivered",
      amount: '250'
    },
    {
      order: "#6979",
      date: "Apr 15, 2023 ( 10:21 )",
      name: "Cristine Easom",
      img: img,
      payment: "Pending",
      status: "Delivered",
      amount: '250'
    },
    {
      order: "#6979",
      date: "Apr 15, 2023 ( 10:21 )",
      name: "Cristine Easom",
      img: img,
      payment: "Pending",
      status: "Delivered",
      amount: '250'
    },
    {
      order: "#6979",
      date: "Apr 15, 2023 ( 10:21 )",
      name: "Cristine Easom",
      img: img,
      payment: "Pending",
      status: "Delivered",
      amount: '250'
    },
    {
      order: "#6979",
      date: "Apr 15, 2023 ( 10:21 )",
      name: "Cristine Easom",
      img: img,
      payment: "Pending",
      status: "Delivered",
      amount: '250'
    },
  ];

const OrderListTableMobile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleClose();
  };

  return (
    <>
    <DetailsModal open={open} handleClose={handleCloseModal} />
    <Table sx={{ borderTop: "1px solid #DBDADE" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{pr:0}}>
              <CustomTableLabel>
              id
              </CustomTableLabel>
            </TableCell>
            <TableCell sx={{pr:0, minWidth: '150px'}}>
              <CustomTableLabel>
              customer
              </CustomTableLabel>
            </TableCell>
            <TableCell sx={{pr:0}}>
              <CustomTableLabel>
                Status
              </CustomTableLabel>
            </TableCell>
            <TableCell
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textAlign: "right",
                textTransform: "uppercase",
                pl:0
              }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell
                sx={{ color: "#7367F0", fontSize: "14px", fontWeight: 400, pr:0 }}
              >
                {row.order}
              </TableCell>
              <TableCell sx={{pr:0}}>
                <Stack
                    direction='row'
                    alignItems='center'
                    gap='6px'
                >
                    <Avatar alt={row?.name} src={row.src} sx={{width: '29px', height: '29px'}}  />
                    <Typography variant='body2' sx={{color: '#6F6B7D', fontWeight: 500, fontSize: '14px'}}>
                        {row.name}
                    </Typography>
                </Stack>
              </TableCell>
              <TableCell sx={{color: '#28C76F', fontSize: '13px', fontWeight: 500, pr:0}}>
                {row?.status === "Delivered" ? 
                row?.status
                :
                <div>
                    <Button
                    onClick={handleClick}
                    sx={{
                        color: "#7367F0",
                        fontSize: "13px",
                        height: "24px",
                        padding: "5px 10px",
                        bgcolor:
                        row?.status === "Active"
                            ? "rgba(40, 199, 111, 0.15)"
                            : "rgba(243, 16, 60, 0.15)",
                        textTransform: "capitalize",
                    }}
                    >
                    {row?.status}
                    <IoIosArrowDown
                        fontSize="18px"
                        style={{ marginLeft: "10px" }}
                        color="#7367F0"
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
                    <MenuItem onClick={() => handleOptionSelect("In-Progress")}>
                        In-Progress
                    </MenuItem>
                    <MenuItem onClick={() => handleOptionSelect("Delivered")}>
                        Delivered
                    </MenuItem>
                    </Menu>
                </div>
                }
              </TableCell>
              <TableCell sx={{px:0}}>
                <Box
                    sx={{
                        width: '28.7px',
                        height: '28.7px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#DFE5F0',
                        cursor: 'pointer',
                    }}
                    onClick={handleOpen}
                >
                    <LuEye color="#00318B" fontSize='20px' cursor='pointer' />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default OrderListTableMobile
