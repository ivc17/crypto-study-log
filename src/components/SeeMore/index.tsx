import { Box, Button, Typography } from '@mui/material'
import ColorSplitText from 'components/ColorSplitText'
import React from 'react'

export default function SeeMore() {
  return (
    <Box
      height="100vh"
      width="100%"
      position="relative"
      display="flex"
      justifyContent={'center'}
      alignItems="center"
      zIndex={4}
    >
      <Box display="grid" justifyItems="center" gap={90}>
        <ColorSplitText
          text="Checkout more"
          fontSize={{ xs: '24px', md: '60px' }}
          fontWeight={700}
        ></ColorSplitText>
        <LightStrip />
        <LightStrip style={{ width: '50%' }} />
        <LightStrip style={{ width: '50%' }} />
        <LightStrip color="purple" style={{ top: 200 }} orientation="v" />
        <LightStrip
          orientation="v"
          style={{ top: 200, right: 200, left: 'unset' }}
        />
        <LightStrip
          style={{ bottom: 200, right: 200, left: 'unset', top: 'unset' }}
        />
        <Box></Box>

        <Typography width={'250px'}>
          世界レベルの 技術者を中心とした実績＆経験豊富なエンジニア集団です。
          全ての工程を日本語でコミュニケーションできる人材が時差の殆どない台湾で
          ラボ型/ウォーターフォール開発/アジャイル開発 等 柔軟な開発しています。
          日本語でのウェブシステム開発をオフショアでご希望でしたら、ぜひご検討ください。
        </Typography>
        <Button>sduhsod</Button>
      </Box>
    </Box>
  )
}

function LightStrip({
  color,
  style,
  orientation = 'h'
}: {
  color?: string
  style?: React.CSSProperties
  orientation?: 'h' | 'v'
}) {
  return (
    <Box
      width={orientation === 'h' ? '90vw' : '500px'}
      maxWidth={(theme) => theme.width.maxContent}
      height={orientation === 'h' ? '500px' : '100%'}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: '50%',
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
