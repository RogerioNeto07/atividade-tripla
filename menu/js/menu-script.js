var botao = document.querySelector('button');
var sidebar = document.querySelector('aside');

botao.addEventListener('click', ()=> {
    sidebar.classList.toggle("aside")
})