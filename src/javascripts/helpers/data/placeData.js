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

export default { getPlacesByUid };
