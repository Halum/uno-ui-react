const suits = [
  {color: 'red', x: 49, y: 32},
  {color: 'yellow', x: 49, y: 228},
  {color: 'green', x: 49, y: 424},
  {color: 'blue', x: 49, y: 620}
];
const symbols = [ 'skip', 'reverse', '2+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const wildColors = ['any', 'red', 'yellow', 'green', 'blue'];
const wildTypes = [
  {color: 'any', symbol: 'wild', x: 49, y: 816},
  {color: 'any', symbol: '4+', x: 749, y: 816},
  {color: 'any', symbol: 'cover', x: 1449, y: 816}
];
const spriteDimentions = {width: 130, height: 181};
const spriteGap = 140;

class CardSpriteMap {
  constructor() {
    this.spriteMap = {};
    this.generateSpriteData();
  }

  get data() {
    return Object.freeze(this.spriteMap);
  }

  generateSpriteData() {
    this.generateSuites();
    this.generateWildTypes()
  }

  generateWildTypes() {
    for(let sprite of wildTypes) {
      if(['wild', '4+'].includes(sprite.symbol)) {
        for(let i=0; i<wildColors.length; ++i) {
          const color = wildColors[i];
          const spriteData = {
            ...sprite,
            ...spriteDimentions,
            color
          }
          if(i) {
            spriteData.x += spriteGap * i;
          }
      
          this.spriteMap[color + sprite.symbol] = spriteData;
        }
      } else {
        this.spriteMap[sprite.color + sprite.symbol] = {...sprite, ...spriteDimentions};
      }
    }
  }

  generateSuites() {
    for(let suit of suits) {
      for(let i=0; i<symbols.length; ++i) {
        const symbol = symbols[i];
        const sprite = {
          ...suit,
          ...spriteDimentions,
          symbol
        }
        if(i) {
          sprite.x += spriteGap * i;
        }
    
        this.spriteMap[suit.color + symbol] = sprite;
      }
    }
  }
}



const spriteMap = new CardSpriteMap();

export default spriteMap.data;