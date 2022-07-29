import { Container, Row, Card, Button } from "react-bootstrap";

export function DrivewayTitle() {
    return (
        <Container className="md-container p-4">
            <div className="cntr-title">
                <h1 className="display-1 text-center">Driveway Cleaning</h1>
            </div>
        </Container>
    );
}

export function DriveWayHero() {
    return (
        <div className="drivewaycontainer">
            <div className="drivemain">
                <div className="grid">
                    <div className="card">
                        <p>
                            Driveway cleaning can transform the look of your
                            driveway Our driveway pressure washing service
                            ensures a perfect finish every time.
                        </p>
                    </div>

                    <div className="card">
                        <p>
                            Our pledge is to arrive on time, perform an
                            efficient driveway cleaning service and clear away
                            all mess, all at an affordable price.
                        </p>
                    </div>

                    <div className="card">
                        <p>
                            We offer pressure washing, soft washing, kiln dried
                            sand finish and a driveway sealing option.
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .drivewaycontainer {
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-image: linear-gradient(
                            rgba(0, 0, 0, 0.3),
                            rgba(0, 0, 0, 0.2)
                        ),
                        url(./images/3.webp);
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    align-items: center;
                    width: 100%;
                    min-height: 98vh;
                    min-width: 42vh;
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

// styles
const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }
  const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
  }
  const headingAccentStyles = {
    color: "#663399",
  }
  const paragraphStyles = {
    marginBottom: 48,
  }
  const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
  }
  const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
  }
  const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
  }
  
  const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
  }
  
  const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    marginBottom: 24,
  }
  
  const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
  }
  
  const docLink = {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
    color: "#8954A8",
  }
  
  const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
  }
  
  // data
  const links = [
    {
      text: "Tutorial",
      url: "https://www.gatsbyjs.com/docs/tutorial/",
      description:
        "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
      color: "#E95800",
    },
    {
      text: "How to Guides",
      url: "https://www.gatsbyjs.com/docs/how-to/",
      description:
        "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
      color: "#1099A8",
    },
    {
      text: "Reference Guides",
      url: "https://www.gatsbyjs.com/docs/reference/",
      description:
        "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
      color: "#BC027F",
    },
    {
      text: "Conceptual Guides",
      url: "https://www.gatsbyjs.com/docs/conceptual/",
      description:
        "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
      color: "#0D96F2",
    },
    {
      text: "Plugin Library",
      url: "https://www.gatsbyjs.com/plugins",
      description:
        "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
      color: "#8EB814",
    },
    {
      text: "Build and Host",
      url: "https://www.gatsbyjs.com/cloud",
      badge: true,
      description:
        "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
      color: "#663399",
    },
  ]
  
  // markup
export  function DrivewayMain() {
    return (
        <main style={pageStyles}>
            <title>Home Page</title>
            <h1 style={headingStyles}>
                Congratulations
                <br />
                <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
                <span role="img" aria-label="Party popper emojis">
                    🎉🎉🎉
                </span>
            </h1>
            <p style={paragraphStyles}>
                Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
                update in real-time.{" "}
                <span role="img" aria-label="Sunglasses smiley emoji">
                    😎
                </span>
            </p>
            <ul style={listStyles}>
                <li style={docLinkStyle}>
                    <a
                        style={linkStyle}
                        href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                    >
                        {docLink.text}
                    </a>
                </li>
                {links.map(link => (
                    <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                        <span>
                            <a
                                style={linkStyle}
                                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                            >
                                {link.text}
                            </a>
                            {link.badge && (
                                <span style={badgeStyle} aria-label="New Badge">
                                    NEW!
                                </span>
                            )}
                            <p style={descriptionStyle}>{link.description}</p>
                        </span>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export function DrivewayNotes() {
    return (
        <div className="driveway">
            <DriveWayHero />
            <DrivewayMain />
            
        </div>
    );
}

export default DrivewayNotes;