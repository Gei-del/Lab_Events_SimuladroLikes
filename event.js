// 1. Referencias a los elementos del HTML
const form = document.getElementById("postForm");
const feed = document.getElementById("feed");

// 2. Escuchar cuando el formulario se envía
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página recargue

    // 3. Tomar los valores del formulario
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const imagenArchivo = document.getElementById("imagen").files[0];

    // 4. Crear URL para previsualizar la imagen
    const imagenURL = URL.createObjectURL(imagenArchivo);

    // 5. Crear la card dinámicamente
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${imagenURL}">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>

        <span class="like-btn">❤️</span>
        <span class="contador">0 Me gusta</span>
    `;

    // 6. Agregar funcionalidad al botón de like
    const likeBtn = card.querySelector(".like-btn");
    const contador = card.querySelector(".contador");

    let likes = 0;

    likeBtn.addEventListener("click", function() {
        likes++;
        contador.textContent = `${likes} Me gusta`;
        likeBtn.classList.add("liked"); // Cambia color a rojo
    });

    // 7. Agregar la card al feed
    feed.prepend(card); // prepend lo coloca primero

    // 8. Limpiar formulario
    form.reset();
});
