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
        ...glass,
        height: "85dvh",
        margin: "0 1vw",
      }}
    >
      <Box sx={{ padding: "2.5vh 0" }}>
        <Typography level="h3" sx={{ textDecoration: "underline" }}>
          Menu
        </Typography>
      </Box>
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
  );
};

export default SideMenu;
