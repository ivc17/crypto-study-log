import { Box, Button, Typography, useTheme } from '@mui/material'
import ColorSplitText from 'components/ColorSplitText'
import React from 'react'

export default function SeeMore() {
  const theme = useTheme()
  return (
    <Box
      height="100vh"
      maxHeight={1200}
      width="100%"
      position="relative"
      display="flex"
      justifyContent={'center'}
      alignItems={{ xs: 'unset', md: 'center' }}
      zIndex={4}
      overflow="hidden"
      margin={{ xs: '100px 0 200px', md: ' 100px 0 300px' }}
    >
      <Box
        display="grid"
        justifyItems="center"
        gap={90}
        width="100%"
        maxWidth={theme.width.maxContent}
      >
        <Box
          width="80%"
          position="relative"
          overflow="hidden"
          sx={{
            position: 'relative',
            minHeight: 800,

            minWidth: 350
          }}
        >
          <Box
            sx={{
              paddingTop: '100%',
              display: 'block',
              position: 'relative',
              height: '100%'
            }}
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              sx={{
                transform: 'translate(-50%,-60%)',
                display: 'grid',
                justifyItems: 'center'
              }}
              gap={{ xs: 30, md: 90 }}
            >
              <ColorSplitText
                text="More work"
                fontSize={{ xs: 40, md: 50 }}
                fontWeight={700}
              ></ColorSplitText>
              <Typography width={'100%'} maxWidth={250}>
                Checkout my other work here.
                <br /> I am always looking for next exciting project, drop me a
                message here if you’ have any cool ideas that wants to be
                carried out.
              </Typography>
              <Button>sduhsod</Button>
            </Box>
          </Box>
          <Box
            id="lightStrip"
            position="absolute"
            left={'50%'}
            top={0}
            sx={{ transform: 'translateX(-50%)' }}
            height="100%"
            width="100%"
          >
            <LightStrip style={{ top: 50, left: 0 }} />
            <LightStrip
              color="purple"
              style={{ top: 0, left: 50 }}
              orientation="v"
              left
            />
            <LightStrip
              orientation="v"
              style={{ bottom: -50, right: 50, left: 'unset', top: 'unset' }}
            />
            <LightStrip
              bottom
              style={{ bottom: 100, right: 0, left: 'unset', top: 'unset' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function LightStrip({
  color,
  style,
  orientation = 'h',
  bottom,
  left
}: {
  color?: string
  style?: React.CSSProperties
  orientation?: 'h' | 'v'
  bottom?: boolean
  left?: boolean
}) {
  return (
    <Box
      width={orientation === 'h' ? '80%' : '300px'}
      maxWidth={(theme) => theme.width.maxContent}
      height={orientation === 'h' ? '300px' : '80%'}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: '50%',
        transformOrigin:
          orientation === 'h'
            ? `center ${bottom ? 'bottom' : 'top'}`
            : `${left ? 'left' : 'right'} center`,
        transform: orientation === 'h' ? 'scale(1,0.05)' : 'scale(0.05,1)',
        background:
          color === 'purple'
            ? `linear-gradient(${
                orientation === 'h' ? 0 : 90
              }deg,rgba(66,7,225,0) 10%, rgba(83,28,225,0.8) 40%, rgba(251, 67, 255,0.8) 50%, rgba(255, 249, 255,0.8) 50%, rgba(251, 67, 255,0.8) 60%, rgba(83,28,225,0.8) 70%,rgba(66,7,225,0) 90%)`
            : `linear-gradient(${
                orientation === 'h' ? 0 : 90
              }deg,rgba(0,65,225,0) 10%, rgba(0,65,225,0.8) 40%, rgba(31, 251, 232,0.8) 50%, rgba(255, 255, 255,0.8) 50%, rgba(31, 255, 255,0.8) 50%, rgba(0,65,225,0.8) 70%,rgba(0,65,225,0) 90%)`,
        ...style
      }}
    ></Box>
  )
}
