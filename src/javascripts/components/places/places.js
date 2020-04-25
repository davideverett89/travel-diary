import firebase from 'firebase/app';
import 'firebase/auth';

import placeData from '../../helpers/data/placeData';
import entryData from '../../helpers/data/entryData';
import singlePlaceComponent from '../singlePlace/singlePlace';
import addPlaceForm from '../addPlaceForm/addPlaceForm';
import utils from '../../helpers/utils';
import smash from '../../helpers/data/smash';

const printPlaces = () => {
  const myUid = firebase.auth().currentUser.uid;
  placeData.getPlacesByUid(myUid)
    .then((places) => {
      entryData.getEntries().then((entries) => {
        let domString = '';
        domString += '<h2 class="display-4 text-center">My Places</h2>';
        domString += '<div class="row d-flex flex-wrap">';
        places.forEach((place) => {
          domString += '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 place-separator">';
          const entryCheck = entries.some((entry) => entry.placeId === place.id);
          domString += singlePlaceComponent.makeSinglePlaceCard(place, entryCheck);
          domString += '</div>';
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

const reprintSingleCard = (e) => {
  const placeId = e.target.closest('.card').id;
  smash.getPlaceWithEntries(placeId)
    .then((place) => {
      const entryCheck = place.entries.length > 0;
      const domString = singlePlaceComponent.makeSinglePlaceCard(place, entryCheck);
      $(`#${placeId}`).replaceWith(domString);
    })
    .catch((err) => console.error('This does not work:', err));
};

const placeEvents = () => {
  $('body').on('click', '#add-place-button', addPlaceForm.buildAddPlaceForm);
  $('body').on('click', '#submit-place-button', addNewPlace);
  $('body').on('click', '.view-icon', singlePlaceComponent.showSinglePlaceWithEntries);
  $('body').on('click', '#back-button', reprintSingleCard);
};

const removePlaceEvents = () => {
  $('body').on('click', '#add-place-button', addPlaceForm.buildAddPlaceForm);
  $('body').off('click', '#submit-place-button', addNewPlace);
  $('body').off('click', '.view-icon', singlePlaceComponent.showSinglePlaceWithEntries);
  $('body').off('click', '#back-button', reprintSingleCard);
};

export default { printPlaces, placeEvents, removePlaceEvents };
