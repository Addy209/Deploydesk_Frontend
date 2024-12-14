import {
  Avatar,
  Box,
  ButtonGroup,
  Divider,
  Grid,
  IconButton,
  Input,
  Tooltip,
  Typography,
} from "@mui/joy";
import React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { center, glass } from "../../utils/utils";
import Header from "../../Components/Dashboard/Header";
import SideMenu from "../../Components/Dashboard/SideMenu";
import "../../Components/Dashboard/dashboard.css";
import TicketList from "../../Components/Dashboard/TicketList";
import { MdEdit, MdDelete } from "react-icons/md";
import TicketDetails from "../../Components/Dashboard/TicketDetails/TicketDetails";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        background: "url('./ocean.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.1)",
        backgroundBlendMode: "multiply",
        width: "100%",
        height: "100dvh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <SideMenu />
        <TicketList />
        <TicketDetails />
      </Box>
    </Box>
  );
};

export default Dashboard;
