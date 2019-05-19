import React from 'react';
import {Image} from 'react-bootstrap'

const Comment = (props)=> {

        return (
            <div style = {styles.comment}>
                <div style = {styles.usernameArea}>
                    <Image style = {styles.image} src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" roundedCircle />
                    <div style = {styles.username}>
                        <div>
                            {'Username'}
                        </div>
                        <div>
                            {'Date'}
                        </div>

                    </div>
                </div>
                <div>
                    {props.comment.text}
                </div>
            </div>
        );
}

const styles = {
    comment: {
        borderBottom: '1px solid rgba(0,0,0,.25)',
        padding: '1vw',
        margin:'10px'
    },
    usernameArea: {
        display: 'flex',
        marginBottom: '2vw'
    },
    username:{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    image:{
        width:'50px',
        height:'50px',
        marginRight:'1vw',
    }
}

export default Comment
