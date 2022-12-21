const bullet = document.querySelector(".funcionamento");
const now = new Date();
const dia = now.getDay();
const hours = now.getHours();

verficarHora();
const time = setInterval(verficarHora, 60000);

function verficarHora() {
  if (hours >= 18 || hours < 07 || dia === 7) {
    bullet.classList.add("fechado");
  } else {
    bullet.classList.add("aberto");
  }
}
