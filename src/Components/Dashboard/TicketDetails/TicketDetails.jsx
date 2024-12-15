import { Box, IconButton, Tooltip } from "@mui/joy";
import React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { center, glass } from "../../../utils/utils";
import TicketHeading from "./TicketHeading";
import APIDeploymentDetails from "./APIDeploymentDetails";
import { FaPlus } from "react-icons/fa";
import CacheSQL from "./CacheSQL";
import URLConfiguration from "./URLConfiguration";

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
        <CacheSQL />
        <URLConfiguration />
      </Box>

      <Box
        sx={{
          position: "fixed",
          right: "1rem",
          bottom: "1.5rem",
        }}
      >
        <Tooltip
          arrow
          title="Create New Ticket"
          color="neutral"
          variant="soft"
          placement="left"
        >
          <IconButton
            rotate={true}
            sx={{
              cursor: "pointer",
              background: "gold",
              padding: "1rem",
              borderRadius: "2rem",
            }}
          >
            <FaPlus size={20} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default TicketDetails;
