import { Box, Typography, TypographyProps } from '@mui/material'

export default function ColorSplitText({
  text,
  zIndex = 1,
  ...props
}: { text: string | JSX.Element; zIndex?: number } & TypographyProps) {
  return (
    <Box position="relative" overflow="visible">
      <Typography
        {...props}
        sx={{
          color: '#8D06FF',
          position: 'absolute',
          top: -2,
          left: -1,
          whiteSpace: { xs: 'pre', md: 'nowrap' },
          zIndex
        }}
      >
        {text}
      </Typography>
      <Typography
        {...props}
        sx={{
          color: '#00EDFF',
          position: 'absolute',
          top: 1,
          left: 2,
          whiteSpace: { xs: 'pre', md: 'nowrap' },
          zIndex
        }}
      >
        {text}
      </Typography>
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
