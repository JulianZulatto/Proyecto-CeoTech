
// Funcionalidad para la busqueda 
document.getElementById('buscador')?.addEventListener('input', function () {
  if (estoyLogueado()) {
    let input = this.value.toLowerCase();
    let videos = document.querySelectorAll('#listaVideos li');

    videos.forEach((video) => {
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


// Cargar Lista de Videos usando Fetch
document.addEventListener('DOMContentLoaded', async () => {
  let listaTutoriales = document.getElementById("listaVideos");
  if (!listaTutoriales) return;

  let tutoriales = await obtenerTutoriales();
  tutoriales.forEach(tutorial => renderTutorial(tutorial, listaTutoriales))
});

async function obtenerTutoriales() {
  try {
    let response = await fetch("../js/data/tutoriales.json");
    let json = await response.json();
    return json;
  } catch (error) {
    console.error('Error al cargar tutoriales:', error);
    return [];
  }
}


function renderTutorial(data, list) {
  let li = document.createElement("li");
  let title = document.createElement("h5");
  title.textContent = data.titulo;
  li.appendChild(title);

  let iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = data.link;
  iframe.title = data.titulo;
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = "strict-origin-when-cross-origin";

  li.appendChild(iframe);
  list.appendChild(li);
}



