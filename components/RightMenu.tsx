import { Box, Stack, Divider } from '@mui/material'
import Link from 'next/link'
import customStyled from './Layout.module.css'

interface rightMenuProps {
    prodLink: string;
    isTablet: boolean
}

const RightMenu = (props: rightMenuProps) => {

    return (
        <Box sx={{ marginTop: !props.isTablet ? "0px" : "20px" }}>
            <Stack
                direction={!props.isTablet ? "row" : "column"}
                spacing={3}
                className={customStyled.link}
                divider={<Divider orientation={!props.isTablet ? "vertical" : "horizontal"} flexItem
                />}
            >
                <Link href={`${props.prodLink}/research`}>연구분야</Link>
                <Link href={`${props.prodLink}/academic`}>학력</Link>
                <Link href={`${props.prodLink}/career`}>경력</Link>
                <Link href={`${props.prodLink}/conference`}>학회활동</Link>
                <Link href={`${props.prodLink}/etc`}>기타이력</Link>
                <Link href={`${props.prodLink}/publication`}>논문</Link>
                <Link href={`${props.prodLink}/people`}>졸업생</Link>
            </Stack>
        </Box>

    )
}

export default RightMenu