import { Box, Button, styled, Typography } from '@mui/material'
import { routes } from 'constant/routes'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const StyledBox = styled(Box)({
  padding: '15px 15px 20px',
  background:
    'linear-gradient(0deg, rgba(0, 50, 233, 0) -30.38%, rgba(0, 50, 233, 0.04) -25.59%, rgba(0, 50, 233, 0.45) 16.37%, rgba(0, 50, 233, 0.75) 52.33%, rgba(0, 50, 233, 0.93) 76.31%, #0032E9 89.5%)',
  boxShadow: '0 0 10px #00000010'
})

export default function Card({
  children,
  title,
  date,
  id
}: {
  children?: React.ReactNode
  title?: string
  date?: string
  id?: string
}) {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Box>
      <Typography fontSize={20} fontWeight={700}>
        {date ?? ' 2022/22/22'}
      </Typography>
      <StyledBox width={300} height={320}>
        <Typography fontSize={22} fontWeight={700} mb={20}>
          {title ?? 'Title'}
        </Typography>
        <Box>{children}</Box>
      </StyledBox>
      <Button
        style={{
          margin: '0 auto',
          display: 'block',
          backgroundColor: '#ffffff',
          zIndex: 2,
          color: '#000000',
          marginTop: '-30px',
          height: 50,
          padding: '0 40px'
        }}
        onClick={() => {
          navigate(routes.log.replace(':title', id ?? ''), {
            state: location.pathname
          })
        }}
      >
        Read more
      </Button>
    </Box>
  )
}
