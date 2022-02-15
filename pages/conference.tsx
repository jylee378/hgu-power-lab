import type { NextPage } from 'next'
import { Box, Grid } from '@mui/material'
import Image from 'next/image'

const prefix =
  process.env.NODE_ENV === "production"
    ? "https://jylee378.github.io/hgu-power-lab"
    : "";

const data = [
    { period: "2006 ~ present", text: "Journal of Mechanical Science and Technology, Associate Editor" },
    { period: "2006 ~ present", text: "에너지 기후학회 편집위원" },
    { period: "2005 ~ present", text: "지속가능에너지 학회 이사" },
    { period: "2005 ~ present", text: "대한 기계학회 열공학분과 사업이사" },
    { period: "2004 ~ present", text: "Reviewer of ASME journal" },
    { period: "Editor", text: "Journal of Korean Creation Science Research" },
]

const Conference: NextPage = () => {
    return (
        <>
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
            {/* 이미지 첫번째 줄 */}
            <Grid container display='center' justifyContent='center' spacing={5}>
                <Grid item lg={2}>
                    <Image src={`${prefix}/conference1.jpg`} width={200} height={50} alt="conference1" unoptimized/>
                </Grid>
                <Grid item lg={2}>
                    <Image src={`${prefix}/conference2.jpg`} width={200} height={50} alt="conference2" unoptimized/>
                </Grid>
            </Grid>
            {/* 이미지 두번째 줄 */}
            <Grid container display='center' justifyContent='center' spacing={5} style={{marginTop: '2px', marginBottom: 10}}>
                <Grid item lg={2}>
                    <Image src={`${prefix}/conference3.jpg`} width={200} height={50} alt="conference3" unoptimized/>
                </Grid>
                <Grid item lg={2}>
                    <Image src={`${prefix}/conference4.jpg`} width={200} height={50} alt="conference4" unoptimized/>
                </Grid>
                <Grid item lg={2}>
                    <Image src={`${prefix}/conference5.jpg`} width={200} height={50} alt="conference5" unoptimized/>
                </Grid>
            </Grid>
        </>

    )
}

export default Conference