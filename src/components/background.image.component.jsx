import React from 'react';
import PropTypes from 'prop-types';

const BackgroundImageComponent = ({ filename, x, y, width, height, size, multiplier }) => {
  const style = {
    backgroundImage: `url(${filename})`,
    backgroundPosition: `${x * (-1) * multiplier}px ${y * (-1) * multiplier}px`,
    backgroundRepeat: 'no-repeat',
    width: width * multiplier,
    height: height * multiplier,
  };

  if(size && size.width && size.height) {
    const sizeValue = `${size.width * multiplier}px, ${size.height * multiplier}px`;
    style.backgroundSize = sizeValue;
  }

  return <div style={style} />;
}

BackgroundImageComponent.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  multiplier: 1
};

BackgroundImageComponent.propTypes = {
  filename: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.object,
  multiplier: PropTypes.number
};

export default BackgroundImageComponent;