import React from 'react';
import s from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className={s.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
