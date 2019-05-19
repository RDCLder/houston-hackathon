import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, TabContainer } from 'react-bootstrap';
import TabPanePage from './TabPane';

class CategoryPage extends React.Component {
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
        console.log(this.props.match.params.categoryType)
        return (
            <div className="category-box">
              <div style = {styles.title}>
                {this.state.category}
              </div>
              <TabContainer className="tabs-container" style={styles.tabContainer}>
                <Tabs id="category-tab" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
                    <Tab eventKey="requests" title="Requests">
                        <TabPanePage/>
                    </Tab>
                    <Tab eventKey="donation" title="Donations">
                      <TabPanePage/>
                    </Tab>
                </Tabs>
              </TabContainer>
            </div>
        
        );
    }
}

const styles = {
    title: {
        fontSize: '3em',
        display: 'flex',
        justifyContent: 'center',
    },
    tabContainer: {
        display: 'flex',
        justifyContent: 'left',
        margin: '20px',
    
    }

}

export default CategoryPage
