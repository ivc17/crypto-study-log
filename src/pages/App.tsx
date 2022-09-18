import { Box } from '@mui/material'
import Footer from 'components/Footer'
import Grid from 'components/Grid'
import Header from 'components/Header'
import Landing from 'components/Landing'
import Logs from 'components/Logs'
import SeeMore from 'components/SeeMore'

function App() {
  return (
    <Box display="flex" flexDirection={'column'} justifyContent="space-between">
      <Header />
      <Landing />
      <Box zIndex={4}>
        <Logs />
      </Box>
      <Grid />
      <SeeMore />
      <Footer />
    </Box>
  )
}

export default App
