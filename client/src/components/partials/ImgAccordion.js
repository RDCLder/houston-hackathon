import React from 'react';
import PropTypes from 'prop-types';

const ImgAccordion = (props) => {
    var imgs = props.imgs.map(image=>{
        return <img style = {styles.imgStyle} src = {image} onClick= {()=>{props.imgChange(image)}}/>
    })
        return (
            <div style = {styles.accordionStyle}>
                {imgs}
            </div>
        );

}

const styles = {
    imgStyle: {
        height:'10vw',
        width:'10vw',
        margin: '2vw'
    },
    accordionStyle: {
        marginTop: '3vh'
    }
}

export default ImgAccordion
