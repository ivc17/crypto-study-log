import { Box, Typography, useTheme } from '@mui/material'
import { BlockStack } from 'components/Block'
import ColorSplitText from 'components/ColorSplitText'
import useBreakpoint from 'hooks/useBreakpoint'
import Particles from './Particle'

export default function Landing() {
  const isDownXl = useBreakpoint('xl')
  const isDownLg = useBreakpoint('lg')
  const isDownMd = useBreakpoint('md')
  const isDownSm = useBreakpoint('sm')
  const theme = useTheme()

  return (
    <Box
      id="landing"
      height="100vh"
      minHeight={500}
      maxWidth="100%"
      sx={{
        '& *': { pointerEvents: 'none' },
        position: 'relative'
      }}
    >
      <Particles />
      <Box
        display="flex"
        position="relative"
        width="100%"
        height="100%"
        justifyContent={'center'}
        alignItems="center"
      >
        <Box
          display={'flex'}
          flexDirection="column"
          alignItems={'center'}
          sx={{ transform: 'translateY(-30px)' }}
          mb={theme.height.header}
          zIndex={30}
        >
          <ColorSplitText
            fontSize={{ xs: 40, sm: 70, md: 100 }}
            fontWeight={900}
            zIndex={30}
            text={<>Crypto Study Log</>}
            animated
          />
          <ColorSplitText
            fontSize={isDownMd ? 20 : 50}
            fontWeight={900}
            zIndex={30}
            text={<>Notes for crypto related stuff</>}
            animated
          />
        </Box>
        <Box
          position="absolute"
          top={isDownMd ? '20%' : '0'}
          left={isDownMd ? '30px' : '10%'}
        >
          <BlockStack
            ballDelay={0.3}
            ballTopPercentage={'0%'}
            width={
              isDownXl
                ? isDownLg
                  ? isDownMd
                    ? isDownSm
                      ? 130
                      : 200
                    : 250
                  : 300
                : 400
            }
          />{' '}
        </Box>
        <Box
          position="absolute"
          top={isDownMd ? '100px' : '0%'}
          right={isDownMd ? '15px' : '10%'}
        >
          <BlockStack
            ballDelay={0.9}
            ballTopPercentage={'10%'}
            width={
              isDownXl
                ? isDownLg
                  ? isDownMd
                    ? isDownSm
                      ? 100
                      : 150
                    : 180
                  : 200
                : 200
            }
          />{' '}
        </Box>
        <Box position="absolute" bottom={'8%'} left={isDownMd ? '35%' : '45%'}>
          <BlockStack
            width={
              isDownXl
                ? isDownLg
                  ? isDownMd
                    ? isDownSm
                      ? 180
                      : 250
                    : 300
                  : 350
                : 450
            }
          />
        </Box>
      </Box>
    </Box>
  )
}
