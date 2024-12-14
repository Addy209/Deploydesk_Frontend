import {
  Avatar,
  Box,
  ButtonGroup,
  Divider,
  Grid,
  IconButton,
  Input,
  Tooltip,
  Typography,
} from "@mui/joy";
import React from "react";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { center, glass } from "../../../utils/utils";
import { MdEdit, MdDelete } from "react-icons/md";

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  height: "max-content",
};

const TicketDetails = () => {
  return (
    <Box
      sx={{
        width: "65%",
        margin: "0 0.5vw 0 0.5vw",
        height: "90dvh",
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
        }}
      >
        <Box
          sx={{
            ...rowStyle,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ ...rowStyle, margin: "1rem 0 0 1rem", width: "80%" }}>
            <Typography level="h4">
              Ticket#T126057 - Request for deployment of thirdPartyWrapper
              Service
            </Typography>
          </Box>
          <Box sx={{ ...rowStyle, margin: "1rem 1rem 0 1rem" }}>
            <ButtonGroup>
              <Tooltip
                arrow
                color="primary"
                size="lg"
                variant="soft"
                title="edit"
              >
                <IconButton color="primary" variant="solid">
                  <MdEdit size={"1.5rem"} />
                </IconButton>
              </Tooltip>
              <Tooltip
                arrow
                color="danger"
                size="lg"
                variant="soft"
                title="delete"
              >
                <IconButton color="danger" variant="solid">
                  <MdDelete size={"1.5rem"} />
                </IconButton>
              </Tooltip>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TicketDetails;
