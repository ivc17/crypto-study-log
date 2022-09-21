import { useCallback, useEffect, useState } from 'react'
import { loadFull } from 'tsparticles'
import { Box, keyframes, styled } from '@mui/material'
import TsParticles from 'react-particles'
import { Container, Engine } from 'tsparticles-engine'
import useBreakpoint from 'hooks/useBreakpoint'
import { configGradient } from 'utils/config'

const appear = keyframes`
0% {opacity: 0};
100% {opacity: 1}
`

const Wrapper = styled(Box)({
  width: '100%',
  height: '100vh',
  maxWidth: '100%',
  position: 'absolute',
  animation: `${appear} 10s`,
  animationFillMode: 'forwards',
  opacity: 0,
  animationDelay: '0s',
  pointerEvents: 'none',
  zIndex: 3,
  '&>div': { width: '100%', height: '100%' }
})

export default function ParticlesGradient() {
  const [tsPContainer, setTsPContainer] = useState<Container | undefined>(
    undefined
  )

  const isDownLg = useBreakpoint('lg')
  const isDownMd = useBreakpoint('md')
  const isDownSm = useBreakpoint('sm')

  const changeHandler = useCallback(
    (container: Container | undefined) => {
      const tsPContainer = container
      if (!tsPContainer) return
      tsPContainer.canvas.resize()
      if (isDownLg) {
        if (isDownMd) {
          if (isDownSm) {
            // tsPContainer.options.particles.number.value = 5
          }
          // tsPContainer.options.particles.size.value = { min: 1, max: 5 }
        } else {
          // tsPContainer.options.particles.number.value = 10
        }
        // tsPContainer.options.particles.size.value = { min: 5, max: 20 }
      } else {
        // tsPContainer.options.particles.number.value = 15
        // tsPContainer.options.particles.size.value = { min: 5, max: 25 }
      }
    },
    [isDownLg, isDownMd, isDownSm]
  )

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // console.log(engine)
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
    const ctx = (
      document.querySelector('#tsparticlesGradient canvas') as any
    )?.getContext('2d')
    if (ctx) {
      ctx.globalCompositeOperation = 'screen'
    }
    console.log(ctx, ctx?.globalCompositeOperation)
    console.log(ctx, ctx?.globalCompositeOperation)
    console.log(ctx, ctx?.globalCompositeOperation)
    console.log(ctx, ctx?.globalCompositeOperation)

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
  }, [tsPContainer, isDownMd, isDownLg])

  return (
    <Wrapper>
      <TsParticles
        id="tsparticlesGradient"
        init={particlesInit}
        loaded={particlesLoaded}
        options={configGradient}
      />
    </Wrapper>
  )
}
