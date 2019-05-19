import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../styles/hovestyle.css';

const CategoryCard = (props) => {

    function randDarkColor() {
        var lum = -0.25;
        var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        var rgb = "#",
            c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }
        return rgb;
    }

    let styles = {
        card: {
            height: '30vh',
            width:'30vh',
            margin:'2vh',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: randDarkColor(),
            fontWeight:'bolder'
        }
    }
    console.log(styles.card.backgroundColor)
        return (
            <Link to={`/category/${props.category}`}>
                <Card style={styles.card} className='containerHover'>
                    {props.category.toUpperCase()}
                </Card>
            </Link>
        );
    
}


export default CategoryCard
