import axios from "axios"
import { useEffect, useState } from "react"

export function TripsIndex() {   
  const [trips, setTrips] = useState([])
  // get data frmo the api
  const getTrips = () => {

    axios.get(`http://localhost:3000/trips.json`).then(response => {
      console.log(response.data);
      setTrips(response.data)
    })
  }
  useEffect(getTrips, [])
  const handleDeleteTrip = (tripId) => {
    // make proper axios request
    axios.delete(`http://localhost:3000/trips/${tripId}.json`).then(response => {
      console.log(response.data)
      setTrips(trips.filter((trip) => trip.id !== tripId));
    })
  }
  return (
    <div id="trips-index">
      {trips.map(trip => (
        <div key={trip.place_id}>
          <p>id: {trip.id}</p>
          <p>title: {trip.title}</p>
          <p>start_time: {trip.start_time}</p>
          <p>end_time: {trip.end_time}</p>
          <p>user_id: {trip.user_id}</p>
          <button onClick={() => {handleDeleteTrip(trip.id)}}>remove</button>
          <hr />
        </div>
      ))}
      
    </div>
  )
}