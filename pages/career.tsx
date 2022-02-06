import type { NextPage } from 'next'
import { Box, Typography, Grid } from '@mui/material'

const styles = {
    fontStyle : {
        fontSize: '18px',
        marginBottom: '20px'
    }
}

const Career: NextPage = () => {
    return (
        <Box style={{padding: '130px 5% 50px 10%'}}>
            <Grid container display='flex' spacing={5}>
                <Grid item md={6}>
                    <Typography style={styles.fontStyle}>1996 ~ present : 한동대학교 기계제어공학부 교수</Typography>
                    <Typography style={styles.fontStyle}>2016 ~ present : POSCO 석좌교수</Typography>
                    <Typography style={styles.fontStyle}>2013 ~ present : 한동대학교 산학협력단장</Typography>
                    <Typography style={styles.fontStyle}>2013 ~ present : 산학연구인재개발처장</Typography>
                    <Typography style={styles.fontStyle}>2004 ~ present : 포항시 건설 자문위원</Typography>
                    <Typography style={styles.fontStyle}>2017 ~ 2020 : MOLTEX(UK) 기술자문위원</Typography>
                    <Typography style={styles.fontStyle}>2015 ~ 2018 : 한국원자력학회 대구 경북 지부 지부장</Typography>
                    <Typography style={styles.fontStyle}>2014 ~ 2018 : CK 지역전략 산학협의회 단장</Typography>
                    <Typography style={styles.fontStyle}>2013 ~ 2019 : 과학기술정보통신부 R&amp;D 총괄 조정위원</Typography>
                    <Typography style={styles.fontStyle}>2016 ~ 2018 : 포항 TP 인사위원회 위원</Typography>
                    <Typography style={styles.fontStyle}>2002 ~ 2003 : Visiting Professor (Purdue University), School of Nuclear Engineering, collaborating with Professor M. Ishii</Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography style={styles.fontStyle}>2002 ~ present : Evaluation Member of National Laboratory Program , KISTEP</Typography>
                    <Typography style={styles.fontStyle}>2000 ~ present : Evaluation Member of KISTEP: Nuclear reactor safety and radiation protection research</Typography>
                    <Typography style={styles.fontStyle}>2000 ~ 2001: primary chair of KISTEP : thermal-hydraulic Integral Test planning task force team</Typography>
                    <Typography style={styles.fontStyle}>1999 ~ 2000 : Special Staff for the Y2K problem in Korean Nuclear Power Plant(Uljin and Wolsong)</Typography>
                    <Typography style={styles.fontStyle}>1997 ~ 1999 : Consultant for Pohang city</Typography>
                    <Typography style={styles.fontStyle}>1994 ~ 1995 : Visiting Scholar (McMaster University), Dept. of Engineering Physics, collaborating with Prof. Jen-Shih Chang</Typography>
                    <Typography style={styles.fontStyle}>1994 ~ 1996 : Associate Professor at Cheju National University, Dept. of Energy Engineering</Typography>
                    <Typography style={styles.fontStyle}>1990 ~ 1994 : Assistant Professor at Cheju National University, Dept. of Energy Engineering</Typography>
                    <Typography style={styles.fontStyle}>1988 ~ 1990 : Full Time Lecturer at Cheju National University, Dept. of Energy Engineering</Typography>
                    <Typography style={styles.fontStyle}>1986 ~ 1988: Research assistant for Prof. Hee Cheon No in KAIST, Dept. of Nuclear Engineering</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Career