import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  content,
  onClick
}) => (
  <button onClick={onClick}>{content}</button>
)

Button.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;