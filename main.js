document.addEventListener("DOMContentLoaded", pixArt);
document.addEventListener("DOMContentLoaded", chooseBlueColor);
document.addEventListener("DOMContentLoaded", chooseRedColor);
document.addEventListener("DOMContentLoaded", chooseYellowColor);
document.addEventListener("DOMContentLoaded", chooseGreenColor);
document.addEventListener("DOMContentLoaded", choosePurpleColor);
document.addEventListener("DOMContentLoaded", chooseBrownColor);
document.addEventListener("DOMContentLoaded", chooseBlackColor);
document.addEventListener("DOMContentLoaded", chooseWhiteColor);

divGrid()

var currentColor = 'red'

function divGrid(){
  let topDiv = document.getElementById('art')
  for(let i = 0; i < 50; i++){
    let rowDiv = document.createElement('div')
    rowDiv.className = 'row'
    topDiv.appendChild(rowDiv)
    console.log("hello world");
      for(let j = 0; j < 100; j++){
        let columnDiv = document.createElement('div')
        columnDiv.className = 'pixel'
        rowDiv.appendChild(columnDiv)
      }

  }
}


function pixArt(){

  art.addEventListener("mousedown", function(e){
    var clickOne = e.target;
    if (clickOne != this){
    clickOne.style.backgroundColor = currentColor;
  }
})
}

function chooseBlueColor(){
   buttonBlue.addEventListener("mousedown", function(e){
    var clickOne = e.target
    currentColor = "blue"
  })
}

function chooseRedColor(){
   buttonRed.addEventListener("mousedown", function(e){
    var clickOne = e.target
    currentColor = "red"
  })
}

function chooseYellowColor(){
   buttonYellow.addEventListener("mousedown", function(e){
    var clickOne = e.target
    currentColor = "yellow"
  })
}

function chooseGreenColor(){
   buttonGreen.addEventListener("mousedown", function(e){
    var clickOne = e.target
    currentColor = "green"
  })
}

function choosePurpleColor(){
   buttonPurple.addEventListener("mousedown", function(e){
    var clickOne = e.target
    currentColor = "purple"
  })
}

function chooseBrownColor(){
   buttonBrown.addEventListener("mousedown", function(e){
    var clickOne = e.target
    currentColor = "brown"
  })
}

function chooseBlackColor(){
   buttonBlack.addEventListener("mousedown", function(e){
    var clickOne = e.target
    currentColor = "black"
  })
}

function chooseWhiteColor(){
   buttonWhite.addEventListener("mousedown", function(e){
    var clickOne = e.target
    currentColor = "white"
  })
}
