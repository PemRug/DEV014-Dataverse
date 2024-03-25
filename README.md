# Proyecto Dataverse

## Índice

* [1. Descripción](#1-Descripción)
* [2. Funcionalidad](#2-Funcionalidad)
* [3. Planning](#3-planning)
* [4. Historias de usuario](#4-Historias-de-usuario)
* [5. Problemas detectados en pruebas de usabilidad](#5-Problemas-detectados-en-pruebas-de-usabilidad)
***
# Proyecto Dataverse

## 1. Descripción


Pura Vida Tours es una página web que te ayuda a planificar tu viaje perfecto a Costa Rica. Te permite:

`Explorar:` Descubre una amplia variedad de atractivos turísticos en Costa Rica, con información detallada como:
  
  -Nombre: El nombre oficial del atractivo turístico.
  
  -Provincia: La provincia donde se encuentra ubicado el atractivo.
  
  -Descripción corta: Un resumen conciso de lo que ofrece el lugar.
  
  -Precio promedio: Un estimado del costo por día, incluyendo entrada, alimentación y alojamiento.
  
  -Tipo de turismo: Categorización del atractivo (playa, aventura, cultura).

`Filtrar:` Encuentra los lugares ideales para ti según tus preferencias:
  
  -Precio: Rango de precios que se ajusta a tu presupuesto.
  
  -Provincia: Elige la región que deseas visitar.

`Estadísticas:` 
  
  -Tipo de turismo: Busca los lugares que mejor se adapten a tus intereses, eligiendo la Provincia que tiene el mejor tipo de turismo para ti, entre playa aventura y cultura. 

`Planificar:` Organizar tu viaje con mayor precisión al tener una idea clara de los costos y las opciones disponibles.

  ## Beneficios:

`Información completa:` Accede a toda la información relevante para tomar decisiones informadas sobre tu viaje.

`Fácil de usar:` Interfaz intuitiva y amigable para que encuentres lo que necesitas rápidamente.

`Personalizable:` Filtra y compara lugares según tus preferencias para encontrar tu experiencia ideal.

`Planificación eficiente:` Ahorra tiempo y dinero al tener una mejor idea de lo que te espera en tu viaje.

  ## Pura Vida Tour es la herramienta perfecta para:

`Viajeros primerizos:` Que buscan información completa y organizada para planificar su viaje a Costa Rica.

`Turistas experimentados:` Que desean explorar nuevos lugares y comparar diferentes opciones.

`Cualquier persona que desee:` Tomar decisiones informadas sobre su viaje a Costa Rica.


## 2. Funcionalidad
A continuación podremos visualizar qué elemento realiza cada una de estas funciones:

  ## Visualización de Cards

Para realizar la visualización de cartas mediante prompting se generó un dataset que podemos ver a continuación:

![esquema 1](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image23.png)

![esquema 2](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image22.png)

![esquema 3](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image20.png)

![esquema 4](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image14.png)

![esquema 5](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image18.png)

![esquema 6](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image4.png)

![esquema 7](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image5.png)

![esquema 8](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image2.png)

![esquema 9](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image7.png)

![esquema 10](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image27.png)

![esquema 11](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image11.png)

![esquema 12](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image15.png)

![esquema 13](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image17.png)

  ## Render Items

Se procedió a renderizar datos con el método renderItems

```
export const renderItems = (data) => {
  const ul = document.createElement('ul');
  ul.setAttribute('name','ul-root');
  data.forEach(function(element) {
    const list= document.createElement('li');
    list.setAttribute('itemscope','');
    list.setAttribute('itemtype',element.name);
    list.classList.add('card');
    list.innerHTML=`
    <dl>
    <div class="divImage"><img src=${element.imageUrl} alt=${element.name} class="imagine-cutted"/></div>
    <div class="divName"><dd itemprop="name">${element.name}</dd></div>
    <div class="divStars"> <img src="https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/01c79ef9f70a89e36ef48ce985bc36e527598bef/Imagenes%20Dataverse/05-icon-stars.svg" alt="Star 1">  <img src="https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/01c79ef9f70a89e36ef48ce985bc36e527598bef/Imagenes%20Dataverse/05-icon-stars.svg" alt="Star 2">  <img src="https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/01c79ef9f70a89e36ef48ce985bc36e527598bef/Imagenes%20Dataverse/05-icon-stars.svg" alt="Star 3">  <img src="https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/01c79ef9f70a89e36ef48ce985bc36e527598bef/Imagenes%20Dataverse/05-icon-stars.svg" alt="Star 4"></div>
    <div class="divPrecio"><dt itemprop="gastoPromedio">$${element.gastoPromedio}<span>gasto promedio diario</span></dt></div>
    <div class="divDescription"><dt></dt><dd itemprop="shortDescription">${element.shortDescription}</dd></div>
    <button type="button" id="bntReadMore">Leer Más</button>
    <button type="button" id="bntProvincia">${element.location}</button>
    </dl>
    `;
    ul.appendChild(list);
  });
  return ul;
};
```
### Filtro

 - Permite filtrar para facilidad de visualización.
 - Filtrado por Provincias de Costa Rica, con 6 de las provincias.

![imageFiltrador](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image24.png)
![imageVisualizarFiltro](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image25.png)

#### Método filter: 
```
export const filterData = (data, filterBy, value) => {
  return data.filter(tour => tour[filterBy] === value);
};
```

#### Visualización del Filtro:

Al elegir una Provincia, se renderizan las li, y únicamente aparecen aquellas que coincidan con la provincia elegida.

![imageVisualizarProvincia](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image19.png)

#### Listener change para filtro por Provincia:
```
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
```

### SortData (Ordenar)

 - Permite ordenar por Nombre y Precio, de manera ascendente y descendente.

 - No anula el filtro, trabaja con la Data filtrada.

![imageOrdenador](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image13.png)

#### Visualización de la data Ordenada:
![imagedataOrdenada](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image1.png)

#### Método SortData:

```
export const sortData = (data, sortBy, sortOrder) => {
  if (sortBy === 'name') {
    if (sortOrder === 'asc') {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return data.sort((a, b) => b.name.localeCompare(a.name));
    }
  }
  else {
    if (sortOrder === 'asc') {
      return data.sort((a, b) => a[sortBy] - b[sortBy]);
    } else {
      return data.sort((a, b) => b[sortBy] - a[sortBy]);
    }
  }
};
```

#### Listeners change y click para Ordenar Data:

Evento ordenar por Nombre o Precio

Primero verifica la seleccion del radio (si es ascendente o descendente)

Segundo verifica si la data esta filtrada por location o si la seleccion es de todas las opciones

```
sortOption.addEventListener('change', () => {
  document.querySelector('ul[name="ul-root"]').remove();
  if (sortAsc.checked) {
    content.appendChild(renderItems(sortData(newData,sortOption.value,sortAsc.value)));
  }
  if (sortDesc.checked) {
    content.appendChild(renderItems(sortData(newData,sortOption.value,sortDesc.value)));
  }
});
```
```
sortAsc.addEventListener('click', (event) => {
  document.querySelector('ul[name="ul-root"]').remove();
  content.appendChild(renderItems(sortData(newData,sortOption.value,event.target.value)));
});
```
```
sortDesc.addEventListener('click', (event) => {
  document.querySelector('ul[name="ul-root"]').remove();
  content.appendChild(renderItems(sortData(newData,sortOption.value,event.target.value)));
});
```
### Compute Stats
 - Nos indica cual es el % porcentaje de lugares turísticos por provincia con determinado tipo de turismo como: playa, aventura y cultural.

#### Visualización de los porcentajes:
![imageVizualizarPorcentajes](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image3.png)

#### Método computeStats:
```
export const computeStats = (data) => {
  const computeTurismo = data.reduce((num, item) => {
    if (num[item.tipoTurismo]) {
      num[item.tipoTurismo] += 1;
    } else {
      num[item.tipoTurismo] = 1;
    }
    return num;
  }, {});
  const arrayTurismo = Object.entries(computeTurismo).map(([tipo, cantidad]) => ({
    tipoTurismo: tipo,
    cantidad,
    porcentaje: ((Number(cantidad) * 100) / data.length),
  }));
  if (!arrayTurismo.some(typeTour=>typeTour.tipoTurismo==="turismo cultural")) {
    arrayTurismo.push({tipoTurismo: "turismo cultural",cantidad: 0,porcentaje: 0});
  }
  if (!arrayTurismo.some(typeTour=>typeTour.tipoTurismo==="turismo de playa")) {
    arrayTurismo.push({tipoTurismo: "turismo de playa",cantidad: 0,porcentaje: 0});
  }
  if (!arrayTurismo.some(typeTour=>typeTour.tipoTurismo==="turismo de aventura")) {
    arrayTurismo.push({tipoTurismo: "turismo de aventura",cantidad: 0,porcentaje: 0});
  }
  return arrayTurismo;
};
```

#### Listener en el mismo change de filter:
```
const renderComputeStats = (data) =>{
  const arrCompute = computeStats(data);
  document.querySelector('strong[id="aventura"]').innerHTML = ((arrCompute.find(typeTour=>typeTour.tipoTurismo==="turismo de aventura")).porcentaje).toFixed(2) +"%";
  document.querySelector('strong[id="playa"]').innerHTML = ((arrCompute.find(typeTour=>typeTour.tipoTurismo==="turismo de playa")).porcentaje).toFixed(2) +"%";
  document.querySelector('strong[id="cultura"]').innerHTML = ((arrCompute.find(typeTour=>typeTour.tipoTurismo==="turismo cultural")).porcentaje).toFixed(2) +"%";
}
```

```
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
```

  ##  Clear Buttom

Permite limpiar los datos filtrados, ordenados y los porcentajes a su estado inicial.

* Visualización del botón Limpiar:
![esquema 14](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image10.png)

* Listener click para Limpiar:

```
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
```

  ## Tecnologías:

  * Front-end: JavaScript, HTML, CSS, Jest.

  * Back-end: Node.js.

  * Librerías: Chart.js (opcional).

  ## Herramientas:

  * Git, GitHub, GitHub Pages, Chat-gpt, Gemini, OHs Laboratoria, Figma, Trello, Notion.

## 3. Planning:

Nuestro Planning se basó de manera general por Historias de Usuaria, y de manera más específica en Hitos que reflejamos en Trello,  a lo largo de 3 sprint con los siguientes tiempos:

Sprint 1: Miércoles 6 de marzo - Miércoles 13 de marzo
Sprint 2: Miércoles 13 de marzo - Miércoles 20 de marzo
Sprint 3: Miércoles 20 de marzo - Lunes 24 de marzo

![imagePlanning](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/imagePlanning.png)

### Prototipo de Alta Fidelidad

En Dataverse, nos preocupamos por la experiencia de nuestros usuarios. Por eso, hemos diseñado un prototipo intuitivo y fácil de usar para nuestro nuevo producto.
Visita nuestro prototipo: https://www.figma.com/file/lSXlrTfCcIirOGRveTxuk6/Costa-Rica-te-enamora?type=design&node-id=0%3A1&mode=design&t=0UHfhUdKZJfTRe9Y-1

Header
![imageheader](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image6.png)
Body
![imagebody](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image21.png)
![imagestats](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image26.png)
Footer
![imagefooter](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image16.png)

## 4. Historias de usuario:
Se realizaron 5 historia de usuario que podrán ser visualizadas en estre link: https://www.notion.so/Que-quieren-los-turistas-al-vistar-Costa-Rica-ec371c3b51934df1b9d930a19bcd1b0a?pvs=4

![imageHusuario](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image28.png)

### Diseño:
Se han creado vistas para mobile, tablet y desktop.
Se ha utilizado un diseño responsive para que la aplicación se adapte a diferentes dispositivos.

### Despliegue:
La aplicación se ha desplegado en GitHub Pages.
https://maddyrojas.github.io/DEV014-Dataverse/src/


## 5. Problemas detectados en pruebas de usabilidad:
Los usuarios nos han contado:
 
 - "¡Demasiada información en las tarjetas! Me costaba encontrar lo que buscaba."
 
 - "No pude usar la página en mi celular. La información se veía muy pequeña y los botones no responden."
 
 - "Los porcentajes no funcionaban bien. Cuando limpio, no se reinicia la información."
 
 - "Encontré algunos botones que no hacían nada. Parece que la página aún está en desarrollo."

### Solucionamos:
estos problemas para que tu experiencia en Pura Vida Tour sea optima.
 
 - Más sencilla: Información clara y concisa en las tarjetas.
 
 - Adaptable: Diseño responsive para una experiencia óptima en cualquier dispositivo.
 
 - Funcional: Filtros y botones que funcionan correctamente.

Y seguiremos trabajando en:

 - Completa: Página web con todas las funcionalidades disponibles.

### Agradecimientos:

A Laboratoria por el reto.

A la comunidad de GitHub por su apoyo.

Al equipo de trabajo.
