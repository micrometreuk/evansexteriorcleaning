import { Container, Row, Card, Button } from "react-bootstrap";

export function DriveWayHero() {
    return (
        <div className="drive-container">
            <div className="drive-main">
                <div className="drive-grid">
                    <div className="drive-heading">
                        <h1 className="drive-title">
                            Professional exterior cleaning services.
                        </h1>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .drive-container {
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-image: linear-gradient(
                            rgba(0, 0, 0, 0.3),
                            rgba(0, 0, 0, 0.2)
                        ),
                        url(./images/5.webp);
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    align-items: center;
                    width: 100%;
                    min-height: 58vh;
                    min-width: 42vh;
                }

                .drive-main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .drive-grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 3rem;
                }
                .drive-title {
                    padding: 3;
                    margin: 5;
                    font-weight: 400;
                    font-size: 80px;
                    font-weight: bolder;
                    line-height: 1em;
                    color: #fff;
                }

                @media (max-width: 600px) {
                    .drive-title {
                        font-size: 50px;
                    }
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
}

export function Driveway() {
    return (
        <div className="driveway">
            <DriveWayHero />
        </div>
    );
}

export default Driveway;
