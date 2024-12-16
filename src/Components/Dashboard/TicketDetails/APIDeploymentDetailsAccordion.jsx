import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  ButtonGroup,
  IconButton,
  Typography,
} from "@mui/joy";
import React from "react";
import { center, glass, rowStyle } from "../../../utils/utils";
import APIDeploymentDetailsRow from "./APIDeploymentDetailsRow";
import { MdCheck, MdOutlineClose } from "react-icons/md";

const dataList = [0, 0, 0, 0];
const isApprover = true;

const style = {
  ...center,
  justifyContent: "space-between",
  flexDirection: "row",
};

export const APIDeploymentDetailsAccordion = () => {
  return (
    <>
      {dataList.map((val, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary>
              <Box sx={{ ...style }}>
                {index + 1}. thirdPartyGenericService_expDS{" "}
                <Box
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {isApprover ? (
                    <ButtonGroup>
                      <IconButton color="success" variant="solid" size="sm">
                        <MdCheck />
                      </IconButton>
                      <IconButton color="danger" variant="solid" size="sm">
                        <MdOutlineClose />
                      </IconButton>
                    </ButtonGroup>
                  ) : (
                    ""
                  )}
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "rgb(211,211,211)" }}>
              <APIDeploymentDetailsRow
                title1="URL"
                desc1="https://eissiuat.sbi.co.in/gen5/gateway/misc/thirdPartyWrapper/services"
                title2="Deployment Type"
                desc2="New"
              />
              <APIDeploymentDetailsRow
                title1="BAR Path"
                desc1="IIB-DS/thirdPartyGenericService_expDS/UAT/thirdPartyGenericService_expDS.bar"
                title2="Server Type"
                desc2="EXP"
              />
              <APIDeploymentDetailsRow
                title1="Source Code Path"
                desc1="IIB-DS/thirdPartyGenericService_expDS/UAT"
                title2="Broker/EG"
                desc2="PaymentExp/PaymentExp_02"
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export const CacheSQLandURLConfiguration = (props) => {
  return (
    <Box
      sx={{
        ...center,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "1rem 0 0 1vw",
        width: "100%",
      }}
    >
      <AccordionGroup
        color="neutral"
        size="md"
        sx={{ ...glass, width: "98%", marginRight: "10vw" }}
      >
        <Accordion>
          <AccordionSummary>
            <Box sx={{ ...style }}>
              {props.title}
              <Box
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {isApprover ? (
                  <ButtonGroup>
                    <IconButton color="success" variant="solid" size="sm">
                      <MdCheck />
                    </IconButton>
                    <IconButton color="danger" variant="solid" size="sm">
                      <MdOutlineClose />
                    </IconButton>
                  </ButtonGroup>
                ) : (
                  ""
                )}
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "rgb(211,211,211)" }}>
            <Box className="ticketlist" sx={{ height: "20vh" }}>
              <pre>{props.value}</pre>
            </Box>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Box>
  );
};
