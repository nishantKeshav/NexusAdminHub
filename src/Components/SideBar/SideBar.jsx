/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Drawer, Typography, Badge, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SpeedIcon from "@mui/icons-material/Speed";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import WorkIcon from "@mui/icons-material/Work";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import EmailIcon from "@mui/icons-material/Email";
import ChatIcon from "@mui/icons-material/Chat";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TvIcon from "@mui/icons-material/Tv";
import SecurityIcon from "@mui/icons-material/Security";
import SegmentIcon from "@mui/icons-material/Segment";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import LaunchIcon from "@mui/icons-material/Launch";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Logo from "../../assets/Logo.png";
import userIcon from "../../assets/userIcon.jpg";

import "./SideBar.css";

const SideBar = ({open , handleDrawerToggle}) => {
  const [managementOptions_open, setManagementOptions_open] = useState(false);

  const handleManagementOptions = () => {
    setManagementOptions_open(!managementOptions_open);
  };

  const drawerWidthOpen = 280;
  const drawerWidthClosed = 100;

  return (
    <Box style={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        className={open ? "sideBarOpen" : "sideBarClosed"}
        open={open}
        sx={{
          width: open ? drawerWidthOpen : drawerWidthClosed,
          transition: "width 0.3s ease",
          "& .MuiDrawer-paper": {
            justifyContent: "space-between",
            overflowX: "hidden",
            width: open ? drawerWidthOpen : drawerWidthClosed,
            transition: "width 0.3s ease",
            padding: open ? 2 : 1,
            marginTop: 0,
            backgroundColor: "#151c24",
            color: "whitesmoke",
            borderRight: '1px dashed #2f363e',
          },
        }}
      >
        <Box>
          <Box className="Logo-container" onClick={handleDrawerToggle}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: 55, cursor: "pointer", marginLeft: "7px" }}
            />
          </Box>
          <Box className="menu-button" onClick={handleDrawerToggle}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </Box>

          <Box className="overview-container">
            <Typography
              className="overview-header"
              variant="h8"
              style={{
                fontSize: "13px",
                marginLeft: "5px",
                color: "#657380",
                marginTop: "10px",
                display: open ? "block" : "none",
                fontWeight: "bold",
              }}
            >
              {"OVERVIEW"}
            </Typography>
            <Box className="overview-list">
              <Box
                className={open ? "overview-item-open" : "overview-item-close"}
              >
                <SpeedIcon
                  className="overview-item-icon"
                  style={{
                    height: 40,
                    cursor: "pointer",
                    color: "#657380",
                    marginLeft: "10px",
                    marginRight: open ? "10px" : "0px",
                  }}
                />
                <Typography
                  className="overview-item-text"
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                    color: "whitesmoke",
                    fontFamily: "Poppins",
                  }}
                >
                  {"App"}
                </Typography>
              </Box>
              <Box
                className={open ? "overview-item-open" : "overview-item-close"}
              >
                <ShoppingBagIcon
                  className="overview-item-icon"
                  style={{
                    height: 40,
                    cursor: "pointer",
                    color: "#657380",
                    marginLeft: "10px",
                    marginRight: open ? "10px" : "0px",
                  }}
                />
                <Typography
                  className="overview-item-text"
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                    color: "whitesmoke",
                    fontFamily: "Poppins",
                  }}
                >
                  {"Commerce"}
                </Typography>
              </Box>
              <Box
                className={open ? "overview-item-open" : "overview-item-close"}
              >
                <SignalCellularAltIcon
                  className="overview-item-icon"
                  style={{
                    height: 40,
                    cursor: "pointer",
                    color: "#657380",
                    marginLeft: "10px",
                    marginRight: open ? "10px" : "0px",
                  }}
                />
                <Typography
                  className="overview-item-text"
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                    color: "whitesmoke",
                    fontFamily: "Poppins",
                  }}
                >
                  {"Analytics"}
                </Typography>
              </Box>
              <Box
                className={open ? "overview-item-open" : "overview-item-close"}
              >
                <AccountBalanceIcon
                  className="overview-item-icon"
                  style={{
                    height: 40,
                    cursor: "pointer",
                    color: "#657380",
                    marginLeft: "10px",
                    marginRight: open ? "10px" : "0px",
                  }}
                />
                <Typography
                  className="overview-item-text"
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                    color: "whitesmoke",
                    fontFamily: "Poppins",
                  }}
                >
                  {"Banking"}
                </Typography>
              </Box>
              <Box
                className={open ? "overview-item-open" : "overview-item-close"}
              >
                <FlightTakeoffIcon
                  className="overview-item-icon"
                  style={{
                    height: 40,
                    cursor: "pointer",
                    color: "#657380",
                    marginLeft: "10px",
                    marginRight: open ? "10px" : "0px",
                  }}
                />
                <Typography
                  className="overview-item-text"
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                    color: "whitesmoke",
                    fontFamily: "Poppins",
                  }}
                >
                  {"Booking"}
                </Typography>
              </Box>
              <Box
                className={open ? "overview-item-open" : "overview-item-close"}
              >
                <InsertDriveFileIcon
                  className="overview-item-icon"
                  style={{
                    height: 40,
                    cursor: "pointer",
                    color: "#657380",
                    marginLeft: "10px",
                    marginRight: open ? "10px" : "0px",
                  }}
                />
                <Typography
                  className="overview-item-text"
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                    color: "whitesmoke",
                    fontFamily: "Poppins",
                  }}
                >
                  {"File"}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="management-container">
            <Typography
              className="management-header"
              variant="h8"
              style={{
                fontSize: "13px",
                marginLeft: "5px",
                color: "#657380",
                marginTop: "20px",
                display: open ? "block" : "none",
                fontWeight: "bold",
              }}
            >
              {"MANAGEMENT"}
            </Typography>
            <Box className="management-list">
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <AccountCircleIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"User"}
                  </Typography>
                </Box>
                <Box className="management-item2">
                  {managementOptions_open ? (
                    <ArrowDropDownIcon className="right-arrow" />
                  ) : (
                    <ArrowRightIcon className="right-arrow" />
                  )}
                </Box>
              </Box>
              {open && managementOptions_open && (
                <Box className="management-item-options">
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Profile
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Cards
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      List
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Create
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Edit
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Account
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <CheckroomIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"Product"}
                  </Typography>
                </Box>
                <Box className="management-item2">
                  {managementOptions_open ? (
                    <ArrowDropDownIcon className="right-arrow" />
                  ) : (
                    <ArrowRightIcon className="right-arrow" />
                  )}
                </Box>
              </Box>
              {open && managementOptions_open && (
                <Box className="management-item-options">
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Profile
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Cards
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      List
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Create
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Edit
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Account
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <ProductionQuantityLimitsIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"Order"}
                  </Typography>
                </Box>
                <Box className="management-item2">
                  {managementOptions_open ? (
                    <ArrowDropDownIcon className="right-arrow" />
                  ) : (
                    <ArrowRightIcon className="right-arrow" />
                  )}
                </Box>
              </Box>
              {open && managementOptions_open && (
                <Box className="management-item-options">
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Profile
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Cards
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      List
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Create
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Edit
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Account
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <ReceiptIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"Invoice"}
                  </Typography>
                </Box>
                <Box className="management-item2">
                  {managementOptions_open ? (
                    <ArrowDropDownIcon className="right-arrow" />
                  ) : (
                    <ArrowRightIcon className="right-arrow" />
                  )}
                </Box>
              </Box>
              {open && managementOptions_open && (
                <Box className="management-item-options">
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Profile
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Cards
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      List
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Create
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Edit
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Account
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <ViewStreamIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"Blog"}
                  </Typography>
                </Box>
                <Box className="management-item2">
                  {managementOptions_open ? (
                    <ArrowDropDownIcon className="right-arrow" />
                  ) : (
                    <ArrowRightIcon className="right-arrow" />
                  )}
                </Box>
              </Box>
              {open && managementOptions_open && (
                <Box className="management-item-options">
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Profile
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Cards
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      List
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Create
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Edit
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Account
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <WorkIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"Job"}
                  </Typography>
                </Box>
                <Box className="management-item2">
                  {managementOptions_open ? (
                    <ArrowDropDownIcon className="right-arrow" />
                  ) : (
                    <ArrowRightIcon className="right-arrow" />
                  )}
                </Box>
              </Box>
              {open && managementOptions_open && (
                <Box className="management-item-options">
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Profile
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Cards
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      List
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Create
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Edit
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Account
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <GolfCourseIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"Tour"}
                  </Typography>
                </Box>
                <Box className="management-item2">
                  {managementOptions_open ? (
                    <ArrowDropDownIcon className="right-arrow" />
                  ) : (
                    <ArrowRightIcon className="right-arrow" />
                  )}
                </Box>
              </Box>
              {open && managementOptions_open && (
                <Box className="management-item-options">
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Profile
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Cards
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      List
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Create
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Edit
                    </Typography>
                  </Box>
                  <Box className="management-item-option">
                    <Box className="management-item-dot" />
                    <Typography className="management-item-option-text">
                      Account
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <FolderSpecialIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"File Manager"}
                  </Typography>
                </Box>
                <Box className="management-item2 hidden">
                  {managementOptions_open ? (
                    <ArrowDropDownIcon className="right-arrow-updated" />
                  ) : (
                    <ArrowRightIcon className="right-arrow" />
                  )}
                </Box>
              </Box>
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <EmailIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"Mail"}
                  </Typography>
                </Box>
                <Box className="management-item2 messages">
                  <Box className="circle-messages">+32</Box>
                </Box>
              </Box>
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <ChatIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"Chat"}
                  </Typography>
                </Box>
                <Box className="management-item2 hidden">
                  {managementOptions_open ? (
                    <ArrowDropDownIcon className="right-arrow-updated" />
                  ) : (
                    <ArrowRightIcon className="right-arrow" />
                  )}
                </Box>
              </Box>
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <CalendarMonthIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"Calender"}
                  </Typography>
                </Box>
                <Box className="management-item2 hidden">
                  {managementOptions_open ? (
                    <ArrowDropDownIcon className="right-arrow-updated" />
                  ) : (
                    <ArrowRightIcon className="right-arrow" />
                  )}
                </Box>
              </Box>
              <Box
                onClick={handleManagementOptions}
                className={
                  open ? "management-item-open" : "management-item-close"
                }
              >
                <Box class="management-item1">
                  <TvIcon
                    className="management-item-icon"
                    style={{
                      height: 30,
                      cursor: "pointer",
                      color: "#657380",
                      marginLeft: "10px",
                      marginRight: open ? "10px" : "0px",
                    }}
                  />
                  <Typography
                    className="management-item-text"
                    style={{
                      fontSize: "15px",
                      marginLeft: "5px",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                    }}
                  >
                    {"Kanban"}
                  </Typography>
                </Box>
                <Box className="management-item2 hidden">
                  {managementOptions_open ? (
                    <ArrowDropDownIcon className="right-arrow-updated" />
                  ) : (
                    <ArrowRightIcon className="right-arrow" />
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="othercases-container">
            <Box
              className={
                open ? "othercases-list-open" : "othercases-list-close"
              }
            >
              <Typography
                className="othercases-header"
                variant="h8"
                style={{
                  fontSize: "13px",
                  marginLeft: "5px",
                  color: "#657380",
                  marginTop: "20px",
                  display: open ? "block" : "none",
                  fontWeight: "bold",
                }}
              >
                {"OTHER CASES"}
              </Typography>
              <Box className="othercases-items">
                <Box className="othercases-item">
                  <Box className="othercases-item1">
                    <SecurityIcon
                      className="othercases-item-icon"
                      style={{
                        height: 45,
                        cursor: "pointer",
                        color: "#657380",
                        marginLeft: "14px",
                        marginRight: open ? "10px" : "0px",
                      }}
                    />
                  </Box>
                  <Box className="othercases-item2">
                    <Typography
                      className="othercases-item-text1"
                      variant="h8"
                      style={{
                        fontSize: "13px",
                        marginLeft: "5px",
                        color: "#657380",
                        fontWeight: "bold",
                      }}
                    >
                      {"Item By Roles"}
                    </Typography>
                    <Typography
                      className="othercases-item-text2"
                      variant="h8"
                      style={{
                        fontSize: "13px",
                        marginLeft: "5px",
                        color: "#657380",
                        display: open ? "block" : "none",
                        fontWeight: "bold",
                      }}
                    >
                      {"Only Admin can see this Item"}
                    </Typography>
                  </Box>
                </Box>
                <Box className="othercases-item">
                  <Box className="othercases-item1">
                    <SegmentIcon
                      className="othercases-item-icon"
                      style={{
                        height: 45,
                        cursor: "pointer",
                        color: "#657380",
                        marginLeft: "14px",
                        marginRight: open ? "10px" : "0px",
                      }}
                    />
                  </Box>
                  <Box className="othercases-item2">
                    <Typography
                      className="othercases-item-text1"
                      variant="h8"
                      style={{
                        fontSize: "13px",
                        marginLeft: "5px",
                        color: "#657380",
                        fontWeight: "bold",
                      }}
                    >
                      {"Item Caption"}
                    </Typography>
                    <Typography
                      className="othercases-item-text2"
                      variant="h8"
                      style={{
                        fontSize: "13px",
                        marginLeft: "5px",
                        color: "#657380",
                        display: open ? "block" : "none",
                        fontWeight: "bold",
                      }}
                    >
                      {"Quis malesuada placerat nisl.."}
                    </Typography>
                  </Box>
                </Box>
                <Box className="othercases-item">
                  <Box className="othercases-item1">
                    <NotInterestedIcon
                      className="othercases-item-icon"
                      style={{
                        height: 45,
                        cursor: "pointer",
                        color: "#657380",
                        marginLeft: "14px",
                        marginRight: open ? "10px" : "0px",
                      }}
                    />
                  </Box>
                  <Box className="othercases-item2">
                    <Typography
                      className="othercases-item-text1 extra-condition"
                      variant="h8"
                      style={{
                        fontSize: "13px",
                        marginTop: "10px",
                        marginLeft: "5px",
                        color: "#657380",
                        fontWeight: "bold",
                      }}
                    >
                      {"Item Disabled"}
                    </Typography>
                  </Box>
                </Box>
                <Box className="othercases-item">
                  <Box className="othercases-item1">
                    <LaunchIcon
                      className="othercases-item-icon"
                      style={{
                        height: 45,
                        cursor: "pointer",
                        color: "#657380",
                        marginLeft: "14px",
                        marginRight: open ? "10px" : "0px",
                      }}
                    />
                  </Box>
                  <Box className="othercases-item2">
                    <Typography
                      className="othercases-item-text1 extra-condition"
                      variant="h8"
                      style={{
                        fontSize: "13px",
                        marginTop: "10px",
                        marginLeft: "5px",
                        color: "#657380",
                        fontWeight: "bold",
                      }}
                    >
                      {"Item External Link"}
                    </Typography>
                  </Box>
                </Box>
                <Box className="othercases-item">
                  <Box className="othercases-item1">
                    <FileCopyIcon
                      className="othercases-item-icon"
                      style={{
                        height: 45,
                        cursor: "pointer",
                        color: "#657380",
                        marginLeft: "14px",
                        marginRight: open ? "10px" : "0px",
                      }}
                    />
                  </Box>
                  <Box className="othercases-item2">
                    <Typography
                      className="othercases-item-text1 extra-condition"
                      variant="h8"
                      style={{
                        fontSize: "13px",
                        marginTop: "10px",
                        marginLeft: "5px",
                        color: "#657380",
                        fontWeight: "bold",
                      }}
                    >
                      {"Blank"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className={open ? "userdetails-container-open" : "userdetails-container-close"}
          >
            <Badge badgeContent={"Free"} color="primary">
              <img className="user-icon" src={userIcon} alt="user-icon" />
            </Badge>
            <Typography className="userdetails-name">Nishant Keshav</Typography>
            <Typography className="userdetails-email">
              demo@minimals.cc
            </Typography>
            <Button className="userdetails-button">Upgrade to Pro</Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;



