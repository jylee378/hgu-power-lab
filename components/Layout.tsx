import React from 'react'
import styles from '../styles/Home.module.css'
import { Box, AppBar, Toolbar, Grid } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

const Layout: React.FC = ({ children }) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Header */}
            <AppBar position='fixed'>
                <Toolbar sx={{ display: 'flex', alignContent: 'space-between', height: 130 }}>
                    {/* 홈, 로고 */}
                    <Grid container justifyContent='flex-start' alignItems='center' style={{ paddingLeft: 20 }}>
                        <Grid item md={2}>
                            <a href='https://handong.edu/' target="_blank" rel="noreferrer">
                                <Image src='https://jylee378.github.io/logo.png' width={200} height={70}/>
                            </a>
                        </Grid>
                        <Grid item md={3} style={{ fontSize: 23, fontWeight: 'bold', marginLeft: '50px' }}>
                            <Link href='/'>THE POWER-X LAB</Link>
                        </Grid>
                    </Grid>
                    {/* 메뉴 */}
                    <Grid container justifyContent='space-between' alignItems='center' style={{ fontSize: 18 }}>
                        <Grid item md={1}>
                            <Link href='/research'>연구분야</Link>
                        </Grid>
                        <Grid item md={1}>
                            <Link href='/academic'>학력</Link>
                        </Grid>
                        <Grid item md={1}>
                            <Link href='/career'>경력</Link>
                        </Grid>
                        <Grid item md={1}>
                            <Link href='/conference'>학회활동</Link>
                        </Grid>
                        <Grid item md={1}>
                            <Link href='/etc'>기타이력</Link>
                        </Grid>
                        <Grid item md={1}>
                            <Link href='/publication'>논문</Link>
                        </Grid>
                        <Grid item md={1}>
                            <Link href='/people'>졸업생</Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {/* Body */}
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Toolbar />
                {children}
            </Box>
            <footer className={styles.footer}>
                Proverbs 16:9 A man’s heart plans his way, But the LORD directs his steps.
                <br />
                Thermal Hydraulics and Electronics Laboratory (THE LAB)
            </footer>
        </Box>
    )
}

export default Layout