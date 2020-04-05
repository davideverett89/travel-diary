import utils from '../../helpers/utils';

const printPlaces = () => {
  const domString = '<h1 class="display-4">PLACES</h1>';
  utils.printToDom('places', domString);
};

export default { printPlaces };
