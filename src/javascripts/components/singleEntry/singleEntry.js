import './singleEntry.scss';

const makeEntryBox = (entry) => {
  let domString = '';
  domString += '<div class="col-12 entry-separator">';
  domString += '    <div class="card">';
  domString += `        <p>${entry.text}</p>`;
  domString += '    </div>';
  domString += '</div>';
  return domString;
};

export default { makeEntryBox };
