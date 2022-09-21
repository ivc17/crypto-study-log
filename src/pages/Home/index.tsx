import { Box } from '@mui/material'
import Footer from 'components/Footer'
import Grid from 'components/Grid'
import Header from 'components/Header'
import Landing from 'components/Landing'
import Logs from 'components/Logs'
import Particles from 'components/Particles'
import SeeMore from 'components/SeeMore'
import { NOTES } from 'constant/notes'
import { routes } from 'constant/routes'
import AllLogs from 'pages/AllLogs'
import SingleLog from 'pages/SingleLog'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  let location = useLocation()

  const log = useMemo(() => {
    const name = location.pathname.slice(5)

    const note = NOTES.find(({ id }) => name === id)
    return note ?? undefined
  }, [location.pathname])

  return (
    <>
      {location.pathname === routes['all-log'] && <AllLogs />}
      {log && <SingleLog title={log.title} />}
      <Box
        display="flex"
        flexDirection={'column'}
        justifyContent="space-between"
        position="relative"
      >
        <Header />
        <Landing />
        <Particles />
        <Box height="max-content" overflow="hidden" maxWidth={'100%'}>
          <Box zIndex={4}>
            <Logs />
          </Box>
          <Grid />
          <SeeMore />
          <Footer />
        </Box>
      </Box>
    </>
  )
}
