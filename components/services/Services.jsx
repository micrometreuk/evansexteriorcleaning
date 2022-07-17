import { Container, Row, Card } from "react-bootstrap";

export default function Services() {
    return (
        <div className="services">
            <Container className="md-container">
                <Container className="md-container">
                    <Card className="mml-card ">
                        <Card.Body>
                            <Card.Title>
                                <h1 className="display-1 text-center">
                                    Services we offer
                                </h1>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Container className="md-container">
                        <Row className="justify-content-md-between">
                            <Card className="sml-card">
                                <Card.Body>
                                    <Card.Title>
                                        <p className="description">
                                            Pressure washing, Driveways, and
                                            Pathways.
                                        </p>
                                    </Card.Title>
                                    <div className="pwashing">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="sml-card">
                                <Card.Body>
                                    <Card.Title>
                                        <p className="description">
                                            Patios, Linchen/Black spot removal,
                                            and Wall cleaning.
                                        </p>
                                    </Card.Title>

                                    <div className="patio">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="sml-card">
                                <Card.Body>
                                    <Card.Title>
                                        <p className="description">
                                            Soft washing, Decking and Garden
                                            furniture cleaning.
                                        </p>
                                    </Card.Title>
                                    <div className="decking">
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </Container>
            </Container>
            <style jsx>{`
                .pwashing {
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-image: linear-gradient(
                            rgba(0, 0, 0, 0.3),
                            rgba(0, 0, 0, 0.2)
                        ),
                        url(./images/11.webp);
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    min-height: 32vh;
                    min-width: 30vh;
                }
                .patio {
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-image: linear-gradient(
                            rgba(0, 0, 0, 0.3),
                            rgba(0, 0, 0, 0.2)
                        ),
                        url(./images/6.webp);
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    min-height: 32vh;
                    min-width: 30vh;
                }

                .decking {
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-image: linear-gradient(
                            rgba(0, 0, 0, 0.3),
                            rgba(0, 0, 0, 0.2)
                        ),
                    url(./images/1.webp);
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    min-height: 32vh;
                    min-width: 30vh;
                }

                .drivemain {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 3rem;
                }
                .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }
                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }
                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
}
