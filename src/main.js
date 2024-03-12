import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

const content = document.getElementById('root');
content.appendChild(renderItems(data));