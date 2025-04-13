// Fecha objetivo para la cuenta regresiva
const targetDate = new Date("2025-04-19T17:00:00").getTime();

// Función para actualizar la cuenta regresiva
const updateCountdown = () => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "¡Hoy es el gran día!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// Actualiza la cuenta regresiva cada segundo
setInterval(updateCountdown, 1000);

// Función para manejar el envío del formulario
document.getElementById("rsvpForm").addEventListener("submit", function(event){
  event.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const asistencia = document.getElementById("asistencia").value;
  const mensaje = document.getElementById("mensaje").value;

  const numero = "527713557041"; // Número de WhatsApp al que se enviará el mensaje
  let texto = `Hola, soy ${nombre} y confirmo que ${asistencia} iré a los XV años.`;
  
  if (mensaje) {
    texto += `\nMensaje: ${mensaje}`;
  }

  // Crear URL para enviar el mensaje por WhatsApp
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  
  // Abrir enlace en nueva pestaña
  window.open(url, "_blank");
});

// Fade-in al scrollear (al bajar y subir)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Musica de fondo
window.onload = function() {
  const audioPlayer = document.getElementById("audioPlayer");
  const playIcon = document.getElementById("playIcon");
  const pauseIcon = document.getElementById("pauseIcon");
  const toggleButton = document.getElementById("toggleMusic");

  // Reproducción automática al cargar la página
  audioPlayer.play();

  // Alternar entre play/pause
  toggleButton.onclick = function() {
    if (audioPlayer.paused) {
      audioPlayer.play(); // Reproducir la música
      playIcon.style.display = "none";  // Ocultar el ícono de play
      pauseIcon.style.display = "block"; // Mostrar el ícono de pause
    } else {
      audioPlayer.pause(); // Pausar la música
      playIcon.style.display = "block";  // Mostrar el ícono de play
      pauseIcon.style.display = "none";  // Ocultar el ícono de pause
    }
  };
};


