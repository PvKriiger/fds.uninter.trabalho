const botao = document.querySelector("#botao");
const exibirTexto = document.querySelector("#exibirTexto");;
botao.addEventListener("click", e=>{
  exibirTexto.textContent = "Bem-vindo(a)!";
})
