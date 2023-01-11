import { Container, Row, Col, Popover, OverlayTrigger } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const popover = (
  <Popover id='popover-basic'>
    <Popover.Header as='h3'>Hi, I'm Devon</Popover.Header>
    <Popover.Body>
      A versatile software engineer entrepreneur passionate about helping others
      live better lives by creating environments that encourage creativity and
      innovation.
      <br />
      <hr />
      Connect with me on{' '}
      <a
        href='https://www.linkedin.com/in/devon-fazekas'
        target='_blank'
        rel='noreferrer'
      >
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
        <h1 style={{ fontSize: '50px' }}>Tic Tac Toe</h1>
      </Row>

      <Row className='mt-3'>
        <Col md={6} sm={12} className='d-grid mb-2'>
          <Link className='btn btn-primary btn-lg' to='single-player'>
            1 player
          </Link>
        </Col>
        <Col md={6} sm={12} className='d-grid mb-2'>
          <Link
            className='btn btn-outline btn-outline-primary btn-lg'
            role='button'
            to='multi-player'
          >
            2 players
          </Link>
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
              <b>
                <u>Devon Fazekas</u>
              </b>
            </OverlayTrigger>
          }
        </p>
      </Row>
    </Container>
  )
}
