const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const gameOverPopup = document.getElementById('game-over-popup');
const scoreElement = document.getElementById('score-popup');
const highestScoreElement = document.getElementById('highest-score-popup');
const scoreLeftElement = document.getElementById('score-left');
const restartInfoElement = document.getElementById('restart-info');

let isJumping = false;
let score = 0;
let highestScore = localStorage.getItem('highestScore') || 0;

function moveCactus() {
  let leftPosition = window.innerWidth;

  function frame() {
    if (getComputedStyle(gameOverPopup).display !== 'block') {
      leftPosition -= 5;
      cactus.style.left = leftPosition + 'px';

      if (leftPosition < -cactus.offsetWidth) {
        leftPosition = window.innerWidth;
        increaseScore();
      }

      if (isJumping) {
        jump();
      }

      if (
        dino.offsetLeft < cactus.offsetLeft + cactus.offsetWidth &&
        dino.offsetLeft + dino.offsetWidth > cactus.offsetLeft &&
        dino.offsetTop + dino.offsetHeight > cactus.offsetTop &&
        dino.offsetTop < cactus.offsetTop + cactus.offsetHeight
      ) {
        showGameOverPopup();
        updateHighestScore();
        restartInfoElement.style.display = 'block';
      }

      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

function jump() {
  let position = parseInt(getComputedStyle(dino).getPropertyValue('bottom'));

  if (position < 200) {
    position += 25;
    dino.style.bottom = position + 'px';
  } else {
    resetJump();
  }
}
  

function resetJump() {
    setTimeout(() => {
      dino.style.bottom = '60px';
      isJumping = false;
    }, 150); // Adjust the timeout value (in milliseconds) to control the delay
  }
  

function showGameOverPopup() {
  gameOverPopup.style.display = 'block';
}

function increaseScore() {
  score++;
  scoreElement.textContent = `Score: ${score}`;
  document.getElementById('score-left').textContent = `Score: ${score}`;
}

function updateHighestScore() {
    console.log(`Current Score: ${score}, Highest Score: ${highestScore}`);
  
    if (score > highestScore) {
      highestScore = score;
      localStorage.setItem('highestScore', highestScore);
      highestScoreElement.textContent = `Highest Score: ${highestScore}`;
      document.getElementById('highest-score-popup').textContent = `Highest Score: ${highestScore}`;
      document.getElementById('highest-score').textContent = `Highest Score: ${highestScore}`;
      
      console.log(`New Highest Score: ${highestScore}`);
    }
  }
  
    

document.addEventListener('keydown', function (event) {
  if ((event.key === 'A' || event.key === 'a') && !isJumping) {
    isJumping = true;
    jump();
  } else if (event.key === 'R' || event.key === 'r') {
    restartGame();
  }
});

function restartGame() {
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  scoreLeftElement.textContent = `Score: ${score}`;
  restartInfoElement.style.display = 'none';
  gameOverPopup.style.display = 'none';
  highestScoreElement.textContent = `Highest Score: ${highestScore}`;
  document.getElementById('score-popup').textContent = `Score: ${score}`;
  moveCactus();
}

function closePopup() {
    document.getElementById('responsive-popup').style.display = 'none';
  }

  window.addEventListener('resize', checkScreenWidth);

  function checkScreenWidth() {
    if (window.innerWidth <= 768) {
      document.getElementById('responsive-popup').style.display = 'block';
    } else {
      document.getElementById('responsive-popup').style.display = 'none';
    }
  }
   

moveCactus();

function PlayMusic(){
    music.play()
}

window.addEventListener("load",PlayMusic)
var music = new Audio("./background.mp3")
