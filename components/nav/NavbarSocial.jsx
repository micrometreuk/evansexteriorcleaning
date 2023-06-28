import Link from "next/link";
import { socialdata } from "../../data/social-data";
import { FaPhone, IconContext } from "react-icons/fa";

export function NavSocail() {
  const socialIconStyles = {
    fontSize: "2.7em",
    color: "white",
    borderRadius: "4rem",
    top: "10px",
    right: "20px",
  };
  return (
    <>
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
      <style jsx>{`
        .socialdiv {
          width: 100%;
          display: flex;
          justify-content: space-around;
          background-color: #1aaac7;
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 1030;
          padding: 0rem;
          margin-bottom: 1rem;
        }
        socialdiv::-webkit-justify-content {
          background: #1e1e24;
        }
        @media (max-width: 990px) {
          .socialdiv {
            font-size: 0.9rem;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default NavSocail;
