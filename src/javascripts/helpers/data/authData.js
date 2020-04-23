import firebase from 'firebase/app';
import 'firebase/auth';

import places from '../../components/places/places';
import entries from '../../components/entries/entries';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#auth').addClass('disappear');
      $('#logout-button').removeClass('disappear');
      $('#add-place-button').removeClass('disappear');
      $('#places').removeClass('disappear');
      $('#entries').removeClass('disappear');
      places.printPlaces();
      places.placeEvents();
      entries.entryEvents();
      entries.printEntries();
    } else {
      $('#auth').removeClass('disappear');
      $('#logout-button').addClass('disappear');
      $('#add-place-button').addClass('disappear');
      $('#places').addClass('disappear');
      $('#entries').addClass('disappear');
      entries.removeEntryEvents();
      places.removePlaceEvents();
    }
  });
};


export default { checkLoginStatus };
