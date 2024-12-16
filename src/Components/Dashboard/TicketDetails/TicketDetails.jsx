import { Box, IconButton, Tooltip } from "@mui/joy";
import React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { center, glass } from "../../../utils/utils";
import TicketHeading from "./TicketHeading";
import APIDeploymentDetails from "./APIDeploymentDetails";
import { FaPlus } from "react-icons/fa";
import { CacheSQLandURLConfiguration } from "./APIDeploymentDetailsAccordion";

const SQL = `SELECT TOP 5 Id, Name FROM customerNames ORDER BY NEWID();
SELECT column FROM table ORDER BY RAND() LIMIT 1;  
SELECT column FROM table ORDER BY RANDOM() LIMIT 1;  
SELECT TOP 1 column FROM table ORDER BY NEWID();
SELECT TOP 5 Id, Name FROM customerNames ORDER BY NEWID();
SELECT column FROM table ORDER BY RAND() LIMIT 1;  
SELECT column FROM table ORDER BY RANDOM() LIMIT 1;  
SELECT TOP 1 column FROM table ORDER BY NEWID();
SELECT TOP 5 Id, Name FROM customerNames ORDER BY NEWID();
SELECT column FROM table ORDER BY RAND() LIMIT 1;  
SELECT column FROM table ORDER BY RANDOM() LIMIT 1;  
SELECT TOP 1 column FROM table ORDER BY NEWID();`;

const XML = `Path: Router.xml
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>

<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>

<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>`;

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
        <CacheSQLandURLConfiguration title={"Cache SQL"} value={SQL} />
        <CacheSQLandURLConfiguration title={"URL Configuration"} value={XML} />
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
