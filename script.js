let imagenURL = null;
let imagenesURLs = [];
let contadorCards = 0;
let likesData = {};


// Detectar cuando se selecciona una imagen
document.getElementById('archivo').addEventListener('change', function(e) {
    const file = e.target.files[0];
            
    if (file) {
        // Validar que sea una imagen
        if (!file.type.startsWith('image/')) {
            alert('Por favor, selecciona un archivo de imagen válido');
            return;
        }
                
        // Liberar la URL anterior temporal si existe
        if (imagenURL) {
            URL.revokeObjectURL(imagenURL);
        }
                
        // Crear URL temporal para la imagen
        imagenURL = URL.createObjectURL(file);
    }
});


//Detectar y accionar botones de me gusta
document.addEventListener("click", function() {
    // Seleccionar todos los botones de "Me gusta"
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el ID del span de likes a través del atributo data-target
            const targetId = this.getAttribute('data-target');
            alert(targetId);
            const likesSpan = document.querySelector(targetId);
            alert(likesSpan.textContent);

            // Obtener el valor actual de likes
            let contadorLikes = parseInt(likesSpan.textContent);

            // Incrementar el contador
            contadorLikes++;

            // Actualizar el texto del span con el nuevo contador
            likesSpan.textContent = contadorLikes;
            alert(likesSpan.textContent);

            // (Opcional) Cambiar el ícono a uno lleno (corazón)
            const heartIcon = this.querySelector('i');
            heartIcon.classList.toggle('fas');
            heartIcon.classList.toggle('far');
        });
    });
});


//Función que publica la card con la información ingresada por el usuario
function publicarCard() {
    // Obtener valores de los inputs
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;

    // Validar que los campos no estén vacíos
    if (!titulo || !descripcion || !imagenURL) {
        alert('Por favor, completa todos los campos');
        return;
    }

    // Guardar la URL en el array para poder liberarla después
    imagenesURLs.push(imagenURL);
            
    // Incrementar contador
    contadorCards++;

    //Inicializar contador de likes
    likesData[contadorCards] = {
        count: 0,
        liked: false
    };
            
    // Crear el HTML de la nueva card
    const cardHTML = `
        <div class="col">
            <div class="card h-100 shadow-sm" id="card-${contadorCards}">
                <img src="${imagenURL}" class="card-img-top" alt="${titulo}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">${descripcion}</p>
                </div>
                <div class="card-footer bg-transparent">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <button class="btn btn-outline-primary btn-sm" onclick="incrementarLike(${contadorCards})" id="btnLike-${contadorCards}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                            <span id="textLike-${contadorCards}">Me gusta</span>
                        </button>
                        <span class="badge bg-danger" id="numeroLikes-${contadorCards}">0 likes</span>
                    </div>
                </div>            
            </div>
        </div>
    `;

    // Agregar la card al contenedor
    document.getElementById('cardsContainer').insertAdjacentHTML('beforeend', cardHTML);

    // Actualizar contador visual
    actualizarContador();

    // Limpiar el formulario
    limpiarFormulario();

    // Scroll suave hacia la última card
    setTimeout(() => {
        document.getElementById(`card-${contadorCards}`).scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }, 100);
}


//Función para incrementar likes
function incrementarLike(id) {
    const data = likesData[id];
    const btnLike = document.getElementById(`btnLike-${id}`);
    const numeroLikes = document.getElementById(`numeroLikes-${id}`);
    const contadorElement = document.getElementById(`contador-${id}`);
            
    // Incrementar contador
    data.count++;
            
    // Actualizar el número visualmente
    numeroLikes.textContent = data.count;
            
    // Cambiar estilo del botón
    btnLike.classList.remove('btn-outline-primary');
    btnLike.classList.add('btn-outline-danger');
            
    // Cambiar el ícono a corazón lleno
    btnLike.querySelector('svg').innerHTML = `
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    `;
            
    // Animación de like en el botón
    btnLike.style.transform = 'scale(1.3)';
    setTimeout(() => {
        btnLike.style.transform = 'scale(1)';
    }, 200);
            
    // Animación en el contador
    contadorElement.style.transform = 'scale(1.3)';
    contadorElement.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
        contadorElement.style.transform = 'scale(1)';
    }, 300);
            
    // Añadir transición suave al botón
    btnLike.style.transition = 'all 0.2s ease';
            
    // Después de 500ms, volver el botón a su estado original
    setTimeout(() => {
        btnLike.classList.remove('btn-oultine-primary');
        btnLike.classList.add('btn-outline-danger');
        btnLike.querySelector('svg').innerHTML = `
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
       `;
    }, 500);
}


//Función que limpia los campos de texto del formulario
function limpiarFormulario() {
    imagenURL = null;
    document.getElementById('archivo').value = '';
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
}


//Función que actualiza el contador de las cards
function actualizarContador() {
    const totalCards = document.getElementById('cardsContainer').children.length;
    document.getElementById('contador').textContent = totalCards;
}


// Liberar las URLs cuando se cierre la página
window.addEventListener('beforeunload', function() {
    imagenesURLs.forEach(url => URL.revokeObjectURL(url));
    if (imagenURL) {
        URL.revokeObjectURL(imagenURL);
    }
 });
