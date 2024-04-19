export default function Main(props) {
  return (
    <>
      <div className="container">
        <img src={props.imageUrl} alt="" />
        <div className="info">
          <p className="location">
            <ion-icon name="location"></ion-icon>
            <span className="country">{props.location}</span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </p>
          <h1 className="title">{props.title}</h1>
          <p className="date">12 Jan, 2021 - 24 Jan, 2021</p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </>
  );
}
