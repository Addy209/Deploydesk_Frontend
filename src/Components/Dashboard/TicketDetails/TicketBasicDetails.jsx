import { Box, Typography } from "@mui/joy";
import React from "react";

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  height: "max-content",
};

const TicketBasicDetails = (props) => {
  return (
    <Box sx={{ ...rowStyle, ...props.style }}>
      <Typography level="title-md">{props.title}:</Typography>&nbsp;
      <Typography level="body-md">{props.desc}</Typography>
    </Box>
  );
};

export default TicketBasicDetails;
