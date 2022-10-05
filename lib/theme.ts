/**
 * This file is just an example of how we might override the theme.
 * Nothing here is really doing much for us, with the exception of
 * `Link`, which is overriden just so we could see links more easily.
 *
 * As I was learning about Chakra and it's design system assuptions,
 * I left some links so that the next person will have a place to
 * get started. Good luck!
 *
 * @Updated (08/19/2022) @newswim
 *
 */

import {
  ComponentStyleConfig,
  extendTheme,
  type ThemeConfig,
  StyleFunctionProps,
  // type Theme, // Uncomment to see the Theme API
  // theme as baseTheme,
} from '@chakra-ui/react'

// baseTheme.colors.messenger[300]

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
  // disableTransitionOnChange: true,
}

export const colors = {
  brand: {
    orange: '#EA6036',
    orangeDark: '#C83E2F',
    gray: '#5D5D5D',
    blue: '#0082DE',
    white: '#FFFFFF',
  },
}

const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
}

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const components = {
  Link: {
    baseStyle: {
      color: colors.brand.orange,
    },
    variants: {
      socialLink: {
        w: 8,
        h: 8,
        rounded: 'full',
        cursor: 'pointer',
        display: 'inline-flex',
      },
    },
  },
  Button: {
    baseStyle: {
      fontSize: fontSizes.sm,
      fontWeight: 600,
      color: 'white',
      transition: 'background 0.3s ease',
    },
    variants: {
      primary: (props: StyleFunctionProps) => ({
        bg:
          props.colorMode === 'light'
            ? colors.brand.orange
            : colors.brand.orangeDark,
        _hover: {
          bg:
            props.colorMode === 'light'
              ? colors.brand.orangeDark
              : colors.brand.orange,
        },
        transition: 'background 0.3s ease',
      }),
      toggle: (props: StyleFunctionProps) => ({
        bg:
          props.colorMode === 'light' ? colors.brand.white : colors.brand.gray,
        _hover: {
          bg:
            props.colorMode === 'light'
              ? colors.brand.gray
              : colors.brand.white,
        },
        transition: 'background 0.3s ease',
      }),
    },
  },
  Stack: {
    baseStyle: {
      spacing: 4,
      direction: 'column',
    },
  },
  Heading: {
    baseStyle: {
      color: colors.brand.orange,
    },
    variants: {
      title: {
        fontSize: fontSizes['6xl'],
        mt: 6,
        justifyContent: 'center',
      },
      section: {
        fontSize: fontSizes['3xl'],
        pt: 8,
      },
      credits: {
        fontSize: fontSizes['3xl'],
        pb: 2,
      },
    },
  },
  Text: {
    baseStyle: {
      fontSize: fontSizes['xl'],
    },
    variants: {
      // footer link header
      flh: {
        fontWeight: '500',
        fontSize: 'lg',
        mb: 2,
      },
      // footer list link
      fll: {
        fontSize: fontSizes['md'],
      },
    },
  },
}

const layerStyles = {
  list: {
    pl: 12,
  },
  'credits-box': {
    pb: 8,
    mb: 8,
  },
  'container-med': {
    maxW: 'container.md',
  },
  'container-wide': {
    maxW: '7xl',
  },
  ns: {
    spacing: 4,
  },
}

/**
 * Note: there are conflicting examples of how to use `extendTheme`, and
 * its docs say that the API is unwiedly. Also, it's really poorly typed.
 *
 * @see https://chakra-ui.com/docs/styled-system/color-mode#updating-the-theme-config
 * @see https://chakra-ui.com/getting-started/nextjs-guide#customizing-theme
 */
export const theme = extendTheme({
  config,
  components,
  layerStyles,
})
