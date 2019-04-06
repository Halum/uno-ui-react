// these valuse are from Bootsrtap 4
// https://getbootstrap.com/docs/4.0/layout/grid/#grid-options
const EXTRA_LARGE_SCREEN_WIDTH = 1200;
const LARGE_SCREEN_WIDTH = 992;
const MEDIUM_SCREEN_WIDTH = 768;
const SMALL_SCREEN_WIDTH = 576;

const Utils = {
  screenMultiplier() {
    const width = window.innerWidth;

    if(width >= EXTRA_LARGE_SCREEN_WIDTH) {
      return 0.9;
    } else if(width >= LARGE_SCREEN_WIDTH) {
      return 0.8;
    } else if(width >= MEDIUM_SCREEN_WIDTH) {
      return 0.65;
    } else if(width >= SMALL_SCREEN_WIDTH) {
      return 0.48;
    }
  }
};

export default Utils;