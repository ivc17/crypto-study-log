import styled from '@emotion/styled'
import { keyframes } from '@mui/material'
import { ReactComponent as BallSvg } from 'assets/ball.svg'
import React from 'react'

const bobbing = keyframes(`  
0% { transform: translate(-50%, 0); };
50% { transform: translate(-50%, 10px); }
100% { transform: translate(-50%, -20px); }`)

const StyledBall = styled(BallSvg, {
  shouldForwardProp: (prop) => !(prop === 'delay')
})<{ delay?: number }>(({ delay }) => ({
  animation: `${bobbing} 8s ease-in-out infinite alternate`,
  animationDelay: `${delay ?? 0}s`
}))

export default function Ball({
  size = 100,
  zIndex = 5,
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
