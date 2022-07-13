import Nav from 'react-bootstrap/Nav';
import { data } from "../../data/contact-data";
import { socialdata } from "../../data/social-data";

const phoneLinksStyles = { fontSize: "1.0em", color: "white" };
const phoneIconStyles = { fontSize: "2.5em", color: "white" };
const socialIconStyles = {
  fontSize: "2.7em",
  color: "white",
  borderRadius: "4rem",
  top: "10px",
  right: "20px",
};
const headingFontsStyle = { fontSize: "1.0em", color: "white" };

function AlignmentExample() {
  return (
    <>
      <Nav className="justify-content-around d-flex text-light" activeKey="/home">
          {data.map((e, i) => {
            return (
              <div className="phonesdiv" key={i}>
                {e.contact.map((e, i) => {
                  return (
                    <a
                      style={headingFontsStyle}
                      className="phoneLinksStyles"
                      href={e.href}
                      key={i}
                      title={e.title}
                    >
                      <e.icons className="phoneIconsStyles"></e.icons>
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

export default AlignmentExample;