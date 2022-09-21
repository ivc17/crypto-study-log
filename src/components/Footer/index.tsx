import { Box, Typography, styled, keyframes } from '@mui/material'
import { ReactComponent as Icon } from 'assets/icon.svg'
import gradient from 'assets/gradient.png'
import useBreakpoint from 'hooks/useBreakpoint'

const appear = keyframes`
0% {opacity: 0.6; transform:rotate(180deg); background-size:110% 100%;};
50% {opacity: 0.8; transform:rotate(180deg); background-size:100% 130%;};
100% {opacity: 1; transform:rotate(180deg); background-size:110% 100%;}
`

const StyledImg = styled('div')(({ theme }) => ({
  transformOrigin: 'center center',
  animation: `${appear} 15s ease-in-out infinite`,
  animationDirection: 'alternate',
  animationFillMode: 'forwards',
  position: 'absolute',
  bottom: theme.height.footer,
  left: 0,
  width: '100%',
  zIndex: -2,
  height: '150vh',
  background: `url(${gradient}) no-repeat`,
  backgroundSize: '100% 200%',
  backgroundPosition: 'center center',
  [theme.breakpoints.down('sm')]: {
    height: '200vh'
  }
}))

const Light = styled('div')(({ theme }) => ({
  background: theme.gradient.gradient2,
  // position: 'absolute',
  bottom: '100%',
  left: 0,
  width: '100%',
  height: 500,
  zIndex: 10
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
  },
  position: 'absolute',
  bottom: theme.height.footer,
  zIndex: 10
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
  zIndex: 4,
  textAlign: 'center',
  fontSize: 14
}))

export default function Footer() {
  const isDownSm = useBreakpoint('sm')
  return (
    <Box zIndex={1} position="relative">
      <Box
        zIndex={12}
        position="absolute"
        maxWidth={(theme) => theme.width.maxContent}
        padding={{ xs: '0 20px', md: '0 60px' }}
        width="80%"
        display="grid"
        left="50%"
        gap={{ xs: 10, md: 40 }}
        bottom={120}
        sx={{
          transform: 'translateX(-50%)'
        }}
      >
        <Box width="100%">
          <Typography fontSize={28} fontWeight={700} mb={30}>
            IVC17
          </Typography>

          <Box
            display={'grid'}
            width="100%"
            gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }}
            justifyItems={{ xs: 'flex-end', md: 'center' }}
            sx={{ '& p': { fontSize: { xs: 16, md: 20 } } }}
            gap={{ xs: 5, md: 20 }}
          >
            <Typography>About developer</Typography>
            <Typography>Contact</Typography>
            <Typography>Other Works</Typography>
            <Typography mt={20} mb={20}></Typography>
            <Typography mt={20} mb={20}>
              Back to top
            </Typography>
            <Typography mt={20} mb={20}></Typography>
            <Typography>All logs</Typography>
            <Typography>Keywords</Typography>
            <Typography>About Project</Typography>
          </Box>
        </Box>

        <Box
          mt={30}
          ml="auto"
          sx={{
            display: 'flex',
            '& *': {
              height: { xs: 20, md: 30 }
            }
          }}
        >
          <Icon /> <Icon /> <Icon /> <Icon /> <Icon /> <Icon />
        </Box>
      </Box>
      <TopPanel></TopPanel>
      <Box>
        <Light></Light>
        <SidePanel>
          <StyledImg />
          ©2022 IVC17 Crypto Study Log.{!isDownSm && 'All rights reserved.'}
        </SidePanel>
      </Box>
    </Box>
  )
}
