export function isMobile() {
    if (typeof window !== 'undefined') {
      return (window.innerWidth <= GLOBAL_CONSTANTS.BREAKPOINTS.SMALL);
    }
  }
  
  export function isDesktop() {
    if (typeof window !== 'undefined') {
      return (window.innerWidth >= GLOBAL_CONSTANTS.BREAKPOINTS.SMALL);
    }
  }
  
  export const GLOBAL_CONSTANTS = {
    EVENTS: {
      SCROLL: 'scroll',
      RESIZE: 'resize',
      LAZY_LOADED: 'lazyloaded',
    },
    CLASSES: {
      // State
      ACTIVE: '-active',
      BOTTOM: '-bottom',
      FIXED: '-fixed',
      HOVER: '-hover',
      INACTIVE: '-inactive',
      NO_SCROLL: '-no-scroll',
      VISIBLE: '-visible',
      // Screen Size
      MOBILE: '-mobile',
      DESKTOP: '-desktop',
      // Loading
      // TO_OBSERVE should match the jekyll variable of the same name in /src/_data/globals.yml
      TO_ANIMATE_HEADLINE: '-animate-headline',
      TO_OBSERVE: '-observe',
    },
    // If you change a breakpoint here, make sure to also change breakpoints in /_sass/_vars.scss
    BREAKPOINTS: {
      XSMALL: 420,
      SMALL: 768,
      MEDIUM: 1024,
      LARGE: 1440,
    },
    // Animation timing
    // Any changes here should also be reflected in /_sass/_vars.scss
    ANIMATION_TIMING: {
      SHORT: 150,
      MEDIUM: 300,
      LONG: 700,
    },
  };