import utils from '../../helpers/utils';
import entryComponent from '../singleEntry/singleEntry';
import entryData from '../../helpers/data/entryData';

const printEntries = () => {
  entryData.getEntries()
    .then((entries) => {
      let domString = '';
      domString += '<div class="row">';
      entries.forEach((entry) => {
        domString += entryComponent.makeEntryBox(entry);
      });
      domString += '</div>';
      utils.printToDom('entries', domString);
    })
    .catch((err) => console.error('Something is wrong', err));
};

export default { printEntries };
