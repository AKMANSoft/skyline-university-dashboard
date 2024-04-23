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
import { IoIosArrowDown } from "react-icons/io";
import styled from "@emotion/styled";
import img from "@/assets/images/profile.png"
import { LuEye } from "react-icons/lu";
import CustomProductWraper from "@/components/common/CustomProductWraper";
import ViewModal from "./ViewModal";
// import DetailsModal from "./modals/DetailsModal";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
    fontSize: "13px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#5D596C",
  }));

  const rows = [
    {
        productId: "#6979",
        name: "Cristine Easom",
        img: img,
        variant: "onePlus",
        status: "Inactive",
    },
    {
        productId: "#6979",
        name: "Cristine Easom",
        img: img,
        variant: "onePlus",
        status: "Active",
    },
    {
        productId: "#6979",
        name: "Cristine Easom",
        img: img,
        variant: "onePlus",
        status: "Active",
    },
    {
        productId: "#6979",
        name: "Cristine Easom",
        img: img,
        variant: "onePlus",
        status: "Active",
    },
    {
        productId: "#6979",
        name: "Cristine Easom",
        img: img,
        status: "Active",
    },
  ];

const ProductTableMobile = () => {
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
    <ViewModal open={open} handleClose={handleCloseModal} />
    <Table sx={{ borderTop: "1px solid #DBDADE" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{pr:0}}>
              <CustomTableLabel>
              id
              </CustomTableLabel>
            </TableCell>
            <TableCell sx={{pr:0, minWidth: '120px'}}>
              <CustomTableLabel>
              Product
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
                {row.productId}
              </TableCell>
              <TableCell sx={{pr:0}}>
              <CustomProductWraper img={row?.img} name={row?.name} variant={row?.variant} />
              </TableCell>
              <TableCell sx={{color: '#28C76F', fontSize: '13px', fontWeight: 500, pr:1}}>
              <div>
                  <Button
                    onClick={handleClick}
                    sx={{
                      color: row?.status === "Inactive" ? "#EA5455" : "#00CA99",
                      fontSize: "13px",
                      height: "24px",
                      padding: "5px 10px",
                      bgcolor:
                        row?.status === "Active"
                          ? "rgba(0, 202, 153, 0.10)"
                          : "#FCE5E6",
                      textTransform: "capitalize",
                    }}
                  >
                    {row?.status}
                    <IoIosArrowDown
                      fontSize="18px"
                      style={{ marginLeft: "10px" }}
                      color={row?.status === "Inactive" ? "#EA5455" : "#00CA99"}
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
              </TableCell>
              <TableCell sx={{pl:0}}>
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

export default ProductTableMobile
