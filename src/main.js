import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const content = document.getElementById('root');
const filterProvincia = document.querySelector('select[name="filtrarProvincia"]');

content.appendChild(renderItems(data));

filterProvincia.addEventListener('change', () => {
  document.querySelector('ul').remove();
  content.appendChild(renderItems(filterData(data,'location',filterProvincia)));
});
    