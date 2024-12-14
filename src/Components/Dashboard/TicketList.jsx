import React from "react";
import { Avatar, Box, Divider, Grid, Input, Typography } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import { center, glass } from "../../utils/utils";

const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const TicketList = () => {
  const [selected, setSelected] = React.useState(-1);
  return (
    <Box
      sx={{
        ...center,
        width: "20%",
        margin: "0 0.5vw 0 0",
        height: "90dvh",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          ...glass,
          ...center,
          height: "2.5%",
          width: "100%",
          padding: "1vh 0",
          margin: "0 0 1vh 0.5vw",
          borderRadius: "8px",
        }}
      >
        <Typography level="h4">Tickets</Typography>
      </Box>
      <Box
        sx={{
          ...glass,
          width: "100%",
          margin: "0 0.5vw 0 1vw",
          height: "90dvh",
          justifyContent: "flex-start",
        }}
        className="ticketlist"
      >
        {arr.map((val, index) => {
          const condititon = selected === index;
          const style = {
            color: condititon ? "whitesmoke" : "",
            transition: "ease-in-out 0.5s",
          };
          return (
            <Box key={index}>
              <Box
                onClick={() => {
                  setSelected(index);
                }}
                sx={{
                  ...glass,
                  borderRadius: "none",
                  border: "none",
                  boxShadow: "none",
                  height: "5rem",
                  width: "100%",
                  cursor: "pointer",
                  backgroundColor: condititon ? "rgba(13, 110, 253,0.6)" : "",
                  transition: "ease-in-out 0.5s",
                }}
              >
                <Box
                  sx={{
                    padding: "2vh 1vw",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "85%",
                  }}
                >
                  <Typography level="body-sm" fontWeight={"bold"} sx={style}>
                    Ticket#001 : Request for deployment of thirdPartyWrapper
                  </Typography>
                  <Typography level="body-xs" sx={style}>
                    Pending For: 2 Days
                  </Typography>
                </Box>
              </Box>
              <Divider orientation="horizontal" />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default TicketList;
