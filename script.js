
const input = document.querySelector("#input");
const conferma = document.querySelector("#conferma");
const contenitore = document.querySelector("#contenitore");
const par = document.querySelector("#par");

conferma.addEventListener("click", () => {
  if (+input.value > 100 || +input.value < 1) {
    par.textContent = "Inserisci un numero valido"
    contenitore.innerHTML = "";
  } else {
    par.textContent = "";
    contenitore.innerHTML = "";
    let quantità = +input.value;
    let larghezza = 480 / quantità;
    creaGriglia(larghezza, quantità);
    input.value = "";
  }
})


function creaGriglia(larghezza, quantità) {

  /*ciclo per i div verticali */
  for (let i = 0; i < quantità; i++) {
    const div1 = document.createElement("div");
    contenitore.appendChild(div1);
    div1.classList.add("div1");
    /*ciclo per i div orizzonatali */
    for (let j = 0; j < quantità; j++) {
      const div2 = document.createElement("div");
      div1.appendChild(div2);
      div2.classList.add("div2");
      div2.style.height = larghezza + "px";
      div2.style.width = larghezza + "px";
      let opacità = 0.1;
      let sfondo = coloreRandom()
      div2.addEventListener("mouseover", () => {
        div2.style.backgroundColor = sfondo;
        div2.style.opacity = opacità;
        if (opacità < 1) opacità += 0.1;
      })
    }
  }
}

function coloreRandom() {
  let numero1 = Math.floor(Math.random() * 256);
  let numero2 = Math.floor(Math.random() * 256);
  let numero3 = Math.floor(Math.random() * 256);
  return `rgb(${numero1}, ${numero2}, ${numero3})`;
}













