
/* funcion de Ingresar contraseña */
function entrar() {
  if (document.form.email.value === "valentina@laboratoria.cl" && document.form.password.value === "laboratoria") {
    const btn_hide = document.getElementById('buttonlogin');
    btn_hide.addEventListener("click", () => {
      document.getElementsByClassName("ingresar")[0].classList.add("buttonlogin");
      document.getElementsByClassName("afterEntering")[0].classList.remove("afterEntering");
    })
  } else {
    alert("¡Datos inválidos! Por favor ingrese nombre de usuario y contraseña correctos.");
  }
}

