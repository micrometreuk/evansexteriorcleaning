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
export function Map() {
  return (
    <>
      <Container className="md-container" style={{ textDecoration: 'none' }}>
      <Card className="mml-card ">
          <Card.Body>
            <Card.Title>
              <h1 className="display-1 text-center">
                Areas we cover
              </h1>
            </Card.Title>
          </Card.Body>
        </Card>
        <Row className="justify-content-md-between">
          <Card className="mml-card">
            <Card.Body>
              <Card.Text>
                <p className="description ">
                  Esher, Walton on Thames, Weybridge, Claygate, East Molesey, Cobham, Hersham, Oxshott, Thames Ditton, Long Ditton, Stoke D’Abernon, Hinchley Wood, Downside, St Georges Hill, Weston Green, Whiteley Village, Byfleet, West End and Oatlands, Hampton, Hampton Court, Thames Ditton, Long Ditton, Kingston, Surbiton, New Malden, Worcester Park, Wimbledon, Twickenham, St Margarets,  Richmond, Teddington, Sunbury on Thames, Shepperton, Staines, Egham, Virginia Water, Addlestone, Chertsey, Englefield Green, Old Windsor, Staines, Addlestone, New Haw, Purford, West Byfleet.

                </p>
              </Card.Text>
            </Card.Body>
            <Card.Title>
              <h2 className="text-center">
                Contact us for a free no obligation quote
              </h2>
            </Card.Title>
          </Card>
        </Row>
      </Container>
    </>
  );
}




export default Map;