const showcase = document.querySelector(".showcase")

let count = 1

function nextImage(){
    count++
    if(count > 3){
        count = 1
    }
    showcase.style.backgroundImage = `url(./img/showcase-${count}.jpeg)`
}

setInterval(function(){
    nextImage()
},5000)