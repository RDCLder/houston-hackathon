import React from 'react';
import { Navbar, Form, FormControl, Button, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: ['Appliances', 'Books', 'Furniture']
        };
    }

    render() {
        // var categoryList = this.state.categories.map(category => {
        //     return (
        //         <LinkContainer key = {category} to = {`/category/${category}`}>
        //                 <NavDropdown.Item > {category} </NavDropdown.Item>
        //         </LinkContainer>
        //     )
        // });

        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/categories">
                            <Nav.Link>Categories</Nav.Link>
                        </LinkContainer>
                        {/* <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            {categoryList}
                        </NavDropdown>                         */}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default NavBar
