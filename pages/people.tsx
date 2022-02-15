import type { NextPage } from 'next'
import { Box, Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material'

const prefix =
    process.env.NODE_ENV === "production"
        ? "https://jylee378.github.io/hgu-power-lab"
        : "";

const data = [
    {
        image: `${prefix}/person.jpg`,
        name: 'Siwon Seo',
        period: 'Graduate student (2017.02~)',
        email: 'syancs@naver.com',
        researchInterests: 'Thermal Hydraulics, Multiphase flow'
    },
    {
        image: `${prefix}/person.jpg`,
        name: 'Bowon Hwang',
        period: 'Graduate student (2019.08~)',
        email: 'bowonhwang@handong.edu',
        researchInterests: 'Thermal Hydraulics, Multiphase flow'
    },
    {
        image: `${prefix}/person.jpg`,
        name: 'Bowon Hwang',
        period: 'Graduate student (2019.08~)',
        email: 'bowonhwang@handong.edu',
        researchInterests: 'Thermal Hydraulics, Multiphase flow'
    }
]

const People: NextPage = () => {
    return (
        <Box style={{ padding: '130px 15% 50px 15%' }}>
            {
                data.map((item, index) => (
                    <Card sx={{ maxWidth: 700, marginBottom: '30px' }} key={index}>
                        <CardActionArea>
                            <Grid container display={'flex'}>
                                {/* 학생 이미지 */}
                                <Grid item md={4}>
                                    <CardMedia
                                        component="img"
                                        image={`${prefix}/person.jpg`}
                                        alt={`photo${index}`}
                                    />
                                </Grid>
                                {/* 학생 프로필 */}
                                <Grid item md={6}>
                                    <CardContent sx={{ padding: '30px 50px' }}>
                                        <Typography gutterBottom variant="h4" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.period}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.email}
                                        </Typography>
                                        <br />
                                        <br />
                                        <br />
                                        <Typography style={{ fontWeight: 'bold', fontSize: 18 }}>
                                            Research Interests
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.researchInterests}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>

                        </CardActionArea>
                    </Card>
                ))
            }
        </Box>
    )
}

export default People