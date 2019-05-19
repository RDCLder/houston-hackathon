import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, TabContainer } from 'react-bootstrap';
import TabPanePage from './TabPane';
import '../../styles/tabs.css';


class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            category: window.location.pathname.slice(10),
            key: 'requests'
        }
    }


    render() {
        console.log(this.props.match.params.categoryType)
        return (
            <div className="category-box">
              <div className="category-title">
                {this.state.category}
              </div>
              <TabContainer className="tabs-container">
                <Tabs id="category-tab" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
                    <Tab className="rTab" eventKey="requests" title="Requests">
                        <TabPanePage/>
                    </Tab>
                    <Tab className="dTab" eventKey="donation" title="Donations">
                      <TabPanePage/>
                    </Tab>
                </Tabs>
              </TabContainer>
            </div>
        
        );
    }
}

// const styles = {
//     title: {
//         fontSize: '3em',
//         display: 'flex',
//         justifyContent: 'center',
//     },
//     tabContainer: {
//         display: 'flex',
//         justifyContent: 'left',
//         margin: '20px',
    
//     },
//     Tab: {
//         backgroundColor: '#dfe3ee'
//     },
//     Tabs: {
//         border: 'transparent'
//     }

// }

export default CategoryPage
