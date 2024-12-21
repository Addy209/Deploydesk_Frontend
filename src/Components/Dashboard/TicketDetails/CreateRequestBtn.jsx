import { Box, IconButton, Tooltip } from "@mui/joy";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import CreateRequest from "../Modals/createRequest";

const CreateRequestBtn = () => {
  const [show, setShow] = React.useState(true);
  return (
    <Box
      sx={{
        position: "fixed",
        right: "1rem",
        bottom: "1.5rem",
      }}
    >
      <Tooltip
        arrow
        title="Create New Ticket"
        color="neutral"
        variant="soft"
        placement="left"
      >
        <IconButton
          rotate={true}
          onClick={() => {
            setShow(true);
          }}
          sx={{
            cursor: "pointer",
            background: "gold",
            padding: "1rem",
            borderRadius: "2rem",
          }}
        >
          <FaPlus size={20} />
        </IconButton>
      </Tooltip>
      {show ? <CreateRequest show={show} setShow={setShow} /> : ""}
    </Box>
  );
};

export default CreateRequestBtn;
