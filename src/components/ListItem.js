export default function ListItem(props) {
  return (
    <section className='list-item'>
      <img src={props.imageUrl} alt='place image' />
      <div className='right-side'>
        <i className='fas fa-map-marker-alt'></i>
        <span className='location'> {props.location}</span>
        <a href={props.googleMapsUrl}>View on Google maps</a>
        <h1>{props.title}</h1>
        <div className='date'>
          <span>{props.startDate}</span> - <span>{props.endDate}</span>
        </div>
        <p className='description'>{props.description}</p>
      </div>
    </section>
  );
}
