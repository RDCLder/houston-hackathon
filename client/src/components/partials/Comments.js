import React from 'react';
import Comment from './Comment'
import { Card, Form, Button } from 'react-bootstrap'


const Comments = (props) => {
    let allComments = props.comments.map(comment => {
        return <Comment comment={comment} />
    })

    return (
        <div style={styles.cardStyle}>
            <h1 style={styles.commentTitle}>Comments</h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <div style = {styles.submitStyle}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
            <Card>
                {allComments}
            </Card>
        </div>

    );

}

const styles = {
    commentTitle: {
        textAlign: 'center'
    },
    cardStyle: {
        width: '60vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    submitStyle: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom:'3vh'
    }
}


export default Comments
