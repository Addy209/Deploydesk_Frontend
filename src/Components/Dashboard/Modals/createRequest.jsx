import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Box, Input, ModalDialog, TextField } from "@mui/joy";
import { center } from "../../../utils/utils";

const CreateRequest = (props) => {
  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={props.show}
        onClose={() => props.setShow(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ModalDialog
          variant="outlined"
          sx={{
            maxWidth: "80%",
            width: "80%",
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
          className="ticketlist"
        >
          <ModalClose variant="solid" color="danger" sx={{ m: 1 }} />
          <Sheet>
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              sx={{ fontWeight: "lg", mb: 1 }}
            >
              Create New Deployment Ticket
            </Typography>
            <Box
              sx={{
                ...center,
                flexDirection: "row",
                height: "max-content",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography textColor="text.tertiary" level="title-md">
                  Title:&nbsp;
                </Typography>
                <Input type="text" size="sm" sx={{ width: "50ch" }} />
              </Box>
              <Box sx={{ display: "flex", marginLeft: "1vw" }}>
                <Typography textColor="text.tertiary" level="title-md">
                  PM Name:&nbsp;
                </Typography>
                <Input type="text" size="sm" sx={{ width: "30ch" }} />
              </Box>
              <Box sx={{ display: "flex", marginLeft: "1vw" }}>
                <Typography textColor="text.tertiary" level="title-md">
                  Environment:&nbsp;
                </Typography>
                <Input type="text" size="sm" sx={{ width: "30ch" }} />
              </Box>
            </Box>

            <Box
              sx={{
                ...center,
                flexDirection: "row",
                height: "max-content",
                flexWrap: "wrap",
                marginTop: "2vh",
                justifyContent: "flex-start",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Typography textColor="text.tertiary" level="title-md">
                  Demand:&nbsp;
                </Typography>
                <Input type="text" size="sm" sx={{ width: "30ch" }} />
              </Box>
              <Box sx={{ display: "flex", marginLeft: "1vw" }}>
                <Typography textColor="text.tertiary" level="title-md">
                  Project:&nbsp;
                </Typography>
                <Input type="text" size="sm" sx={{ width: "30ch" }} />
              </Box>
              <Box sx={{ display: "flex", marginLeft: "1vw" }}>
                <Typography textColor="text.tertiary" level="title-md">
                  TFS CR:&nbsp;
                </Typography>
                <Input type="text" size="sm" sx={{ width: "30ch" }} />
              </Box>
            </Box>
          </Sheet>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default CreateRequest;
