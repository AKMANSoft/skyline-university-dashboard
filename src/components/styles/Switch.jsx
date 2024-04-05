'use client'
import styled from "@emotion/styled";
import { Switch } from "@mui/material";

export const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#00CA99',
      '&:hover': {
        backgroundColor: '#00CA99',
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'transparent',
    },
    '& .css-1yjjitx-MuiSwitch-track': {
        height: '100%',
        minWidth: '29px',
        width: '45px',
        minHeight: '18px',
        borderRadius: '20px',
        border: '2px solid #00CA99',
        background: '#FFF',
    },
    '& .css-jsexje-MuiSwitch-thumb': {
        width: '10px',
        height: '10px',
        background: '#00CA99',
        marginTop: '7px',
        marginLeft: '3px',
        boxShadow: 'none'
    },
    '& .Mui-checked + .MuiSwitch-track .css-jsexje-MuiSwitch-thumb': {
        left: 'calc(100% - 18px)', // Move the dot to the end when checked
      }
}));
