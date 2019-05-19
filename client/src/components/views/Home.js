import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <div style={styles.Cardholder} className="card-box">
                    <Card style={styles.Card} className="seeking">
                        <Card.Body style={styles.Cardbody}>
                        <h3>I want to request goods.</h3>
                        </Card.Body>
                    </Card>
                    <Card style={styles.Card} className="giving">
                        <Card.Body style={styles.Cardbody}>
                            <h3>I want to donate goods.</h3>
                        </Card.Body>
                    </Card>
                </div>
            </div>  
        );
    }
}

const styles = {
    Card: {
      width: '350px',
      height: '350px',
      boxShadow: '5px 10px 18px #888888',
      marginTop: '25px',
      backgroundColor: '#dfe3ee',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

    },
    Background: {
        backgroundColor: '	#f7f7f7',
    },
    Cardholder: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        height: '500px'
    },
    Cardbody: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center'
        
    }
}


Home.propTypes = {
    
};

export default Home
