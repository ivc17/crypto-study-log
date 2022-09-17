import { Box, useTheme, Typography, styled } from '@mui/material'

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
    <Box>
      <TopPanel sx={{}} />
      <Box sx={{}}>
        <SidePanel>
          <Light />
          ©2022 IVC17 Crypto Study Log. All rights reserved.
        </SidePanel>
      </Box>
    </Box>
  )
}
