import type { NextPage } from 'next'
import { Box } from '@mui/material'

const styles = {
    fontStyle: {
        fontSize: '18px',
        marginBottom: '20px'
    }
}

const data = [
    { period: "1996 ~ present", text: "한동대학교 기계제어공학부 교수" },
    { period: "2016 ~ present", text: "POSCO 석좌교수" },
    { period: "2013 ~ present", text: "한동대학교 산학협력단장" },
    { period: "2013 ~ present", text: "산학연구인재개발처장" },
    { period: "2004 ~ present", text: "포항시 건설 자문위원" },
    { period: "2017 ~ 2020", text: "MOLTEX(UK) 기술자문위원" },
    { period: "2015 ~ 2018", text: "한국원자력학회 대구 경북 지부 지부장" },
    { period: "2014 ~ 2018", text: "CK 지역전략 산학협의회 단장" },
    { period: "2013 ~ 2019", text: "과학기술정보통신부 R&D 총괄 조정위원" },
    { period: "2016 ~ 2018", text: "포항 TP 인사위원회 위원" },
    { period: "2002 ~ present", text: "Visiting Professor (Purdue University), School of Nuclear Engineering, collaborating with Professor M. Ishii" },
    { period: "2000 ~ present", text: "Evaluation Member of National Laboratory Program , KISTEP" },
    { period: "2000 ~ 2001", text: "Evaluation Member of KISTEP: Nuclear reactor safety and radiation protection research" },
    { period: "1999 ~ 2000", text: "primary chair of KISTEP : thermal-hydraulic Integral Test planning task force team" },
    { period: "1997 ~ 1999", text: "Special Staff for the Y2K problem in Korean Nuclear Power Plant(Uljin and Wolsong)" },
    { period: "1994 ~ 1995", text: "Consultant for Pohang city" },
    { period: "1994 ~ 1996", text: "Associate Professor at Cheju National University, Dept. of Energy Engineering" },
    { period: "1990 ~ 1994", text: "Assistant Professor at Cheju National University, Dept. of Energy Engineering" },
    { period: "1988 ~ 1990", text: "Full Time Lecturer at Cheju National University, Dept. of Energy Engineering" },
    { period: "1986 ~ 1988", text: "Research assistant for Prof. Hee Cheon No in KAIST, Dept. of Nuclear Engineering" }
]

const Career: NextPage = () => {
    return (
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
    )
}

export default Career