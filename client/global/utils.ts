import { css } from 'styled-components';
import { em } from 'polished';

export const breakpoints = {
  lg: 960,
  md: 768,
  sm: 667,
  xl: 1024,
  xs: 480,
  xxl: 1440,
  xxs: 375,
  xxxl: 1950,
  xxxs: 320,
};

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units
const bpSize = (value, breakpoints) => {
  if (breakpoints[value] != null) {
    return toEms(breakpoints[value]);
  }

  if (isPx(value)) {
    return toEms(value);
  }

  return '0em';
};

export const toEms = (value: string | number): string => em(value);

export const isPx = (value: string | number): boolean => {
  return value.toString().indexOf('px') > -1;
};

export const media = {
  between: (fbp: string, sbp: string) => (...args: Object[]) => css`
    @media (min-width: ${bpSize(fbp, breakpoints)}) and (max-width: ${bpSize(
        sbp,
        breakpoints
      )}) {
      ${
        // @ts-ignore
        css(...args)
      }
    }
  `,
  down: Object.keys(breakpoints).reduce((acc, label) => {
    const size = toEms(breakpoints[label] - 1);
    acc[label] = (...args: Object[]) => css`
      @media (max-width: ${size}) {
        ${
          // @ts-ignore
          css(...args)
        }
      }
    `;
    return acc;
  }, {}),
  greaterThan: (bp: string) => (...args: Object[]) => css`
    @media (min-width: ${bpSize(bp, breakpoints)}) {
      ${
        // @ts-ignore
        css(...args)
      }
    }
  `,
  lessThan: (bp: string) => (...args: Object[]) => css`
    @media (max-width: ${bpSize(bp, breakpoints)}) {
      ${
        // @ts-ignore
        css(...args)
      }
    }
  `,
  up: Object.keys(breakpoints).reduce((acc, label) => {
    const size = toEms(breakpoints[label]);
    acc[label] = (...args: Object[]) => css`
      @media (min-width: ${size}) {
        ${
          // @ts-ignore
          css(...args)
        }
      }
    `;
    return acc;
  }, {}),
};
