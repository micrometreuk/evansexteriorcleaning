import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { socialdata } from "../../data/social-data";
import { data } from "../../data/contact-data";

export function Header() {
  const contactIconsStyles = { fontSize: "1.4em", color: "white" };
  const socialIconStyles = { fontSize: "1.4em", color: "white" };

  return (
    <>
      <Navbar expand="lg">

        {data.map((e, i) => {
          return (
            <div className="headingdiv" key={i}>
              {e.contact.map((e, i) => {
                return (
                  <a
                    style={contactIconsStyles}
                    href={e.href}
                    key={i}
                    title={e.title}
                  >
                    <e.icons className={contactIconsStyles}></e.icons>
                    {e.name}
                  </a>
                );
              })}
            </div>
          );
        })}

        {socialdata.map((e, i) => {
          return (
            <div className="headingdiv" key={i}>
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
      </Navbar>

      <style jsx>{`
        .headingdiv {
          z-index: 1030;
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          background-color: #1aaac7;
          display: flex;
          align-items: center;
        }
        @media (max-width: 990px) {
          .headingdiv {
            text-decoration: none;
            font-size: 0.7rem;
              font-weight: 795;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
