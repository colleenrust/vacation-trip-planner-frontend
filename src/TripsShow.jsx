import axios from "axios";
export function TripsShow(props) {
  console.log(props)
  
    // make request to rails 
    // const params = new FormData(event.target)
  

  const handleClick = () => {
    console.log('handling click')
   
    props.onDestroyTrip(props.trip.id)
  }
  
    axios.get(`http://localhost:3000/trips.json`, params).then(response => {
      window.location.href = "/trips"
    })
    // after, look at the shopping cart


  return (
    <div>
      <h1>Trip Information</h1>
      <p><b>title:</b>{props.trip.title}</p>
      <p><b>start_time:</b>{props.place.start_time}</p>
      <p><b>end_time:</b>{props.place.end_time}</p>
      <br />
      <br />
      <br />
      <button onClick={handleClick}>Delete trip</button>
      <br />      
    </div>
  )
  }
export default TripsShow;