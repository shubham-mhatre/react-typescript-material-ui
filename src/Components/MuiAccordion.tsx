import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'



const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | boolean>(false);

    //to hide & show accordion
    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }
    return (
        <div>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Panel 1</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non iusto eligendi expedita nisi repellendus assumenda pariatur ipsum officia, ullam laudantium repudiandae, nobis dolore odio provident, et tempore quasi officiis deserunt!
                </AccordionDetails>
            </Accordion>

            <p>accordion group & expandable props</p>

            <Accordion expanded={expanded === 'panel1'}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Panel 1</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non iusto eligendi expedita nisi repellendus assumenda pariatur ipsum officia, ullam laudantium repudiandae, nobis dolore odio provident, et tempore quasi officiis deserunt!
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Panel 2</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non iusto eligendi expedita nisi repellendus assumenda pariatur ipsum officia, ullam laudantium repudiandae, nobis dolore odio provident, et tempore quasi officiis deserunt!
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'}
                onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Panel 3</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non iusto eligendi expedita nisi repellendus assumenda pariatur ipsum officia, ullam laudantium repudiandae, nobis dolore odio provident, et tempore quasi officiis deserunt!
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default MuiAccordion
