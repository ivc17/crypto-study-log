import { Box, styled } from '@mui/material'

const Light = styled('div')(({ theme }) => ({
  background: theme.gradient.gradient1,
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  height: 600
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

export default function Logs() {
  return (
    <Box position="relative">
      <SidePanel>
        {' '}
        <Light />
      </SidePanel>

      <BottomPanel />
    </Box>
  )
}
