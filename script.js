// Detectar selección de texto en la página
document.addEventListener("selectionchange", () => {
  const selection = window.getSelection().toString();
  const egg = document.getElementById("easterEgg");

  if (selection.length > 5) {
    egg.style.opacity = "1";
  } else {
    egg.style.opacity = "0";
  }
});
