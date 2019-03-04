import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  content,
  onClick,
  className,
}) => (
  <span className="pl-3">
    <button className={`btn ${className}`} onClick={onClick} type="button">
      {content}
    </button>
  </span>
)

Button.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;