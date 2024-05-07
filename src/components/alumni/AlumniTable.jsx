"use client";
import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Box,
  Stack,
  Typography,
  Avatar,
  Select,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import pdfImg from "@/assets/images/pdf-img.png";
import Link from "next/link";
import avatar1 from "@/assets/images/Avatar.png";
import avatar2 from "@/assets/images/Avatar2.png";
import avatar3 from "@/assets/images/Avatar3.png";
import { useRouter } from "next/navigation";

const AlumniTable = () => {
  const rows = [
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      status: "Active",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      img: avatar1,
      status: "Active",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      appliedDate: "09 May 2022",
      img: avatar2,
      status: "In-Active",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      img: avatar3,
      status: "Active",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      status: "In-Active",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      appliedDate: "09 May 2022",
      img: avatar3,
      status: "Active",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      img: avatar1,
      status: "Active",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      appliedDate: "09 May 2022",
      img: avatar2,
      status: "Active",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      img: avatar3,
      status: "Active",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      resume: "My Resumes CS",
      appliedDate: "09 May 2022",
      status: "Active",
    },
    {
      id: "#5089",
      name: "Jamal Kerrod",
      email: "Marge.Jacobson@gmail.com",
      education: "Bachelor in CS",
      graduation: "09 May 2022",
      appliedDate: "09 May 2022",
      img: avatar3,
      status: "Active",
    },
  ];
  const router = useRouter();

  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

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

  const handleSort = (property) => {
    const isAsc = sortBy === property && sortDirection === "asc";
    setSortDirection(isAsc ? "desc" : "asc");
    setSortBy(property);
    // Implement sorting logic here
  };

  const SortIcon = ({ active, direction }) => {
    if (!active) return null;

    if (sortDirection === "asc") {
      return <FiChevronUp />;
    } else {
      return <FiChevronDown />;
    }
  };

  return (
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "1100px" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel
              active={sortBy === "id"}
              direction={sortBy === "id" ? sortDirection : "asc"}
              onClick={() => handleSort("id")}
              IconComponent={() => (
                <SortIcon active={sortBy === "id"} direction={sortDirection} />
              )}
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Student ID
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === "jobTitle"}
              direction={sortBy === "jobTitle" ? sortDirection : "asc"}
              onClick={() => handleSort("jobTitle")}
              IconComponent={() => (
                <SortIcon
                  active={sortBy === "jobTitle"}
                  direction={sortDirection}
                />
              )}
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Alumni
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === "applications"}
              direction={sortBy === "applications" ? sortDirection : "asc"}
              onClick={() => handleSort("applications")}
              IconComponent={() => (
                <SortIcon
                  active={sortBy === "jobTitle"}
                  direction={sortDirection}
                />
              )}
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Education
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === "ShortListed"}
              direction={sortBy === "ShortListed" ? sortDirection : "asc"}
              onClick={() => handleSort("ShortListed")}
              IconComponent={() => (
                <SortIcon
                  active={sortBy === "jobTitle"}
                  direction={sortDirection}
                />
              )}
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Graduation Year
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === "postingDate"}
              direction={sortBy === "postingDate" ? sortDirection : "asc"}
              onClick={() => handleSort("postingDate")}
              IconComponent={() => (
                <SortIcon
                  active={sortBy === "jobTitle"}
                  direction={sortDirection}
                />
              )}
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Resume
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel
              active={sortBy === "status"}
              direction={sortBy === "status" ? sortDirection : "asc"}
              onClick={() => handleSort("status")}
              IconComponent={() => (
                <SortIcon
                  active={sortBy === "jobTitle"}
                  direction={sortDirection}
                />
              )}
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Added Date
            </TableSortLabel>
          </TableCell>
          <TableCell
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              textAlign: "center",
              paddingLeft: "50px",
              textTransform: "uppercase",
            }}
          >
            Status
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow
            key={index}
            sx={{ cursor: "pointer" }}
            onClick={() => router.push(`/alumni/view-details`)}
          >
            <TableCell
              sx={{ color: "#7367F0", fontSize: "15px", fontWeight: 400 }}
            >
              {row.id}
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", fontSize: "15px", fontWeight: 400 }}
            >
              <Stack direction="row" gap="10px" alignItems="center">
                <Avatar
                  variant="circle"
                  src={row?.img ? row?.img?.src : "/static/images/text.png"}
                  sx={{
                    bgcolor: "rgba(115, 103, 240, 0.16)",
                    color: "#7367F0",
                    width: "38px",
                    height: "38px",
                  }}
                >
                  {row?.name?.split(" ")?.[0]?.charAt(0) +
                    row?.name?.split(" ")?.[1]?.charAt(0)}
                </Avatar>
                <Box>
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#4B465C",
                      opacity: ".7",
                      lineHeight: "22px",
                    }}
                  >
                    Jamal Kerrod
                  </Typography>
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#4B465C",
                      opacity: ".5",
                      lineHeight: "20px",
                    }}
                  >
                    Marge.Jacobson@gmail.com
                  </Typography>
                </Box>
              </Stack>
            </TableCell>
            <TableCell
              sx={{
                color: "#4B465C",
                opacity: ".7",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              {row.education}
            </TableCell>
            <TableCell
              sx={{
                color: "#4B465C",
                opacity: ".7",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              {row.graduation}
            </TableCell>
            <TableCell
              sx={{
                color: "#4B465C",
                opacity: ".7",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              {row?.resume ? (
                <Stack direction="row" gap="10px" alignItems="center">
                  <Avatar
                    src={pdfImg.src}
                    variant="rounded"
                    sx={{
                      width: "37px",
                      height: "37px",
                    }}
                  />
                  <Box>
                    <Typography
                      component="div"
                      variant="p"
                      sx={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#4B465C",
                        opacity: ".7",
                        lineHeight: "22px",
                      }}
                    >
                      My Resumes CS
                    </Typography>
                    <Link
                      href="#"
                      download={true}
                      style={{
                        textDecoration: "none",
                        color: "#00A3FF",
                        fontSize: "13px",
                      }}
                    >
                      Download
                    </Link>
                  </Box>
                </Stack>
              ) : (
                <Typography
                  component="div"
                  variant="p"
                  sx={{
                    color: "#F3103C",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    ml: "2rem",
                    opacity: "1 !important",
                  }}
                >
                  Not Available
                </Typography>
              )}
            </TableCell>
            <TableCell
              sx={{
                color: "#4B465C",
                opacity: ".7",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              {row.appliedDate}
            </TableCell>
            <TableCell sx={{ textAlign: "right" }}>
              <div>
                <Button
                  onClick={handleClick}
                  sx={{
                    color: row?.status === "Active" ? "#28C76F" : "#F3103C",
                    fontSize: "13px",
                    // width: '78px',
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
                    color={row?.status === "Active" ? "#28C76F" : "#F3103C"}
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
                  <MenuItem onClick={() => handleOptionSelect("In-Active")}>
                    Inactive
                  </MenuItem>
                </Menu>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AlumniTable;
