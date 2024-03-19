export const renderItems = (data) => {
  const ul = document.createElement('ul');
  data.forEach(function(element) {
    const list= document.createElement('li');
    list.setAttribute('itemscope','');
    list.setAttribute('itemtype',element.name);
    list.classList.add('cards');
    list.innerHTML=`
    <dl>
    <div class="divImage"><img src=${element.imageUrl} alt=${element.name} class="imagine-cutted"/></div>
    <div class="divName"><dt></dt><dd itemprop="name">${element.name}</dd></div>
    <div class="divDescription"><dt>Descripción:</dt><dd itemprop="shortDescription">${element.shortDescription}</dd></div>
    <div class="divPrecio"><dt>Gasto Promedio:</dt><dd itemprop="gastoPromedio">${element.gastoPromedio}</dd></div>
    </dl>
    `;
    ul.appendChild(list);
  });
  return ul;
};

