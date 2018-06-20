/* Con esto aparece el listado de postulantes en un div vacío */
const btn = document.getElementById('btnPreadmission'); /* para el proyecto tendriamos que usar otro, como getby..*/
const container = document.getElementById('paragraphList'); /* este es el div vacio */
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
  });

const renderUsers = (data) => { /* recorre el objeto y me devuelve el nombre de cada una */
  btn.addEventListener('click', () => {
    const render = data.forEach(element => {
      return container.innerHTML += `<p>${element.name}</p>`;
    });
    return render;
  });
};


