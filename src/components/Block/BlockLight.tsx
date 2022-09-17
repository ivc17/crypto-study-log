import { Box, styled, useTheme } from '@mui/material'
import { defaultHeightDivider } from '.'

const LightWrapper = styled(Box, {
  shouldForwardProp: (prop) => !(prop === 'color')
})<{ color?: string }>(({ theme, color }) => ({
  overflow: 'visible',
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  '& div': {
    background: color ?? theme.palette.primary.light,
    '&.half': {
      background: `linear-gradient(0deg, ${
        color ?? theme.palette.primary.light
      } 12.39%, ${(color ?? theme.palette.primary.light) + '00'} ${
        Math.random() * 100
      }%);`
    }
  },
  '& svg': {
    overflow: 'visible'
  },
  '& path': {
    fill: color ?? theme.palette.primary.light
  },
  filter: 'blur(10px)'
  // filter: `blur(10px)`
}))

function LightFilter({ color }: { color?: string }) {
  const theme = useTheme()
  return (
    <defs>
      <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
        <feMorphology
          operator="dilate"
          radius="8"
          in="SourceAlpha"
          result="thicken"
        />

        <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
        <feFlood
          flood-color={color ?? theme.palette.primary.light}
          result="glowColor"
        />
        <feComposite
          in="glowColor"
          in2="blurred"
          operator="in"
          result="softGlow_colored"
        />
        {/* <feMerge>
          <feMergeNode in="softGlow_colored" />
          <feMergeNode in="SourceGraphic" />
        </feMerge> */}
      </filter>
    </defs>
  )
}

export function Light({
  height = 100,
  heightDivider = defaultHeightDivider,
  blockNum = 3,
  zIndex,
  blendMode = 'normal',
  opacity = 0.4,
  blur = false,
  color
}: {
  height?: number
  heightDivider?: number
  zIndex?: number
  blendMode?: string
  blockNum: number
  opacity?: number
  blur?: boolean
  color?: string
}) {
  const h = height / heightDivider
  return (
    <LightWrapper
      color={color}
      sx={{
        zIndex: zIndex ?? 10,
        height: h * (blockNum - 1) + height * (4 / 3),
        mixBlendMode: blendMode,
        opacity: opacity
      }}
    >
      <svg viewBox={`0 0 150 43`} width={height * 2} style={{ marginTop: -30 }}>
        <LightFilter color={color} />
        <path
          d={`M 0 43 75 0 150 43`}
          filter={blur ? 'url(#sofGlow)' : undefined}
        />
      </svg>
      <Box
        sx={{
          flexGrow: 1,

          boxShadow: (theme) =>
            blur
              ? `0 0 ${h / 4}px ${h / 4}px ${
                  color ?? theme.palette.primary.light
                }`
              : 'none'
        }}
      ></Box>
      <svg viewBox={`0 0 150 43`} width={height * 2}>
        <LightFilter color={color} />
        <path
          d={`M 0 0 75 43 150 0`}
          filter={blur ? 'url(#sofGlow)' : undefined}
        />
      </svg>
    </LightWrapper>
  )
}

export function LightHalf({
  height = 100,
  heightDivider = defaultHeightDivider,
  blockNum = 3,
  zIndex,
  blendMode = 'normal',
  opacity = 0.4,
  color
}: {
  height?: number
  heightDivider?: number
  zIndex?: number
  blendMode?: string
  blockNum: number
  opacity?: number
  color?: string
}) {
  const h = height / heightDivider
  return (
    <LightWrapper
      color={color}
      sx={{
        zIndex: zIndex ?? 10,
        height: h * (blockNum - 1) + height * (4 / 3),
        mixBlendMode: blendMode,
        opacity: opacity
      }}
    >
      <svg
        viewBox={`0 0 150 43`}
        width={height * 2}
        style={{ marginTop: -30, opacity: 0 }}
      >
        <path d={`M 0 43 75 0 150 43`} />
      </svg>
      <Box
        className="half"
        sx={{
          flexGrow: 1
        }}
      ></Box>
      <svg viewBox={`0 0 150 43`} width={height * 2}>
        <path d={`M 0 0 75 43 150 0`} />
      </svg>
    </LightWrapper>
  )
}
