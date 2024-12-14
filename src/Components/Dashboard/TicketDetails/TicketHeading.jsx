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
import { center, rowStyle } from "../../../utils/utils";
import { MdEdit, MdDelete } from "react-icons/md";
import TicketBasicDetails from "./TicketBasicDetails";

const TicketHeading = () => {
  return (
    <>
      <Box
        sx={{
          ...rowStyle,
          justifyContent: "space-between",
          width: "100%",
          margin: "1rem 0 0 2rem",
        }}
      >
        <Box sx={{ ...rowStyle, width: "80%" }}>
          <Typography level="h4">
            Ticket#T126057 - Request for deployment of thirdPartyWrapper Service
          </Typography>
        </Box>
        <Box sx={{ ...rowStyle, margin: "0 2rem 0 0" }}>
          <ButtonGroup>
            <Tooltip
              arrow
              color="primary"
              size="md"
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
              size="md"
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
      <Box
        sx={{
          ...rowStyle,
          justifyContent: "flex-start",
          width: "100%",
          margin: "1rem 0 0 2rem",
        }}
      >
        <TicketBasicDetails title="State" desc="Pending" />
        <TicketBasicDetails
          title="Status"
          desc="Pending with Checker"
          style={{ marginLeft: "4rem" }}
        />
        <TicketBasicDetails
          title="PM Name"
          desc="Priyanshu Kumar"
          style={{ marginLeft: "4rem" }}
        />
        <TicketBasicDetails
          title="Environment"
          desc="Non-Prod"
          style={{ marginLeft: "4rem" }}
        />
      </Box>
      <Box
        sx={{
          ...rowStyle,
          justifyContent: "flex-start",
          width: "100%",
          margin: "1rem 0 0 2rem",
        }}
      >
        <TicketBasicDetails title="Created On" desc="December-16, 2024" />
      </Box>
    </>
  );
};

export default TicketHeading;
