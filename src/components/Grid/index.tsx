import { Box, Typography } from '@mui/material'
// import { ReactComponent as GridSvg } from 'assets/grid.svg'
import gridUrl from 'assets/grid.svg'
import ColorSplitText from 'components/ColorSplitText'

export default function Grid() {
  return (
    <Box
      id="about"
      height={'80vh'}
      width="100%"
      position="relative"
      display="flex"
      justifyContent={'center'}
      alignItems="center"
      zIndex={4}
      sx={{
        background: `url(${gridUrl}) repeat 400px 0px`,
        backgroundSize: '1000px'
      }}
    >
      {/* <GridSvg style={{ position: 'absolute', top: 0, left: 0 }} /> */}
      <Box
        display="grid"
        justifyItems="center"
        gap={{ xs: 30, md: 90 }}
        marginTop={-100}
      >
        <Box display="grid" justifyItems="center">
          <ColorSplitText
            text="About Project"
            fontSize={{ xs: 40, md: 50 }}
            fontWeight={700}
          ></ColorSplitText>
          <ColorSplitText text="プロジェクトについて"></ColorSplitText>
        </Box>

        <Typography width={'250px'} textAlign="center">
          This is an experimental project that aims to test out the possibility
          of svg animation, as well as to what extent css mix-blend-mode is able
          to replicate layer effect in photoshop/illustrator. This is also a
          place to document my journey navigating the web3 world. Update
          irregurarly. The moset difficult part of making the project is taking
          performance into account, have to cut down on my ideas because of it.
        </Typography>
        {/* <Button sx={{ background: '#ffffff', color: '#000000' }}>
          More
        </Button> */}
      </Box>
    </Box>
  )
}
