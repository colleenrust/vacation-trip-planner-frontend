import axios from 'axios';
const fetchData = () => {
  const options = {
    method: 'GET',
    url: 'https://airbnb19.p.rapidapi.com/api/v2/getPropertyDetails',
    params: {
      propertyId: '<REQUIRED>',
      currency: 'USD'
    },
    headers: {
      'X-RapidAPI-Key': 'c80c98bd93msh13e8bb770f390dbp1f2588jsndc2af0906f87',
      'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    }
  };

  try {
    const response = axios.request(options)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    }); axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
export default fetchData;