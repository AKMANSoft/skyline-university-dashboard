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
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { LuEye } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import styled from "@emotion/styled";
import CustomProductWraper from "../common/CustomProductWraper";
import companyIcon from "@/assets/images/avatar5.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#5D596C",
}));

const MyJobListTable = () => {
  const rows = [
    {
      id: "#5089",
      name: "Dummy Company",
      variant: "dummycompany@gmail.com",
      icon: companyIcon,
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Listed",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      variant: "dummycompany@gmail.com",
      icon: companyIcon,
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Listed",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      variant: "dummycompany@gmail.com",
      icon: companyIcon,
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Close",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      variant: "dummycompany@gmail.com",
      icon: companyIcon,
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Listed",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      variant: "dummycompany@gmail.com",
      icon: companyIcon,
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Close",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      variant: "dummycompany@gmail.com",
      icon: companyIcon,
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Close",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      variant: "dummycompany@gmail.com",
      icon: companyIcon,
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Close",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      variant: "dummycompany@gmail.com",
      icon: companyIcon,
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Listed",
    },
  ];
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

  return (
    <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "900px" }}>
      <TableHead>
        <TableRow>
          <TableCell>
            <CustomTableLabel>ID</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Companies</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Job Title</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Applications</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Short List</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Posting Date</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Status</CustomTableLabel>
          </TableCell>
          <TableCell
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              textAlign: "right",
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
              sx={{ color: "#7367F0", fontSize: "15px", fontWeight: 400 }}
            >
              {row.id}
            </TableCell>
            <TableCell
              sx={{ color: "#7367F0", fontSize: "15px", fontWeight: 400 }}
            >
              <CustomProductWraper
                name={row?.name}
                variant={row?.variant}
                img={row?.icon}
              />
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", fontSize: "15px", fontWeight: 400 }}
            >
              {row.jobTitle}
            </TableCell>
            <TableCell
              sx={{ color: "#00A3FF", fontSize: "15px", fontWeight: 400, textDecoration: 'underline' }}
            >
              {row.applications}
            </TableCell>
            <TableCell
              sx={{ color: "#00A3FF", fontSize: "15px", fontWeight: 400, textDecoration: 'underline' }}
            >
              {row.ShortListed}
            </TableCell>
            <TableCell
              sx={{ color: "#4B465C", fontSize: "15px", fontWeight: 400 }}
            >
              {row.postingDate}
            </TableCell>
            <TableCell>
              <div>
                <Button
                  onClick={handleClick}
                  sx={{
                    color: row?.status === "Listed" ? "#28C76F" : "#F3103C",
                    fontSize: "13px",
                    height: "24px",
                    padding: "5px 10px",
                    textTransform: 'capitalize',
                    bgcolor:
                      row?.status === "Listed"
                        ? "rgba(40, 199, 111, 0.15)"
                        : "rgba(243, 16, 60, 0.15)",
                  }}
                >
                  {row?.status}
                  <IoIosArrowDown
                    fontSize="18px"
                    style={{ marginLeft: "10px" }}
                    color={row?.status === "Listed" ? "#28C76F" : "#F3103C"}
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
            <TableCell sx={{ float: "right" }}>
              <Stack direction="row" gap="16px" alignItems="center">
                <TbEdit color="#4B465C" fontSize="22px" cursor="pointer" />
                <GoTrash color="#4B465C" fontSize="22px" cursor="pointer" />
                <Link href={`/job-listing/view-details`}>
                  <LuEye color="#4B465C" fontSize="22px" cursor="pointer" />
                </Link>
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MyJobListTable;
