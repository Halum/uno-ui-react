const EXTRA_LARGE_SCREEN_WIDTH = 1900;
const LARGE_SCREEN_WIDTH = 1600;
const MEDIUM_SCREEN_WIDTH = 1300;
const SMALL_SCREEN_WIDTH = 640;

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
  },

  canPlay(deskCard, card) {
    const wildTypes = ['wild', '4+'];
    return (card.color === deskCard.color || card.symbol === deskCard.symbol || wildTypes.includes(card.symbol));
  }
};

export default Utils;