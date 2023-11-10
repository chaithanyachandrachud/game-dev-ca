var button=document.getElementById("game-btn");
button.addEventListener("click", () => {
    window.location.href = "./frontend.html"
})

function PlayMusic(){
    music.play()
}

window.addEventListener("load",PlayMusic)
var music = new Audio("./background.mp3")


