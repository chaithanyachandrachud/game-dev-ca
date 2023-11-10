var button=document.getElementById("start");
button.addEventListener("click", () => {
    window.location.href = "./instruction.html"
})
function PlayMusic(){
    music.play()
}

window.addEventListener("load",PlayMusic)
var music = new Audio("./background.mp3")