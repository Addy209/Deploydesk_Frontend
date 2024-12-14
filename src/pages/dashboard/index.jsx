import { Avatar, Box, Divider, Grid, Input, Typography } from "@mui/joy";
import React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { center, glass } from "../../utils/utils";
import { FaPlus } from "react-icons/fa";
import SideMenu from "../../Components/Dashboard/SideMenu";
import "../../Components/Dashboard/dashboard.css";
import TicketList from "../../Components/Dashboard/TicketList";
import { Container, Button } from "react-floating-action-button";
import TicketDetails from "../../Components/Dashboard/TicketDetails/TicketDetails";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
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
