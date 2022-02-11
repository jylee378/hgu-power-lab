import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Card, CardContent, CardMedia, Typography, CardActionArea, Grid, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const prefix =
  process.env.NODE_ENV === "production"
    ? "https://jylee378.github.io/hgu-power-lab"
    : "";

const styles = {
  divContainer: {
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${`${prefix}/background.png`})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const Home: NextPage = () => {

  const theme = useTheme()
  const isMiddle = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
      <Head>
        <title>Power Lab</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box style={!isMiddle && styles.divContainer || undefined}>
        <Card sx={{ maxWidth: 800 }}>
          <CardActionArea>
            <Grid container display={'flex'}>
              {/* 교수 이미지 */}
              <Grid item md={6}>
                <CardMedia
                  component="img"
                  image={`${prefix}/professor.png`}
                  alt="professor"
                  sx={{ width: !isMiddle ? "400px" : "100vw", padding: !isMiddle ? "0px" : "30px 50px"}}
                />
              </Grid>
              {/* 교수 프로필 */}
              <Grid item md={6}>
                <CardContent sx={{ padding: '30px 50px' }}>
                  <Typography gutterBottom variant="h4" component="div">
                    JaeYoung, Lee
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Professor of Handong Global University
                    Dept. Mechanical and Control Engineering
                  </Typography>
                  <br />
                  <br />
                  <Typography style={{ fontWeight: 'bold', fontSize: 18 }}>
                    전화번호
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    054-260-1392
                  </Typography>
                  <br />
                  <Typography style={{ fontWeight: 'bold', fontSize: 18 }}>
                    이메일
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    jylee7@handong.edu
                  </Typography>
                  <br />
                  <Typography style={{ fontWeight: 'bold', fontSize: 18 }}>
                    주소
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    103, Newton-Hall, 558, Handong-ro, Heunghae-eup, Buk-gu, Pohang-si, Gyeongsangbuk-do, Republic of Korea, 37554
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>

          </CardActionArea>
        </Card>
      </Box>
    </>
  )
}

export default Home
