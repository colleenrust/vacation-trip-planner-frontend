export function PlacesIndex(props) {
  return (
    <div>
      <h1>All places</h1>
      {props.places.map((place) => (
        <div key={place.id}>
        <h2>{place.name} </h2>
        <img src={place.image_url}/>
        <p>Address: {place.address}</p>
        <p>Description: {place.description}</p>
        <button onClick={() => {props.onShowPlace(place)}}>more info</button>
        {/* <button> onClick={() => {props.onShowPlace(place)}}>add place to trip</button> */}
        </div>
      ))}
    </div>
  )
}