

function registrarUsuario() {
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;

    crearUsuario(usuario, contraseña);

    Swal.fire("Se a registrado con exito!");
}


function login() {
    let usuario = document.getElementById('usuario_login').value;
    let contraseña = document.getElementById('contraseña_login').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let usuario_encontrado = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (usuario_encontrado) {
        localStorage.setItem("sesion-usuario", usuario_encontrado.id)
        Swal.fire("Se a logueado con exito!");
    } else {
        Swal.fire("Usuario o contraseña equivocada, intentelo nuevamente!");
    }
}

function crearUsuario(usuario, contraseña) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let id = Math.floor(Math.random() * 100);
    let user = { usuario, contraseña, id } // Esto es equivalente a {usuario: usuario, contraseña: contraseña, id: id}
    usuarios.push(user);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function cerrarSesion() {
    localStorage.removeItem('usuarios');
}

document.getElementById('cerrar_sesion')?.addEventListener('click', function () {
    cerrarSesion();
});
