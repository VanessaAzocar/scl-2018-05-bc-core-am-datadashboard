
/* funcion de Ingresar contraseña */
function enter() {
  if (document.form.email.value === 'valentina@laboratoria.cl' && document.form.password.value === 'laboratoria') {
    const btnhide = document.getElementById('buttonLogin');
    btnhide.addEventListener('click', () => {
      document.getElementsByClassName('ingresar')[0].classList.add('buttonLogin');
      document.getElementsByClassName('afterEntering')[0].classList.remove('afterEntering');
    }
    );
  } else {
    document.getElementById('incorrectPassword').innerHTML = '¡Datos inválidos! Vuelve a intentarlo.';
  }
}

/* Este boton es el que abre el listado de pre admision en el menú superior*/
const btnPre = document.getElementById('btnPreadmission');
btnPre.addEventListener('click', () => {
  document.getElementsByClassName('listPreadmission')[0].classList.remove('listPreadmission');
});

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
