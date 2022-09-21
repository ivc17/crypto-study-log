import { Box, Typography, styled, keyframes } from '@mui/material'
import { ReactComponent as Icon } from 'assets/icon.svg'
import gradient from 'assets/gradient.png'

const appear = keyframes`
0% {opacity: 0.6; transform:rotate(180deg); background-size:100% 100%;};
50% {opacity: 0.8; transform:rotate(180deg); background-size:90% 130%;};
100% {opacity: 1; transform:rotate(180deg); background-size:110% 100%;}
`

const StyledImg = styled('div')({
  transformOrigin: 'center center',
  animation: `${appear} 10s ease-in-out infinite`,
  animationDirection: 'alternate',
  animationFillMode: 'forwards',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: -2,
  height: '150vh',
  background: `url(${gradient}) no-repeat`,
  backgroundSize: '100% 200%',
  backgroundPosition: 'center center'
})

const Light = styled('div')(({ theme }) => ({
  background: theme.gradient.gradient2,
  position: 'absolute',
  bottom: '100%',
  left: 0,
  width: '100%',
  height: 600
}))

const TopPanel = styled('div')(({ theme }) => ({
  width: '100%',
  background: theme.palette.primary.main,
  height: 400,
  transformOrigin: 'bottom center 0',
  transform: 'perspective(400px) rotateX(40deg)',
  [theme.breakpoints.down('md')]: {
    height: 200,
    transform: 'perspective(200px) rotateX(40deg)'
  }
}))

const SidePanel = styled('footer')(({ theme }) => ({
  width: '100%',
  height: theme.height.footer,
  background: theme.palette.primary.dark,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'visible',
  position: 'relative',
  zIndex: 4
}))

export default function Footer() {
  return (
    <Box zIndex={2} position="relative">
      <Box
        zIndex={4}
        position="absolute"
        maxWidth={(theme) => theme.width.maxContent}
        padding="0 60px"
        width="80%"
        display="grid"
        left="50%"
        sx={{ transform: 'translateX(-50%)' }}
        gap={40}
        bottom={200}
      >
        <Typography fontSize={28} fontWeight={700}>
          IVC17
        </Typography>
        <Box display={'flex'} width="100%" justifyContent={'space-between'}>
          {' '}
          <Typography fontSize={20}>about</Typography>
          <Typography fontSize={20}>contact</Typography>
          <Typography fontSize={20}>work</Typography>
        </Box>

        <Box mt={30}>
          <Icon /> <Icon /> <Icon /> <Icon /> <Icon /> <Icon />
        </Box>
      </Box>
      <TopPanel></TopPanel>
      <Box>
        <SidePanel>
          <Light></Light>
          <StyledImg />
          ©2022 IVC17 Crypto Study Log. All rights reserved.
        </SidePanel>
      </Box>
    </Box>
  )
}
