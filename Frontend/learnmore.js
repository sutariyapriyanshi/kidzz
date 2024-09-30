// let btn = document.querySelector('button');
// let allBox = document.getElementsByClassName('main');
// btn.addEventListener("click", function() {
//     allBox[0].style.backgroundColor="#ff5d8f";
//     allBox[1].style.backgroundColor = "#ffa6c1";
//     allBox[2].style.backgroundColor="#ffc4d6";
//     allBox[3].style.backgroundColor = "#fadde1";
// })

let bton = document.querySelector('.show')
let modal = document.querySelector(".modal")
let closeicon = document.querySelector(".modal h2 span")

bton.addEventListener("click",()=>{
    modal.classList.add('showModal')
})

closeicon.addEventListener("click",()=>{
    modal.classList.remove('showModal')
})

// document.querySelector("#btn1").addEventListener("click",()=>{
//     modal.classList.toggle('showModal')
// })