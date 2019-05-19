import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div tyle={styles.Background}>
              <div style={styles.Cardholder} className="card-box">
                <Container style={styles.Container}>
                  <Row>
                    <Col>
                      <Card style={styles.Card} className="seeking">
                        <Card.Body style={styles.Cardbody}>
                        <h3>I want to request goods.</h3>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={styles.Card} className="giving">
                        <Card.Body style={styles.Cardbody}>
                            <h3>I want to donate goods.</h3>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={styles.Card} className="browsing">
                        <Card.Body style={styles.Cardbody}>
                          <h3>I want to browse donated goods.</h3>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>  
        );
    }
}

const styles = {
    Card: {
      width: '250px',
      height: '250px',
      boxShadow: '5px 10px 18px #888888',
      marginTop: '25px',
      backgroundColor: '#dfe3ee',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

    },
    Background: {
        backgroundColor: '	#f7f7f7',
        // margin: '40px'
    },
    Cardholder: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: '500px',
        margin: '40px'
       
    },
    Cardbody: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center'
        
    },
    Container: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
       
    },
}


Home.propTypes = {
    
};

export default Home
