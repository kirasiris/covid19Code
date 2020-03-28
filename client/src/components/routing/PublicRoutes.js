import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// GLOBALS
import HomePage from '../public/HomePage';
import NotFound from '../public/NotFound';

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
};

PublicRoutes.propTypes = {};

const mapStateToProps = state => ({});

export default connect(null, {})(PublicRoutes);
