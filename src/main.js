import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

const content = document.getElementById('root');
content.appendChild(renderItems(data));



const filterProvincia = document.querySelector('select[name="filtrarProvincia"]');
    filterProvincia.addEventListener('change', () => {
    console.log(e.target) (e)
    console.log(filterProvincia.value);
    example.filterData(data,'location',filterProvincia.value)
    });


    