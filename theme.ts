'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colors: {
    // You can customize or extend these named palettes
    electric: [
      '#f2e7ff',
      '#dab8ff',
      '#c18aff',
      '#a95cff',
      '#9D4EDD', // main electric purple
      '#7a3db0',
      '#582c82',
      '#361b54',
      '#17092b',
      '#0a0314',
    ],
    amber: [
      '#fff5e5',
      '#ffe6b8',
      '#ffd78a',
      '#fec260', // main accent amber
      '#e0a94a',
      '#c28f35',
      '#a57520',
      '#875b0d',
      '#694300',
      '#4c2d00',
    ],
    stage: [
      '#f5f7ff',
      '#dce1f1',
      '#c3cbe2',
      '#a9b5d4',
      '#909fc6',
      '#7789b8',
      '#5d73aa',
      '#445c9c',
      '#2a468e',
      '#113080',
    ],
  },

  primaryColor: 'electric',

  defaultRadius: 'md',

  primaryShade: 4,

  fontFamily: 'Inter, sans-serif',

  headings: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '700',
  },

  components: {
    Button: {
      styles: () => ({
        root: {
          fontWeight: 600,
        },
      }),
    },
  },
});