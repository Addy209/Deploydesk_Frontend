import { Box, IconButton, Tooltip } from "@mui/joy";
import React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { center, glass } from "../../../utils/utils";
import TicketHeading from "./TicketHeading";
import APIDeploymentDetails from "./APIDeploymentDetails";
import { FaPlus } from "react-icons/fa";
import { CacheSQLandURLConfiguration } from "./APIDeploymentDetailsAccordion";

const TicketDetails = () => {
  return (
    <Box
      sx={{
        width: "65%",
        margin: "0 0 0 0.5vw",
        height: "90dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          ...center,
          width: "100%",
          height: "100%",
          background: "rgba(211,211,211,0.5)",
          justifyContent: "flex-start",
          backdropFilter: "blur(30px)",
          borderRadius: "8px",
        }}
        className="ticketlist"
      >
        <TicketHeading />
        <APIDeploymentDetails />
      </Box>
    </Box>
  );
};

export default TicketDetails;
