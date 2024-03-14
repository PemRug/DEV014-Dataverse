export const renderItems = (data) => {
  //console.log(data)

  const ul = document.createElement('ul');
  data.forEach(function(element) {
    const list= document.createElement('li');
    list.setAttribute('itemscope','');
    list.setAttribute('itemtype',element.name);
    list.classList.add('cards');
    list.innerHTML=`
    <dl>
    <img src=${element.imageUrl} alt=${element.name} class="imagine-cutted"/>
    <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
    <dt>Descripción:</dt><dd itemprop="shortDescription">${element.shortDescription}</dd>
    <dt>Ubicación:</dt><dd itemprop="location">${element.location}</dd>
    <dt>Tipo de Turismo:</dt><dd itemprop="tipoTurismo">${element.tipoTurismo}</dd>
    <dt>Gasto Promedio:</dt><dd itemprop="gastoPromedio">${element.gastoPromedio}</dd>
    <dt>Museo cercano:</dt><dd itemprop="facts">${element.facts.museo}</dd>
    <dt>Tienda cercana:</dt><dd itemprop="facts">${element.facts.compras}</dd>
    <dt>Restaurante cercana:</dt><dd itemprop="facts">${element.facts.alimentacion}</dd>
    <dt>Datos Adicionales:</dt><dd itemprop="description">${element.description}</dd>
    </dl>
    `;

    ul.appendChild(list);
  });
  return ul;
};

