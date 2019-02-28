const suits = [
  {color: 'red', x: 49, y: 32},
  {color: 'yellow', x: 49, y: 228},
  {color: 'green', x: 49, y: 424},
  {color: 'blue', x: 49, y: 620},
];
const symbols = [ 'skip', 'reverse', '2+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const wildTypes = [
  {color: 'any', symbol: 'wild', x: 1869, y: 31},
  {color: 'any', symbol: '4+', x: 1869, y: 228},
  {color: 'any', symbol: 'cover', x: 1869, y: 620}
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
      this.spriteMap[sprite.symbol] = {...sprite, ...spriteDimentions};
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