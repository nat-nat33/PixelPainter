var color;
var mouseIsDown = false;
var penType = "normal";
var clicks = [0,"","", ""];

function clearCanvas() {
  var allCanvas  = document.querySelectorAll(".cell");

  Array.prototype.forEach.call(allCanvas, function(el){
    el.style.background = "white";
  });

  clicks = [0, "", "", ""];
}

//start with a blank canvas
clearCanvas();


//Colour Selector
document.getElementById('colors').addEventListener('click', function(event){
   color = event.target.id;
});


//turns on the mouseDown
document.getElementById("beerPong").addEventListener("mousedown", function(event){

  if(event.target.id !== "beerPong"){
    mouseIsDown = true;
  }

});

document.getElementById("beerPong").addEventListener("drag", function(){
  console.log("mouse is up");
});

//turns off the mouseDown
document.addEventListener("mouseup", function(event){
  mouseIsDown = false;
});


//clear button
document.getElementById('clear').addEventListener("click", function(){
  clearCanvas();
});

//plus button
document.getElementById("plus").addEventListener("click", function(event){
  penType = "plus";
});

//basic button
document.getElementById("normal").addEventListener("click", function(event){
  penType = "normal";
});

//line button
document.getElementById("line").addEventListener("click", function(event){
  penType = "line";
});

//square button
document.getElementById("square").addEventListener("click", function(event){
  penType = "square";
});

document.getElementById("curve").addEventListener("click", function(event){
  penType = "curve";
});

document.getElementById("hcurve").addEventListener("click", function(event){
  penType = "hcurve";
});

document.getElementById("circle").addEventListener("click", function(event){
  penType = "circle";
});

document.getElementById("triangle").addEventListener("click", function(event){
  penType = "triangle";
});