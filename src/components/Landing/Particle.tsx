import { useCallback, useEffect, useState } from 'react'
import { loadFull } from 'tsparticles'
import { Box, keyframes, styled } from '@mui/material'
import TsParticles from 'react-particles'
import { Container, Engine } from 'tsparticles-engine'
import { particleConfig } from './config'
import useBreakpoint from 'hooks/useBreakpoint'

const appear = keyframes`
0% {opacity: 0};
100% {opacity: 1}
`

const Wrapper = styled(Box)({
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  position: 'absolute',
  animation: `${appear} 10s`,
  animationFillMode: 'forwards',
  opacity: 0,
  animationDelay: '2s',
  '& #tsparticles': { width: '100%', height: '100%' }
})

export default function Particles() {
  const [tsPContainer, setTsPContainer] = useState<Container | undefined>(
    undefined
  )
  const [refreshFlag, setRefreshFlag] = useState(false)

  const isDownLg = useBreakpoint('lg')
  const isDownMd = useBreakpoint('md')
  const isDownSm = useBreakpoint('sm')

  const changeHandler = useCallback(
    (container: Container | undefined) => {
      const tsPContainer = container
      if (!tsPContainer) return
      // const landing = document.getElementById('landing')
      tsPContainer.canvas.resize()
      // tsPContainer.options.particles.opacity.value = 0
      const links = tsPContainer.options.particles.links as any
      // const isDownMd = window.innerWidth < 900
      // if (
      //   landing?.clientHeight &&
      //   links &&
      //   window.scrollY > landing.clientHeight / 3
      // ) {
      //   tsPContainer.options.particles.number.value = 10
      //   links.opacity = 0
      //   setRefreshFlag(true)
      // } else {
      //   tsPContainer.options.particles.number.value = isDownMd ? 20 : 30
      //   links.opacity = 1
      //   setRefreshFlag(false)
      // }
      if (isDownMd) {
        tsPContainer.options.particles.number.value = 15
      } else {
        tsPContainer.options.particles.number.value = 20
      }
      if (isDownLg) {
        links.distance = 150
        tsPContainer.options.particles.size.value = { min: 5, max: 20 }
      } else {
        links.distance = 200
        tsPContainer.options.particles.size.value = { min: 5, max: 20 }
      }
    },
    [isDownLg]
  )

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // await console.log(container)
      changeHandler(container)
      setTsPContainer(container)
    },
    [changeHandler]
  )

  useEffect(() => {
    if (!tsPContainer) return
    const onScroll = () => {
      changeHandler(tsPContainer)
    }
    onScroll()
    tsPContainer.refresh()
    // window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)

    return () => {
      // window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [changeHandler, tsPContainer])

  useEffect(() => {
    tsPContainer && tsPContainer.refresh()
  }, [tsPContainer, refreshFlag, isDownMd])

  return (
    <Wrapper zIndex={10}>
      <TsParticles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleConfig}
      />
    </Wrapper>
  )
}
