import firebase from 'firebase/app';
import 'firebase/auth';

import moment from 'moment';

import utils from '../../helpers/utils';
import entryComponent from '../singleEntry/singleEntry';
import placesComponent from '../places/places';
import editEntryComponent from '../editEntryForm/editEntryForm';
import entryData from '../../helpers/data/entryData';
import placeData from '../../helpers/data/placeData';

const printEntries = () => {
  const myUid = firebase.auth().currentUser.uid;
  entryData.getEntries()
    .then((entries) => {
      placeData.getPlacesByUid(myUid).then((places) => {
        let domString = '';
        if (entries.length > 0) {
          domString += '<h2 class="m-2 display-4 text-center">My Adventures</h2>';
          domString += '<div class="row">';
          entries.forEach((entry) => {
            const thisEntryPlace = places.find((x) => entry.placeId === x.id);
            domString += entryComponent.makeEntryBox(entry, thisEntryPlace);
          });
          domString += '</div>';
        }
        utils.printToDom('entries', domString);
      });
    })
    .catch((err) => console.error('Something is wrong', err));
};

const removeEntry = (e) => {
  const entryId = e.target.closest('.card').id;
  entryData.deleteEntry(entryId)
    .then(() => {
      placesComponent.printPlaces();
      printEntries();
    })
    .catch((err) => console.error('There is a problem with deleting an entry', err));
};

const showEditEntryComponent = (e) => {
  const entryId = e.target.closest('.card').id;
  editEntryComponent.buildEditEntryForm(entryId);
};

const createNewEntry = (e) => {
  e.preventDefault();
  const selectedPlaceId = e.target.closest('.card').id;
  const entryMessage = $(`#${selectedPlaceId}`).find('.diary-entry-input').val();
  const newEntry = {
    placeId: selectedPlaceId,
    text: entryMessage,
    time: moment().format('LLLL'),
    uid: firebase.auth().currentUser.uid,
  };
  entryData.setEntry(newEntry)
    .then(() => {
      const cardFormId = e.target.closest('.travel-diary-form').id;
      $(`#${cardFormId}`).trigger('reset');
      placesComponent.printPlaces();
      printEntries();
    })
    .catch((err) => console.error('Problem with adding new diary entry', err));
};

const editEntry = (e) => {
  e.preventDefault();
  const entryId = e.target.closest('.edit-form').id;
  const editedMessage = $('#edit-text').val();
  const editedTime = moment().format('LLLL');
  if (editedMessage) {
    entryData.modifyEntry(entryId, editedMessage, editedTime)
      .then(() => {
        $('#travel-diary-modal').modal('hide');
        printEntries();
      })
      .catch((err) => console.error('There is a problem with editing:', err));
  }
};

const entryEvents = () => {
  $('body').on('click', '.entry-submit-button', createNewEntry);
  $('body').on('click', '.entry-delete-button', removeEntry);
  $('body').on('click', '.entry-edit-button', showEditEntryComponent);
  $('body').on('click', '#submit-edit-button', editEntry);
};

const removeEntryEvents = () => {
  $('body').off('click', '.entry-submit-button', createNewEntry);
  $('body').off('click', '.entry-delete-button', removeEntry);
  $('body').off('click', '.entry-edit-button', showEditEntryComponent);
};

export default { printEntries, entryEvents, removeEntryEvents };
