import './singleEntry.scss';

const makeEntryBox = (entry, thisEntryPlace) => {
  let domString = '';
  domString += '<div class="col-12 entry-separator">';
  domString += `    <div id="${entry.id}" class="p-3 card bg-warning text-white">`;
  domString += '        <div class="d-inline-flex flex-column">';
  domString += `        <h2 class="m-2">${thisEntryPlace.title}</h2>`;
  domString += '        <div class="d-flex entry-button-group justify-content-center align-items-center align-self-end">';
  domString += '          <button class="m-2 entry-edit-button btn btn-success"><i class="far fa-edit"></i></>';
  domString += '          <button class="m-2 entry-delete-button btn btn-danger"><i class="fas fa-times"></i></button>';
  domString += '        </div>';
  domString += '        </div>';
  domString += `        <p class="m-2 lead">${entry.text}</p>`;
  domString += `        <p class="m-2">${entry.time}</p>`;
  domString += '    </div>';
  domString += '</div>';
  return domString;
};

const makePopUpEntryBox = (entry) => {
  let domString = '';
  domString += '<div class="col-12 entry-separator">';
  domString += '  <div class="p-2 card bg-warning text-white">';
  domString += `    <p class="m-2 lead">${entry.text}</p>`;
  domString += `    <p class="m-2">${entry.time}</p>`;
  domString += '  </div>';
  domString += '</div>';
  return domString;
};

export default { makeEntryBox, makePopUpEntryBox };
