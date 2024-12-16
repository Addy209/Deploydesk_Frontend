import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/joy";
import React from "react";
import { center, glass, rowStyle } from "../../../utils/utils";
import APIDeploymentDetailsRow from "./APIDeploymentDetailsRow";
import { APIDeploymentDetailsAccordion } from "./APIDeploymentDetailsAccordion";

const APIDeploymentDetails = () => {
  return (
    <Box
      sx={{
        ...center,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "1rem 0 0 1vw",
        width: "100%",
      }}
    >
      <AccordionGroup
        color="neutral"
        size="md"
        sx={{ ...glass, width: "98%", marginRight: "10vw" }}
      >
        <APIDeploymentDetailsAccordion />
      </AccordionGroup>
    </Box>
  );
};

export default APIDeploymentDetails;
