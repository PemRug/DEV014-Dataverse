import { filterData , sortData, computeStats} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const content = document.getElementById('root');
const filterProvincia = document.querySelector('select[name="filtrarProvincia"]');
const sortOption = document.querySelector('select[name="ordenar"]');
const sortAsc = document.querySelector('input[value="asc"]');
const sortDesc = document.querySelector('input[value="desc"]');

content.appendChild(renderItems(sortData(data,sortOption.value,sortAsc.value)));

/*
Evento Filtrar por provincia
Escucha los cambios en el select de filtrarProvincia
tambien conserva la condicion del evento ordenar
*/
filterProvincia.addEventListener('change', () => {
  document.querySelector('ul').remove();
  if (filterProvincia.value==='All Options') { // Si es todas las opciones
    if (sortAsc.checked) {
      content.appendChild(renderItems(sortData(data,sortOption.value,sortAsc.value)));
    } else {
      content.appendChild(renderItems(sortData(data,sortOption.value,sortDesc.value)));
    }
    console.log(computeStats(data));
  } else { // si es por filtro de location
    const dataOriginFilter = filterData(data,'location',filterProvincia.value); // llama el metodo filtrar y lo asigna a dataOriginFilter
    if (sortAsc.checked) {
      content.appendChild(renderItems(sortData(dataOriginFilter,sortOption.value,sortAsc.value))); // filtrar y ordenar por lo seleccionado
    } else {
      content.appendChild(renderItems(sortData(dataOriginFilter,sortOption.value,sortDesc.value)));
    }
    console.log(computeStats(dataOriginFilter));
  }
});

/*
Evento ordenar por Nombre o Precio
Primero verifica la seleccion del radio (si es ascendente o descendente)
Segundo verifica si la data esta filtrada por location o si la seleccion es de todas las opciones
*/
sortOption.addEventListener('change', () => {
  const dataOriginFilter = filterData(data,'location',filterProvincia.value);
  document.querySelector('ul').remove();
  if (sortAsc.checked) {
    if (filterProvincia.value==='All Options') {
      content.appendChild(renderItems(sortData(data,sortOption.value,sortAsc.value)));
    }
    else{
      content.appendChild(renderItems(sortData(dataOriginFilter,sortOption.value,sortAsc.value)));
    }
  }
  if (sortDesc.checked) {
    if (filterProvincia.value==='All Options') {
      content.appendChild(renderItems(sortData(data,sortOption.value,sortDesc.value)));
    }
    else{
      content.appendChild(renderItems(sortData(dataOriginFilter,sortOption.value,sortDesc.value)));
    }
  }
});

/*
Evento click por ascendente
Verifica si son todas las opciones o si esta filtrada por location
Y finalmente muestra una data ordenada de forma ascendente
*/
sortAsc.addEventListener('click', () => {
  const dataOriginFilter = filterData(data,'location',filterProvincia.value);
  document.querySelector('ul').remove();
  if (filterProvincia.value==='All Options') {
    content.appendChild(renderItems(sortData(data,sortOption.value,sortAsc.value)));
  }
  else{
    content.appendChild(renderItems(sortData(dataOriginFilter,sortOption.value,sortAsc.value)));
  }
  
});

/*
Evento click por descendente
Verifica si son todas las opciones o si esta filtrada por location
Y finalmente muestra una data ordenada de forma descendente
*/
sortDesc.addEventListener('click', () => {
  const dataOriginFilter = filterData(data,'location',filterProvincia.value);
  document.querySelector('ul').remove();
  if (filterProvincia.value==='All Options') {
    content.appendChild(renderItems(sortData(data,sortOption.value,sortDesc.value)));
  }
  else{
    content.appendChild(renderItems(sortData(dataOriginFilter,sortOption.value,sortDesc.value)));
  }
});