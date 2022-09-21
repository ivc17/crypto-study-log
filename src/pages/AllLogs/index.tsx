import { Box, Button, Typography } from '@mui/material'
import Card from 'components/Logs/Card'
import Modal from 'components/Modal'
import { NOTES } from 'constant/notes'
import { routes } from 'constant/routes'
import { useNavigate } from 'react-router-dom'

export default function AllLogs() {
  const navigate = useNavigate()
  return (
    <Modal isOpen={true} onDismiss={() => {}}>
      <Box display="flex" justifyContent={'space-between'} width="100%">
        <div />
        <Button
          onClick={() => {
            navigate(routes.home)
          }}
        >
          Close
        </Button>
      </Box>
      <Typography fontSize={48} fontWeight={700} textAlign="center">
        Logs/Notes
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns={'repeat(auto-fill, 320px)'}
        gap={30}
        rowGap={50}
        justifyContent="center"
        // sx={{ overflow: 'auto', height: isDownMd ? 357 : 517, pb: 100 }}
        padding={'24px 24px 200px'}
        position="relative"
        justifyItems={'center'}
      >
        {NOTES.map(({ title, description, id, date }, idx) => {
          return (
            // <Grid
            //   item
            //   xs={6}
            //   sm={4}
            //   md={3}
            //   key={idx}
            //   width="100%"
            //   height="100%"
            // >
            <Card title={title} key={idx} id={id} date={date}>
              {description}
            </Card>
            // </Grid>
          )
        })}
      </Box>
    </Modal>
  )
}
