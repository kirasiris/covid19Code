import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// ACTIONS
// HELPERS
// UTILS
// REACTBOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NotFound = () => {
  return (
    <section className='mb-3'>
      <div className='container-fluid m-0 text-center error404'>
        <h1 className='display-3'>404</h1>
        <p className='lead'>Page Not Found</p>
      </div>
    </section>
  );
};

NotFound.propTypes = {};

const mapStateToProps = state => ({});

export default connect(null, {})(withRouter(NotFound));
