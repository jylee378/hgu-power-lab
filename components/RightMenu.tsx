import { Grid } from '@mui/material'
import Link from 'next/link'
import customStyled from './Layout.module.css'

interface rightMenuProps {
    prodLink: string;
}

const RightMenu = (props: rightMenuProps) => {
    return (
        <Grid container justifyContent='space-between' alignItems='center' style={{ fontSize: 16 }}>
            <Grid item md={1} className={customStyled.link}>
                <Link href={`${props.prodLink}/research`}>연구분야</Link>
            </Grid>
            <Grid item md={1} className={customStyled.link}>
                <Link href={`${props.prodLink}/academic`}>학력</Link>
            </Grid>
            <Grid item md={1} className={customStyled.link}>
                <Link href={`${props.prodLink}/career`}>경력</Link>
            </Grid>
            <Grid item md={1} className={customStyled.link}>
                <Link href={`${props.prodLink}/conference`}>학회활동</Link>
            </Grid>
            <Grid item md={1} className={customStyled.link}>
                <Link href={`${props.prodLink}/etc`}>기타이력</Link>
            </Grid>
            <Grid item md={1} className={customStyled.link}>
                <Link href={`${props.prodLink}/publication`}>논문</Link>
            </Grid>
            <Grid item md={1} className={customStyled.link}>
                <Link href={`${props.prodLink}/people`}>졸업생</Link>
            </Grid>
        </Grid>
    )
}

export default RightMenu