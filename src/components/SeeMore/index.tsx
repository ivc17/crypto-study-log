import { Box, Button, Typography, useTheme } from '@mui/material'
import ColorSplitText from 'components/ColorSplitText'
import ExternalLink from 'components/ExternalLink'
import useBreakpoint from 'hooks/useBreakpoint'
import React from 'react'

export default function SeeMore() {
  const theme = useTheme()
  const isDownSm = useBreakpoint('sm')
  const unit = isDownSm ? 30 : 50
  return (
    <Box
      height="100vh"
      maxHeight={1200}
      width="100%"
      position="relative"
      display="flex"
      justifyContent={'center'}
      alignItems={{ xs: 'unset', md: 'center' }}
      zIndex={3}
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

            minWidth: 380
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
              <Box sx={{ display: 'grid', justifyItems: 'center' }}>
                <ColorSplitText
                  text="More Projects"
                  fontSize={{ xs: 40, md: 50 }}
                  fontWeight={700}
                  zIndex={2}
                ></ColorSplitText>
                <ColorSplitText text="もっと" fontWeight={700}></ColorSplitText>
              </Box>
              <Typography width={'100%'} maxWidth={250}>
                Feel free to chekcout out more of my projects if you're
                interested by clicking 'More Projects'.
                <br /> <br />I am always looking for next exciting project, drop
                me a message{' '}
                <ExternalLink
                  underline="always"
                  href={'https://ivc17.github.io/contact'}
                  sx={{
                    display: 'inline',
                    fontSize: { xs: 16, md: 20 },
                    textDecoration: 'underline'
                  }}
                >
                  here
                </ExternalLink>{' '}
                if you’ have any cool ideas that wants to be carried out.
              </Typography>

              <ExternalLink href={'https://ivc17.github.io/gallery'}>
                <Button> More Projects </Button>
              </ExternalLink>
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
            zIndex={-1}
          >
            <LightStrip style={{ top: unit, left: 0 }} />
            <LightStrip
              color="purple"
              style={{ top: 0, left: unit }}
              orientation="v"
              left
            />
            <LightStrip
              orientation="v"
              style={{
                bottom: -unit,
                right: unit,
                left: 'unset',
                top: 'unset'
              }}
            />
            <LightStrip
              bottom
              style={{
                bottom: 2 * unit,
                right: 0,
                left: 'unset',
                top: 'unset'
              }}
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
