import firebase from 'firebase/app';
import 'firebase/auth';

import './singlePlace.scss';
import smash from '../../helpers/data/smash';
import singleEntryComponent from '../singleEntry/singleEntry';
import utils from '../../helpers/utils';

const makeSinglePlaceCard = (place, entryCheck) => {
  let domString = '';
  domString += `    <div id="${place.id}" class="text-light text-center card my-place h-100 ${entryCheck ? 'bg-warning' : 'bg-secondary'}">`;
  domString += '         <div class="p-2 d-flex justify-content-around card-flex">';
  domString += `          ${place.beenThere ? '<i class="col-3 my-icon text-success far fa-check-square fa-3x"></i>' : '<div class="col-3"></div>'}`;
  domString += `          <h2 class="mx-4 col-6 card-title">${place.title}</h2>`;
  domString += `          ${entryCheck ? '<i class="col-3 view-icon text-light far fa-comment fa-3x"></i>' : '<div class="col-3"></div>'}`;
  domString += '        </div>';
  domString += '        <div class="card-body d-flex flex-column justify-content-between align-items-center">';
  domString += `            <img src="${place.image}" alt="${place.title}"/>`;
  domString += `            <p class="m-2">${place.description}</p>`;
  domString += `            <form id="${place.id}-form" class="m-2 travel-diary-form">`;
  domString += '                <label for="diary-entry-input">Share Your Thoughts!</label>';
  domString += `                <input type="text" data-place-id="${place.id}" class="form-control diary-entry-input" placeholder="My trip was...">`;
  domString += '                <button type="button" class="m-2 btn btn-primary entry-submit-button">Share!</button>';
  domString += '            </form>';
  domString += '        </div>';
  domString += '    </div>';
  return domString;
};

const showSinglePlaceWithEntries = (e) => {
  const placeId = e.target.closest('.card').id;
  const userName = firebase.auth().currentUser.displayName;
  smash.getPlaceWithEntries(placeId)
    .then((place) => {
      if (place.entries.length > 0) {
        let domString = '';
        domString += `<h2>Entries for ${place.title} by ${userName}:</h2>`;
        domString += '<div>';
        place.entries.forEach((singleEntry) => {
          domString += singleEntryComponent.makePopUpEntryBox(singleEntry);
        });
        domString += '</div>';
        utils.printToDom(`${place.id}`, `${domString}<button id="back-button" class="m-2 btn btn-danger">Go Back</button>`);
      }
      if (place.entries.length > 3) {
        $(`#${place.id}`).addClass('scroll');
      }
    })
    .catch((err) => console.error('There is a problem with getting single place with entries:', err));
};

export default { makeSinglePlaceCard, showSinglePlaceWithEntries };
