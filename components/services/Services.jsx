export function ServicesWashing() {
    return (
        <div className="dwashing-container">
            <div className="dwashing-main">
                <div className="dwashing-grid">
                    <div className="dwashing-heading">
                        <h1 className="dwashing-title">
                        Pressure washing, Driveways, and
                              Pathways.
                        </h1>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .dwashing-container {
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-image: linear-gradient(
                            rgba(0, 0, 0, 0.3),
                            rgba(0, 0, 0, 0.2)
                        ),
                        url(./images/11.webp);
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    align-items: center;
                    width: 100%;
                    min-height: 100vh;
                    min-width: 42vh;
                }

                .dwashing-main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .dwashing-grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 3rem;
                }
                .dwashing-title {
                    padding: 3;
                    margin: 5;
                    font-weight: 400;
                    font-size: 40px;
                    font-weight: bolder;
                    line-height: 1em;
                    color: #fff;
                }

                @media (max-width: 600px) {
                    .dwahsing-title {
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

export function ServicesPatio() {
    return (
        <div className="dwashing-container">
            <div className="dwashing-main">
                <div className="dwashing-grid">
                    <div className="dwashing-heading">
                        <h1 className="dwashing-title">
                              Patios, Linchen/Black spot removal, and Wall cleaning.
                        </h1>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .dwashing-container {
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-image: linear-gradient(
                            rgba(0, 0, 0, 0.3),
                            rgba(0, 0, 0, 0.2)
                        ),
                        url(./images/6.webp);
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    align-items: center;
                    width: 100%;
                    min-height: 100vh;
                    min-width: 42vh;
                }

                .dwashing-main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .dwashing-grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 3rem;
                }
                .dwashing-title {
                    padding: 3;
                    margin: 5;
                    font-weight: 400;
                    font-size: 40px;
                    font-weight: bolder;
                    line-height: 1em;
                    color: #fff;
                }

                @media (max-width: 600px) {
                    .dwahsing-title {
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

export function ServicesDecking() {
    return (
        <div className="dwashing-container">
            <div className="dwashing-main">
                <div className="dwashing-grid">
                    <div className="dwashing-heading">
                        <h1 className="dwashing-title">
                              Soft washing, Decking and Garden furniture cleaning.
                        </h1>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .dwashing-container {
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-image: linear-gradient(
                            rgba(0, 0, 0, 0.3),
                            rgba(0, 0, 0, 0.2)
                        ),
                        url(./images/patio.jpg);
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    align-items: center;
                    width: 100%;
                    min-height: 100vh;
                    min-width: 42vh;
                }

                .dwashing-main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .dwashing-grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 3rem;
                }
                .dwashing-title {
                    padding: 3;
                    margin: 5;
                    font-weight: 400;
                    font-size: 40px;
                    font-weight: bolder;
                    line-height: 1em;
                    color: #fff;
                }

                @media (max-width: 600px) {
                    .dwahsing-title {
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
            <ServicesWashing />
            <ServicesPatio />
            <ServicesDecking />
        </div>
    );
}

export default Driveway;