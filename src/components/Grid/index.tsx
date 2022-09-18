import { Box, Button, Typography } from '@mui/material'
import { ReactComponent as GridSvg } from 'assets/grid.svg'
import ColorSplitText from 'components/ColorSplitText'

export default function Grid() {
  return (
    <Box
      height="100vh"
      width="100%"
      position="relative"
      display="flex"
      justifyContent={'center'}
      alignItems="center"
    >
      <GridSvg style={{ position: 'absolute', top: 0, left: 0 }} />
      <Box display="grid" justifyItems="center" gap={90}>
        <ColorSplitText
          text="Read Me"
          fontSize="60px"
          fontWeight={700}
        ></ColorSplitText>

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
