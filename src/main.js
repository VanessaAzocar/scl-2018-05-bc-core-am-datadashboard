/* funcion de Ingresar contraseña */
function entrar() {
  if (document.form.email.value === "valentina@laboratoria.cl" && document.form.password.value === "laboratoria") {
    document.form.submit();
  } else {
    alert("¡Datos inválidos! Por favor ingrese nombre de usuario y contraseña correctos.");
  }
}
