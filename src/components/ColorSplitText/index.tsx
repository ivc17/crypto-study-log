import {
  Box,
  keyframes,
  styled,
  Typography,
  TypographyProps
} from '@mui/material'

const left = keyframes`
0% {transform: translate(0,0);};
1% {transform: translate(-5px,-5px);};
5% {transform: translate(0px,0px);};
98% {transform: translate(0px,0px);};
99% {transform: translate(-5px,-0px);};
100% {transform: translate(0,0);};
`

const right = keyframes`
0% {transform: translate(0,0);};
1% {transform: translate(5px,5px);};
5% {transform: translate(0px,0px);};
98% {transform: translate(0px,0px);};
99% {transform: translate(5px,5px);};
100% {transform: translate(0,0);};
`

const Left = styled(Typography)<{ animated?: boolean }>(({ animated }) => ({
  animation: animated ? `${left} 5s ease-in-out infinite` : undefined,
  animationDirection: 'alternate',
  animationFillMode: 'forwards',
  color: '#8D06FF',
  position: 'absolute',
  top: -2,
  left: -1
}))

const Right = styled(Typography)<{ animated?: boolean }>(({ animated }) => ({
  animation: animated ? `${right} 5s ease-in-out infinite` : undefined,
  animationDirection: 'alternate',
  animationFillMode: 'forwards',
  color: '#00EDFF',
  position: 'absolute',
  top: 1,
  left: 2
}))

export default function ColorSplitText({
  text,
  animated,
  zIndex = 1,
  ...props
}: {
  text: string | JSX.Element
  zIndex?: number
  animated?: boolean
} & TypographyProps) {
  return (
    <Box position="relative" overflow="visible">
      <Left
        animated={animated}
        {...props}
        sx={{
          whiteSpace: { xs: 'pre', md: 'nowrap' },
          zIndex
        }}
      >
        {text}
      </Left>
      <Right
        animated={animated}
        {...props}
        sx={{
          whiteSpace: { xs: 'pre', md: 'nowrap' },
          zIndex
        }}
      >
        {text}
      </Right>
      <Typography
        {...props}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          whiteSpace: { xs: 'pre', md: 'nowrap' },
          zIndex
        }}
      >
        {text}
      </Typography>
      <Typography
        {...props}
        sx={{ whiteSpace: { xs: 'pre', md: 'nowrap' }, zIndex: zIndex + 1 }}
      >
        {text}
      </Typography>
    </Box>
  )
}
