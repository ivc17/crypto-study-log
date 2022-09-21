import { useEffect, useRef } from 'react'

export default function Field() {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvas.current) return
    const c = canvas.current
    const ctx = c.getContext('2d')
    if (!ctx) return

    let noiseZ
    let size
    let columns
    let rows
    let w
    let h
    let field
    let canvasField = document.getElementById('field')
    let ctxField = ctx

    function setup(container) {
      size = 20
      noiseZ = 0
      reset(container)
      window.addEventListener('resize', reset)
    }

    function initField() {
      field = new Array(columns)
      for (let x = 0; x < columns; x++) {
        field[x] = new Array(columns)
        for (let y = 0; y < rows; y++) {
          field[x][y] = [0, 0]
        }
      }
    }

    function calculateField() {
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          let angle = noise.simplex3(x / 50, y / 50, noiseZ) * Math.PI * 2
          let length = noise.simplex3(x / 100 + 40000, y / 100 + 40000, noiseZ)
          field[x][y][0] = angle
          field[x][y][1] = length
        }
      }
    }

    function reset(container) {
      const pxRatio = window.devicePixelRatio
      w = canvasField.offsetWidth * pxRatio
      h = canvasField.offsetHeight * pxRatio
      canvasField.width = w
      canvasField.height = h
      noise.seed(Math.random())
      columns = Math.floor(w / size) + 1
      rows = Math.floor(h / size) + 1
      initField()
    }

    function drawField(ctx) {
      ctx.clearRect(0, 0, canvasField.width, canvasField.height)
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          let angle = field[x][y][0]
          let length = field[x][y][1]
          ctx.save()
          ctx.translate(x * size, y * size)
          ctx.rotate(angle)
          ctx.strokeStyle = `hsla(${(angle * 180) / Math.PI}, 100%, 50%, 1)`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(0, size * length)
          ctx.stroke()
          ctx.restore()
        }
      }
    }
  }, [])

  return (
    <Box height="100vh" minHeight={'500px'} width="100%">
      <canvas ref={canvas} style={{ height: '100%', width: '100%' }} />
    </Box>
  )
}
