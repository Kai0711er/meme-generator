// MemeDetail.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Meme = ({ meme, onNext, onPrev }) => {

    meme = {
        title: 'Meme Title',
        description: 'Meme Description'
    }

    if (!meme) {
        return <div>Meme not found!</div>;
    }

    return (
        <Card className='m-2' style={{ width: '16rem' }}>
        <Card.Img className='mt-2' variant="top" src="https://placehold.co/400x400" />
        <Card.Body>
            <Card.Title><h2>{meme.title}</h2></Card.Title>
            <Card.Text>
                <p>{meme.description}</p>
            </Card.Text>
            <Button variant="primary" as={Link} to={'/detail'}>Detail</Button>{' '}
        </Card.Body>
        </Card>
    );
};

export default Meme;
