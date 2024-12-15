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

const CacheSQL = () => {
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
          <AccordionSummary>Cache SQL</AccordionSummary>
          <AccordionDetails>
            <Box className="ticketlist" sx={{ height: "20vh" }}>
              <pre>
                SELECT TOP 5 Id, Name FROM customerNames ORDER BY NEWID();
                <br />
                SELECT column FROM table ORDER BY RAND() LIMIT 1; <br />
                SELECT column FROM table ORDER BY RANDOM() LIMIT 1; <br />
                SELECT TOP 1 column FROM table ORDER BY NEWID();
              </pre>
              <pre>
                SELECT TOP 5 Id, Name FROM customerNames ORDER BY NEWID();
                <br />
                SELECT column FROM table ORDER BY RAND() LIMIT 1; <br />
                SELECT column FROM table ORDER BY RANDOM() LIMIT 1; <br />
                SELECT TOP 1 column FROM table ORDER BY NEWID();
              </pre>
              <pre>
                SELECT TOP 5 Id, Name FROM customerNames ORDER BY NEWID();
                <br />
                SELECT column FROM table ORDER BY RAND() LIMIT 1; <br />
                SELECT column FROM table ORDER BY RANDOM() LIMIT 1; <br />
                SELECT TOP 1 column FROM table ORDER BY NEWID();
              </pre>
            </Box>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Box>
  );
};

export default CacheSQL;
