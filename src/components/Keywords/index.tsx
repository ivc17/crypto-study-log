import { Box, Typography } from '@mui/material'
import src from 'assets/keywordBg.png'
import srcLight from 'assets/keywordsLight2.png'
import { ReactComponent as KeywordsLight } from 'assets/keywords.svg'
import { ReactComponent as KeywordsBalls } from 'assets/keywordsBalls.svg'

const texts1 = ['NFT', 'DeFi', 'SBT', 'GameFi', 'WEB3']
const texts2 = [
  'ERC-20',
  'ERC-721',
  'ERC-1155',
  'Metaverse',
  'Ethereum',
  'Airdrop'
]
const texts3 = ['DECENTRALIZATION', 'YourMoneyIsNotMoney', 'BLOCKCHAIN']

export default function Keywords() {
  return (
    <Box position="relative">
      <KeywordsBalls
        style={{
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 100,
          overflow: 'visible'
        }}
      />
      <Box
        margin={{ xs: 0, md: '80px 0' }}
        position="relative"
        width="100%"
        sx={{
          overflowX: 'hidden',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          width="120%"
          maxWidth={'2000px'}
          minWidth={{ xs: 800, sm: 1000 }}
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

          <Typography
            position="absolute"
            fontSize={{ xs: 50, sm: 80, lg: 100 }}
            fontWeight={700}
            top={{ xs: '25%', md: '23%', lg: '25%' }}
            right={'20%'}
          >
            #{texts1[Math.floor(texts1.length * Math.random())]}
          </Typography>
          <Typography
            position="absolute"
            fontSize={{ xs: 36, sm: 50, lg: 60 }}
            fontWeight={700}
            top={{ xs: '52%', md: '53%', lg: '55%' }}
            right={'20%'}
          >
            #{texts2[Math.floor(texts2.length * Math.random())]}
          </Typography>
          <Typography
            position="absolute"
            fontSize={{ xs: 28, sm: 40, lg: 50 }}
            fontWeight={700}
            top={{ xs: '37%', md: '35%' }}
            left={'39%'}
            sx={{ textOrientation: 'sideways', writingMode: ' vertical-rl' }}
          >
            #{texts3[Math.floor(texts3.length * Math.random())]}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
