
function estoyLogueado() {
    fetch('../js/data/usuarios.json')
        .then(response => response.json())
        .then(data => {
            let id_usuario = parseInt(localStorage.getItem("sesion-usuario"));
            let usuario = data.find(u => u.id === id_usuario);
            if (usuario) {
                return true;
            } else {
                return false;
            }
        })
        .catch(error => console.error('Error al cargar los usuarios:', error));
}

