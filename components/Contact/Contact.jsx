import { FaPhone, FaFacebook, FaWhatsapp, FaYoutube, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const phoneTitleStyles = {
  fontSize: "1.0rem",
  color: "black",
  margin: "0.1rem",
  padding: "0.1rem",
  textDecoration: "none",
};

const phoneIconStyles = {
  fontSize: "1.0rem",
  color: "olive",
  margin: "0.1rem",
  textDecoration: "none",
};

const phoneLinksStyles = {
  fontSize: "1.0rem",
  color: "teal",
  margin: "0.1rem",
  padding: "0.1rem",
  textDecoration: "none",
  display: "flex",
};
const emailIconStyles = {
  fontSize: "1.0rem",
  color: "olive",
  margin: "0.1rem",
  textDecoration: "none",
};
const emailLinksStyles = {
  fontSize: "1.0rem",
  color: "#008080",
  margin: "0.1rem",
  textDecoration: "none",
};

const socialIconStyles = {
  fontSize: "2.0rem",
  color: "black",
  margin: "0.1rem",
  padding: "0.5rem",
};
export function Contact() {
  return (
    <div className="contact-container">
      <main>
        <div className="row">
          <div className="column">
            <div className="right-column">
              <div className="contact">
                <p className="contact-description">
                  The easiest way to contact us is by giving us a call.
                  <br />
                  <a
                    href="tel:07445549727<"
                    title="Call evans exterior cleaning"
                    style={{ color: '#000' }} >
                    <FaPhone size={38} 
                    
                    style={{ color: 'aqua' }}
                    />
                    07445549727
                  </a>
                  <br />

                  Alternatively, you can email us at
                  <br />
                  <a
                    href="mailto:info@evansexteriorcleaning.co.uk"
                    title="Email evans exterior cleaning"
                    style={{ color: '#000' }}
                  >
                    <FaEnvelope size={38} 
                    style={{ color: 'aqua' }}
                    
                    />
                    info@evansexteriorcleaning.co.uk
                  </a>
                  <br />

                  Please provide your name and telephone contact details in the
                  email so we can get back to you at the very earliest
                  opportunity.
                  <br />
                  We are also on Whatsapp, Facebook, Instagram and Twitter.
                  <br />
                  <a href="whatsapp://send?abid=+447445549727&text=Hello%2C%20World!" aria-label="Whatsapp" style={{color: '#000', padding: "0.5em 1em", }} >
              <FaWhatsapp size={38} 
              
                    style={{ color: 'aqua' }}
              ></FaWhatsapp>
            </a>
            <a href="/" target="_blank" rel="noreferrer" aria-label="Facebook" style={{ color: '#000', padding: "0.5em 1em", }} >
              <FaFacebook size={38}
              
                    style={{ color: 'aqua' }}
              ></FaFacebook>
            </a>
            <a href="/" target="_blank" rel="noreferrer" aria-label="Instagram"style={{ color: '#000', padding: "0.5em 1em", }} >
              <FaInstagram size={38}
              
                    style={{ color: 'aqua' }}
              ></FaInstagram>
            </a>
            <a href="/" target="_blank" rel="noreferrer" aria-label="Youtube"style={{ color: '#000', padding: "0.5em 1em", }} >
              <FaYoutube size={38} 
              
                    style={{ color: 'aqua' }}
              ></FaYoutube>
            </a>
                </p>

                <div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="left-column">
              <div className="contact">
                <div className="contact-map">
                  <div className="contactimage"></div>
                </div>
                <div className="contact-details">
                  <p className="business-description">
                    Business Hours
                    <br />
                    Monday-Friday from 08:00am - 6pm
                    <br />
                    Saturday-Sunday Closed
                  </p>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style jsx>{`
        .contactimage{
          background-image: 
            
            url(./images/logo2.webp);
          background-repeat: no-repeat;
          background-size: auto;
          width: 100%;
          min-height: 38vh;
          min-width: 42vh;


        }
        .contact-container {
          padding: 0.1rem;
          margin-top: 2.0rem;
           border: 0.1rem solid teal;

        }

        main {
          padding: 0.1rem;
          margin 0.1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

        }

        .row {
          padding: 0.1rem;
          margin: 0.1rem;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          align-items: center;
          justify-content: center;
        }

        .column {
          margin: 0.9rem;
          flex-basis: 45%;
          padding: 0.2rem;
          display: flex;
          flex-direction: column;
          flex-basis: 100%;
          flex: 1;
          text-align: left;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.15s ease;
          background-color: white;
           border: 0.2rem solid white;
        }
          .contact-description{
          margin: 0;
          font-size: 1.25rem;

        }

          .contact-map{
           border: 0.1rem solid teal;
          padding: 0.2rem;
          margin 0.1rem;
        }
        .business-description {

          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
                code {
          padding: 0.75rem;
          color: #008080;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

      `}</style>
    </div>
  );
}
export default Contact;
