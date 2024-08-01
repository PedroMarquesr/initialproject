function togglemode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  // Pegar a tag img

  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    //Se estiver em light mode, adicionar a imagem light
    img.setAttribute("src", "./img/avatar-light.png");
    alert("ok, vou mudar para modo claro!");
  } else {
    img.setAttribute("src", "./img/Avatar.png");
    // Se estiver sem light mode, manter a imagem original
    alert("ok, vou mudar para modo escuro!");
  }

  // if (html.classList.contains("light")) {
  // html.classList.remove("light");
  //alert("Boa noite");
  //} else {
  // html.classList.add("light");
  //alert("Bom dia");
  //}
}
