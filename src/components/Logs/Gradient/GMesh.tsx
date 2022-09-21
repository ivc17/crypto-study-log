import { Box } from '@mui/material'
import { ReactComponent as Shape1 } from 'assets/GMesh/shape1.svg'
import { ReactComponent as Shape2 } from 'assets/GMesh/shape2.svg'
import { ReactComponent as Shape3 } from 'assets/GMesh/shape3.svg'
import { ReactComponent as Shape4 } from 'assets/GMesh/shape4.svg'
import { ReactComponent as Shape5 } from 'assets/GMesh/shape5.svg'
import { ReactComponent as Shape6 } from 'assets/GMesh/shape6.svg'

export default function GMesh() {
  return (
    <Box
      position="absolute"
      width="100%"
      sx={{ overflow: 'hidden', height: '150vh', top: 0, zIndex: -1 }}
    >
      <Box
        id="gMesh"
        sx={{
          position: 'relative',
          '& *': {
            position: 'absolute',
            height: '100%',
            width: '100%',
            pointerEvents: 'none',
            zIndex: -1
          },
          height: '100%',
          top: 0,
          width: '80%',
          // filter: 'blur(30px)',
          ml: '10%',
          zIndex: -1,
          transformOrigin: 'center top'
        }}
      >
        <Shape1 style={{ transform: 'rotate(-10deg)', left: 100, top: -100 }} />
        <Shape1
          style={{
            transform: 'scale(-1) rotate(15deg)',
            right: 100
          }}
        />
        <Shape2
          style={{
            transform: 'rotate(15deg)',
            right: '-50%'
          }}
        />
        <Shape2
          style={{
            left: '-20%',
            height: '120%',
            transform: 'rotate(-15deg)',
            transformOrigin: 'left top'
          }}
        />
        <Shape3
          id="shape3"
          style={{
            transform: 'rotate(-15deg)',
            transformOrigin: 'left top',
            top: 50
          }}
        />
        <Shape4
          style={{
            transform: 'rotate(15deg)',
            transformOrigin: 'right top',
            right: 0,
            top: 100
          }}
        />
        <Shape5 />
        <Shape6
          style={{
            transform: 'rotate(15deg)',
            transformOrigin: 'right top',
            height: '80%',
            top: '30%'
          }}
        />
      </Box>
    </Box>
  )
}
