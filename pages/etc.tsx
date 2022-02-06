import type { NextPage } from 'next'
import React, { useState } from 'react'
import { Box, Tab, Tabs, Typography, Grid } from '@mui/material'

const Etc: NextPage = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box style={{ padding: '130px 15% 50px 15%' }}>
            <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} centered textColor='secondary' indicatorColor='secondary'>
                    <Tab style={{ marginLeft: 30, marginRight: 30 }} label="강연" />
                    <Tab style={{ marginLeft: 30, marginRight: 30 }} label="저서" />
                </Tabs>
            </Box>
            {
                value === 0 ?
                    (
                        <Box sx={{ textAlign: 'center', marginTop: 7 }}>
                            <Typography variant='h6'>세상을 바꾸는 시간</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5, marginBottom: 5 }}>
                                {/* Divider */}
                                <Box sx={{ width: '150px', borderBottom: '3px solid #dcdcdc' }}></Box>
                            </Box>
                            <Grid container display='flex' justifyContent='center'>
                                <Grid item md={4}>
                                    <a href='https://youtube.com/watch?v=7daV6Pn1s4U&feature=share' target='_blank'>
                                        <img src='/video1.png' style={{ width: '100%', padding: '10px' }} />
                                    </a>
                                </Grid>
                                <Grid item md={4}>
                                    <a href='https://youtube.com/watch?v=g-39OF50pUw&feature=share' target='_blank'>
                                        <img src='/video2.png' style={{ width: '100%', padding: '10px' }} />
                                    </a>
                                </Grid>
                            </Grid>
                            <Grid container display='flex' justifyContent='center'>
                                <Grid item md={4}>
                                    <a href='https://youtube.com/watch?v=srEI4pb4zTU&feature=share' target='_blank'>
                                        <img src='/video3.png' style={{ width: '100%', padding: '10px' }} />
                                    </a>
                                </Grid>
                                <Grid item md={4}>
                                    <a href='https://youtube.com/watch?v=DkzrOt5eC-4&feature=share' target='_blank'>
                                        <img src='/video4.png' style={{ width: '100%', padding: '10px' }} />
                                    </a>
                                </Grid>
                            </Grid>
                        </Box>
                    )
                    :
                    (
                        <Box sx={{ textAlign: 'center', marginTop: 7 }}>
                            <Typography>탁월함에 이르는 노트의 비밀 : 인류 역사상 가장 뛰어난 천재들의 노트</Typography>
                            <br />
                            <Typography >노트의 품격 : 탁월함에 이르는 쓰기의 비밀</Typography>
                            <br />
                            <Typography >말의 사람 글의 사람</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5, marginBottom: 8 }}>
                                {/* Divider */}
                                <Box sx={{ width: '150px', borderBottom: '3px solid #dcdcdc' }}></Box>
                            </Box>
                            <img src='/books.png' style={{ width: '90%' }} />

                        </Box>
                    )
            }
        </Box>
    )
}

export default Etc