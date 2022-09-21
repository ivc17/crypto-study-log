import { Box } from '@mui/material'
import src from 'assets/keywordBg.png'
import srcLight from 'assets/keywordsLight2.png'
import { ReactComponent as KeywordsLight } from 'assets/keywords.svg'

export default function Keywords() {
  return (
    <Box
      height="100vh"
      position="relative"
      width="100%"
      sx={{ overflowX: 'hidden', display: 'flex', justifyContent: 'center' }}
    >
      <Box
        width="120%"
        maxWidth={'2000px'}
        minWidth={{ xs: 800, sm: 1000 }}
        // margin="0 auto"
        position="relative"
        marginLeft={{ xs: -130, md: 0 }}
      >
        <Box
          sx={{
            width: '80%',
            height: '100%',
            // background: (theme) => theme.gradient.gradient1,
            position: 'absolute',
            top: 0,
            left: '50%',
            zIndex: 3,
            transform: 'translateX(-50%)',
            mixBlendMode: 'overlay'
          }}
        >
          {/* <Shape style={{ overflow: 'visible' }} /> */}
        </Box>
        <img src={src} alt="" style={{ width: '100%' }} />
        <img
          src={srcLight}
          alt=""
          style={{
            width: '100%',
            zIndex: 2,
            position: 'absolute',
            top: 0,
            left: 0,
            mixBlendMode: 'color-dodge'
          }}
        />
        <KeywordsLight
          style={{
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 100,
            mixBlendMode: 'screen'
          }}
        />
      </Box>
    </Box>
  )
}
