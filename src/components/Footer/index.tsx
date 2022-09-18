import { Box, useTheme, Typography, styled } from '@mui/material'
import { ReactComponent as Icon } from 'assets/icon.svg'

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
  zIndex: 2
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
          ©2022 IVC17 Crypto Study Log. All rights reserved.
        </SidePanel>
      </Box>
    </Box>
  )
}
