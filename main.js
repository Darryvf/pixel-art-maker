document.addEventListener("DOMContentLoaded", pixArt);
document.addEventListener("DOMContentLoaded", chooseBlueColor);

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
// art.style.backgroundColor = grey;
// document.art.style.backgroundColor = "grey";
// var pixel = document.createElement("div");
// pixel.id = "art";
// grid1.name ="art";
//   grid1.style.backgroundColor = "white";
//   grid1.style.width = "25px";
//   grid1.style.height = "25px";
//   grid1.style.borderStyle = "solid";
//   grid1.style.borderColor = "black";
  // document.art.appendChild(grid1);
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
