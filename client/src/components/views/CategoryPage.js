import React from 'react';
import PropTypes from 'prop-types';

class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            category: window.location.pathname.slice(10)
        }
    }

    componentDidUpdate(prevState){
        if (this.props.match.params.categoryType !== prevState.match.params.categoryType){
            this.setState({
                category: this.props.match.params.categoryType
            })
        }
    }

    render() {
        return (
            <div style = {styles.title}>
                {this.state.category}
            </div>
        );
    }
}

const styles = {
    title: {
        fontSize: '3em',
        display: 'flex',
        justifyContent: 'center'
    }
}

export default CategoryPage
