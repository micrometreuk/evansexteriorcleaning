import * as React from 'react'
import { motion } from 'framer-motion'
import { Container, Row, Card, Button } from 'react-bootstrap'


const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
}
const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
}

export function BeforeImage() {
    return (
        <>
            <motion.div className="single" initial="exit" animate="enter" exit="exit">
                <motion.img
                    variants={imageVariants}
                    src={`./images/driveway/drive1.jpg`}
                    alt="driveways pics" />
            </motion.div>
            <style>
                {`
        .single {
            overflow: hidden;
        }

        .single img {
            max-width: 100%;
            max-height: 100vh;
        }

`}
            </style>
        </>
    )
}


export function AfterImage() {
    return (
        <>
            <motion.div className="single" initial="exit" animate="enter" exit="exit">
                <motion.img
                    variants={imageVariants}
                    src={`./images/driveway/drive2.jpg`}
                    alt="driveways pics" />
            </motion.div>
            <style>
                {`
        .single {
            overflow: hidden;
        }

        .single img {
            max-width: 100%;
            max-height: 100vh;
        }

`}
            </style>
        </>
    )
}




export function DrivewayTitle() {

    return (
        <Container className="md-container p-4">
            <div className="cntr-title">
                <h1 className="display-1 text-center">Driveway Cleaning</h1>
            </div>
        </Container>
    );
}




export function DrivewayHero() {
    return (
      <>
        <Container className="md-container">
          <Row className="justify-content-md-between">
            <Card className="lml-card">
              <Card.Body>
                <Card.Text>
                  <p className="description text-center">
                    Before
                  </p>
                </Card.Text>
                <BeforeImage/>
              </Card.Body>
            </Card>
  
            <Card className="lml-card">
              <Card.Body>
                <Card.Text>
                  <p className="description text-center">
                    After
                  </p>
                </Card.Text>
                <AfterImage/>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
  
  export function Driveway() {
    return (
        <div className="driveway">
            <DrivewayTitle />
            <DrivewayHero />
        </div>
    );
}

export default Driveway; 
  
  