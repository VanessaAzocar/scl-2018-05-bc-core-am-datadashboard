
/* funcion de Ingresar contraseña */
function entrar() {
  if (document.form.email.value === 'valentina@laboratoria.cl' && document.form.password.value === 'laboratoria') {
    const btnhide = document.getElementById('buttonlogin');
    btnhide.addEventListener('click', () => {
      document.getElementsByClassName('ingresar')[0].classList.add('buttonlogin');
      document.getElementsByClassName('afterEntering')[0].classList.remove('afterEntering');
    }
    );
  } else {
<<<<<<< HEAD
    document.getElementById('email').innerHTML = '¡Dato inválido!';
    document.getElementById('password').innerHTML = '¡Dato inválido!';
  }
}
=======
    document.getElementById('errorPass').innerHTML = '¡Datos inválidos! Vuelve a escribir tus datos.';
  }
}

const btn_pre = document.getElementById('botonPreadmision');
btn_pre.addEventListener("click", () => {
  document.getElementsByClassName("listadoPreadmision")[0].classList.remove("listadoPreadmision");
})

>>>>>>> 489b928db64f9524baa53d29e19f050f89d28389
