import { Container, Row, Card, Button } from 'react-bootstrap'
const whybg = {
  padding: "0rem",
  margin: "0rem",
  backgroundImage: "url(/images/logo2.webp)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "600px 600",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

}
export function Contact() {
  return (
    <>
      <Container className="md-container" style={{ textDecoration: 'none' }}>
      <Card className="mml-card ">
          <Card.Body>
            <Card.Title>
              <h1 className="display-1 text-center">
                Why choose us ?
              </h1>
            </Card.Title>
          </Card.Body>
        </Card>
        <Row className="justify-content-md-between">
          <Card className="lml-card">
            <Card.Body>
              <Card.Text>
                <p className="description ">
                  <br/>
 Fully insured
                  <br/>
 Honest and reliable
                  <br/>
 Friendly and trustworthy
                  <br/>
 Efficient
                  <br/>
 Highly experienced
                  <br/>

                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="lml-card text-white">
            <Card.Body >
              <Card.Text style={whybg}>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>

              </Card.Text>
            </Card.Body>
          </Card>



        </Row>
      </Container>
    </>
  );
}




export default Contact;