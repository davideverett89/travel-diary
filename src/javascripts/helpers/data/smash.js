import placeData from './placeData';
import entryData from './entryData';

const getPlaceWithEntries = (placeId) => new Promise((resolve, reject) => {
  placeData.getPlaceById(placeId)
    .then((response) => {
      const place = response.data;
      place.id = placeId;
      place.entries = [];
      entryData.getEntriesByPlaceId(placeId).then((entries) => {
        entries.forEach((singleEntry) => {
          place.entries.push(singleEntry);
        });
        resolve(place);
      });
    })
    .catch((err) => reject(err));
});

export default { getPlaceWithEntries };
