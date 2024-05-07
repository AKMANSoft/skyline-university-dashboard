"use client";
import { Fragment, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { toggleHamburger } from "@/redux/slices/hamburger";
import SectionTitle from "../common/SectionTitle";
import { useTheme } from "@emotion/react";

const SidebarMainBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  bottom: 0,
  overflowY: "auto",
  overflowX: "hidden",
  boxShadow: "0px 2px 4px 0px rgba(165, 163, 174, 0.30)",
  transition: "all .3s ease-in-out",
}));

const Sidebar = () => {
  const theme = useTheme()
  const dispatch = useDispatch();
  const [openMenus, setOpenMenus] = useState({
    mainActive: null,
    subMenus: [],
  });
  const pathname = usePathname();
  const router = useRouter();
  const showSidebar = useSelector((state) => state.hamburger.show);

  useEffect(() => {
    let activeInd = 0;
    let activeSubIndexes = [];
    menuItems?.map((menuItem, index) => {
      if (menuItem?.path) {
        if (pathname?.split("/")?.[1] === menuItem?.path?.split("/")?.[0]) {
          activeInd = index;
        }
      }
      if (menuItem?.children?.length > 0) {
        menuItem.children.map((child, childIndex) => {
          if (pathname?.split("/")?.[1] === child?.path?.split("/")?.[0]) {
            activeInd = index;
            activeSubIndexes.push(index + "." + childIndex);
          }
        });
      }
    });

    if (activeInd !== -1) {
      setOpenMenus({
        ...openMenus,
        mainActive: activeInd,
        subMenus: [...openMenus?.subMenus, ...activeSubIndexes],
      });
    }
  }, [pathname]);

  const handleMenuClick = (type, index) => {
    if (type === "main") {
      if(openMenus?.mainActive === index) {
        setOpenMenus({ ...openMenus, mainActive: null });
      }else{
        setOpenMenus({ ...openMenus, mainActive: index });
      }
    } else {
      if (openMenus.subMenus.includes(index)) {
        setOpenMenus({
          ...openMenus,
          subMenus: openMenus?.subMenus?.filter((item) => item !== index),
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
      <Fragment key={subIndex}>
        {submenu?.sectionTitle ? (
          <SectionTitle title={submenu?.sectionTitle} />
        ) : (
          <div>
            <ListItem
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
              {submenu.icon && <ListItemIcon sx={{minWidth: '30px'}}>{submenu.icon}</ListItemIcon>}
              <ListItemText
                primary={submenu.title}
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  ".css-10hburv-MuiTypography-root, & .css-yb0lig": {
                    color: "#696969",
                    lineHeight: "22px",
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
        )}
      </Fragment>
    ));
  };

  const renderMenuItems = (menuItems) => {
    return menuItems?.map((menuItem, index) => (
      <Fragment key={index}>
        {menuItem?.sectionTitle ? (
          <SectionTitle title="Create & Add" />
        ) : (
          <div>
            <ListItem
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
                    color: openMenus.mainActive === index ? "white" : "#696969",
                  },
                }}
              >
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={menuItem.title}
                className="listItemText"
                sx={{
                  "& .css-10hburv-MuiTypography-root, &": {
                    fontSize: "15px !important",
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
      </Fragment>
    ));
  };

  return (
    <>
      {showSidebar && (
        <Box
          onClick={() => dispatch(toggleHamburger(false))}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0,0,0,0.3)",
            zIndex: 999,
          }}
        ></Box>
      )}
      <SidebarMainBox
        sx={{
          width: "25%",
          maxWidth: showSidebar
            ? "265px"
            : { xs: "0px", md: "0px", lg: "265px" },
          minWidth: showSidebar
            ? "265px"
            : { xs: "0px", md: "0px", lg: "265px" },
          "&::-webkit-scrollbar": {
            width: "4px",
            height: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            width: "3px",
            height: "3px",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
            borderRadius: "4px",
          },
        }}
      >
        <Box
          sx={{
            height: "76px",
            py: "20px",
            mb: "10px",
            pl: "18px",
            pr: "14px",
          }}
        >
          <Image priority src={logo} alt="logo" />
        </Box>
        <Box sx={{ width: "100%", px: "14px" }}>
          <List>{renderMenuItems(menuItems)}</List>
        </Box>
      </SidebarMainBox>
    </>
  );
};

export default Sidebar;
