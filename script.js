function togglemode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "img/Avatar-light.png");
    alert("ok, vou mudar para modo claro!");
  } else {
    img.setAttribute("src", "img/Avatar.png");
    alert("ok, vou mudar para modo escuro!");
  }
}
