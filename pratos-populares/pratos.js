const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carroselUp(){
    idx++;

    if(idx>img.length - 1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 21}vw)`;
    if(idx == 0 || idx == 1){
        document.querySelector(".pizza1").classList.toggle("active")
    }
    if(idx == 1 || idx == 2){
        document.querySelector(".pizza2").classList.toggle("active")
    }
    if(idx == 2 || idx == 0){
        document.querySelector(".pizza3").classList.toggle("active")
    }
}
function carroselDown(){
    idx--;

    if(idx<img.length - img.length){
        idx = img.length - 1;
    }
    imgs.style.transform = `translateX(${-idx * 21}vw)`;
    if(idx == 0 || idx == 2){
        document.querySelector(".pizza1").classList.toggle("active")
    }
    if(idx == 1 || idx == 0){
        document.querySelector(".pizza2").classList.toggle("active")
    }
    if(idx == 2 || idx == 1){
        document.querySelector(".pizza3").classList.toggle("active")
    }
}

setInterval(carroselUp,5000)

