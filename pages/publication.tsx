import { useState } from 'react'
import type { NextPage } from 'next'
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { data } from '../data/publication';

const Publication: NextPage = () => {

    const [expanded, setExpanded] = useState<string | boolean>('1')

    const handleChange = (panel: string) => (event: any, newExpanded: string | boolean) => {
        setExpanded(newExpanded ? panel : false)
    }

    return (
        <Box style={{ padding: '130px 15% 50px 15%' }}>
            {
                data.map((item, index) => (
                    <Accordion key={index} expanded={expanded === item.key} onChange={handleChange(item.key)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{borderBottom: '1px solid #dcdcdc'}}
                        >
                            <Typography variant='h6'>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{padding: '15px 35px'}}>
                            {
                                item.content.map((item, index) => (
                                    <Box key={index} sx={{marginBottom: '5px'}}>
                                        <Typography>
                                            {index+1}. {item}
                                        </Typography>
                                    </Box>
                                ))
                            }

                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Box>
    )
}

export default Publication