let img = document.querySelector("#img1")
let imggrande = document.querySelector(".imggrande")
let img2 = document.querySelector("#img2")

img.addEventListener("click", ()=>{
    imggrande.style.display = 'flex'
})

img2.addEventListener("click", ()=>{
    imggrande.style.display = 'none'
})


