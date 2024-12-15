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

const dataList = [0, 0, 0, 0];

const APIDeploymentDetailsAccordion = () => {
  return (
    <>
      {dataList.map((val, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary>
              {index + 1}. thirdPartyGenericService_expDS
            </AccordionSummary>
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
        );
      })}
    </>
  );
};

export default APIDeploymentDetailsAccordion;
