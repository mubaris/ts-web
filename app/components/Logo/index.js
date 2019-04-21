/**
 *
 * Logo
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Logo = props => (
    <svg width={120} height={120} fill="none" {...props}>
      <path
          d="M90 20H30c-5.523 0-10 4.477-10 10v60c0 5.523 4.477 10 10 10h60c5.523 0 10-4.477 10-10V30c0-5.523-4.477-10-10-10z"
          fill="#16161D"
      />
      <path
          d="M41.6 31.8a5 5 0 0 0-10 0V35a5 5 0 0 0 10 0v-3.2z"
          fill="#FF4D4D"
      />
      <path d="M88.8 85a5 5 0 0 0-10 0v3.2a5 5 0 0 0 10 0V85z" fill="#50E3C2" />
      <path
          d="M65.2 31.8a5 5 0 0 0-10 0v16.4a5 5 0 1 0 10 0V31.8z"
          fill="#2CBE4E"
      />
      <path
          d="M65.2 71.8a5 5 0 0 0-10 0v16.4a5 5 0 1 0 10 0V71.8z"
          fill="#F7BA54"
      />
      <path d="M41.6 58.2a5 5 0 0 0-10 0v30a5 5 0 0 0 10 0v-30z" fill="#0076FF" />
      <path d="M88.8 31.8a5 5 0 0 0-10 0v30a5 5 0 0 0 10 0v-30z" fill="#D400FF" />
    </svg>
);

Logo.propTypes = {};

export default Logo;
