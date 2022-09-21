import { Box } from '@mui/material'
import { useRef } from 'react'

export default function Field2() {
  const canvas = useRef < HTMLCanvasElement > null

  return (
    <Box height="100vh" minHeight={'500px'} width="100%">
      <canvas ref={canvas} style={{ height: '100%', width: '100%' }} />
    </Box>
  )
}
