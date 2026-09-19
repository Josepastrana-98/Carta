/* =========================
   ESTRELLAS DE LA PANTALLA INICIAL
   ========================= */

for (let i = 0; i < 80; i++) {

    const estrella = document.createElement("div");

    estrella.classList.add("estrella");

    estrella.style.opacity =
        Math.random() * 0.7 + 0.3;

    estrella.style.top =
        Math.random() * 100 + "%";

    estrella.style.left =
        Math.random() * 100 + "%";

    estrella.style.width =
        Math.random() * 3 + 1 + "px";

    estrella.style.height =
        Math.random() * 3 + 1 + "px";


    setInterval(() => {

        estrella.style.opacity =
            Math.random() * 0.7 + 0.3;

    }, Math.random() * 1000 + 300);


    document
        .getElementById("estrellas")
        .appendChild(estrella);
}


/* =========================
   BOTÓN COMENZAR
   ========================= */

document
    .getElementById("comenzar")
    .addEventListener("click", () => {

        /* Desaparece la pantalla inicial */

        document
            .getElementById("inicio")
            .style.opacity = "0";


        /* Aparece el viaje */

        document
            .getElementById("viaje")
            .style.opacity = "1";


        /* =========================
           ESTRELLAS DEL VIAJE
           ========================= */

        let i = 0;
        setTimeout(() => {
            for (let i = 0; i < 200; i++) {

    const estrella = document.createElement("div");

    estrella.classList.add("estrella");

    estrella.style.opacity =
        Math.random() * 0.7 + 0.3;

    estrella.style.top =
        Math.random() * 100 + "%";

    estrella.style.left =
        Math.random() * 100 + "%";

    estrella.style.width =
        Math.random() * 3 + 1 + "px";

    estrella.style.height =
        Math.random() * 3 + 1 + "px";

    setInterval(() => {

        estrella.style.opacity =
            Math.random() * 0.7 + 0.3;

    }, Math.random() * 1000 + 300);

    document
        .getElementById("escena-amor")
        .appendChild(estrella);
}

    document
        .getElementById("escena-amor")
        .style.opacity = "1";

    document
        .getElementById("escena-amor")
        .style.pointerEvents = "auto";
        setInterval(() => {
    crearFotoFlotante();
}, 1000);

}, 3500);

const crearFlores = setInterval(() => {

    for (let j = 0; j < 20; j++) {

        if (i >= 1000) {
            clearInterval(crearFlores);
            break;
        }

        const estrellaViaje =
            document.createElement("div");

        estrellaViaje.textContent = "💟🌹";

        estrellaViaje.classList.add(
            "girasol-viaje"
        );

        estrellaViaje.style.left = "50%";
        estrellaViaje.style.top = "50%";

       const angulo =
        Math.random() * Math.PI * 2;

        const distancia =
        Math.random() * 5000 + 2000;

        const profundidad =
    Math.random() * 3000 - 1500;

estrellaViaje.style.setProperty(
    "--z",
    profundidad + "px"
);


        estrellaViaje.style.setProperty(
            "--x",
            Math.cos(angulo) * distancia + "px"
        );

        estrellaViaje.style.setProperty(
            "--y",
            Math.sin(angulo) * distancia + "px"
        );

        estrellaViaje.style.opacity =
            Math.random() * 0.8 + 0.2;

        document
            .getElementById("estrellas-viaje")
            .appendChild(estrellaViaje);

        i++;
    }

}, 50);
});

    /* =========================
   ABRIR LA CARTA
   ========================= */

document
    .getElementById("carta-final")
    .addEventListener("click", () => {
        

        const carta =
            document.getElementById("carta-final");

        const invitacion =
            document.getElementById("invitacion-carta");

        const contenido =
            document.getElementById("contenido-carta");

        invitacion.style.display = "none";

        contenido.style.display = "flex";

        carta.classList.add("carta-abierta");
        const audio =
    document.getElementById("cancion-carta");

audio.play().catch(() => {});

    });
    /* =========================
   FOTOS PASEANDO
   ========================= */

const fotosNosotros = [
    "img/fotos/F1.jpeg",
    "img/fotos/F2.jpeg",
    "img/fotos/F3.jpeg",
    "img/fotos/F4.jpeg",
    "img/fotos/F5.jpeg",
    "img/fotos/F6.jpeg",
    "img/fotos/F7.jpeg",
    "img/fotos/F8.jpeg",
    "img/fotos/F9.jpeg",
    "img/fotos/F10.jpeg",
    "img/fotos/F11.jpeg"
];

function crearFotoFlotante() {

    const contenedor =
        document.getElementById("fotos-flotantes");

    const foto = document.createElement("img");

    const imagen =
        fotosNosotros[
            Math.floor(Math.random() * fotosNosotros.length)
        ];

    foto.src = imagen;

    foto.classList.add("foto-flotante");

    const ancho = contenedor.clientWidth;
    const alto = contenedor.clientHeight;

    let inicioX = Math.random() * ancho;
    let inicioY = Math.random() * alto;

    let finX = Math.random() * ancho;
    let finY = Math.random() * alto;

    foto.style.setProperty(
        "--inicio-x",
        inicioX + "px"
    );

    foto.style.setProperty(
        "--inicio-y",
        inicioY + "px"
    );

    foto.style.setProperty(
        "--fin-x",
        finX + "px"
    );

    foto.style.setProperty(
        "--fin-y",
        finY + "px"
    );

    foto.style.animationDuration =
        Math.random() * 8 + 10 + "s";

    contenedor.appendChild(foto);

    setTimeout(() => {
        foto.remove();
    }, 19000);
}
/* =========================
   REPRODUCTOR DE MÚSICA
   ========================= */

const audio = document.getElementById("cancion-carta");
const botonMusica = document.getElementById("boton-musica");
const progresoMusica = document.getElementById("progreso-musica");
const barraMusica = document.getElementById("barra-musica");

const tiempoActual = document.getElementById("tiempo-actual");
const tiempoTotal = document.getElementById("tiempo-total");


/* FORMATO DEL TIEMPO */

function formatoTiempo(segundos) {

    if (isNaN(segundos)) {
        return "0:00";
    }

    const minutos = Math.floor(segundos / 60);

    const segundosRestantes =
        Math.floor(segundos % 60)
            .toString()
            .padStart(2, "0");

    return `${minutos}:${segundosRestantes}`;
}


/* PLAY / PAUSA */

botonMusica.addEventListener("click", (evento) => {

    evento.stopPropagation();

    if (audio.paused) {

        audio.play();

        botonMusica.textContent = "❚❚";

    } else {

        audio.pause();

        botonMusica.textContent = "▶";

    }

});


/* ACTUALIZAR BARRA */

audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;

    const porcentaje =
        (audio.currentTime / audio.duration) * 100;

    progresoMusica.style.width =
        porcentaje + "%";

    tiempoActual.textContent =
        formatoTiempo(audio.currentTime);

});


/* DURACIÓN TOTAL */

audio.addEventListener("loadedmetadata", () => {

    tiempoTotal.textContent =
        formatoTiempo(audio.duration);

});


/* MOVERSE EN LA CANCIÓN */

barraMusica.addEventListener("click", (evento) => {

    evento.stopPropagation();

    if (!audio.duration) return;

    const rect =
        barraMusica.getBoundingClientRect();

    const posicion =
        (evento.clientX - rect.left) / rect.width;

    audio.currentTime =
        posicion * audio.duration;

});


/* CUANDO TERMINA */

audio.addEventListener("ended", () => {

    botonMusica.textContent = "▶";

    progresoMusica.style.width = "0%";

    tiempoActual.textContent = "0:00";

});