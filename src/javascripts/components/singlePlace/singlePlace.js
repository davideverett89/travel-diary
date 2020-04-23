import './singlePlace.scss';

const makeSinglePlaceCard = (place, entryCheck) => {
  let domString = '';
  domString += '<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 place-separator">';
  domString += `    <div id="${place.id}" class="text-light text-center card my-place h-100 ${entryCheck ? 'bg-warning' : 'bg-secondary'}">`;
  domString += `        <h2>${place.title}</h2>`;
  domString += `        ${place.beenThere ? '<i class="text-success far fa-check-square fa-3x"></i>' : ''}`;
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
  domString += '</div>';
  return domString;
};

export default { makeSinglePlaceCard };
