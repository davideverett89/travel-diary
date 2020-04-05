import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEntries = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/entries.json`)
    .then((response) => {
      const theseEntries = response.data;
      const entries = [];
      Object.keys(theseEntries).forEach((entryId) => {
        theseEntries[entryId].id = entryId;
        entries.push(theseEntries[entryId]);
      });
      resolve(entries);
    })
    .catch((err) => reject(err));
});

export default { getEntries };
