import axios from "axios";
// import fetchData from "./MashAPI";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";

import { PlacesShow } from "./PlacesShow";
import { PlacesIndex } from "./PlacesIndex";

import { TripsIndex } from "./TripsIndex";
import { TripsShow } from "./TripsShow";
import { TripsNew } from "./TripsNew";
export function Content() {
  const [places, setPlaces] = useState([]);
  const [trips, setTrips] = useState([]);
  const [isPlacesShowVisible, setIsPlacesShowVisible] = useState(false);
  const [isTripsShowVisible, setIsTripsShowVisible] = useState(false);
  const [currentPlace, setCurrentPlace] = useState({});

  const handleIndexPlaces = () => {
    console.log("handleIndexPlaces");
    axios.get(`http://localhost:3000/places.json`).then((response)=>{
      console.log(response.data);
      setPlaces(response.data);
    });
    
  };
  useEffect(handleIndexPlaces, []);

  const handleShowPlace= (myPlace) => {
    setIsPlacesShowVisible(true);
    setCurrentPlace(myPlace)
  }
  const handleShowTrip= (myTrip) => {
    console.log(myTrip);
    console.log('handling show trip.')
    setIsTripsShowVisible(true);
  }
  const handleCreateTrip = () => {
    axios.post('http://localhost:3000/trips/new.json').then((response) => {
      console.log(response.data);
      setTrips(response.data);
  })
}
  const handleClose = () => {
    console.log('close modal')
    setIsPlacesShowVisible(false);
  }
  const handleDestroyPlace = (placeId) => {
    console.log('hanlding destroy place')
    axios.delete(`http://localhost:3000/places/${placeId}.json`).then(response => {
      console.log(response.data);
      setPlace(places.filter(place => place.id != placeId))
    })
  }
  const handleDestroyTrip= (tripId) => {
    console.log('hanlding destroy trip')
    axios.delete(`http://localhost:3000/trips/${tripId}.json`).then(response => {
      console.log(response.data);
      setTrips(trips.filter(trip => trip.id != tripId))
    })
  }
  
  return (
    <div className="container">
          

    <Routes>              
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/fetchData" component={fetchData} /> */}
      <Route path="/trips/index" element={<TripsIndex trips={trips} onShowTrip={handleShowTrip}/>} />
      <Route path="/" element={<PlacesIndex places={places} onShowPlace={handleShowPlace}/>} />
      <Route path="/trips/new" element={<TripsNew trips={trips} onCreateTrip={handleCreateTrip}/>} />
      <Route path="/logout" element={<LogoutLink />} />

    </Routes>
      <Modal show={isPlacesShowVisible} onClose={handleClose}>
        <PlacesShow place={currentPlace} onDestroyPlace={handleDestroyPlace}/>
        <button onClick={handleClose}>Close</button>
      </Modal>
    </div>
  )
}
