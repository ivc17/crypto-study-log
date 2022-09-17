import { Box } from '@mui/material'
import { BlockStack } from 'components/Block'

export default function Landing() {
  return (
    <Box
      height="100vh"
      minHeight={500}
      sx={{ '& *': { pointerEvents: 'none' } }}
    >
      <Box display="flex" position="relative" width="100%" height="100%">
        <Box position="absolute" top={'0'} left={'10%'}>
          <BlockStack ballDelay={0.3} ballTopPercentage={'0%'} width={400} />{' '}
        </Box>
        <Box position="absolute" bottom={'10%'} left={'45%'}>
          <BlockStack width={600} />
        </Box>
        <Box position="absolute" top={'0%'} right={'10%'}>
          <BlockStack ballDelay={0.9} ballTopPercentage={'10%'} />{' '}
        </Box>
      </Box>
    </Box>
  )
}
