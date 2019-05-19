import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class TabPanePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            category: window.location.pathname.slice(10),
            key: 'requests'
        }
    }

    // componentDidUpdate(prevState){
    //     if (this.props.match.params.categoryType !== prevState.match.params.categoryType){
    //         this.setState({
    //             category: this.props.match.params.categoryType
    //         })
    //     }
    // }

    render() {
        return (
            <div className="tabpane-box">
              <Container style={styles.Container}>
                <Row>
                  <Col>
                    <Card style={styles.Card}>
                      <Card.Img style={styles.Image} variant="top" src="https://www.everythingcamper.com/v/vspfiles/photos/CE_T7-3.jpg" />
                      <Card.Body style={{padding: '10px'}}>
                        <Card.Title>Mens Blue T-Shirt</Card.Title>
                        <Card.Text style={styles.CardText}>Size Large and barely worn</Card.Text>
                        <div style={styles.ButtonBox} className="button-box">
                        <LinkContainer to = '/item/12345'>
                          <Button style={{fontSize: '14px'}} variant="primary">More Details</Button>
                        </LinkContainer>
                        </div>
                      </Card.Body>
                    </Card> 
                  </Col>
                  <Col>
                    <Card style={styles.Card}>
                      <Card.Img style={styles.Image} variant="top" src="http://www.rosevictorian.com/wp-content/uploads/2018/01/blue-j-brand-carolina-super-high-rise-jeans-womens-jeans-blue.jpg" />
                      <Card.Body style={{padding: '10px'}} >
                        <Card.Title>Women's Jeans</Card.Title>
                        <Card.Text style={styles.CardText}>Size 10, like new by JJ Jeans</Card.Text>
                        <div style={styles.ButtonBox} className="button-box">
                          <LinkContainer to = '/item/12345'>
                            <Button style={{fontSize: '14px'}} variant="primary">More Details</Button>
                          </LinkContainer>                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={styles.Card}>
                      <Card.Img style={styles.Image} variant="top" src="https://cdn10.bigcommerce.com/s-e6hs92zf/products/764/images/2552/Mens-Solid-T-Shirt-Sea-Foam__60941.1465330545.600.600.jpg?c=2" />
                      <Card.Body style={{padding: '10px'}}>
                        <Card.Title>Teal T-Shirt</Card.Title>
                        <Card.Text style={styles.CardText}>Men's size Medium</Card.Text>
                        <div style={styles.ButtonBox} className="button-box">
                        <LinkContainer to = '/item/12345'>
                          <Button style={{fontSize: '14px'}} variant="primary">More Details</Button>
                        </LinkContainer>                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={styles.Card}>
                      <Card.Img style={styles.Image} variant="top" src="https://shop.r10s.jp/i-tama/cabinet/wada-1/04218225/imgrc0065411563.jpg" />
                      <Card.Body style={{padding: '10px'}}>
                        <Card.Title>Red Heels</Card.Title>
                        <Card.Text style={styles.CardText}>Tory Birch Size 7</Card.Text>
                        <div style={styles.ButtonBox} className="button-box">
                        <LinkContainer to = '/item/12345'>
                          <Button style={{fontSize: '14px'}} variant="primary">More Details</Button>
                        </LinkContainer>                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
           
            
          </div>
        
        );
    }
}

 
const styles = {
    Container: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center'
    },
    Card: {
      width: '225px',
      height: '300px',
      boxShadow: '5px 10px 18px #888888',
      marginTop: '25px'

    },
    Image: {
      width: '160px',
      height: '145px',
      margin: '0 30px',
      justifySelf: 'center'
    },
    ButtonBox: {
      display: 'flex',
      flexDirection: 'row-reverse',
      position: 'relative',
      bottom: '-20px'
    },
    CardText: {
      textOverflow: 'ellipsis',
      whiteSpace: 'noWrap',
      overflow: 'hidden'
    }

}

export default TabPanePage
