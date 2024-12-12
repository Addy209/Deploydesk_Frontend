import { Avatar, Box, Divider, Grid, Input, Typography } from "@mui/joy";
import React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { center, glass } from "../../utils/utils";
import Header from "./Header";
import SideMenu from "./SideMenu";

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
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "99%",
          height: "100%",
          paddingLeft: "1%",
        }}
      >
        <SideMenu />
        <Divider orientation="vertical" />
        <Box sx={{ width: "30%" }}>2</Box>
        <Divider orientation="vertical" />
        <Box sx={{ width: "55%" }}>3</Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
