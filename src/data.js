
// LISTADO DE postulantes
window.onload = () => {
  dataJSON();
};

function dataJSON() {
  const btnPre = document.getElementById('btnPreadmission');
  const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

  fetch(usersJSON)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderUsers(data);
    });
  const renderUsers = data => {
    btnPre.addEventListener('click', () => {
      const render = data.forEach(element => {
        const contenedorData = document.createElement('div');
        const contenedorNames = document.createElement('button');
        const contenedor = document.getElementById('paragraphList');
        contenedor.appendChild(contenedorData);
        contenedorData.appendChild(contenedorNames)
        let listName = document.createTextNode(element.name);
        contenedorNames.appendChild(listName);
      });
      return contenedorNames;
    });
  };

  //Llamar archivos de progress JSON

  const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';


  fetch(progressJSON)
    .then(response => response.json())
    .then(progressJSON => {
      progress = progressJSON;
      console.log(progress);
    })
  }

/*
const btnUser = document.getElementById('btnPreadmission'); 
const container = document.getElementById('paragraphList');  //este es el div vacio 
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
  });

const renderUsers = (data) => {  recorre el objeto y me devuelve el nombre de cada una 
  btn.addEventListener('click', () => {
    const render = data.forEach(element => {
      return container.innerHTML += `<ul><li><a>${element.name}</a></li></ul>`;
    });
    return render;
  });
}; */


