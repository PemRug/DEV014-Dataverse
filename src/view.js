export const renderItems = (data) => {
  const ul = document.createElement('ul');
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
    <button type="button" id="bntReadMore">Leer Más</button> <button type="button" id="bntProvincia">${element.location}</button>
    </dl>
    `;
    ul.appendChild(list);
  });
  return ul;
};

