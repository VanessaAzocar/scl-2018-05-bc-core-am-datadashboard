//Este boton es el que abre el listado de pre admision en el menú superior//
const btnPre = document.getElementById('buttomPre');
btnPre.addEventListener('click', () => {
  document.getElementsByClassName('listadoPreadmision')[0].classList.remove('listadoPreadmision');
});

//Con esto aparece el listado de postulantes en un div vacío
const btn = document.getElementById('buttomPre'); //para el proyecto tendriamos que usar otro, como getby..
const container = document.getElementById('parrafoListado'); //este es el div vacio 
const usersJSON = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";

fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
  })

const renderUsers = (data) => { //recorre el objeto y me devuelve el nombre de cada una
  btn.addEventListener('click', () => {
    const render = data.forEach(element => {
      return container.innerHTML += `<p>${element.name}</p>`
    }) 
    return render;    
  })
}

//Para que aparezca el listado de alumnas al hacer click en el cohort

