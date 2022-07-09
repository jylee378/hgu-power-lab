import type { NextPage } from 'next'
import { Box, Typography, Grid } from '@mui/material'
import Image from 'next/image'
import { prefix } from "../config/prefix"

const Academic: NextPage = () => {

    return (
        <Box style={{padding: '130px 10% 50px 15%'}}>
            <Grid container display='flex' spacing={5}>
                <Grid item md={8} style={{marginTop: 20}}>
                    <Typography variant="h6">1980.03~1984.02 : BE. Hanyang University, Dept. of Nuclear Engineering</Typography>
                    <br />
                    <br />
                    <Typography variant="h6">1984.03~1986.02 : MS. KAIST, Dept. of Nuclear and Quantum Engineering</Typography>
                    <br />
                    <br />
                    <Typography variant="h6">1986.03~1990.08 : Ph.D. KAIST, Dept. of Nuclear and Quantum Engineering</Typography>
                    
                    <Box style={{marginTop: 170, marginLeft: -15}}>
                    <Image src={`${prefix}/kaist.png`} width={160} height={40} alt="kaist" unoptimized/>
                    </Box>
                    
                    <Typography variant="h6" style={{marginTop: -30, fontWeight: 'bold'}}>Ph.D. THESIS</Typography>
                    <br />
                    <Typography variant="body1">(An) investigation of physical and numerical foundations for thermal-hydraulic and chemical analysis of 
                    nuclear steam generators <br />= 핵증기발생기의 열수력, 화학 분석을 위한 수치적, 물리적 기초에 대한 고찰</Typography>
                </Grid>
                <Grid item md={4}>
                    <Image width={160} height={560} src={`${prefix}/generators.png`} alt="generators" unoptimized/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Academic