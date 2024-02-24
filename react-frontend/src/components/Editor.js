import React, { useState } from 'react';
import { Container, Row, Stack, Form, Button, Image } from 'react-bootstrap';

function Editor() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleGenerate = () => {
    console.log('Meme generieren');
  };

  return (
    <div className="Editor">
      <Container fluid="md">
      <Row>
        <Stack direction="vertical" gap={3}>
            <Form>
            <Form.Group controlId="formMemeText">
            <Form.Label>Meme Text</Form.Label>
            <Form.Control type="text" placeholder="Geben Sie Ihren Meme-Text ein" value={text} onChange={e => setText(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formMemeImage">
            <Form.Label>Meme Bild</Form.Label>
            <Image src={image} fluid />
            <Form.Control type="file" onChange={e => setImage(e.target.files[0])} />
            </Form.Group>
            <Button variant="primary" onClick={handleGenerate}>
            Meme generieren
            </Button>
            </Form>
        </Stack>
      </Row>
    </Container>
    </div>
  );
}

export default Editor;