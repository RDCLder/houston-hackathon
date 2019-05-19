import React from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap'

class Register extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh',marginTop:'7vh' }}>
                <Card style={{ padding: '30px' }}>
                    <h1 style={{ marginBottom: '10vh', display: 'flex', justifyContent: 'center' }}>
                        Register
            </h1>
                    <Form style={{ width: '50vw' }}>
                        <Form.Group>
                        <Row>
                            <Col>
                                < Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Label>Last Name</Form.Label>

                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <Button style={{ background: '#3b5998', marginTop: '5px' }} href="/register" >
                                Register
                    </Button>
                        </div>
                    </Form>
                </Card>
            </div>
        );
    }
}


export default Register
