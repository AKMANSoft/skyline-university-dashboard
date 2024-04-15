"use client";
import { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo.png";
import styled from "@emotion/styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMore from "@mui/icons-material/ExpandMore";
import menuItems from "@/navigation/vertical";
import { usePathname, useRouter } from "next/navigation";

const SidebarMainBox = styled(Box)(({ theme }) => ({
  width: "25%",
  maxWidth: "260px",
  minWidth: "260px",
  height: "100vh",
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  bottom: 0,
  overflowY: "auto",
  boxShadow: "0px 2px 4px 0px rgba(165, 163, 174, 0.30)",
}));

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    mainActive: null,
    subMenus: [],
  });
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let activeInd = 0
    let activeSubIndexes = []
    menuItems?.map((menuItem, index) => {
        if(menuItem?.path) {
            if(pathname?.split("/")?.[1] === menuItem?.path?.split("/")?.[0]) {
                activeInd = index
            }
        }
        if(menuItem?.children?.length > 0) {
            menuItem.children.map((child, childIndex) => {
                if(pathname?.split("/")?.[1] === child?.path?.split("/")?.[0]) {
                    activeInd = index
                    activeSubIndexes.push(index + "." + childIndex)
                }
            })
        }
    })
  
    if (activeInd !== -1) {
      setOpenMenus({ ...openMenus, mainActive: activeInd, subMenus: [...openMenus?.subMenus, ...activeSubIndexes] });
    }
  }, [pathname]);

  const handleMenuClick = (type, index) => {
    if (type === "main") {
      setOpenMenus({ ...openMenus, mainActive: index });
    } else {
      if (openMenus.subMenus.includes(index)) {
        setOpenMenus({
          ...openMenus,
          subMenus: openMenus.subMenus.filter((item) => item !== index),
        });
      } else {
        setOpenMenus({
          ...openMenus,
          subMenus: [...openMenus.subMenus, index],
        });
      }
    }
  };

  const renderSubMenuItems = (submenus, depth, parentIndex) => {
    return submenus?.map((submenu, subIndex) => (
      <div key={subIndex}>
        <ListItem
          key={subIndex}
          button
          onClick={() => {
            if (submenu?.children?.length > 0) {
              handleMenuClick("sub", parentIndex + "." + subIndex);
            } else {
              handleMenuClick("sub", parentIndex + "." + subIndex);
              router.push(`/${submenu?.path}`, { scroll: false });
            }
          }}
          sx={{
            pl: "16px",
            height: "40px",
            pr: "4px",
          }}
        >
          <ListItemText
            primary={submenu.title}
            sx={{
              ".css-10hburv-MuiTypography-root, & .css-yb0lig": {
                fontSize: "15px",
                color: "#696969",
                lineHeight: "22px",
                fontWeight: 400,
              },
            }}
          />
          {submenu.children &&
            (openMenus?.subMenus?.includes(parentIndex + "." + subIndex) ? (
              <ExpandMore sx={{ color: "#696969" }} />
            ) : (
              <ChevronRightIcon sx={{ color: "#696969" }} />
            ))}
        </ListItem>
        {submenu.children && (
          <Collapse
            in={openMenus?.subMenus?.includes(parentIndex + "." + subIndex)}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              {renderSubMenuItems(
                submenu.children,
                depth + 1,
                parentIndex + "." + subIndex
              )}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  const renderMenuItems = (menuItems) => {
    return menuItems?.map((menuItem, index) => (
      <>
        {menuItem?.sectionTitle ? (
          <Box
            key={index}
            sx={{ width: "100%", height: "40px", pt: "10px", pl: "16px" }}
          >
            <Typography
              variant="p"
              component="p"
              sx={{
                fontSize: "11px",
                clor: "#4B465C",
                lineHeight: "14px",
                mb: 1,
              }}
            >
              Create & Add
            </Typography>
          </Box>
        ) : (
          <div key={index}>
            <ListItem
              key={index}
              button
              onClick={() => {
                if (menuItem?.children?.length > 0) {
                  handleMenuClick("main", index);
                } else {
                  handleMenuClick("main", index);
                  router.push(`/${menuItem?.path}`, { scroll: false });
                }
              }}
              sx={{
                pl: "16px",
                height: "40px",
                pr: "4px",
                mb: 1,
                background:
                  openMenus.mainActive === index
                    ? "linear-gradient(72deg, #00318B 22.16%, #2C549E 76.47%)"
                    : "transparent",
                borderRadius: "6px",
                "&:hover": {
                  background:
                    openMenus.mainActive === index
                      ? "linear-gradient(72deg, #00318B 22.16%, #2C549E 76.47%)"
                      : "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "1px",
                  pr: "8px",
                  "& .css-1vbwjd7-MuiSvgIcon-root, &": {
                    color: openMenus.mainActive === index ? "white" : "#696969",
                  },
                  "& .sidebar-icon": {
                    color:
                      openMenus.mainActive === index
                        ? "white"
                        : "#696969",
                  },
                }}
              >
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={menuItem.title}
                sx={{
                  " .css-10hburv-MuiTypography-root, & .css-yb0lig": {
                    fontSize: "15px",
                    color: openMenus.mainActive === index ? "white" : "#696969",
                    lineHeight: "22px",
                    fontWeight: 400,
                  },
                }}
              />
              {menuItem.children &&
                (openMenus.mainActive === index ? (
                  <ExpandMore
                    sx={{
                      color:
                        openMenus.mainActive === index ? "white" : "#696969",
                    }}
                  />
                ) : (
                  <ChevronRightIcon
                    sx={{
                      color:
                        openMenus.mainActive === index ? "white" : "#696969",
                    }}
                  />
                ))}
            </ListItem>
            {menuItem.children && (
              <Collapse
                in={openMenus.mainActive === index}
                timeout="auto"
                unmountOnExit
              >
                {renderSubMenuItems(menuItem.children, 1, index)}
              </Collapse>
            )}
          </div>
        )}
      </>
    ));
  };

  return (
    <SidebarMainBox>
      <Box
        sx={{
          height: "76px",
          py: "20px",
          mb: "10px",
          pl: "18px",
          pr: "14px",
        }}
      >
        <Image src={logo} alt="logo" />
      </Box>
      <Box sx={{ width: "100%", px: "14px" }}>
        <List>{renderMenuItems(menuItems)}</List>
      </Box>
    </SidebarMainBox>
  );
};

export default Sidebar;
