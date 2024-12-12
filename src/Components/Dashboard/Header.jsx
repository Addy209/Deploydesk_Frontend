import { Avatar, Box, Input, Typography } from "@mui/joy";
import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { center } from "../../utils/utils";
import "./dashboard.css";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "8%",
        background: "rgba(13, 110, 253,0.5)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: "blur(5px)",
      }}
    >
      <Box sx={{ paddingLeft: "2vw" }}>
        <Typography level="h3" sx={{ color: "gold" }}>
          Deploy_Desk
        </Typography>
      </Box>
      <Box
        sx={{
          ...center,
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingRight: "2vw",
        }}
      >
        <Box sx={{ marginRight: "2vw" }}>
          <Input
            type="search"
            sx={{
              width: "15ch",
              "&.Mui-focused": {
                width: "30ch",
              },
              transition: "ease-in-out 0.5s",
              "&::before": {
                display: "none",
              },
              "&:focus-within": {
                outline: "2px solid gold",
                outlineOffset: "2px",
              },
            }}
            endDecorator={<FaSearch />}
            placeholder="Search..."
          />
        </Box>
        <Box
          sx={{ marginRight: "2vw", cursor: "pointer" }}
          className="notification"
        >
          <IoMdNotifications size={"2rem"} color="gold" />
        </Box>
        <Box>
          <Avatar>AK</Avatar>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
