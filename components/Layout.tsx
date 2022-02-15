import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import {
    Box, AppBar, Toolbar, Grid, useMediaQuery, IconButton,
    Drawer, Divider
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

const Layout: React.FC = ({ children }) => {

    const prefix =
        process.env.NODE_ENV === "production"
            ? "https://jylee378.github.io/hgu-power-lab"
            : "";

    const prodLink =
        process.env.NODE_ENV === "production"
            ? "/hgu-power-lab"
            : "";

    // For Responsive Design
    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down("lg"))
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    // Open Drawer State
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Header */}
            <AppBar position='fixed'>
                <Toolbar sx={{ display: 'flex', height: !isTablet ? 130 : 50 }}>
                    {!isTablet ?
                        // 브라우저 크기 태블릿 이상
                        <>
                            {/* 홈, 로고 */}
                            <LeftMenu
                                prefix={prefix}
                                prodLink={prodLink}
                                isTablet={isTablet}
                            />
                            {/* 메뉴 */}
                            <RightMenu
                                prodLink={prodLink}
                                isTablet={isTablet}
                            />
                        </>
                        // 브라우저 크기 태블릿 이하
                        :
                        <Grid container justifyContent='flex-end' alignItems='center'>
                            <IconButton color="secondary" aria-label="openDrawer" component="span" onClick={() => setOpenDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    }

                </Toolbar>
            </AppBar>
            {/* 태블릿 크기 이하일 때만 -> 메뉴 버튼 누를 경우 Drawer 표출 */}
            <Drawer
                anchor='left'
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                {/* Drawer body - mobile 크기일때만 drawer close 버튼 표출 */}
                {isMobile &&
                    <IconButton
                        color="secondary"
                        aria-label="closeDrawer"
                        component="span"
                        onClick={() => setOpenDrawer(false)}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            paddingRight: '15px'
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                }
                <LeftMenu
                    prefix={prefix}
                    prodLink={prodLink}
                    isTablet={isTablet}
                />
                <Divider />
                <RightMenu
                    prodLink={prodLink}
                    isTablet={isTablet}
                />
            </Drawer>
            {/* Body */}
            <Box component="main" sx={{ flexGrow: 1, minHeight: '850px' }}>
                <Toolbar />
                {children}
            </Box>
            {/* Footer */}
            <footer className={styles.footer}>
                Proverbs 16:9 A man’s heart plans his way, But the LORD directs his steps.
                <br />
                Thermal Hydraulics and Electronics Laboratory (THE LAB)
            </footer>
        </Box>
    )
}

export default Layout