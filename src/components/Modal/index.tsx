import { Dialog, useTheme } from '@mui/material'

export default function Modal({
  isOpen,
  onDismiss,
  children
}: {
  isOpen: boolean
  onDismiss: () => void
  children: React.ReactNode
}) {
  const theme = useTheme()

  return (
    <Dialog
      open={isOpen}
      onClose={onDismiss}
      sx={{
        '& *': {
          boxSizing: 'border-box'
        },
        '& .MuiDialog-container ': {
          width: '100%'
        },
        width: '100%'
      }}
      PaperProps={{
        sx: {
          background: `${theme.palette.primary.dark + '70'} ${
            theme.gradient.gradient1
          }`,
          width: {
            xs: '100%',
            sm: '100%'
          },
          margin: { xs: 20, md: '40px' },
          maxWidth: 'unset',
          height: '90vh',
          minHeight: 400
        }
      }}
    >
      {children}
    </Dialog>
  )
}
