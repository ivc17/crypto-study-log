import { CssBaseline } from '@mui/material'
import {
  createTheme,
  styled,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'
export type PaletteMode = 'light' | 'dark'

interface Gradient {
  gradient1: string
  gradient2: string
  gradient3: string
}

interface Height {
  header: string
  mobileHeader: string
  footer: string
}
interface Width {
  sidebar: string
  maxContent: string
  minContent: string
}

declare module '@mui/material/styles' {
  interface Theme {
    gradient: Gradient
    height: Height
    width: Width
  }
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    gradient: Gradient
    height: Height
    width: Width
  }
  interface Theme {
    gradient: Gradient
    height: Height
    width: Width
  }
}

const themeConstants = {
  gradient: {
    gradient1:
      'linear-gradient(0deg, rgba(0, 19, 255, 0) 12.39%, rgba(0, 19, 255, 0.84) 100%);',
    gradient2:
      'linear-gradient(0deg, rgba(0, 19, 255,  0.84) 12.39%, rgba(0, 19, 255, 0) 100%);',
    gradient3:
      'linear-gradient(0deg, rgba(0, 19, 255,  0.84) 44.39%, rgba(0, 19, 255, 0) 100%);'
  },
  height: {
    header: '80px',
    mobileHeader: '67px',
    footer: '60px'
  },
  width: {
    sidebar: '250px',
    maxContent: '1110px',
    minContent: '350px'
  },
  shape: {
    border: '1px solid',
    borderRadius: 10
  },
  spacing: (factor: number) => `${1 * factor}px`
}

export const themeColors = {
  primary: {
    light: '#005bfb',
    main: '#0013ff',
    dark: '#001c84',
    contrastText: '#ffffff'
  },
  secondary: {
    light: '#D2C0CD',
    main: '#005ADC',
    dark: '#00E4DD',
    contrastText: '#1A1C1E'
  },
  error: {
    main: '#FA0E0E',
    light: '#FA0E0E10'
  },
  warning: {
    main: '#F0B90B'
  },
  info: {
    main: '#1F9898'
  },
  success: {
    main: '#31B047'
  },
  background: {
    default: '#050505',
    paper: '#0013ff50',
    secondary: '#484D50'
  },
  text: {
    primary: '#ffffff',
    secondary: '#ffffff70',
    disabled: '#ffffff50'
  },
  action: {
    disabledOpacity: 0.6,
    disabledBackground: '#F7F7F7'
  }
}

export const override: (palette: any) => any & {
  MuiButton: {
    defaultProps: {
      variant: 'text'
    }
  }
} = (palette: any) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: '#050505',
        fontSize: 16,
        overflow: 'auto!important',
        paddingRight: '0px!important'
      },
      'html, input, textarea, button, body': {
        fontFamily: FONTS.content,
        fontDisplay: 'fallback'
      },
      '@supports (font-variation-settings: normal)': {
        'html, input, textarea, button, body': {
          fontFamily: FONTS.content,
          fontDisplay: 'fallback'
        }
      }
    }
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      disableRipple: true
    },
    styleOverrides: {
      root: {
        color: palette.primary.contrastText,
        borderRadius: themeConstants.shape.borderRadius,
        transition: '.3s',
        textTransform: 'none' as const,
        width: '100%',
        height: 60,
        fontSize: 16,
        fontWeight: 500
      },
      contained: {
        background: themeConstants.gradient.gradient1,
        color: palette.primary.contrastText,
        boxShadow: 'unset',
        '&:hover': {
          boxShadow: 'unset',
          background: themeConstants.gradient.gradient2
        },
        '&:active': {
          boxShadow: 'unset',
          background: themeConstants.gradient.gradient3
        },
        '&:disabled': {
          boxShadow: 'unset',
          background: palette.action.disabledBackground,
          color: palette.text.disabled
        }
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: palette.primary.main,
        color: palette.primary.main,
        '&:hover, :active': {
          backgroundColor: 'transparent',
          borderColor: palette.primary.dark,
          color: palette.primary.dark
        },
        '&:disabled': {
          opacity: palette.action.disabledOpacity
        }
      },
      text: {
        backgroundColor: 'transparent',
        color: palette.primary.main,
        fontWeight: 500,
        '&:hover, :active': {
          backgroundColor: 'transparent',
          color: palette.primary.dark,
          opacity: 1
        }
      },
      textPrimary: {
        color: palette.primary.main,
        '&:hover, :active': {
          color: palette.primary.dark
        }
      }
    }
  }
})

const FONTS = {
  title:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
  content:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif"
}

export const HideOnMobile = styled('div', {
  shouldForwardProp: () => true
})<{ breakpoint?: 'sm' | 'md' }>(({ theme, breakpoint }) => ({
  [theme.breakpoints.down(breakpoint ?? 'sm')]: {
    display: 'none'
  }
}))

export const ShowOnMobile = styled('div', {
  shouldForwardProp: () => true
})<{ breakpoint?: 'sm' | 'md' }>(({ theme, breakpoint }) => ({
  display: 'none',
  [theme.breakpoints.down(breakpoint ?? 'sm')]: {
    display: 'block'
  }
}))

export const theme = createTheme({
  palette: { mode: 'light', ...themeColors },
  ...themeConstants,
  components: {
    ...override(themeColors)
  },
  typography: {
    allVariants: {
      fontFamily: FONTS.content
    }
  }
})

export function ThemeProvider({ children }: any) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </MuiThemeProvider>
  )
}
