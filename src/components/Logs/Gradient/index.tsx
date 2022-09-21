import { Box } from '@mui/material'
import { useEffect, useRef } from 'react'

const COLORS = [
  { r: 55, g: 248, b: 212 },
  { r: 55, g: 248, b: 212 },
  { r: 55, g: 248, b: 212 },
  { r: 55, g: 248, b: 212 },
  { r: 55, g: 248, b: 212 }
  // { r: 255, g: 255, b: 212 }
  // { r: 55, g: 248, b: 212 },
  // { r: 0, g: 19, b: 225 },
  // { r: 141, g: 6, b: 225 },
  // { r: 0, g: 0, b: 0 },
  // { r: 0, g: 19, b: 225 },
  // { r: 0, g: 0, b: 0 }
]

const PI2 = Math.PI * 2
const totalParticles = 5
let particles: any[] = []
const maxRadius = 100
const minRadius = 80
let stageWidth = document.body.clientWidth
let stageHeight = document.body.clientHeight

export default function GradientCanvas() {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvas.current) return
    const c = canvas.current
    const ctx = c.getContext('2d')
    if (!ctx) return
    const pxRatio = window.devicePixelRatio > 1 ? 2 : 1

    const resize = () => {
      stageWidth = document.body.clientWidth
      stageHeight = document.body.clientHeight
      c.width = stageWidth * pxRatio
      c.height = stageHeight * pxRatio
      ctx.scale(pxRatio, pxRatio)
      createParticles()
    }

    const createParticles = () => {
      let curColor = 0
      particles = []
      for (let i = 0; i < totalParticles; i++) {
        const item = new GlowParticle(
          Math.random() * stageWidth,
          Math.random() * stageHeight,
          Math.random() * (maxRadius - minRadius) + minRadius,
          COLORS[curColor]
        )
        if (++curColor > COLORS.length) {
          curColor = 0
        }
        particles[i] = item
      }
    }

    const animate = () => {
      window.requestAnimationFrame(animate)
      ctx.clearRect(0, 0, stageWidth, stageHeight)
      for (let i = 0; i < totalParticles; i++) {
        const item = particles[i]
        item?.animate(ctx, stageWidth, stageHeight)
      }
    }
    resize()
    animate()

    window.addEventListener('resize', resize)
    const animationId = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <Box height="100vh" minHeight={'500px'} width="100%">
      <canvas ref={canvas} style={{ height: '100%', width: '100%' }} />
    </Box>
  )
}

class GlowParticle {
  x: number
  y: number
  radius: number
  rgb: { r: number; g: number; b: number }
  vx: number
  vy: number
  sinValue: number
  // animate: (
  //   ctx: CanvasRenderingContext2D,
  //   stageWidth: number,
  //   stageHeight: number
  // ) => void

  constructor(x, y, radius, rgb) {
    this.x = x
    this.y = y
    this.radius = radius
    this.rgb = rgb

    this.vx = Math.random() * 4
    this.vy = Math.random() * 4
    this.sinValue = Math.random()
  }

  animate(ctx, stageWidth, stageHeight) {
    this.sinValue += 0.01

    this.radius += Math.sin(this.sinValue)

    this.x += this.vx
    this.y += this.vy

    if (this.x < 0) {
      this.vx *= -1
      this.x += 10
    } else if (this.x > stageWidth) {
      this.vx *= -1
      this.x -= 10
    }

    if (this.y < 0) {
      this.vy *= -1
      this.y += 10
    } else if (this.y > stageHeight) {
      this.vy *= -1
      this.y -= 10
    }

    ctx.beginPath()

    ctx.fillStyle = `rgba(${this.rgb.r}, ${this.rgb.r}, ${this.rgb.r}, 1)`
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false)
    ctx.fill()
  }
}
