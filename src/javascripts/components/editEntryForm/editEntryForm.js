import utils from '../../helpers/utils';
import entryData from '../../helpers/data/entryData';


const buildEditEntryForm = (entryId) => {
  entryData.getSingleEntryById(entryId)
    .then((response) => {
      const entry = response.data;
      entry.id = entryId;
      let domString = '';
      domString += `<form id="${entry.id}" class="edit-form">`;
      domString += '  <div class="form-group">';
      domString += '    <label for="edit-text">New Message:</label>';
      domString += '    <input type="text" class="form-control" id="edit-text">';
      domString += '  </div>';
      domString += '  <button id="submit-edit-button" class="submit-edit-button btn btn-success">Submit</button>';
      domString += '</form>';
      utils.printToDom('modal-header-text', 'Make An Edit to this Entry');
      utils.printToDom('travel-diary-modal-body', domString);
      $('#travel-diary-modal').modal('show');
    })
    .catch((err) => console.error('Something is wrong', err));
};

export default { buildEditEntryForm };
