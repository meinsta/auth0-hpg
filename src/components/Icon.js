import React from 'react';

const url = 'https://meinsta.github.io/auth0-hpg/symbol-defs.svg';

const Icon = (props) => (
  <svg viewBox='0 0 16 16' className={`icon icon-${props.icon} ${props.iconStyle}`}>
    <use xlinkHref={`${url}#icon-${props.icon}`} />
  </svg>
);

export default Icon