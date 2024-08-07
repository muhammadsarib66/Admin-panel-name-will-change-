import { useState } from "react";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import userLogo from "../../assets/images/userLogo.png";
import Menu from "../../assets/icons/Menu";
import NotifiOff from "../../assets/icons/notficationOff.svg";
import { Avatar, InputBase, Paper } from "@mui/material";
import { color, wrap } from "framer-motion";
import { Route, Routes } from "react-router";
import UsersChart from "../../components/UsersChart";
import DashboardContent from "../../components/DashboardContent";
import Users from '../Users'
import ServiceProviders from '../ServiceProvider'
import Bookings from '../Bookings';
import EventManger from "../EventManager"
import DashboardLogo from "../../assets/icons/DashboardLogo";
import User from "../../assets/icons/User";
import ServiceProvider from "../../assets/icons/ServiceProvider";
import BookLogo from "../../assets/icons/BookLogo";
import Settings from '../../assets/icons/Settings'

import CustomerSupportLogo from "../../assets/icons/CustomerSupportLogo";
import Logout from "../../assets/icons/Logout";
import { Link } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [actInd, setActInd] = useState(0);

  const NavLinks = [
    {
      title: "Dasbboard",
      icon: DashboardLogo,
      link: "/",
    },
    {
      title: "Users",
      icon: User,
      link: "/users",
    },
    {
      title: "Event Managers",
      icon: CustomerSupportLogo,
      link : '/eventmanager'
    },
    // {
    //   title: "ServiceProvider",
    //   icon: ServiceProvider,
    //   link: "/serviceprovider",
    // },
    {
      title: "Bookings",
      icon: BookLogo,
      link : '/bookings'
    },
    // {
    //   title: "Settings",
    //   icon: Settings,
    //   link : '/settings'
    // },
    {
      title: "Logout",
      icon: Logout,
      link : '/logout'
    },
  ];
  const handleTabClick = (index) => {
    setActInd(index);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: "#f3f3f3", color: "#535353" }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex items-center  w-full  justify-between">
            <Typography variant="h6" flexWrap={wrap} component="div">
              AARMA Admin Panel
            </Typography>
            <Paper
              component="form"
              className=" items-center w-auto hidden md:flex  "
            >
              <InputBase
                className="w-96"
                sx={{ ml: 2, flex: 1 }}
                placeholder="Search..."
                inputProps={{ "aria-label": "search anything" }}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                //   onClick={handleCheckData}
              >
                <SearchIcon className="   " />
              </IconButton>
            </Paper>
            <div className="flex gap-4 items-center">
              <span>{/* <img src={NotifiOn} alt="notification" /> */}</span>
              <span>
                <img src={NotifiOff} alt="notification" />
              </span>
              <span className="cursor-pointer ">
                <Menu fill="#535353" />
                {/* <img src={menu} alt="menu" /> */}
              </span>
              <Avatar alt="user" src={userLogo} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div className="flex justify-between items-center  w-full ">
            <p>AARMA Panel</p>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <>
                  {" "}
                  <ChevronLeftIcon />{" "}
                </>
              )}
            </IconButton>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          {NavLinks.map((item, index) => (
            <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
              <Link to={item.link}>
              <ListItemButton
                onClick={() => handleTabClick(index)}
                sx={{
                  minHeight: 66,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >

                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >

                  <item.icon fill={actInd === index && "orange"} />
               
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    color: `${actInd === index ? "orange" : "grey"}`,
                    opacity: open ? 1 : 0,
                  }}
                />

              </ListItemButton>
                </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
       
      </Drawer>
      <div className="bg-[#f3f3f3] h-full w-full pt-20 px-4  grid grid-cols-4 gap-4" >
        <div className=" col-span-4  px-2 md:px-10">
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="/users" element={<Users />} />
            <Route path="/eventmanager" element={<EventManger />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/serviceprovider" element={<ServiceProviders />} />
          </Routes>
        </div>
        {/* <div className=" md:flex  hidden  flex-col gap-4">
          <UsersChart />
          <UsersChart />
        </div> */}
      </div>
    </Box>
  );
}
