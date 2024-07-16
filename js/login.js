let usuarioLogueado = false;

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
        Swal.fire("Se a logueado con exito!");
        usuarioLogueado = true;
    } else {
        Swal.fire("Usuario o contraseña equivocada, intentelo nuevamente!");
        usuarioLogueado = false;
    }
}

function crearUsuario(usuario, contraseña) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.push({ usuario: usuario, contraseña: contraseña });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function logout() {
    usuarioLogueado = false;
    Swal.fire("Cerro la sesion con exito!");
}

document.getElementById('cerrar_sesion').addEventListener('click', function() {
    logout();
});