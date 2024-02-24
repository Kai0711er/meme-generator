// MemeDetail.js
import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MemeDetail = ({ memes, onNext, onPrev }) => {
  const { memeId } = useParams();

  var meme = {
      title: 'Meme Title',
      description: 'Meme Description',
      imageUrl: 'https://placehold.co/400x400'
  }

  if (!meme) {
    return <div>Meme not found!</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={meme.imageUrl} alt={meme.title} style={{ width: '100%' }} />
        </Col>
        <Col md={6}>
          <h2>{meme.title}</h2>
          <p>{meme.description}</p>
          {/* Add more meme details here */}
          <Button variant="secondary" onClick={onPrev}>
            Previous
          </Button>{' '}
          <Button variant="primary" onClick={onNext}>
            Next
          </Button>
        </Col>
      </Row>
      {/* Add comments section */}
      
    </Container>
  );
};

export default MemeDetail;
