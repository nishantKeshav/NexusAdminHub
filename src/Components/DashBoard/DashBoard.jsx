/* eslint-disable react/prop-types */
// import React from "react";
import "../DashBoard/DashBoard.css";
import {
  Box,
  Typography,
  Badge,
  Button,
  Divider,
  Stack,
  FormControl,
  Select,
  MenuItem,
  TableCell,
  Rating,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import india from "../../assets/india.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import userIcon from "../../assets/userIcon.jpg";
import graphic from "../../assets/graphic.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import graphGreen from "../../assets/graph-green.png";
import { LineChart, PieChart } from "@mui/x-charts";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import windowsIcon from "../../assets/windows.png";
import WindowIcon from "@mui/icons-material/Window";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";


const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#2f3943",
    color: "#657380",
    fontFamily: "Poppins",
    fontWeight: "bold",
    border: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#212b35",
    color: "whitesmoke",
    fontFamily: "Poppins",
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "& td, & th": {
    border: "none",
  },
  "&:last-child td, &:last-child th": {
    borderBottom: "1px solid #212b35",
  },
}));

const StyledTableContainer = styled(TableContainer)(() => ({
  border: "1px solid #212b35",
  borderBottom: "1px dashed #657380",
  borderRadius: "1px",
  "&::-webkit-scrollbar": {
    width: "10px",
    height: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#212b35",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#657380",
    borderRadius: "10px",
    border: "2px solid #212b35",
  },
}));

const StyledTableBody = styled(TableBody)(() => ({
  borderBottom: "1px dashed #657380",
}));

function createData(name, calories, fat, carbs, protein, status) {
  return { name, calories, fat, carbs, protein, status };
}

function createData2(countryName, android, windows, ios) {
  return { countryName, android, windows, ios };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "Paid"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "Out of Date"),
  createData("Eclair", 262, 16.0, 24, 6.0, "Progress"),
  createData("Cupcake", 305, 3.7, 67, 4.3, "Paid"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, "Paid"),
];

const countryRows = [
  createData2("Germany", "9.91k", "1.95k", "1.95k"),
  createData2("England", "1.95k", "9.12k", "9.12k"),
  createData2("France", "9.12k", "6.98k", "6.98k"),
  createData2("Korean", "6.98k", "8.49k", "8.49k"),
  createData2("USA", "8.49k", "2.03k", "2.03k"),
];

const data = [
  { iconClass: "icon1", text: "Mac", id: 1 },
  { iconClass: "icon2", text: "Android", id: 2 },
  { iconClass: "icon3", text: "Windows", id: 3 },
  { iconClass: "icon4", text: "iOS", id: 4 },
];
const data2 = [
  { label: "Mac", value: 12244 },
  { label: "Android", value: 78343 },
  { label: "Windows", value: 53345 },
  { label: "iOS", value: 44313 },
];
const series = [
  {
    innerRadius: 130,
    outerRadius: 115,
    id: "series-2",
    data: data2,
  },
];

const uData = [
  4500, 3200, 1800, 2700, 2000, 2500, 3600, 2800, 2200, 1500, 9600, 4100,
];
const pData = [
  2200, 1500, 9600, 4100, 5000, 3700, 4400, 4500, 3200, 1800, 2700, 2000,
];

