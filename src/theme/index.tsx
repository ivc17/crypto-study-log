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
    header: '100px',
    mobileHeader: '67px',
    footer: '60px'
  },
  width: {
    sidebar: '250px',
    maxContent: '1440px',
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
    default: '#000000',
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
      // html: {
      //   maxWidth: '100%',
      //   overflowX: 'hidden'
      // },
      body: {
        backgroundColor: '#000000',
        fontSize: 16,
        maxWidth: '100%',
        // overflow: 'auto!important',
        // overflowX: 'hidden',
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
        borderRadius: 0,
        transition: '.3s',
        textTransform: 'none' as const,
        width: 'max-content',
        height: 60,
        fontSize: 16,
        fontWeight: 500
      },
      contained: {
        color: '#000000',
        background: '#ffffff',
        boxShadow: 'unset',
        padding: '0 40px',
        '&:hover': {
          boxShadow: 'unset',
          background: `#ffffff ${themeConstants.gradient.gradient2}`
        },
        '&:active': {
          boxShadow: 'unset',
          background: `#ffffff themeConstants.gradient.gradient3}`
        },
        '&:disabled': {
          boxShadow: 'unset',
          background: palette.action.disabledBackground,
          color: palette.text.disabled
        }
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: palette.primary.light,
        color: palette.primary.light,
        '&:hover, :active': {
          backgroundColor: 'transparent',
          borderColor: '#ffffff',
          color: '#ffffff'
        },
        '&:disabled': {
          opacity: palette.action.disabledOpacity
        }
      },
      text: {
        backgroundColor: 'transparent',
        color: '#ffffff',
        fontWeight: 500,
        '&:hover, :active': {
          backgroundColor: 'transparent',
          color: '#aaaaaa',
          opacity: 1
        }
      },
      textPrimary: {
        color: '#ffffff',
        '&:hover, :active': {
          color: '#aaaaaa'
        }
      }
    }
  }
})

const FONTS = {
  title:
    "Helvetica, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
  content:
    "Helvetica, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif"
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
