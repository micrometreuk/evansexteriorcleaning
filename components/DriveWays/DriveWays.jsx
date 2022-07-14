import { Container, Row, Card, Button } from 'react-bootstrap'


export function DrivewayTitle() {
  return (
    <Container className="md-container p-4">
      <div className="cntr-title">
        <h1 className="display-1 text-center">
          Driveway Cleaning
        </h1>
      </div>
    </Container>
  )
}

export function DriveWayHero() {
  return (
    <div className="drivewaycontainer">
      <div className='drivemain'>
        <div className="grid">
          <div 
          className="card">
            <p>
            Driveway cleaning can transform the look of your driveway 
          Our driveway pressure washing service ensures a perfect finish every time. 

            </p>
          </div>

          <div 
           className="card">
            <p>
            Our pledge is to arrive on time,
             perform an efficient driveway cleaning service and clear away all mess, 
            all at an affordable price.
              </p>
          </div>

          <div
            className="card"
          >
            <p>
              We offer pressure washing, soft washing, 
              kiln dried sand finish and a driveway sealing option.

              
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
            url(./images/11.webp);
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          align-items: center;
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
  )
}





export function Driveway() {
  return (
    <div className="driveway">
      <DrivewayTitle />
      <DriveWayHero />
    </div>
  );
}

export default Driveway;