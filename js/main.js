const ativa = document.getElementById("btn-ativaMenu");
const containermenu = document.getElementById("mobile-container");
const menuteste = document.getElementById("menu-desktop");

let contador = 0;
// ativa.addEventListener("click", function(){})
ativa.addEventListener("click", e => {
  containermenu.classList.remove("_hiddentop");
  containermenu.classList.add("_activemenu");
  menuteste.classList.add("color-mobile");
  contador++;
  if (contador == 2) {
    containermenu.classList.remove("_activemenu");
    menuteste.classList.remove("color-mobile");
    containermenu.classList.add("_hiddentop");
    contador = 0;
  }
});
