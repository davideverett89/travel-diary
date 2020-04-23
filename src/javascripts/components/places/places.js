import firebase from 'firebase/app';
import 'firebase/auth';

import placeData from '../../helpers/data/placeData';
import entryData from '../../helpers/data/entryData';
import singlePlaceComponent from '../singlePlace/singlePlace';
import addPlaceForm from '../addPlaceForm/addPlaceForm';
import utils from '../../helpers/utils';

const printPlaces = () => {
  const myUid = firebase.auth().currentUser.uid;
  placeData.getPlacesByUid(myUid)
    .then((places) => {
      entryData.getEntries().then((entries) => {
        let domString = '';
        domString += '<h2 class="display-4 text-center">My Places</h2>';
        domString += '<div class="row d-flex flex-wrap">';
        places.forEach((place) => {
          const entryCheck = entries.some((entry) => entry.placeId === place.id);
          domString += singlePlaceComponent.makeSinglePlaceCard(place, entryCheck);
        });
        domString += '</div>';
        utils.printToDom('places', domString);
      });
    })
    .catch((err) => console.error('Something is wrong with getPlaces', err));
};

const addNewPlace = (e) => {
  e.preventDefault();
  const newTitle = $('#place-name').val();
  const newImage = $('#place-image').val();
  const newDescription = $('#place-description').val();
  const newBeenThere = $('input[name="placeRadio"]:checked').val() === 'true';
  const blankCheck = [newTitle, newImage, newDescription, newBeenThere].some((input) => /^\s*$/.test(input));
  if (!blankCheck) {
    const newPlace = {
      title: newTitle,
      image: newImage,
      description: newDescription,
      beenThere: newBeenThere,
      uid: firebase.auth().currentUser.uid,
    };
    placeData.setPlace(newPlace)
      .then(() => {
        $('#travel-diary-modal').modal('hide');
        printPlaces();
      })
      .catch((err) => console.error('There was a problem with adding a new place:', err));
  }
};

const placeEvents = () => {
  $('body').on('click', '#add-place-button', addPlaceForm.buildAddPlaceForm);
  $('body').on('click', '#submit-place-button', addNewPlace);
};

const removePlaceEvents = () => {
  $('body').on('click', '#add-place-button', addPlaceForm.buildAddPlaceForm);
  $('body').off('click', '#submit-place-button', addNewPlace);
};

export default { printPlaces, placeEvents, removePlaceEvents };
