import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const content = document.getElementById('root');
content.appendChild(renderItems(data));



const filterProvincia = document.querySelector('select[name="filtrarProvincia"]');
filterProvincia.addEventListener('change', () => {
    const ul = document.querySelector('ul');
    ul.remove();
    content.appendChild(renderItems(filterData(data,filterProvincia)));
});
    