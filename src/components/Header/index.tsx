import { Box, styled, SvgIconProps } from '@mui/material'

const StyledNav = styled('nav')(({ theme }) => ({
  height: theme.height.header,
  position: 'fixed',
  [theme.breakpoints.down('md')]: {
    height: theme.height.mobileHeader
  },
  '& svg': {
    height: '100%'
  }
}))

export const LogoIcon = (props: SvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 63.56 80.17"
      width="63.56"
      height="80.17"
    >
      <defs>
        <style></style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <rect fill="#0013ff" width="63.56" height="80.17" />
          <path
            fill="#ffffff"
            d="M36.84,38.05c3.07-2.62.91-1.72,4.4-9a3.92,3.92,0,0,1,.65,3.44c1.76.26,10.26-12.1,12-14.21,0,5,2.17,16.61-2.76,17.72-2.55,12.26-3.82,14.4-7,15.67,2.26,0,.21,2.7,4.2,2.28,1,4.28,4.15,11.16,7.19,14.26-1.25,1.53-8.7-2.37-10.06-6.64-.44,1.5-3.25,3.12-4,3.74-.78-2-3.67-6.61-6.38-7.67l-.7-1.45c-1.72-2.4-.76-1.53-2.44-3-1.49,2.46-7.33,6.67-7.31,9.14-.48,0-.78-.66-.79-2.47-3.7,6-4,5.09-5.16,4.61-.61,3.11-4.15,4.09-5.93,4.26,0,0-2.66-.41-3.31-1.19,1.07-.4,3.56-5.38,2.69-10.16,3.48-5.5,5.17-3.94,7.18-4.24-5.68-2.24-7.41-16.55-8.55-21.1-1,0-2.59-2.77-2.6-4,1.61-1.48,2.77-8.32,4.69-10.67a24.49,24.49,0,0,0,4,9.07c1.6,1.24,2,1.82,4.64,4,0,0-.16-2.71.17-2a35.91,35.91,0,0,0,7.11,9.7s3.42-.83,3.41-2.55Z"
          />
        </g>
      </g>
    </svg>
  )
}

export default function Header() {
  return (
    <>
      <StyledNav>
        <Box
          ml={{
            xs: 20,
            md: 40
          }}
          height="100%"
          width="max-content"
          sx={{ background: (theme) => theme.palette.primary.main }}
          padding={{ xs: '0 10px', md: '0 15px' }}
        >
          <LogoIcon />
        </Box>
      </StyledNav>
    </>
  )
}
