import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/Login/login";
import Test from "./Components/Test";
import Dashboard from "./pages/dashboard";
import Header from "./Components/Dashboard/Header";
import { Box } from "@mui/joy";
import Navigation from "./Components/Dashboard/Navigation";

function App() {
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
      <Header />

      {/* <Navigation /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Box>
  );
}

export default App;
