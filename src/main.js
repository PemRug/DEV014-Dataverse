
import { renderItems } from './view.js';

import data from './data/dataset.js';

const content = document.getElementById('root');
content.appendChild(renderItems(data));

