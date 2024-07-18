

function registrarUsuario() {
  let usuario = document.getElementById('usuario').value;
  let contraseña = document.getElementById('contraseña').value;

  crearUsuario(usuario, contraseña);

  Swal.fire("Se a registrado con exito!");
}

function login() {
  let usuario = document.getElementById('usuario_login').value;
  let contraseña = document.getElementById('contraseña_login').value;
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let usuario_encontrado = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);

  if (usuario_encontrado) {
    localStorage.setItem("sesion-usuario", usuario_encontrado.id)
    Swal.fire("Se ha logueado con éxito!");
  } else {
    Swal.fire("Usuario o contraseña equivocada, inténtelo nuevamente");
  }
}

function estoyLogueado() {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let id_usuario = parseInt(localStorage.getItem("sesion-usuario"));
  let usuario = usuarios.find(u => u.id === id_usuario);

  if (usuario) {
      return true;
  } else {
      return false;
  }
}

function crearUsuario(usuario, contraseña) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let id = Math.floor(Math.random() * 100);
  let user = { usuario, contraseña, id };
  usuarios.push(user);
  localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

function cerrarSesion() {
  localStorage.removeItem('sesion-usuario');
}

document.getElementById('cerrar_sesion')?.addEventListener('click', function () {
  cerrarSesion();
});



