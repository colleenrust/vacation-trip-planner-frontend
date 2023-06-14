import axios from "axios"
import { useState, useEffect } from "react"

export function TripsNew(props) {  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handling submit');
    // console.log(event)
    // // make web request to axios
    const params = new FormData(event.target);    
    axios.post('http://localhost:3000/trips/new.json', params).then(response => {
      console.log(response.data);
      // take everything that's in Products and add response.data
   
    })
    // window.location.href = "/";
    // send the params
    // clear the form
  }  
  return (
    <div id="Trips-new">
      <h1>Let's go somewhere!</h1>
      <form onSubmit={handleSubmit}>          
        <p>title: <input type="text" name="title" /></p>
        <p>start_time: <input type="text" name="start time" /></p>
        <p>end_time: <input type="text" name="end time" /></p>        

        < br />
        < br />
        <button type="submit">Create Trip!</button>
      </form>
    </div>
  )
}