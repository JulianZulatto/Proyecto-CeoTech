
function estoyLogueado() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let id_usuario = parseInt(localStorage.getItem("sesion-usuario"));
    let usuario = usuarios.find(u => u.id === id_usuario);

    if (usuario) {
        return true
    } else {
        return false
    }
}

