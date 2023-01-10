import {
  Button,
  Container,
  Row,
  Col,
  Popover,
  OverlayTrigger
} from 'react-bootstrap'

const popover = (
  <Popover id='popover-basic'>
    <Popover.Header as='h3'>Popover right</Popover.Header>
    <Popover.Body>
      Devon is a versatile software engineer entrepreneur passionate about
      helping others live better lives by creating environments that encourage
      creativity and innovation.
      <br />
      <hr />
      Read more on{' '}
      <a href='https://www.linkedin.com/in/devon-fazekas' target='_blank'>
        LinkedIn
      </a>
      .
    </Popover.Body>
  </Popover>
)

export default function Home() {
  return (
    <Container>
      <Row>
        <h1 style={{ fontSize: '50px' }}>Tic Toc Toe</h1>
      </Row>

      <Row className='mt-3'>
        <Col md={6} sm={12} className='d-grid mb-2'>
          <Button size='lg' href='/single-player' variant='outline-primary'>
            1 player
          </Button>
        </Col>
        <Col md={6} sm={12} className='d-grid mb-2'>
          <Button size='lg' href='/multi-player' variant='outline-primary'>
            2 players
          </Button>
        </Col>
      </Row>

      <Row className='mt-5'>
        <p>
          Made with ♥ by{' '}
          {
            <OverlayTrigger
              rootClose
              trigger='click'
              placement='top'
              overlay={popover}
            >
              <b>Devon Fazekas</b>
            </OverlayTrigger>
          }
        </p>
      </Row>
    </Container>
  )
}
