import { Avatar, Box, Divider, Grid, Input, Typography } from "@mui/joy";
import React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { center, glass } from "../../utils/utils";
import Header from "../../Components/Dashboard/Header";
import SideMenu from "../../Components/Dashboard/SideMenu";
import "../../Components/Dashboard/dashboard.css";
import TicketList from "../../Components/Dashboard/TicketList";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        background: "url('./bg.jpg')",
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
        <Divider orientation="vertical" />
        <Box sx={{ width: "60%", margin: "0 1vw" }}>
          <Box
            sx={{
              ...center,
              width: "100%",
              height: "100%",
              background: "rgb(211,211,211)",
            }}
          >
            Test
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
