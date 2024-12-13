import React from "react";
import { Avatar, Box, Divider, Grid, Input, Typography } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { center, glass } from "../../utils/utils";

const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const TicketList = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Box
      sx={{
        width: "20%",
        margin: "0 1vw",
        height: "90dvh",
        justifyContent: "flex-start",
      }}
      className="ticketlist"
    >
      {arr.map((val, index) => {
        return (
          <>
            <Box
              onClick={() => {
                setSelected(index);
              }}
              key={index}
              sx={{
                ...glass,
                borderRadius: "none",
                border: "none",
                boxShadow: "none",
                height: "5rem",
                width: "100%",
                cursor: "pointer",
                backgroundColor:
                  selected === index ? "rgba(255, 215, 0,0.5)" : "",
              }}
            >
              <Box
                sx={{
                  padding: "2vh 1vw",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "30ch",
                }}
              >
                <Typography level="body-sm" fontWeight={"bold"}>
                  Ticket#001 : Request for deployment of thirdPartyWrapper
                </Typography>
                <Typography level="body-xs">Pending For: 2 Days</Typography>
              </Box>
            </Box>
            <Divider orientation="horizontal" />
          </>
        );
      })}
    </Box>
  );
};

export default TicketList;
