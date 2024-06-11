// src/components/LoginLayout.js
import React from 'react';
import PropTypes from 'prop-types';

const LoginLayout = ({ children }) => {
  return (
    <div className="login-layout container-fluid">
      {children}
    </div>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
