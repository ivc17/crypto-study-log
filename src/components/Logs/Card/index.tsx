import { Box, Button, styled, Typography } from '@mui/material'

const StyledBox = styled(Box)({
  padding: '15px 15px 20px',
  background:
    'linear-gradient(0deg, rgba(0, 50, 233, 0) -30.38%, rgba(0, 50, 233, 0.04) -25.59%, rgba(0, 50, 233, 0.45) 16.37%, rgba(0, 50, 233, 0.75) 52.33%, rgba(0, 50, 233, 0.93) 76.31%, #0032E9 89.5%)'
})

export default function Card() {
  return (
    <Box>
      <Typography fontSize={20} fontWeight={700}>
        2022/20/20
      </Typography>
      <StyledBox width={300} height={320}>
        <Typography fontSize={22} fontWeight={700} mb={20}>
          Open or create a next.config.js
        </Typography>
        <Box>
          Open or create a next.config.js file. Add an environment variable
          called BACKEND_URL with the value of your GitHub Pages subpath with a
          forward ..
        </Box>
      </StyledBox>
      <Button
        sx={{
          margin: '0 auto',
          display: 'block',
          backgroundColor: '#ffffff',
          zIndex: 2,
          color: '#000000',
          mt: '-30px',
          height: 50,
          padding: '0 40px'
        }}
      >
        Read more
      </Button>
    </Box>
  )
}
