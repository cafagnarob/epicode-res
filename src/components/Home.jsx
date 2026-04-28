import { Container, Row, Col, Carousel } from "react-bootstrap"
const Home = function () {
  return (
    <Container>
      <Row className="mt-3">
        <Col className="text-center">
          {/* sarebbe come dire <div className='col-12' className='col-md-6'></div> */}
          <h1>EPICODE RESTAURANT</h1>
          <h3>Le migliore paste</h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} lg={8}>
          <Carousel>
            <Carousel.Item>
              <img src="https://placecats.com/600/700" alt="Gatto" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://placecats.com/600/700" alt="Gatto" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://placecats.com/600/700" alt="Gatto" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}
export default Home
