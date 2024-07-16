

// Funcionalidad para la busqueda 
document.getElementById('buscador').addEventListener('input', function () {
  if (usuarioLogueado) {
    let input = this.value.toLowerCase();
    let videos = document.querySelectorAll('#listaVideos li');

    videos.forEach(function (video) {
      let videoNombre = video.textContent.toLowerCase();
      if (videoNombre.includes(input)) {
        video.style.display = 'block';
      } else {
        video.style.display = 'none';
      }
    });
  } else {
    alert('Necesitas estar logueado para poder utilizar esta funcion.')
  }
});



