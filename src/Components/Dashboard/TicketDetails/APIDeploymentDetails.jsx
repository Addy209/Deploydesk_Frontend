import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/joy";
import React from "react";
import { center, glass, rowStyle } from "../../../utils/utils";
import APIDeploymentDetailsRow from "./APIDeploymentDetailsRow";

const APIDeploymentDetails = () => {
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
          <AccordionSummary>1. thirdPartyGenericService_expDS</AccordionSummary>
          <AccordionDetails>
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

        <Accordion>
          <AccordionSummary>2. thirdPartyGenericDGFT_sys</AccordionSummary>
          <AccordionDetails>
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
      </AccordionGroup>
    </Box>
  );
};

export default APIDeploymentDetails;
