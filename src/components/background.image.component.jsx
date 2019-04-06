import React from 'react';
import PropTypes from 'prop-types';

const BackgroundImageComponent = ({ filename, x, y, width, height, size }) => {
  const style = {
    backgroundImage: `url(${filename})`,
    backgroundPosition: `${x * (-1)}px ${y * (-1)}px`,
    backgroundRepeat: 'no-repeat',
    width,
    height,
  };

  if(size && size.width && size.height) {
    const sizeValue = `${size.width}px, ${size.height}px`;
    style.backgroundSize = sizeValue;
  }

  return <div style={style} />;
}

export default BackgroundImageComponent;