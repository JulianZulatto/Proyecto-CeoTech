
function estoyLogueado(){
    usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let usuario_encontrado = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (usuario_encontrado){
        return true
    } else {
        return false
    }
}

