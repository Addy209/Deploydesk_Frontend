import React from "react";
import { Box, Typography } from "@mui/joy";
import { center, glass, makerMenu } from "../../utils/utils";

const style = {
  padding: "0.5vh 0.1vw",
  "&:hover": { scale: "1.1" },
  transition: "ease-in-out 0.2s",
  cursor: "pointer",
};

const SideMenu = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Box
      sx={{
        maxWidth: "12%",
        ...center,
        justifyContent: "flex-start",
        height: "90dvh",
        margin: "0 0.5vw 0 1vw",
      }}
    >
      <Box
        sx={{
          ...glass,
          ...center,
          height: "2.5%",
          width: "100%",
          padding: "1vh 0",
          margin: "0 0 1vh 0",
        }}
      >
        <Typography level="h4">Menu</Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "100%",
          ...center,
          justifyContent: "flex-start",
          ...glass,
          height: "97.5%",
          padding: "2.5vh 0",
        }}
      >
        <Box sx={{}}>
          {makerMenu.map((val, index) => {
            return (
              <Box
                sx={style}
                key={index}
                onClick={() => {
                  setSelected(index);
                }}
              >
                <Typography
                  level="body-md"
                  color="primary"
                  fontWeight={selected === index ? "bold" : ""}
                >
                  {val}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SideMenu;
