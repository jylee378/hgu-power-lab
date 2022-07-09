import type { NextPage } from 'next'
import { Box, Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material'
import { prefix } from "../config/prefix"
import { data } from '../data/people'

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