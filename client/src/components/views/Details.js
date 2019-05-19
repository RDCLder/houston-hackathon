import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import ImgAccordion from '../partials/ImgAccordion';
import Comments from '../partials/Comments';
import ContactModal from '../partials/ContactModal'

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show:false,
            productName: 'Fake T-Shirt',
            itemInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            currentImg: 'https://www.winbirri.com/wp-content/uploads/2017/11/product-image-placeholder.jpg',
            imgs: ['http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png','https://via.placeholder.com/300','https://www.winbirri.com/wp-content/uploads/2017/11/product-image-placeholder.jpg'],
            comments:[
                {
                
                    authorID: 12345, 
                    donorID: 11111, 
                    requestID:2222, 
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            
                },
                {
                    authorID: 12346, 
                    donorID: 11111, 
                    requestID:2222, 
                    text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    authorID: 12347, 
                    donorID: 11111, 
                    requestID:2222, 
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ]
        }
    }

    imgClickHandler = (img) => {
        this.setState({
            currentImg: img
        })
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }


    render() {
        return (
            <div>
                <Container style = {{marginTop:'5vh'}}>
                    <Row>
                        <Col md = {7}style = {styles.imageCenter}>
                            <img style={styles.imageSize} src= {this.state.currentImg} />
                            <ImgAccordion imgs = {this.state.imgs} imgChange={this.imgClickHandler}/>
                        </Col>
                        <Col md={5}>
                            <h5>Donor Name</h5>
                            <h3>{this.state.productName}</h3>
                            <Button variant="primary" style = {styles.contactButton} onClick={this.handleShow}>Contact Donor</Button>
                            <div>
                                {this.state.itemInfo}
                            </div>
                        </Col>
                    </Row>
                    <Row style = {styles.centerComments}>
                        <Comments comments ={this.state.comments}/>
                    </Row>
                    <ContactModal handleClose = {this.handleClose} handleShow = {this.handleShow} show = {this.state.show}/>
                </Container>
            </div>
        );
    }
}

const styles = {
    imageSize: {
        height: '30vw',
        width: '30vw',
        border: '1px solid black'
    },
    imageCenter: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column'
    },
    contactButton: {
        width:'100%',
        backgroundColor: '#3b5998'
    },
    centerComments: {
        display: 'flex',
        justifyContent: 'center'
    }
}

export default Details
