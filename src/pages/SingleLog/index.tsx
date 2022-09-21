import { Box, Button, Typography } from '@mui/material'
import Modal from 'components/Modal'
import { NOTES } from 'constant/notes'
import { Suspense, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { remark } from 'remark'
import html from 'remark-html'
import wrapPromise from 'utils/wrapPromise'

export const fetchNote = (note: any) => {
  return note
    ? wrapPromise(
        remark()
          .use(html)
          .process(note.content)
          .then((r) => {
            return r.value
          })
          .catch((e) => {
            console.error(e)
          })
      )
    : undefined
}
const initialResource = fetchNote(undefined)

export default function SingleLog({ title }: { title?: string }) {
  const [resource, setResource] = useState(initialResource)
  const note = useMemo(
    () => NOTES.find(({ title: titleStr }) => title === titleStr),
    [title]
  )
  const content: any = resource?.read()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setResource(fetchNote(note))
  }, [content, note])

  return (
    <Modal isOpen={true} onDismiss={() => {}}>
      <Box sx={{ background: (theme) => theme.palette.primary.dark + '90' }}>
        <Box mb={50} display="flex" justifyContent="space-between">
          <div />
          <Button
            onClick={() => {
              navigate(location.state)
            }}
          >
            Close
          </Button>
        </Box>
        <Box
          padding={'24px'}
          height="100%"
          overflow="auto"
          maxWidth={(theme) => theme.width.maxContent}
          margin="0 auto"
        >
          <Typography>{note?.date}</Typography>
          <Typography fontSize={40} fontWeight={700} mb={50}>
            {note?.title}
          </Typography>
          <Suspense fallback={<>waiting</>}>
            <div
              dangerouslySetInnerHTML={{ __html: content ?? '' }}
              style={{
                wordBreak: 'break-all'
              }}
            ></div>
          </Suspense>
        </Box>
      </Box>
    </Modal>
  )
}
