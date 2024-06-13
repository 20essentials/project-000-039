const d = document;

d.addEventListener("click", (e) => {
  if (e.target.matches(".extra-large")) {
    let flecha = d.createElement("span");
    flecha.classList.add("flecha");

    flecha.style.setProperty("--x", e.pageX + "px");
    flecha.style.setProperty("--y", e.pageY + "px");

    d.body.appendChild(flecha);
  }
});
