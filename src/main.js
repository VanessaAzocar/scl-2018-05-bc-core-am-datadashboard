/* funcion de Ingresar contraseña */
function go() {
  if (document.form.password.value === "laboratoria" && document.form.login.value === "Valentina") { 
    document.form.submit(); 
  } else { 
    alert("Por favor ingrese, nombre de usuario y contraseña correctos."); 
  } 
} 
  