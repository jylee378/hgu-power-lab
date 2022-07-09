import type { NextPage } from 'next'
import { Box } from '@mui/material'
import { data } from '../data/career'

const Career: NextPage = () => {
    return (
        <Box className="career">
            {
                data.map((item, index) => (
                    <div key={index}>
                        <h2>{item.period}</h2>
                        <span>{item.text}</span>
                    </div>
                    )
                )
            }
        </Box>
    )
}

export default Career