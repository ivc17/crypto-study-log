import { Box, styled, useTheme } from '@mui/material'
import Carousel from 'react-spring-3d-carousel'
import { v4 as uuidv4 } from 'uuid'
import { config } from 'react-spring'
import { useState } from 'react'
import Card from './Card'

const Light = styled('div')(({ theme }) => ({
  background: theme.gradient.gradient1,
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  height: 600,
  zIndex: 2,
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
  [
    {
      key: uuidv4(),
      content: <Card />
    },
    {
      key: uuidv4(),
      content: <Card />
    },
    {
      key: uuidv4(),
      content: <Card />
    },
    {
      key: uuidv4(),
      content: <Card />
    },
    {
      key: uuidv4(),
      content: <Card />
    },
    {
      key: uuidv4(),
      content: <Card />
    },
    {
      key: uuidv4(),
      content: <Card />
    },
    {
      key: uuidv4(),
      content: <Card />
    },
    {
      key: uuidv4(),
      content: <Card />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setSlide(index) }
  })

export default function Logs() {
  const [slide, setSlide] = useState(0)
  const theme = useTheme()

  return (
    <Box position="relative" minHeight={'100vh'} zIndex={20}>
      <Box sx={{ '& *': { pointerEvents: 'none' } }}>
        <SidePanel>
          <Light />
        </SidePanel>
      </Box>

      <BottomPanel />
      <Box
        height="500px"
        width="100%"
        maxWidth={theme.width.maxContent}
        margin="0 auto"
        sx={{ overflow: 'hidden', mt: '-200px' }}
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
  )
}
