import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// ACTIONS
import {
  getSummary,
  getConfirmed,
  getRecovered,
  getDeaths
} from '../../actions/covid';
// COMPONENTS
import Layout from './Layout';
import Spinner from './Spinner';
// REACT-BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Table from 'react-bootstrap/Table';

const HomePage = ({
  getSummary,
  getConfirmed,
  getRecovered,
  getDeaths,
  covid: { summary, confirmed, recovered, deaths, loading }
}) => {
  useEffect(() => {
    getSummary();
    getConfirmed();
    getRecovered();
    getDeaths();
  }, []);

  return (
    <Layout
      title={`COVID19 en Mexico`}
      description={`Enterate de las ultimas estadisticas conforme a esta exagerada situacion en la que vivimos`}
      sectionClass={`mb-3`}
      containerClass={`container-fluid`}
    >
      {loading || !summary || !confirmed || !recovered || !deaths || summary == [] || confirmed == [] || recovered == [] || deaths == [] ? (
        <Spinner />
      ) : (
        <>
        <section className={`mb-3`}>
        <h2 className={`text-center`}>Estadisticas en Mexico</h2>
          <Row>
          <Col xl={`3`} sm={`3`}>
            <Card className={`mb-3`}>
              <Card.Header>Casos Activos</Card.Header>
              <Card.Body>
              {(confirmed && confirmed.length > 0 && confirmed[confirmed.length - 1].Cases) - (recovered && recovered.length > 0 && recovered[recovered.length - 1].Cases) - (deaths && deaths.length > 0 && deaths[deaths.length - 1].Cases)}
              </Card.Body>
            </Card>
          </Col>

          <Col xl={`3`} sm={`3`}>
            <Card className={`mb-3`}>
              <Card.Header>Casos Confirmados</Card.Header>
              <Card.Body style={{ overflow: 'auto' }}>
                {confirmed && confirmed.length > 0 && confirmed[confirmed.length - 1].Cases}
              </Card.Body>
            </Card>
            </Col>
            <Col xl={`3`} sm={`3`}>
            <Card className={`mb-3`}>
              <Card.Header>Casos Recuperados</Card.Header>
              <Card.Body style={{ overflow: 'auto' }}>
                {recovered && recovered.length > 0 && recovered[recovered.length - 1].Cases}
              </Card.Body>
            </Card>
            </Col>
            <Col xl={`3`} sm={`3`}>
            <Card className={`mb-3`}>
              <Card.Header>Casos de Muerte</Card.Header>
              <Card.Body style={{ overflow: 'auto' }}>
                {deaths && deaths.length > 0 && deaths[deaths.length - 1].Cases}
              </Card.Body>
            </Card>
            </Col>
            <Col xl={`4`} sm={`4`}>
            <Card>
              <Card.Header>Casos Confirmados por Fecha</Card.Header>
              <Card.Body style={{ overflow: 'auto' }} className={`p-0`}>
                <ListGroup variant='flush' style={{ height: '250px' }}>
                  {confirmed && confirmed.length > 0 && confirmed.map((c, i) => (
                    <ListGroup.Item key={i}>
                      {c.Cases} on{' '}
                      <Moment format='YYYY/MM/DD'>{moment.utc(c.Date)}</Moment>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
            <Col xl={`4`} sm={`4`}>
            <Card>
              <Card.Header>Casos Recuperados por Fecha</Card.Header>
              <Card.Body style={{ overflow: 'auto' }} className={`p-0`}>
                <ListGroup variant='flush' style={{ height: '250px' }}>
                  {recovered && recovered.length > 0 && recovered.map((c, i) => (
                    <ListGroup.Item key={i}>
                      {c.Cases} on{' '}
                      <Moment format='YYYY/MM/DD'>{moment.utc(c.Date)}</Moment>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
            <Col xl={`4`} sm={`4`}>
            <Card>
              <Card.Header>Casos de Muerte por Fecha</Card.Header>
              <Card.Body style={{ overflow: 'auto' }} className={`p-0`}>
                <ListGroup variant='flush' style={{ height: '250px' }}>
                  {deaths && deaths.length > 0 && deaths.map((c, i) => (
                    <ListGroup.Item key={i}>
                      {c.Cases} on{' '}
                      <Moment format='YYYY/MM/DD'>{moment.utc(c.Date)}</Moment>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </section>
        <section>
        <h2 className={`text-center`}>Estadisticas Universales</h2>
        <Row>
          <Col xl={`12`}>
            <Card className={`mb-3`}>
              <Card.Header>Mapa Mundial</Card.Header>
              <Card.Body className={`p-0`}>
                <ResponsiveEmbed aspectRatio="21by9">
                  <iframe  frameBorder={`0`} scrolling={`0`} marginHeight={`0`} marginWidth={`0`} title={`2019-nCoV`} src={`//gisanddata.maps.arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=23.6345,11.535,102.552,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=false&theme=light`}></iframe>
                  </ResponsiveEmbed>
              </Card.Body>
            </Card>
            </Col>
            <Col xl={`4`} sm={`4`}>
            <Card className={`mb-3`}>
              <Card.Header>Casos Mundiales Confirmados</Card.Header>
              <Card.Body>
              {summary && summary.length > 0 && summary.map(c=> c.TotalConfirmed).reduce((prev,next)=> prev+next)}
              </Card.Body>
            </Card>
          </Col>
          <Col xl={`4`} sm={`4`}>
            <Card className={`mb-3`}>
              <Card.Header>Casos Mundiales Recuperados</Card.Header>
              <Card.Body>
              {summary && summary.length > 0 && summary.map(c=> c.TotalRecovered).reduce((prev,next)=> prev+next)}
              </Card.Body>
            </Card>
          </Col>
          <Col xl={`4`} sm={`4`}>
            <Card className={`mb-3`}>
              <Card.Header>Casos Mundiales de Muertes</Card.Header>
              <Card.Body>
              {summary && summary.length > 0 && summary.map(c=> c.TotalDeaths).reduce((prev,next)=> prev+next)}
              </Card.Body>
            </Card>
          </Col>
            <Col xl={`12`}>
            <Card className={`mb-3`}>
              <Card.Header>Casos en todo el Mundo</Card.Header>
              <Card.Body style={{ height: '500px', overflow: 'auto' }} className={`p-0`}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Ciudad</th>
                      <th>Nuevos Casos Confirmados</th>
                      <th>Casos Confirmados Totales</th>
                      <th>Nuevos Casos Recuperados</th>
                      <th>Casos Recuperados Totales</th>
                      <th>Nuevos Casos de Muerte</th>
                      <th>Casos de Muerte Totales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summary && summary.length > 0 && summary.map((c, i) => (
                      <tr key={i}>
                        <td>{c.Country}</td>
                        <td>{c.NewConfirmed}</td>
                        <td>{c.TotalConfirmed}</td>
                        <td>{c.NewRecovered}</td>
                        <td>{c.TotalRecovered}</td>
                        <td>{c.NewDeaths}</td>
                        <td>{c.TotalDeaths}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Ciudad</th>
                      <th>Nuevos Casos Confirmados</th>
                      <th>Casos Confirmados Totales</th>
                      <th>Nuevos Casos Recuperados</th>
                      <th>Casos Recuperados Totales</th>
                      <th>Nuevos Casos de Muerte</th>
                      <th>Casos de Muerte Totales</th>
                    </tr>
                  </tfoot>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </section>
        </>
      )}
    </Layout>
  );
};

HomePage.propTypes = {
  getSummary: PropTypes.func.isRequired,
  getConfirmed: PropTypes.func.isRequired,
  getRecovered: PropTypes.func.isRequired,
  getDeaths: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  covid: state.covid
});

export default connect(mapStateToProps, {
  getSummary,
  getConfirmed,
  getRecovered,
  getDeaths
})(withRouter(HomePage));
