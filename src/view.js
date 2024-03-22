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
    <div class="divStars"> <img src="icono1.png" alt="Icono 1">  <img src="icono1.png" alt="Icono 1">  <img src="icono1.png" alt="Icono 1">  <img src="icono1.png" alt="Icono 1"></div>
    <div class="divPrecio"><dt itemprop="gastoPromedio">$${element.gastoPromedio}<span>gasto promedio diario</span></dt></div>
    <div class="divDescription"><dt></dt><dd itemprop="shortDescription">${element.shortDescription}</dd></div>
    <button type="button" id="bntProvincia">${element.location}</button>
    </dl>
    `;
    ul.appendChild(list);
  });
  return ul;
};

