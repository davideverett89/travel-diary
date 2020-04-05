import firebase from 'firebase/app';
import 'firebase/auth';

import places from '../../components/places/places';
import entires from '../../components/entries/entries';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#auth').addClass('disappear');
      $('#logout-button').removeClass('disappear');
      $('#places').removeClass('disappear');
      $('#entries').removeClass('disappear');
      places.printPlaces();
      entires.printEntries();
    } else {
      $('#auth').removeClass('disappear');
      $('#logout-button').addClass('disappear');
      $('#places').addClass('disappear');
      $('#entries').addClass('disappear');
    }
  });
};


export default { checkLoginStatus };
