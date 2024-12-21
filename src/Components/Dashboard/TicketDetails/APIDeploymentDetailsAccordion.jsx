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
const SQL = `SELECT TOP 5 Id, Name FROM customerNames ORDER BY NEWID();
SELECT column FROM table ORDER BY RAND() LIMIT 1;  
SELECT column FROM table ORDER BY RANDOM() LIMIT 1;  
SELECT TOP 1 column FROM table ORDER BY NEWID();
SELECT TOP 5 Id, Name FROM customerNames ORDER BY NEWID();
SELECT column FROM table ORDER BY RAND() LIMIT 1;  
SELECT column FROM table ORDER BY RANDOM() LIMIT 1;  
SELECT TOP 1 column FROM table ORDER BY NEWID();
SELECT TOP 5 Id, Name FROM customerNames ORDER BY NEWID();
SELECT column FROM table ORDER BY RAND() LIMIT 1;  
SELECT column FROM table ORDER BY RANDOM() LIMIT 1;  
SELECT TOP 1 column FROM table ORDER BY NEWID();`;

const XML = `Path: Router.xml
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>

<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>

<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>`;

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
          <Accordion key={index} defaultExpanded={index === 0 ? true : false}>
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

              <CacheSQLandURLConfiguration
                title={"Cache SQL:"}
                value={SQL}
                fSize="13px"
              />
              <CacheSQLandURLConfiguration
                title={"URL Configuration:"}
                value={XML}
                fSize="13px"
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
    <>
      {" "}
      <Box
        sx={{
          width: "100%",
          paddingTop: "1vh",
        }}
      >
        <Typography level="title-sm">{props.title}</Typography>
        <Box
          sx={{
            border: "1px solid rgba(255,255,255,0.6)",
            padding: "0.5rem 1rem",
            margin: "0.5rem 0 0 0",
          }}
        >
          <Box
            className="ticketlist"
            sx={{ height: "25vh", fontSize: props.fSize }}
          >
            <pre>{props.value}</pre>
          </Box>
        </Box>
      </Box>
    </>
  );
};
