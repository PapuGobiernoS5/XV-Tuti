// Cuenta regresiva
const targetDate = new Date("2025-04-18T17:00:00").getTime();

const timer = document.getElementById("timer");
setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    timer.innerHTML = "¡Hoy es el gran día!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Envío RSVP (simulado)
document.getElementById("rsvpForm").addEventListener("submit", function(event){
  event.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const asistencia = document.getElementById("asistencia").value;
  const mensaje = document.getElementById("mensaje").value;

  const numero = "527713557041";

  let texto = `Hola, soy ${nombre} y confirmo que ${asistencia} iré a los XV años.`;
  if (mensaje) {
    texto += `\nMensaje: ${mensaje}`;
  }

  texto = encodeURIComponent(texto);

  const url = `https://wa.me/${numero}?text=${texto}`;

  window.open(url, "_blank");
});
