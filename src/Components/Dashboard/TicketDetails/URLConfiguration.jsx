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

const URLConfiguration = () => {
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
        <Accordion>
          <AccordionSummary>URL Configuration</AccordionSummary>
          <AccordionDetails>
            <Box className="ticketlist" sx={{ height: "20vh" }}>
              <pre>
                FilePath:router.xml
                {"<test><value>M/value></test>"}
              </pre>
            </Box>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Box>
  );
};

export default URLConfiguration;
