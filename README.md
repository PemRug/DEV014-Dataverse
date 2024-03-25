# Proyecto Dataverse

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Planning](#3-planning)
* [4. Historias de usuario](#4-Historias-de-usuario)
* [5. Problemas detectados en pruebas de usabilidad](#5-Problemas-detectados-en-pruebas-de-usabilidad)
***

### Filtro

 - Permite filtrar para facilidad de visualización.
 - Filtrado por Provincias de Costa Rica, con 6 de las provincias.

![imagePlanning](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image24.png)
![imagePlanning](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image25.png)

### Método filter: 

export const filterData = (data, filterBy, value) => {

  return data.filter(tour => tour[filterBy] === value);

};

### Visualización del Filtro:

Al elegir una Provincia, se renderizan las li, y únicamente aparecen aquellas que coincidan con la provincia elegida.

![imagePlanning](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image19.png)

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
![imagePlanning](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image6.png)
Body
![imagePlanning](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image21.png)
![imagePlanning](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image26.png)
Footer
![imagePlanning](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image16.png)

## 4. Historias de usuario:
Se realizaron 5 historia de usuario que podrán ser visualizadas en estre link: https://www.notion.so/Que-quieren-los-turistas-al-vistar-Costa-Rica-ec371c3b51934df1b9d930a19bcd1b0a?pvs=4

![imagePlanning](https://raw.githubusercontent.com/Maddyrojas/DEV014-Dataverse/main/README/images/image16.png)

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

