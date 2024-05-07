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
  Avatar,
  Typography,
} from "@mui/material";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { LuEye } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import avatar1 from "@/assets/images/Avatar.png";
import Link from "next/link";
import Tablecell from "../common/Tablecell";

const ManagementTable = () => {
  const rows = [
    {
      id: "#5089",
      name: "Dummy Company",
      email: "Marge.Jacobson@gmail.com",
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Listed",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      email: "Marge.Jacobson@gmail.com",
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Listed",
      img: avatar1,
    },
    {
      id: "#5089",
      name: "Social Company",
      email: "Marge.Jacobson@gmail.com",
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Close",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      email: "Marge.Jacobson@gmail.com",
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Listed",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      email: "Marge.Jacobson@gmail.com",
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Close",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      email: "Marge.Jacobson@gmail.com",
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Close",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      email: "Marge.Jacobson@gmail.com",
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Close",
    },
    {
      id: "#5089",
      name: "Dummy Company",
      email: "Marge.Jacobson@gmail.com",
      jobTitle: "PHP Laravel Developer",
      applications: "5+ Applied",
      ShortListed: "2+ Shortlisted",
      postingDate: "09 May 2022",
      status: "Listed",
    },
  ];

  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

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
    <>
      <Table sx={{ borderTop: "1px solid #DBDADE", minWidth: "1150px" }}>
        <TableHead>
          <TableRow>
            {/* <TableCell>
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
                textTransform: 'uppercase'
              }}
            >
              ID
            </TableSortLabel>
          </TableCell> */}
            <Tablecell title="ID" />
            <Tablecell title="Companies" />
            <Tablecell title="Job Title" />
            <Tablecell title="Applications" />
            <Tablecell title="Short List" />
            <Tablecell title="Posting Date" />
            <Tablecell title="Status" />
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
              <TableCell>
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
                sx={{ color: "#4B465C", fontSize: "15px", fontWeight: 500 }}
              >
                {row.jobTitle}
              </TableCell>
              <TableCell
                sx={{
                  color: "#00A3FF",
                  fontSize: "15px",
                  fontWeight: 500,
                  fontFamily: "Work Sans",
                  textDecoration: "underline",
                  cursor: 'pointer',
                }}
              >
                {row.applications}
              </TableCell>
              <TableCell
                sx={{
                  color: "#00A3FF",
                  fontSize: "15px",
                  fontWeight: 500,
                  fontFamily: "Work Sans",
                  textDecoration: "underline",
                  cursor: 'pointer',
                }}
              >
                {row.ShortListed}
              </TableCell>
              <TableCell
                sx={{ color: "#4B465C", fontSize: "15px", fontWeight: 400 }}
              >
                {row.postingDate}
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    color: row?.status === "Listed" ? "#28C76F" : "#F3103C",
                    fontSize: "13px",
                    fontWeight: 400,
                    bgcolor:
                      row?.status === "Listed"
                        ? "rgba(40, 199, 111, 0.15)"
                        : "rgba(243, 16, 60, 0.15)",
                    padding: "5px 10px",
                    width: "58px",
                    borderRadius: "4px",
                  }}
                >
                  {row?.status}
                </Box>
              </TableCell>
              <TableCell sx={{ float: "right" }}>
                <Stack direction="row" gap="16px" alignItems="center">
                  <TbEdit color="#4B465C" fontSize="22px" cursor="pointer" />
                  <GoTrash color="#4B465C" fontSize="22px" cursor="pointer" />
                  <Link href={`/job-management/${row?.name}`}>
                    <LuEye color="#4B465C" fontSize="22px" cursor="pointer" />
                  </Link>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ManagementTable;
