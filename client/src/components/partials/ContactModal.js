import React from 'react';
import {Modal,Button, Image} from 'react-bootstrap'; 

class ContactModal extends React.Component {
    constructor(props, context) {
        super(props, context);

    }


    render() {
        return (
            <>
                <Modal centered show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Username</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style = {styles.card}>
                        <div style = {{borderRight:'solid 1px lightgray'}}>
                            <Image style = {styles.image} src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" roundedCircle />
                        </div>
                        <div style = {styles.contactInfo}>
                            <div>
                                E-mail:
                            </div>
                            <div>
                                Phone Number:
                            </div>
                            <div>
                                Zip Code:
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

const styles = {
    image:{
        width:'100px',
        height:'100px',
        marginRight:'1vw',
    },
    card:{
        display:'flex',
    },
    contactInfo: {
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        marginLeft: '1vw'
    }
}

export default ContactModal
