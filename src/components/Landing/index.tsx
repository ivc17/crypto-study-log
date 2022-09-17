import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { Box } from '@mui/material'
import { BlockStack } from 'components/Block'
import { Container, Engine } from 'tsparticles-engine'
import { particleConfig } from './config'

export default function Landing() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container)
    },
    []
  )

  return (
    <Box
      height="100vh"
      minHeight={500}
      sx={{ '& *': { pointerEvents: 'none' }, position: 'relative' }}
    >
      <Box width="100%" height="100%" position="fixed" zIndex={3}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particleConfig}
        />
      </Box>
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
