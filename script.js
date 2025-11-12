const body = document.body;
const switchBtn = document.querySelector("button");

// pega a tag img
const img = document.querySelector("#perfil img");

const mudarLight = () => {
  body.classList.toggle("light-mode"); // Modo mais rápido pra fazer essa troca

  // substitui a img
  if (body.classList.contains("light-mode")) {
    //se tiver light-mode, faça
    img.setAttribute("src", "./assets/avatar-light.jpg");
    img.setAttribute(
      "alt",
      "Foto do Bruno sentado na cadeira fazendo careta com uma camisa branca, calça preta e com suspensorio"
    );
    img.style.width = "36%";
    img.style.borderRadius = "50%";
    img.style.objectFit = "cover";
    img.style.border = "1.5px #ffffff70 solid";
  } else {
    img.setAttribute("src", "https://github.com/bruninhosrs.png");
  }

  // if (body.classList.contains("light-mode")) {
  //   // PERGUNTA SE A "LUZ" ESTÁ ACESA
  //   body.classList.remove("light-mode"); // SE FOR VERDADE (ESTIVER COM O LIGHT-MODE), ELE SAI DO LIGHT-MODE E ENTRA NO DARK-MODE
  // } else {
  //   body.classList.add("light-mode"); // SE FOR MENTIRA (ESTIVER COM O DARK-MODE), ELE SAI DO DARK-MODE E ENTRA NO LIGHT-MODE
  // }
};

switchBtn.addEventListener("click", mudarLight);

// Notas:

// classList.contains => Verifica se existe a propriedade class light-mode no elemento
// body.classList.remove("light-mode") => Se estiver no light-mode, e o usuário apertar o botão, ele volta para o dark-mode ()
// body.classList.add("light-mode") => Se o usuárrio estiver no dark-mode, e apertar o botão ele vai para o modo light-mode
