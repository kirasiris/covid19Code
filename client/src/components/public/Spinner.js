import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default () => (
  <>
    <div className='d-flex justify-content-center' id='spinner'>
      <Spinner
        animation='border'
        style={{ width: '3rem', height: '3rem' }}
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  </>
);
