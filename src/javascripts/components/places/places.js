import firebase from 'firebase/app';
import 'firebase/auth';

import placeData from '../../helpers/data/placeData';
import singlePlaceComponent from '../singlePlace/singlePlace';
import utils from '../../helpers/utils';

const printPlaces = () => {
  const myUid = firebase.auth().currentUser.uid;
  placeData.getPlacesByUid(myUid)
    .then((places) => {
      let domString = '';
      domString += '<h2 class="display-4 text-center">My Places</h2>';
      domString += '<div class="row d-flex flex-wrap">';
      places.forEach((place) => {
        domString += singlePlaceComponent.makeSinglePlaceCard(place);
      });
      domString += '</div>';
      utils.printToDom('places', domString);
    })
    .catch((err) => console.error('Something is wrong with getPlaces', err));
};

export default { printPlaces };
