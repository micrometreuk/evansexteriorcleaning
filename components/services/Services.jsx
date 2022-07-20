
export function WhyUs() {
    return (
        <div className="about-container">
            <div className="main">
                <h1 className="title"> Services we offer</h1>
                <div className="row">
                    <div className="column">
                        <div className="pwashing">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="services">
                                Pressure washing, Driveways, and
                                Pathways.
                            </p>
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>

                    <div className="column">
                        <div className="patio">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="services">
                                Patios, Linchen/Black spot removal,
                                and Wall cleaning.
                            </p>
                            <br />
                            <br />
                            <br />
                            <br />

                        </div>
                    </div>
                    <div className="column">
                        <div className="patio">

                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="services">
                                Soft washing, Decking and Garden
                                furniture cleaning.
                            </p>
                            <br />
                            <br />
                            <br />
                            <br />

                        </div>
                    </div>



                </div>
            </div>

            <style jsx>{`
                .services
                {
                 color: #fff;   
                   padding: 3;
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
            min-height: 38vh;
            min-width: 42vh;
          }

          .patio{
            background-image: 
              
              url(./images/6.webp);
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            min-height: 38vh;
            min-width: 42vh;
          }
          .about-container {
            padding: 0.1rem;
            margin-top: 1.9rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
  
          main {
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
  
          .title {
            margin: 1rem;
            font-size: 4rem;
            text-align: center;
      font-weight: 300;
      line-height: 1.2;
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
            p {
              line-height: 1.8;
            }
          }
        `}</style>
        </div>
    );
}
export default WhyUs;