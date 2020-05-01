const startButton = document.getElementById("start-button")
const mainPlayArea = document.getElementById("background")
const shoot = document.getElementById("shooter")


startButton.addEventListener("click", (event) => {
  playGame()
})


function letgunshoot(event) {
  if (event.key === "ArrowUp") {
    event.preventDefault()
    moveUp()
  } else if (event.key === "ArrowDown") {
    event.preventDefault()
    moveDown()
  } else if (event.key === " ") {
    event.preventDefault()
    fireLaser()
  }
}


function moveUp() {
  let topPosition = window.getComputedStyle(shoot).getPropertyValue('top')
  if (shoot.style.top === "0px") {
    return
  } else {
    let position = parseInt(topPosition)
    position -= 10
    shoot.style.top = `${position}px`
  }
}


function moveDown() {
  let topPosition = window.getComputedStyle(shoot).getPropertyValue('top')
  if (shoot.style.top === "360px") {
    return
  } else {
    let position = parseInt(topPosition)
    position += 10
    shoot.style.top = `${position}px`
  }
}


function fireLaser() {
  let laser = createLaserElement()
  mainPlayArea.appendChild(laser)
  moveLaser(laser)
}


function createLaserElement() {
  let xPosition = parseInt(window.getComputedStyle(shoot).getPropertyValue('left'))
  let yPosition = parseInt(window.getComputedStyle(shoot).getPropertyValue('top'))
  let newLaser = document.createElement('img')
  newLaser.src = 'images/laser.png'
  newLaser.classList.add('laser')
  newLaser.style.left = `${xPosition}px`
  newLaser.style.top = `${yPosition - 30}px`
  return newLaser
}


function moveLaser(laser) {
  let laserInterval = setInterval(() => {
    let xPosition = parseInt(laser.style.left)
    if (xPosition === 340) {
      laser.remove()
    } else {
      laser.style.left = `${xPosition + 4}px`
    }
  }, 10)
}



function playGame() {
  startButton.style.display = 'none'
  window.addEventListener("keydown", letgunshoot)
}
