import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const CustomDropdown = ({ row, handleClick, handleClose, anchorEl }) => {
  return (
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
  );
};

export default CustomDropdown;
