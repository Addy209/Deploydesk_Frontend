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

const APIDeploymentDetailsRow = (props) => {
  return (
    <Box
      sx={{
        ...rowStyle,
        justifyContent: "",
        paddingTop: "1vh",
        width: "100%",
      }}
    >
      <Box sx={{ ...rowStyle, width: "70%" }}>
        <Typography level="title-sm">{props.title1}:</Typography>
        &nbsp;
        <Typography
          level="body-sm"
          sx={{ textWrap: "wrap", wordBreak: "break-word" }}
        >
          {props.desc1}
        </Typography>
      </Box>
      {props.title2 && props.desc2 ? (
        <Box sx={{ ...rowStyle, width: "29%", marginLeft: "1%" }}>
          <Typography level="title-sm">{props.title2}:</Typography>&nbsp;
          <Typography level="body-sm">{props.desc2}</Typography>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default APIDeploymentDetailsRow;