const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const CustomCircularProgress = styled(CircularProgress)(() => ({
  circle: {
    strokeLinecap: 'round',
  },
  '.MuiCircularProgress-circle': {
    stroke: 'red', // Default grey color for the unfilled part
  },
  '.MuiCircularProgress-circleDeterminate': {
    stroke: '#2ec587', // Color for the filled part
  },
}));

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const CircularProgressWithLabel = (props) => {
  return (
    <Box position="relative" display="inline-flex">
       <CustomCircularProgress 
        variant="determinate" 
        {...props} 
        className="circular-progress-bar"
        thickness={4} 
        size={100}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" className="circular-progress-bar-value">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

const TotalUsers = "188,245";

const DashBoard = ({ open }) => {
  const [age, setAge] = useState("2019");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      className="dashboard-container"
      style={{ flexGrow: 1, display: "border-box" }}
    >
      <Box className="navbar-container">
        <Box className="navbar">
          <Box
            className={open ? "navbar-content1-open" : "navbar-content1-close"}
          >
            <SearchIcon className = "search-icon"  />
            <Typography className="navbar-item1">⌘K</Typography>
          </Box>
          <Box className="navbar-content2">
            <img src={india} alt="india" width={35} />
            <Badge color="secondary" overlap="circular" badgeContent={"4"}>
              <NotificationsIcon className = "notification-icon" />
            </Badge>
            <AccountCircleIcon className="accountCircle-icon" />
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent={""}
              variant="dot"
            >
              <SettingsIcon className="settings-icon" />
            </Badge>
            <img src={userIcon} alt="user" width={35} className = "navbar-user-icon" />
          </Box>
        </Box>
      </Box>
      <Box className="part1">
        <Box className="welcome-back">
          <Box className="welcome-back-content">
            <Box className="welcome-back-content-heading">
              <Typography className="text1">Welcome back 👋</Typography>
              <Typography className="text2">Nishant Keshav</Typography>
            </Box>
            <Typography className="text3">
              If you are going to call a passage you need to be sure there isn't
              anything
            </Typography>
            <Button variant="outlined" className="go-now-button">
              Go Now
            </Button>
          </Box>
          <img src={graphic} alt="graphic" className="dashboard-graphic" />
        </Box>
        <Box className="Feature-card">
          <Box className="Feature-card-header">
            <Box className="Feature-card-header-part1">
              <Box className="circle1" />
              <Box className="circle2" />
              <Box className="circle3" />
            </Box>
            <Box className="Feature-card-header-part2">
              <ChevronLeftIcon className="left-Feature-card-icon" />
              <ChevronRightIcon className="right-Feature-card-icon" />
            </Box>
          </Box>
          <Box className="Feature-card-content">
            <Typography className="Feature-card-content-text1">
              Featured App
            </Typography>
            <Box>
              <Typography className="Feature-card-content-text2">
                {open
                  ? "The Ultimate Guide to Producti ..."
                  : "The Ultimate Guide to Productivity is ..."}
              </Typography>
              <Typography className="Feature-card-content-text3">
                {open
                  ? "She Eagerly opened the gift, her eyes sparkl ..."
                  : "She Eagerly opened the gift, her eyes sparkling with ..."}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="part2">
        <Box className="dashboard-graph-container">
          <Box className="dashboard-graph-content">
            <Typography className="dashboard-graph-content-text1">
              {"Total Active Users"}
            </Typography>
            <Box className="dashboard-graph-content-text2">
              <KeyboardDoubleArrowDownIcon className="DownArrow" />
              <Typography className="text">{"+2.6%"}</Typography>
            </Box>
            <Typography className="dashboard-graph-content-text3">
              {"18,765"}
            </Typography>
          </Box>
          <img src={graphGreen} alt="graphic" className="dashboard-graph" />
        </Box>
        <Box className="dashboard-graph-container">
          <Box className="dashboard-graph-content">
            <Typography className="dashboard-graph-content-text1">
              {"Total Active Users"}
            </Typography>
            <Box className="dashboard-graph-content-text2">
              <KeyboardDoubleArrowDownIcon className="DownArrow" />
              <Typography className="text">{"+2.6%"}</Typography>
            </Box>
            <Typography className="dashboard-graph-content-text3">
              {"18,765"}
            </Typography>
          </Box>
          <img src={graphGreen} alt="graphic" className="dashboard-graph" />
        </Box>
        <Box className="dashboard-graph-container">
          <Box className="dashboard-graph-content">
            <Typography className="dashboard-graph-content-text1">
              {"Total Active Users"}
            </Typography>
            <Box className="dashboard-graph-content-text2">
              <KeyboardDoubleArrowDownIcon className="DownArrow" />
              <Typography className="text">{"+2.6%"}</Typography>
            </Box>
            <Typography className="dashboard-graph-content-text3">
              {"18,765"}
            </Typography>
          </Box>
          <img src={graphGreen} alt="graphic" className="dashboard-graph" />
        </Box>
      </Box>
      <Box className="part3">
        <Box className="dashboard-body-content3-circle-chart">
          <Typography className="dashboard-body-content3-circle-chart-header">
            Current Downloads
          </Typography>
          <Stack>
            <Box className={open ? "pie-chart-open" : "pie-chart"}>
              <PieChart
                series={series}
                width={500}
                height={350}
                slotProps={{
                  legend: { hidden: true },
                }}
              />
            </Box>
          </Stack>
          <Box className={open ? "pie-chart-text-open" : "pie-chart-text"}>
            <Typography className="pie-chart-text1">Total</Typography>
            <Typography className="pie-chart-text2">{TotalUsers}</Typography>
          </Box>
          <Divider className="divider" />
          <Box className="pie-chart-icons-parent">
            <Box className="pie-chart-icons">
              {data.map((item, index) => (
                <Box key={item.id} className={`pie-chart-icon${index + 1}`}>
                  <Box className={item.iconClass} />
                  <Typography className="icon1-text">{item.text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box className="dashboard-body-content3-scatter-chart">
          <Box>
            <Box className="scatter-chart-header">
              <Box className="scatter-chart-header-text1">
                <Typography className="scatter-chart-header-text1-part1">
                  Area Installed
                </Typography>
                <Typography className="scatter-chart-header-text1-part2">
                  (+43%) than last year
                </Typography>
              </Box>
              <Box sx={{ width: 120 }}>
                <FormControl
                  className="scatter-chart-header-select"
                  sx={{ m: 1, minWidth: 120 }}
                >
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2021}>2021</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box className="scatter-chart-body1-parent">
              <Box className="scatter-chart-body1">
                <Box className="scatter-country1">
                  <Box className="scatter-circle" />
                  <Typography className="scatter-country-name">Asia</Typography>
                </Box>
                <Box className="scatter-country2">
                  <Box className="scatter-circle" />
                  <Typography className="scatter-country-name">
                    America
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="scatter-chart-body2">
            <LineChart
              height={400}
              margin={0}
              className="line-chart"
              colors={["#FED25E", "#4FD995"]}
              series={[{ data: pData }, { data: uData }]}
              sx={{ stroke: "#657380", fontFamily: "Poppins" }}
              grid={{ horizontal: true }}
              xAxis={[{ scaleType: "point", data: xLabels }]}
            />
          </Box>
        </Box>
      </Box>
      <Box className="part4">
        <Box className="invoice-container">
          <Typography className="invoice-header">New Invoice</Typography>
          <Box className="invoice-main">
            <StyledTableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead className="invoice-table-head">
                  <TableRow>
                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                    <StyledTableCell align="right">Calories</StyledTableCell>
                    <StyledTableCell align="right">
                      Fat&nbsp;(g)
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Carbs&nbsp;(g)
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Protein&nbsp;(g)
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Status&nbsp;(g)
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <StyledTableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.protein}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <p className={`invoice-order-status-${row.status}`}>
                          {row.status}
                        </p>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </StyledTableBody>
              </Table>
            </StyledTableContainer>
          </Box>
          <Box className="invoice-footer">
            <Button className="invoice-footer-viewAll-button">
              View All <ChevronRightIcon />
            </Button>
          </Box>
        </Box>
        <Box className="related-applications-container">
          <Box className="application-container">
            <Box className="application-part1">
              <Box className="application-image">
                <img
                  className="application-icon"
                  src={windowsIcon}
                  alt="windows-icon"
                />
              </Box>
              <Box className="single-application-name">
                <Typography className="app-name">Chrome</Typography>
                <Box className="os-part">
                  <Typography className="os-type">Mac</Typography>
                  <Typography className="os-status">Free</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="application-part2">
              <Box className="app-review">
                <Rating name="read-only" value={3.5} readOnly />
                <Typography className="review">9.91k reviews</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="application-container">
            <Box className="application-part1">
              <Box className="application-image">
                <img
                  className="application-icon"
                  src={windowsIcon}
                  alt="windows-icon"
                />
              </Box>
              <Box className="single-application-name">
                <Typography className="app-name">Chrome</Typography>
                <Box className="os-part">
                  <Typography className="os-type">Mac</Typography>
                  <Typography className="os-status">Free</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="application-part2">
              <Box className="app-review">
                <Rating name="read-only" value={3.5} readOnly />
                <Typography className="review">9.91k reviews</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="application-container">
            <Box className="application-part1">
              <Box className="application-image">
                <img
                  className="application-icon"
                  src={windowsIcon}
                  alt="windows-icon"
                />
              </Box>
              <Box className="single-application-name">
                <Typography className="app-name">Chrome</Typography>
                <Box className="os-part">
                  <Typography className="os-type">Mac</Typography>
                  <Typography className="os-status">Free</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="application-part2">
              <Box className="app-review">
                <Rating name="read-only" value={3.5} readOnly />
                <Typography className="review">9.91k reviews</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="application-container">
            <Box className="application-part1">
              <Box className="application-image">
                <img
                  className="application-icon"
                  src={windowsIcon}
                  alt="windows-icon"
                />
              </Box>
              <Box className="single-application-name">
                <Typography className="app-name">Chrome</Typography>
                <Box className="os-part">
                  <Typography className="os-type">Mac</Typography>
                  <Typography className="os-status">Free</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="application-part2">
              <Box className="app-review">
                <Rating name="read-only" value={3.5} readOnly />
                <Typography className="review">9.91k reviews</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="application-container">
            <Box className="application-part1">
              <Box className="application-image">
                <img
                  className="application-icon"
                  src={windowsIcon}
                  alt="windows-icon"
                />
              </Box>
              <Box className="single-application-name">
                <Typography className="app-name">Chrome</Typography>
                <Box className="os-part">
                  <Typography className="os-type">Mac</Typography>
                  <Typography className="os-status">Free</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="application-part2">
              <Box className="app-review">
                <Rating name="read-only" value={3.5} readOnly />
                <Typography className="review">9.91k reviews</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="application-container">
            <Box className="application-part1">
              <Box className="application-image">
                <img
                  className="application-icon"
                  src={windowsIcon}
                  alt="windows-icon"
                />
              </Box>
              <Box className="single-application-name">
                <Typography className="app-name">Chrome</Typography>
                <Box className="os-part">
                  <Typography className="os-type">Mac</Typography>
                  <Typography className="os-status">Free</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="application-part2">
              <Box className="app-review">
                <Rating name="read-only" value={3.5} readOnly />
                <Typography className="review">9.91k reviews</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="application-container">
            <Box className="application-part1">
              <Box className="application-image">
                <img
                  className="application-icon"
                  src={windowsIcon}
                  alt="windows-icon"
                />
              </Box>
              <Box className="single-application-name">
                <Typography className="app-name">Chrome</Typography>
                <Box className="os-part">
                  <Typography className="os-type">Mac</Typography>
                  <Typography className="os-status">Free</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="application-part2">
              <Box className="app-review">
                <Rating name="read-only" value={3.5} readOnly />
                <Typography className="review">9.91k reviews</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="part5">
        <Box className="country-container">
          <Typography className="invoice-header">
            Top Installed Countries
          </Typography>
          <Box className="invoice-main">
            <StyledTableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <StyledTableBody>
                  {countryRows.map((row) => (
                    <StyledTableRow key={row.countryName}>
                      <StyledTableCell component="th" scope="row">
                        <Box className="country-conatiner">
                          <img
                            className="country-logo"
                            src={india}
                            alt="country-flag"
                          />
                          <p className="country-name">{row.countryName}</p>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Box className="platform-container">
                          <AdbIcon className="platform-icon" />
                          <p className="platform-name">{row.android}</p>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Box className="platform-container">
                          <WindowIcon className="platform-icon" />
                          <p className="platform-name">{row.windows}</p>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Box className="platform-container">
                          <AppleIcon className="platform-icon" />
                          <p className="platform-name">{row.ios}</p>
                        </Box>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </StyledTableBody>
              </Table>
            </StyledTableContainer>
          </Box>
        </Box>
        <Box className="authors-container">
          <Typography className="authors-header">Top Authors</Typography>
          <Box className="authors-list">
            <Box className="author-container">
              <Box className="author-container-part1">
                <img className="author-icon" src={userIcon} alt="user-icon" />
                <Box className="author-details">
                  <Typography className="author-name">
                    Nishant Keshav
                  </Typography>
                  <Box className="author-review">
                    <FavoriteIcon className="heart-icon" />
                    <Typography className="review-detail">9.91k</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="trophy-border">
                <EmojiEventsIcon className="trophy-icon" />
              </Box>
            </Box>
            <Box className="author-container">
              <Box className="author-container-part1">
                <img className="author-icon" src={userIcon} alt="user-icon" />
                <Box className="author-details">
                  <Typography className="author-name">
                    Nishant Keshav
                  </Typography>
                  <Box className="author-review">
                    <FavoriteIcon className="heart-icon" />
                    <Typography className="review-detail">9.91k</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="trophy-border">
                <EmojiEventsIcon className="trophy-icon" />
              </Box>
            </Box>
            <Box className="author-container">
              <Box className="author-container-part1">
                <img className="author-icon" src={userIcon} alt="user-icon" />
                <Box className="author-details">
                  <Typography className="author-name">
                    Nishant Keshav
                  </Typography>
                  <Box className="author-review">
                    <FavoriteIcon className="heart-icon" />
                    <Typography className="review-detail">9.91k</Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="trophy-border">
                <EmojiEventsIcon className="trophy-icon" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="extra-container">
          <Box className="conversion-container">
            <CircularProgressWithLabel value={48} />
            <Box className = "conversion-details">
              <Typography className = "conversion-value">38,566</Typography>
              <Typography className = "conversion-name">Conversion</Typography>
            </Box>
          </Box>
          <Box className="conversion-container">
            <CircularProgressWithLabel value={48} />
            <Box className = "conversion-details">
              <Typography className = "conversion-value">38,566</Typography>
              <Typography className = "conversion-name">Conversion</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashBoard;
