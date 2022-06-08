

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 450;
cnv.height = 800;

let frob = document.getElementById("frobimg");
let frobb = document.getElementById("frobimgb");
let frobr = document.getElementById("frobimgr");
let frobl = document.getElementById("frobimgl");
let truckimg1 = document.getElementById("truckimg1");
let carl = document.getElementById("carleft");
let carr = document.getElementById("carright");
let treb = document.getElementById("treb");
let gras = document.getElementById("gras");



let road1y = 100,road2y = 500, rivery = 300,state = "go", frobvar = frob, logx = 0,five = 50,
upvar = true,downvar = false,leftvar = true,rightvar = true;
let player = {
  x: (cnv.width-50)/2,
  y: cnv.height-50,
  size: 50,
}
let truck1 = {
  x: 500,
  y: road1y+5,
  width: 100,
  height: 40,
  speed: 5,
}
let truck2 = {
  x: -150,
  y: road1y+55,
  width: 100,
  height: 40,
  speed: 5,
}
let truck3 = {
  x: 450,
  y: road2y+55,
  width: 100,
  height: 40,
  speed: 5,
}
let car1 = {
  x: -250,
  y: road2y+5,
  width: 75,
  height: 40,
  speed: 5,
}
let car2 = {
  x: -50,
  y: road2y+5,
  width: 50,
  height: 40,
  speed: 5,
}
let car3 = {
  x: 650,
  y: road1y+5,
  width: 75,
  height: 40,
  speed: 5,
}
let log1 = {
  x: 450,
  y: rivery+5,
  width: 100,
  height: 40,
  speed: 2,
}
let lilly1 = {
  x: 55,
  y: rivery+55,
  width: 40,
  height: 40,
}
let lilly2 = {
  x: 255,
  y: rivery+55,
  width: 40,
  height: 40,
}
document.addEventListener("keydown", keydo);
requestAnimationFrame(loop);
function loop(){
  if (state === "go"){
  background();
  movingstuff();
  collision();}
  if (state === "win"){
    win();
  }
  if (state === "over"){
    lose();
  }
  console.log(state);
  requestAnimationFrame(loop);
}