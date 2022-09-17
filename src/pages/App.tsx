import { Box } from '@mui/material'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Landing from 'components/Landing'
import Logs from 'components/Logs'

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Box zIndex={4}>
        <Logs />
      </Box>
      <Footer />
    </>
  )
}

export default App
