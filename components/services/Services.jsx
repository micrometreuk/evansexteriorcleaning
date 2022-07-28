export function Services() {
  return (
      <div className="container">
          <div className="main">
              <h1 className="servicetitle"> Services we offer</h1>
              <div className="row">
                  <div className="column">
                      <div className="pwashing">
                          <p className="services"
                          
                          >
                              Pressure washing, Driveways, and
                              Pathways.
                          </p>
                      </div>
                  </div>

                  <div className="column">
                      <div className="patio">
                          <p className="services">
                              Patios, Linchen/Black spot removal, and Wall cleaning.


                          </p>
                      </div>
                  </div>
                  <div className="column">
                      <div className="decking">
                          <p className="services">
                          Soft washing, Decking and Garden furniture cleaning.


                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <style jsx>{`
        .services{
         color: #fff;   
         padding: 13rem;
         font-weight: 400;
         font-size: 40px;
         font-weight: bolder;
         line-height: 1em;
        }
        .pwashing{
          background-image: 
            url(./images/11.webp);
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          min-height: 100vh;
          min-width: 100vh;
        }

        .patio{
          background-image: 
            url(./images/6.webp);
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          min-height: 100vh;
          min-width: 100vh;
        }

        .decking{
          background-image: 
            url(./images/1.webp);
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          min-height: 100vh;
          min-width: 100vh;
        }



        .main {
          padding: 16px;
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

        }
        .column {
          float: left;
          width: 100%;
          min-height: 68vh;
          padding: 10px;
          background: #ffffff;
        }

        .row:after {
          content: "";
          display: table;
          clear: both;
        }

        .servicetitle {
          font-size: calc(1.625rem + 4.5vw);
    font-weight: 300;
    line-height: 1.2;
          text-align: left;
          margin: .5rem;
          flex-basis: 45%;
          padding: 0.5rem;
          text-align: left;
          text-decoration: none;
        }

        p {
          text-align: left;
          line-height: 1.7;
          font-size: 2.09rem;
          margin: .5rem;
          flex-basis: 45%;
          padding: 0.5rem;
          text-align: left;
          text-decoration: none;
          font-weight: 300;
        }
        @media screen and (max-width: 600px) {
          .column {
            width: 100%;
          }
          p
           {
            line-height: 1.8;
          }
        }
      `}</style>
      </div>
  );
}
export default Services;