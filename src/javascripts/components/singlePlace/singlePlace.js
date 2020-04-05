import './singlePlace.scss';

const makeSinglePlaceCard = (place) => {
  let domString = '';
  domString += '<div class="col-4 place-separator">';
  domString += '    <div class="text-light text-center bg-secondary card my-place">';
  domString += `        <h2>${place.title}</h2>`;
  domString += '        <div class="card-body d-flex flex-column justify-content-around align-items-center">';
  domString += `            <img src="${place.image}" alt="${place.title}"/>`;
  domString += `            <p>${place.description}</p>`;
  domString += '            <form>';
  domString += '                <label for="diary-entry-input">Share Your Thoughts!</label>';
  domString += '                <input type="text" class="form-control" id="diary-entry-input" placeholder="My trip was...">';
  domString += '                <button type="button" class="btn btn-primary">Share!</button>';
  domString += '            </form>';
  domString += '        </div>';
  domString += '    </div>';
  domString += '</div>';
  return domString;
};

export default { makeSinglePlaceCard };
