import { filterData , sortData, computeStats} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

let newData = data;
const dataset =data;
const content = document.getElementById('root');
const filterProvincia = document.querySelector('select[name="filtrarProvincia"]');
const sortOption = document.querySelector('select[name="ordenar"]');
const sortAsc = document.querySelector('input[value="asc"]');
const sortDesc = document.querySelector('input[value="desc"]');
const btnLimpiar = document.querySelector('button[data-testid="button-clear"]');
const btnHeader = document.querySelector('button[name="btn-header"]');
const filterZone = document.querySelector('div[name="filter-zone"]');
content.appendChild(renderItems(sortData(data,sortOption.value,sortAsc.value)));
/*
Evento Filtrar por provincia
Escucha los cambios en el select de filtrarProvincia
tambien conserva la condicion del evento ordenar
*/
filterProvincia.addEventListener('change', () => {
  document.querySelector('ul[name="ul-root"]').remove();
  if (filterProvincia.value==='All Options') { // Si es todas las opciones
    newData = data;
    if (sortAsc.checked) {
      content.appendChild(renderItems(sortData(newData,sortOption.value,sortAsc.value)));
    } else {
      content.appendChild(renderItems(sortData(newData,sortOption.value,sortDesc.value)));
    }
    renderComputeStats(newData);
  } else { // si es por filtro de location
    newData = filterData(data,'location',filterProvincia.value); // llama el metodo filtrar y lo asigna a dataOriginFilter
    if (sortAsc.checked) {
      content.appendChild(renderItems(sortData(newData,sortOption.value,sortAsc.value))); // filtrar y ordenar por lo seleccionado
    } else {
      content.appendChild(renderItems(sortData(newData,sortOption.value,sortDesc.value)));
    }
    renderComputeStats(newData);
  }
});

/*
Evento ordenar por Nombre o Precio
Primero verifica la seleccion del radio (si es ascendente o descendente)
Segundo verifica si la data esta filtrada por location o si la seleccion es de todas las opciones
*/
sortOption.addEventListener('change', () => {
  document.querySelector('ul[name="ul-root"]').remove();
  if (sortAsc.checked) {
    content.appendChild(renderItems(sortData(newData,sortOption.value,sortAsc.value)));
  }
  if (sortDesc.checked) {
    content.appendChild(renderItems(sortData(newData,sortOption.value,sortDesc.value)));
  }
});

/*
Evento click por ascendente
Verifica si son todas las opciones o si esta filtrada por location
Y finalmente muestra una data ordenada de forma ascendente
*/
sortAsc.addEventListener('click', (event) => {
  document.querySelector('ul[name="ul-root"]').remove();
  content.appendChild(renderItems(sortData(newData,sortOption.value,event.target.value)));
});

/*
Evento click por descendente
Verifica si son todas las opciones o si esta filtrada por location
Y finalmente muestra una data ordenada de forma descendente
*/
sortDesc.addEventListener('click', (event) => {
  document.querySelector('ul[name="ul-root"]').remove();
  content.appendChild(renderItems(sortData(newData,sortOption.value,event.target.value)));
});

btnLimpiar.addEventListener('click', () => {
  document.querySelector('ul[name="ul-root"]').remove();
  filterProvincia.selectedIndex = 0;
  sortOption.selectedIndex = 0;
  sortAsc.checked = true;
  content.appendChild(renderItems(sortData(data,sortOption.value,sortAsc.value)));
  document.querySelector('strong[id="aventura"]').innerHTML= "70.83%";
  document.querySelector('strong[id="cultura"]').innerHTML= "4.17%";
  document.querySelector('strong[id="playa"]').innerHTML= "25.00%";
});

const renderComputeStats = (data) =>{
  const arrCompute = computeStats(data);
  document.querySelector('strong[id="aventura"]').innerHTML = ((arrCompute.find(typeTour=>typeTour.tipoTurismo==="turismo de aventura")).porcentaje).toFixed(2) +"%";
  document.querySelector('strong[id="playa"]').innerHTML = ((arrCompute.find(typeTour=>typeTour.tipoTurismo==="turismo de playa")).porcentaje).toFixed(2) +"%";
  document.querySelector('strong[id="cultura"]').innerHTML = ((arrCompute.find(typeTour=>typeTour.tipoTurismo==="turismo cultural")).porcentaje).toFixed(2) +"%";
}

btnHeader.addEventListener('click', () => {
  filterZone.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('button[name="btn-subcrip"]').addEventListener('click', () => {
  filterZone.scrollIntoView({ behavior: 'smooth', block: 'start' });
});