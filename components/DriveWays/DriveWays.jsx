
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="md-container text-white">
      <Container className="md-container">
        <Card className="mml-card text-white">
          <Card.Body>
            <Card.Title>
              <p className="description ">
                Surrey electrical and car charging offer a full electrical service for all domestic and commercial properties. Our fully qualified engineers work to regulation standards in design, installation and niceic certification.
              </p>
            </Card.Title>
          </Card.Body>
        </Card>
        <Container className="md-container">
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>
                  <p className="intro-description">
                    We work a to very high standard and pride ourselves on being 100% honest.
                  </p>
                </Card.Title>
                <Image
                  src="/images/2.webp"
                  alt="About picture"
                  width={498}
                  height={300}
                  priority

                />
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>
                  <p className="intro-description">
                    We are always dependable and time keeping is one of strongest points.
                  </p>
                </Card.Title>

                <Image
                  src="/images/3.webp"
                  alt="About picture"
                  width={498}
                  height={300}
                  priority
                />
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>
                  <p className="intro-description">
                    Care and attention to our clients is something that sets us apart.
                  </p>
                </Card.Title>
                <Image
                  src="/images/2.webp"
                  alt="About picture"
                  width={498}
                  height={300}
                  priority
                />
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Container>

    </Container>
  )
}
