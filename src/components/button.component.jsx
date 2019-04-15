import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  content,
  onClick,
  className,
  wrapperClassName
}) => (
  <span className={wrapperClassName}>
    <button className={`btn ${className}`} onClick={onClick} type="button">
      {content}
    </button>
  </span>
)

Button.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string
};

export default Button;