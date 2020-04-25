import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlacesByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/places.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const thosePlaces = response.data;
      const places = [];
      Object.keys(thosePlaces).forEach((placeId) => {
        thosePlaces[placeId].id = placeId;
        places.push(thosePlaces[placeId]);
      });
      resolve(places);
    })
    .catch((err) => reject(err));
});

const getPlaceById = (placeId) => axios.get(`${baseUrl}/places/${placeId}.json`);

const setPlace = (newPlace) => axios.post(`${baseUrl}/places.json`, newPlace);

// const getAllPlaces = () => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}/places.json`)
//     .then((response) => {
//       const thosePlaces = response.data;
//       const allPlaces = [];
//       Object.keys(thosePlaces).forEach((placeId) => {
//         thosePlaces[placeId].id = placeId;
//         allPlaces.push(thosePlaces[placeId]);
//       });
//       resolve(allPlaces);
//     })
//     .catch((err) => reject(err));
// });

// // const getSinglePlaceById = (placeId) => {

// // };

export default { getPlacesByUid, getPlaceById, setPlace };
