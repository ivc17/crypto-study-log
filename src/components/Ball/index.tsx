import styled from '@emotion/styled'
import { keyframes } from '@mui/material'
import { ReactComponent as BallSvg } from 'assets/ball.svg'
import React from 'react'

const bobbing = keyframes(`  
0% { transform: translate(-50%, 0); };
50% { transform: translate(-50%, 5vh); }
100% { transform: translate(-50%, -5vh); }`)

const StyledBall = styled(BallSvg, {
  shouldForwardProp: (prop) => !(prop === 'delay')
})<{ delay?: number }>(({ delay }) => ({
  animation: `${bobbing} ${
    Math.random() * 5 + 5
  }s ease-in-out infinite alternate`,
  animationDelay: `${delay ?? 0}s`
}))

export default function Ball({
  size = 100,
  zIndex = 20,
  style,
  delay
}: {
  size?: number
  zIndex?: number
  style?: React.CSSProperties
  delay?: number
}) {
  return (
    <StyledBall
      delay={delay}
      style={{
        zIndex: zIndex,
        height: size,
        width: size,
        transform: 'translate(-50%, 0)',
        position: 'absolute',
        ...style
      }}
    />
  )
}
