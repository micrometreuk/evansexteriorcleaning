export function AreasMap() {
  const src = `/img/bathroom2.jpg`;

  return (
    <div className="map-container">
      <main>
            <h1 className="title">Areas we cover</h1>
        <p className="description">
Esher, Walton on Thames, Weybridge, Claygate, 
East Molesey, Cobham, Hersham, Oxshott, 
Thames Ditton, Long Ditton, Stoke D’Abernon, 
Hinchley Wood, Downside, St Georges Hill, 
Weston Green, Whiteley Village, Byfleet, 
West End and Oatlands, Hampton, 
Hampton Court, Thames Ditton, 
Long Ditton, Kingston, Surbiton, 
New Malden, Worcester Park, 
Wimbledon, Twickenham, St Margarets, 
Richmond, Teddington, Sunbury on Thames, 
Shepperton, Staines, Egham, 
Virginia Water, Addlestone, Chertsey, 
Englefield Green, Old Windsor, 
Staines, Addlestone, 
New Haw, Purford, West Byfleet.
        </p>
      </main>
      <style jsx>{`
        .map-container {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        main {
          padding-bottom: 0.1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          text-decoration: none;
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
export default AreasMap;