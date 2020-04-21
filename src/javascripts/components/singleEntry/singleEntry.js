import './singleEntry.scss';

const makeEntryBox = (entry, thisEntryPlace) => {
  let domString = '';
  domString += '<div class="col-12 entry-separator">';
  domString += `    <div id="${entry.id}" class="p-3 card bg-warning text-white">`;
  domString += '        <div class="d-inline-flex flex-column">';
  domString += `        <h2 class="m-2">${thisEntryPlace.title}</h2>`;
  domString += '        <button class="entry-delete-button btn btn-danger align-self-end"><i class="fas fa-times"></i></button>';
  domString += '        </div>';
  domString += `        <p class="m-2 lead">${entry.text}</p>`;
  domString += '    </div>';
  domString += '</div>';
  return domString;
};

export default { makeEntryBox };
