var button=document.getElementById("start-button");
button.addEventListener("click", () => {
    window.location.href = "./last.html"
})
function PlayMusic(){
    music.play()
}

window.addEventListener("load",PlayMusic)
var music = new Audio("./background.mp3")