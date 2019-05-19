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
                        <img src="https://img.icons8.com/ios/50/000000/volunteering-filled.png"></img>
                        <h3>Request Goods</h3>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={styles.Card} className="giving">
                        <Card.Body style={styles.Cardbody}>
                        <i style={{ fontSize: '52px' }} class="fas fa-hand-holding-heart"></i>
                            <h3>Donate Goods</h3>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={styles.Card} className="browsing">
                        <Card.Body style={styles.Cardbody}>
                        <i style={{ fontSize: '52px' }} class="fas fa-heart"></i>
                          <h3>Browse Goods</h3>
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
      width: '150px',
      height: '150px',
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
        margin: '40px'
       
    },
    Cardbody: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
        
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
