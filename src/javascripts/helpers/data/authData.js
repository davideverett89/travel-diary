import firebase from 'firebase/app';
import 'firebase/auth';

import places from '../../components/places/places';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#auth').addClass('disappear');
      $('#logout-button').removeClass('disappear');
      $('#places').removeClass('disappear');
      places.printPlaces();
    } else {
      $('#auth').removeClass('disappear');
      $('#logout-button').addClass('disappear');
      $('#places').addClass('disappear');
    }
  });
};


export default { checkLoginStatus };
