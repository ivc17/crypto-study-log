import { Box, Button, keyframes, styled, useTheme } from '@mui/material'
import Carousel from 'react-spring-3d-carousel'
import { v4 as uuidv4 } from 'uuid'
import { config } from 'react-spring'
import { useState } from 'react'
import Card from '../Card'
import Keywords from 'components/Keywords'
// import GradientCanvas from './GradientCanvas'
// import GMesh from './GMesh'
import gradient from 'assets/gradient.png'
import useBreakpoint from 'hooks/useBreakpoint'
import VerticalCarousel from 'components/VerticalCarousel/VerticalCarousel'
import ColorSplitText from 'components/ColorSplitText'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from 'constant/routes'
import { NOTES } from 'constant/notes'

// const appear = keyframes`
// 0% {opacity: 0.6; };
// 50% {opacity: 1; };
// 100% {opacity: 0.8;}
// `

// const StyledImg = styled('div')({
//   transform: 'translate(-50%, 0)',
//   // transformOrigin: 'center top',
//   animation: `${appear} 20s ease-in-out infinite`,
//   animationDirection: 'alternate',
//   animationFillMode: 'forwards',
//   maxWidth: '1440px',
//   position: 'absolute',
//   left: '50%',
//   width: '100%',
//   zIndex: -2,
//   height: '200vh',
//   backgroundSize: '100% 100%',
//   backgroundPosition: 'center center',
//   background: `url(${gradient})  no-repeat`
// })

const appear = keyframes`
0% {opacity: 0.6; transform: translate(-50%, -30px) scale(1,1.8); };
50% {opacity: 1; transform: translate(-50%, 0px) scale(0.8,1.6); };
100% {opacity: 0.8; transform: translate(-50%, 30) scale(1,1.4);}
`

const StyledImg = styled('img')({
  transform: 'translate(-50%, 0)',
  transformOrigin: 'center top',
  animation: `${appear} 20s ease-in-out infinite`,
  animationDirection: 'alternate',
  animationFillMode: 'forwards',
  opacity: 0,
  maxWidth: '1440px',
  position: 'absolute',
  left: '50%',
  width: '100%',
  zIndex: -2,
  height: '200vh'
})

const Light = styled('div')(({ theme }) => ({
  background: theme.gradient.gradient1,
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  height: 600,
  zIndex: 10,
  pointerEvents: 'none'
}))

const BottomPanel = styled('div')(({ theme }) => ({
  width: '100%',
  background: theme.palette.primary.main,
  height: 400,
  transformOrigin: 'top center 0',
  transform: 'perspective(400px) rotateX(-40deg)',
  [theme.breakpoints.down('md')]: {
    height: 200,
    transform: 'perspective(200px) rotateX(-40deg)'
  }
}))

const SidePanel = styled('div')(({ theme }) => ({
  width: '100%',
  height: theme.height.footer,
  background: theme.palette.primary.dark,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'visible',
  position: 'relative',
  zIndex: 2
}))

const state = {
  offsetRadius: 4,
  showNavigation: false,
  config: config.gentle
}

const slides = (setSlide: any) =>
  NOTES.map(({ title, description, id, date }) => ({
    key: uuidv4(),
    content: (
      <Card title={title} id={id} date={date}>
        {description}
      </Card>
    )
  })).map((slide, index) => {
    return { ...slide, onClick: () => setSlide(index) }
  })

export default function Logs() {
  const [slide, setSlide] = useState(0)
  const theme = useTheme()
  // const isDownMd = useBreakpoint('md')
  const isDownSm = useBreakpoint('sm')
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <Box position="relative" zIndex={1} id="logs">
        <Box
          sx={{
            '& *': { pointerEvents: 'none' },
            width: '100%'
          }}
        >
          <SidePanel>
            <Light />
            <Box
              position={'absolute'}
              top={'100%'}
              display="grid"
              justifyItems={'center'}
            >
              <ColorSplitText
                text={'Study Logs'}
                fontWeight={700}
                fontSize={{ xs: 40, md: 50 }}
                zIndex={10}
              ></ColorSplitText>
              <ColorSplitText
                text="スタディ・ログ"
                fontWeight={700}
                zIndex={10}
              />
            </Box>
          </SidePanel>
          <StyledImg src={gradient} alt=""></StyledImg>
        </Box>
        <BottomPanel />

        {isDownSm ? (
          <Box height="700px" position="relative" marginTop={-150}>
            <VerticalCarousel slides={slides(setSlide)} />
          </Box>
        ) : (
          <Box position="relative" marginTop={{ sm: -100, md: -250 }}>
            <Box
              zIndex={10}
              sx={{
                position: 'absolute',
                top: '30%',
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px'
              }}
            >
              <Button
                variant="outlined"
                onClick={() =>
                  setSlide((idx) => (idx === 0 ? slides.length - 1 : idx - 1))
                }
              >
                PREV
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setSlide((idx) => (idx === slides.length - 1 ? 0 : idx + 1))
                }}
              >
                NEXT
              </Button>
            </Box>
            <Box
              height="500px"
              width="100%"
              maxWidth={theme.width.maxContent}
              margin="-100px auto 0"
              sx={{
                overflow: 'hidden'
              }}
            >
              <Carousel
                slides={slides(setSlide)}
                goToSlide={slide}
                offsetRadius={state.offsetRadius}
                showNavigation={state.showNavigation}
                animationConfig={state.config}
              />
            </Box>
          </Box>
        )}
        <Box width="100%" display="flex" justifyContent={'center'}>
          <Button
            sx={{ width: '200px!important', fontWeight: 700 }}
            style={{
              width: '200px',
              marginTop: 60,
              marginBottom: isDownSm ? 100 : 0
            }}
            variant="outlined"
            onClick={() =>
              navigate(routes['all-log'], { state: location.pathname })
            }
          >
            See All
          </Button>
        </Box>
        {/* <ParticlesGradient /> */}
        {/* <GradientCanvas /> */}
        {/* <GMesh /> */}
        <Keywords />
      </Box>
    </>
  )
}
