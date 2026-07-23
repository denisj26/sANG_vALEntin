// Detectar cuando el usuario selecciona texto
document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString();

  const egg = document.getElementById("easterEgg");

  if (selectedText.includes("404")) {
    egg.style.opacity = "1";
  } else {
    egg.style.opacity = "0";
  }
});

// Opcional: ocultar si hacen click fuera
document.addEventListener("click", () => {
  const egg = document.getElementById("easterEgg");
  egg.style.opacity = "0";
});
