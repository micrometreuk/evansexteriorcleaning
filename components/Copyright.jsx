
export function CopyRight() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const year = `${current.getFullYear()}`;
  return (
    <div className="copyright-container">
      <div className="copyright-main">
        <div className="copyright-grid">
          <div  className="copyright-card">
            <p className="copyright-description">
              Copyright ©{year}
              <code>Evans Exterior Cleaning Ltd.</code>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .copyright-container {
          padding:  0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .copyright-main {
          padding:  0.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom:  2.0rem;
        }


        .copyright-description {
          text-align: center;
          text-decoration: none;
          line-height: 1.3;
          font-size: 0.9rem;
        }

        code {
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 0.8rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .copyright-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin:  0.5rem;
        }

        .copyright-card {
          text-decoration: none;
        }


        @media (max-width: 600px) {
          .copyright-grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
export default CopyRight;