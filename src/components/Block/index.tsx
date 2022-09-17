import { Box, keyframes, styled } from '@mui/material'
import Ball from 'components/Ball'
import { useEffect, useState } from 'react'
import { theme } from 'theme'
import { Light, LightHalf } from './BlockLight'

const blockNum = 8
export const defaultHeightDivider = 2
const defaultBlockwidth = 200

const appear = keyframes`
0% {opacity: 0};
100% {opacity: 1}
`

const BlockWrapper = styled(Box)({
  animation: `${appear} 0.2s `,
  animationFillMode: 'forwards',
  overflow: 'visible',
  position: 'relative',
  opacity: 0,
  '& polygon': {
    strokeWidth: 0.5
  }
})

export function Block({
  height = 100,
  heightDivider = defaultHeightDivider,
  zIndex,
  base,
  outline = false,
  delay
}: {
  height?: number
  heightDivider?: number
  zIndex?: number
  base?: boolean
  outline?: boolean
  delay?: number
}) {
  return (
    <BlockWrapper
      height={height / heightDivider}
      width={height * 2}
      style={{
        zIndex: zIndex,
        animationDelay: `${delay}s`
      }}
    >
      <svg
        viewBox="0 0 150 100"
        width={height * 2}
        style={{ position: 'absolute', bottom: 0 }}
      >
        <polygon
          stroke={outline ? '#1633A7' : 'none'}
          fill={outline ? 'none' : base ? '#005BFB' : '#005BFB80'}
          points="75 0 75 0 0 43 75 87 150 43 75 0"
        />
        <polygon
          stroke={outline ? '#1633A7' : 'none'}
          fill={outline ? 'none' : base ? '#1633A7' : '#1633A780'}
          points="75 100 0 57 0 43 75 87 75 100"
        />
        <polygon
          stroke={outline ? '#1633A7' : 'none'}
          fill={outline ? 'none' : base ? '#143499' : '#14349980'}
          points="75 100 150 57 150 43 75 87 75 100"
        />
      </svg>
    </BlockWrapper>
  )
}

export function BlockStack({
  width = defaultBlockwidth,
  ballDelay = 0,
  ballTopPercentage
}: {
  width?: number
  ballDelay?: number
  ballTopPercentage?: string
}) {
  const [lightVisible, setLightVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLightVisible(true)
    }, (ballDelay + 1) * 1000)
  }, [ballDelay])

  return (
    <Box position={'relative'} width="max-content">
      <Ball
        style={{
          top: ballTopPercentage ?? '-10%',
          left: '50%',
          zIndex: 20
        }}
        size={(width * 3) / 4}
        delay={ballDelay}
      />
      {Array.from(Array(blockNum).keys())
        .map((num, idx) => {
          return num < 3 ? (
            <Block
              zIndex={idx + 1}
              key={idx}
              base={idx === 0}
              height={width / 2}
              delay={(Math.random() + idx) / 10 + ballDelay / 2}
            />
          ) : (
            <Block
              key={idx}
              height={width / 2}
              outline
              delay={(Math.random() + idx) / 10 + ballDelay / 2}
            />
          )
        })
        .reverse()}
      <Box sx={{ display: lightVisible ? 'visible' : 'none' }}>
        <Light
          blockNum={blockNum}
          blendMode="normal"
          height={width / 2}
          zIndex={blockNum}
          color={theme.palette.primary.main}
          blur
          opacity={0.3}
        />{' '}
        <LightHalf
          blockNum={blockNum}
          height={width / 2}
          zIndex={blockNum}
          blendMode="overlay"
          opacity={1}
          color="#00ffff"
        />{' '}
        <LightHalf
          blockNum={blockNum}
          height={width / 2}
          zIndex={blockNum}
          blendMode="normal"
          opacity={0.3}
          color={theme.palette.primary.main}
        />{' '}
        <Light
          blockNum={blockNum}
          height={width / 2}
          blendMode="overlay"
          zIndex={blockNum}
          color="#D2C0CD"
        />
        <Light
          blockNum={blockNum}
          blendMode="color-dodge"
          height={width / 2}
          zIndex={blockNum}
        />
      </Box>
    </Box>
  )
}
