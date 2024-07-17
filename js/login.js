

function registrarUsuario() {
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;

    crearUsuario(usuario, contraseña);

    Swal.fire("Se a registrado con exito!");
}


function login() {
    fetch('../js/data/usuarios.json')
      .then(response => response.json())
      .then(data => {
        let usuario = document.getElementById('usuario_login').value;
        let contraseña = document.getElementById('contraseña_login').value;
  
        let usuario_encontrado = data.find(u => u.usuario === usuario && u.contraseña === contraseña);
  
        if (usuario_encontrado) {
          Swal.fire("Se ha logueado con éxito!");
        } else {
          Swal.fire("Usuario o contraseña equivocada, inténtelo nuevamente");
        }
      })
      .catch(error => console.error('Error al cargar los usuarios:', error));
  }

function crearUsuario(usuario, contraseña) {
    fetch('../js/data/usuarios.json')
      .then(response => response.json())
      .then(data => {
        let usuarios = data || [];
        let id = Math.floor(Math.random() * 100);
        let user = { usuario, contraseña, id };
        usuarios.push(user);
  
        // Guardar los usuarios actualizados en el archivo usuarios.json
        fetch('../js/data/usuarios.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuarios)
        });
      })
      .catch(error => console.error('Error al cargar usuarios:', error));
  }

function cerrarSesion() {
    localStorage.removeItem('usuarios');
}

document.getElementById('cerrar_sesion')?.addEventListener('click', function () {
    cerrarSesion();
});



