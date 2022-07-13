import Nav from 'react-bootstrap/Nav';
import { data } from "../../data/contact-data";
import { socialdata } from "../../data/social-data";

const socialIconStyles = {
  fontSize: 48,
  color: "white",
  padding: "0 0.8rem",
};
const headingFontsStyle = {
  color: "white",
  lineHeight: 1.5,
  fontSize: 20,
  fontWeight: "bold",

};

function Heading() {
  return (
    <>
      <Nav className="justify-content-between d-flex text-light" activeKey="/home">
        {data.map((e, i) => {
          return (
            <div className="phonesdiv" key={i}>
              {e.contact.map((e, i) => {
                return (
                  <a
                    style={headingFontsStyle}
                    href={e.href}
                    key={i}
                    title={e.title}
                  >
                    <e.icons
                      style={socialIconStyles}
                    >
                    </e.icons>
                    {e.name}
                  </a>
                );
              })}
            </div>
          );
        })}
        {socialdata.map((e, i) => {
          return (
            <div className="socialdiv" key={i}>
              {e.socialLinks.map((e, i) => {
                return (
                  <a
                    style={socialIconStyles}
                    href={e.href}
                    key={i}
                    title={e.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icons" key={i}>
                      <e.icons className={socialIconStyles} />
                    </span>
                  </a>
                );
              })}
            </div>
          );
        })}
      </Nav>
    </>
  );
}

export default Heading