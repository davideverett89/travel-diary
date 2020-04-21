import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEntries = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/entries.json`)
    .then((response) => {
      const theseEntries = response.data;
      const entries = [];
      if (theseEntries) {
        Object.keys(theseEntries).forEach((entryId) => {
          theseEntries[entryId].id = entryId;
          entries.push(theseEntries[entryId]);
        });
      }
      resolve(entries);
    })
    .catch((err) => reject(err));
});

const setEntry = (newEntry) => axios.post(`${baseUrl}/entries.json`, newEntry);

const deleteEntry = (entryId) => axios.delete(`${baseUrl}/entries/${entryId}.json`);

export default { getEntries, setEntry, deleteEntry };
