import React from 'react';
import PropTypes from 'prop-types';
// REACT-BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = props => {
  return (
    <footer style={{backgroundColor: 'rgba(0,0,0,.03)'}}>
      <Container fluid className={`text-center pt-3 pb-3`}>
        <Row>
          <Col xl={`12`}>
            Hecho por <a href={`https://kevinurielfonseca.com/`} target={`_blank`} rel={`noopener noreferer`}>Kevin</a>. Informacion obtenida de <a href={`https://github.com/CSSEGISandData/COVID-19`} target={`_blank`} rel={`noopener noreferer`}>Novel Coronavirus (COVID-19) Cases, provided by JHU CSSE</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
