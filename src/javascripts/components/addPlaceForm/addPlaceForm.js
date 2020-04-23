import utils from '../../helpers/utils';

const buildAddPlaceForm = () => {
  let domString = '';
  domString += '<form id="add-place-form" class="add-form">';
  domString += '    <div class="form-group">';
  domString += '        <label for="place-name">Name of New Place:</label>';
  domString += '        <input type="text" class="form-control" id="place-name">';
  domString += '    </div>';
  domString += '    <div class="form-group">';
  domString += '        <label for="place-image">Insert Image of New Place:</label>';
  domString += '        <input type="text" class="form-control" id="place-image">';
  domString += '    </div>';
  domString += '    <div class="form-group">';
  domString += '        <label for="place-description">Describe Your Place:</label>';
  domString += '        <input type="text" class="form-control" id="place-description">';
  domString += '    </div>';
  domString += '    <h3>Have You Been To This Place Before?</h3>';
  domString += '    <div class="custom-control custom-radio">';
  domString += '        <input type="radio" id="placeRadio1" name="placeRadio" class="custom-control-input" value="true">';
  domString += '        <label class="custom-control-label" for="placeRadio1">Yes</label>';
  domString += '    </div>';
  domString += '    <div class="custom-control custom-radio">';
  domString += '        <input type="radio" id="placeRadio2" name="placeRadio" class="custom-control-input" value="false">';
  domString += '        <label class="custom-control-label" for="placeRadio2">No</label>';
  domString += '    </div>';
  domString += '    <button id="submit-place-button" class="submit-edit-button btn btn-success">Submit</button>';
  domString += '</form>';
  utils.printToDom('modal-header-text', 'Add A New Place!');
  utils.printToDom('travel-diary-modal-body', domString);
  $('#travel-diary-modal').modal('show');
};

export default { buildAddPlaceForm };
