import type { NextPage } from 'next'
import { Box, Typography, Divider, Grid } from '@mui/material'

const prefix =
  process.env.NODE_ENV === "production"
    ? "https://jylee378.github.io/hgu-power-lab"
    : "";

const styles = {
    divContainer: {
      background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${`${prefix}/none`})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '40vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px 0px',
      padding: '0px 50px'
    },
    textInPhoto: {
        backgroundColor: '#f7f7f7', borderRadius: '4px', padding: '15px', lineHeight: '30px'
    },
    photo1: {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${`${prefix}/tempImage.jpg`})`
    },
    photo2: {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${`${prefix}/tempImage2.jpg`})`
    },
    photo3: {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${`${prefix}/tempImage.jpg`})`
    },
    photo4: {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${`${prefix}/tempImage2.jpg`})`
    }
  }

const Research: NextPage = () => {
    return (
        <>
        {/* Title - WHO WE ARE */}
        <Box style={{padding: '130px 15% 50px 15%'}}>
            <Typography variant='h5' style={{fontWeight: 'bold'}}>WHO WE ARE</Typography>
        </Box>

        {/* Item 1 */}
        <Divider textAlign='right'><Typography variant='h5' style={{fontWeight: 'bold'}}>THE POWER-X LAB</Typography></Divider>
        <Box style={Object.assign({}, styles.divContainer, styles.photo1) || undefined}>
            <Grid container display='flex' justifyContent='flex-end'>
                <Grid item lg={4} style={styles.textInPhoto}>
                파워와 물질(X)의 상호변환 및 작용을 연구하는 연구실로, 탄소중립사회를 위한 
                그린에너지 및 그린 모빌리티의 핵심인 수소생산과 연료전지, 풍력, 원자력 등 
                그린에너지 시스템 설계 및 안전연구를 수행하고, 철강산업 및 마이크로바이옴 
                공정에 필요한 설계, 계측, 최적화 연구를 수행하며, 동시에 자연계에 존재하는 
                연성물질(soft matter)의 물리화학적 특성을 탐구하여 새로운 물리영역을 탐구합니다.
                </Grid>
            </Grid>
        </Box>

        {/* Item 2 */}
        <Divider textAlign='left'><Typography variant='h5' style={{fontWeight: 'bold'}}>GREEN POWER</Typography></Divider>
        <Box style={Object.assign({}, styles.divContainer, styles.photo2) || undefined}>
            <Grid container display='flex' justifyContent='flex-start'>
                <Grid item lg={4} style={styles.textInPhoto}>
                4세대 소형 모듈원자로 설계 개발
                해양 및 우주용 원자로기술개발
                수소차를 위한 저온 연료전지
                날개 없는 풍력발전기 개발
                중·저온 SOFC /SOEC 기술
                풍력발전기 요소 설계
                </Grid>
            </Grid>
        </Box>

        {/* Item 3 */}
        <Divider textAlign='right'><Typography variant='h5' style={{fontWeight: 'bold'}}>GREEN PROCESS</Typography></Divider>
        <Box style={Object.assign({}, styles.divContainer, styles.photo3) || undefined}>
            <Grid container display='flex' justifyContent='flex-end'>
                <Grid item lg={4} style={styles.textInPhoto}>
                마이크로바이옴 생산공정 최적화 및 막분리 공정
                스마트 철강프로세스를 위한 전자장 토모그라피
                초고효율 인쇄기판형 열 및 물질 교환 장비
                </Grid>
            </Grid>
        </Box>

        {/* Item 4 */}
        <Divider textAlign='left'><Typography variant='h5' style={{fontWeight: 'bold'}}>SOFT MATTER PHYSICS</Typography></Divider>
        <Box style={Object.assign({}, styles.divContainer, styles.photo4) || undefined}>
            <Grid container display='flex' justifyContent='flex-start'>
                <Grid item lg={4} style={styles.textInPhoto}>
                연성물질과 전자기-열-초음파 상호작용
                이상유동 모델링 및 3D CFD 해석
                거품, 기포, 물방울의 물리학
                연성물질 물리현상 실증실험
                미생물-유체 상호작용
                </Grid>
            </Grid>
        </Box>

        </>
        
    )
}

export default Research