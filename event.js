// Capturar elementos del DOM
const form = document.getElementById("postForm");
const feed = document.getElementById("feed");

// Evento submit
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const imagenFile = document.getElementById("imagen").files[0];

    const imgURL = URL.createObjectURL(imagenFile);

    // Crear CARD ESTILO INSTAGRAM
    const card = document.createElement("div");
    card.classList.add("card-post");

    card.innerHTML = `
        <img src="${imgURL}" alt="imagen">

        <div class="p-3 card-body">
            <h5>${titulo}</h5>
            <p>${descripcion}</p>

            <div class="d-flex align-items-center gap-2">
                <i class="bi bi-heart like-btn"></i>
                <span class="likes-count">0 Me gusta</span>
            </div>
        </div>
    `;

    // LIKE BUTTON FUNCIONAL
    const likeBtn = card.querySelector(".like-btn");
    const likesCount = card.querySelector(".likes-count");

    let likes = 0;

    likeBtn.addEventListener("click", function () {
        likes++;
        likesCount.textContent = `${likes} Me gusta`;

        likeBtn.classList.add("liked");
        likeBtn.style.animation = "pop 0.3s ease";
        setTimeout(() => likeBtn.style.animation = "", 300);
    });



    // Agregar al feed (arriba como Instagram)
    feed.prepend(card);

    // Limpiar formulario
    form.reset();
});

function likePost() {
  alert("¡Te ha gustado esta publicación!");
}
// comentario
function commentPost() {
  const commentBox = document.getElementById("commentBox");
  commentBox.style.display = commentBox.style.display === "none" ? "block" : "none";
}
