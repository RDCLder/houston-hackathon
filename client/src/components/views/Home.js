import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div class = 'background'>
                <h1>Donations Hook Up</h1>
                <div class = 'searchBox'>
                    <div class = 'box'>
                        <h2>I want to donate.</h2>
                        <form class='donate'>
                            Zip Code: <input type = 'number' class = 'zipCode' name ='donate_zip_code'></input>
                            Within Miles:  <input type = 'number' class = 'miles' name = 'donate_miles'></input>                       
                            <input type='submit' name = 'donate_submit' value = 'Search'></input>
                        </form>
                    </div>
                    <div class='box'>
                        <h2>Seek donated goods.</h2>
                        <form class='request'>
                            Zip Code: <input type='number' class='zipCode' name = 'request_zip_code'></input>
                            Within Miles:  <input type='number' class='request_miles'></input>
                            <input type='submit' name='request_submit' value='Search'></input>
                        </form>
                    </div>
                </div>
            </div>  
        );
    }
}


Home.propTypes = {
    
};

export default Home
