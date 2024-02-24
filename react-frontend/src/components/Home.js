import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Meme from './Meme';

function Home() {
  return (
    <div className="Home">
      <body className='hcenter'>
        <Row fluid>
          <Col md="auto">
            <h1>The Ultimate Meme Generator</h1>
          </Col>
          <Col className='mt-1'>
            <Button variant="primary" as={Link} to={'/editor'}>Create Meme</Button>{' '}
          </Col>
        </Row>
        <Row md="auto">
          <Meme></Meme>
          <Meme></Meme>
          <Meme></Meme>
          <Meme></Meme>
          <Meme></Meme>
          <Meme></Meme>
        </Row>
      </body>
    </div>
  );
}

export default Home;