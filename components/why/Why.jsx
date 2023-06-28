
export function WhyUs() {
  return (
    <div className="about-container">
      <main>
        <h1 className="title">Why choose us ?</h1>
        <div className="row">
          <div className="column">
            <div className="whyimage">
            </div>
          </div>
          <div className="column">
            <p>
            &#9642;  Fully insured
              <br />
             &#9642;   Honest and reliable
              <br />
              &#9642;  Friendly and trustworthy
              <br />
              &#9642;   Efficient
              <br />
              &#9642;   Highly experienced
            </p>
          </div>
        </div>
      </main>

      <style jsx>{`
        .whyimage{
          background-image: 
            
            url(./images/logo2.webp);
          background-repeat: no-repeat;
          background-size: auto;
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
          width: 50%;
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