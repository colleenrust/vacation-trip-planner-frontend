
import axios from 'axios';

export function PlacesShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handling submit');
    // Make request to Rails
  };

  const handleAddToTrip = (event) => {
    event.preventDefault();
    console.log('adding to trip');
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/trips.json", params).then(response => {
      console.log(response.data);
    });
    window.location.href = "/trips"

  };
  const handleClick = () => {
    console.log('handling click')
    // make a request to rails to do some CRUD
    props.onDestroyPlace(props.place.id)
    // after response comes back, update the frontend with whatever rails did
  }
  // const handleDestroyPlace = (placeId) => {
  //   console.log('hanlding destroy place')
  //   axios.delete(`http://localhost:3000/places/${placeId}.json`).then(response => {
  //     console.log(response.data);
  //     // recipes.select {|recipe| recipe.id != recipe_id}
  //     setPlaces(places.filter(place => place.id != placeId))
  //   })
  // }

  return (
    <div>
      <h1>Place Information</h1>
      <p><b>address:</b>{props.place.address}</p>
      <p><b>name:</b>{props.place.name}</p>
      <p><b>description:</b>{props.place.description}</p>

      {/* <form onSubmit={handleSubmit}>
        <p>name: <input name="name" type="text" defaultValue={props.place.name} /></p>
        <p>address: <input name="address" type="text" defaultValue={props.place.address} /></p>
        <p>description: <input name="description" type="text" defaultValue={props.place.description} /></p>
        <button type="input">Add place to trip</button>
      </form> */}

      <br />
      <br />
      <br />
      <br />      
      <form onSubmit={handleAddToTrip}>
        <p>address: <input name="address" type="text" defaultValue={props.place.address} /></p>
        <p><input name="place_id" type="hidden" defaultValue={props.place.id} /></p> 
        <br />
        <br />
        <button type="input">Add place to trip</button>
        <br />
        <br />
        <button onClick={handleClick}>Delete place</button>
      </form>
    </div>
  );
}
