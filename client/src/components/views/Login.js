import React from 'react';
import { Form, Button, Card } from 'react-bootstrap'

class Login extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div style = {{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', height:'80vh'}}>
            <Card style = {{padding: '30px'}}>
            <h1 style = {{marginBottom: '10vh', display:'flex', justifyContent:'center'}}>
                Login to Donation Exchange
            </h1>
            <Form style = {{width:'50vw'}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div style = {{display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button style ={{background:'#3b5998'}} type="submit">
                        Log In
                    </Button>
                    <Button style ={{background:'#3b5998', marginTop:'5px'}} href="/register" >
                        Register
                    </Button>
                </div>
            </Form>
            </Card>
            </div>
        );
    }
}


export default Login
