import React from 'react';
import PropTypes from 'prop-types';
import CategoryCard from '../partials/CategoryCard';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            categories: ['Appliances', 'Books', 'Furniture']
        }
    }

    render() {
        let cards = this.state.categories.map(category => {
            return <CategoryCard category = {category} key = {category}/>
        })

        return (
            <div>
                <h1 style = {styles.title}>Categories</h1>
                
                <div style = {styles.cards}>
                    {cards}
                </div>
            </div>
        );
    }
}

const styles = {
    title: {
        display: 'flex',
        justifyContent: 'center',
        margin:'3vh'
    },
    cards: {
        display: 'flex',
        justifyContent:'center',
        flexWrap:'wrap'
    }
}


export default Categories
