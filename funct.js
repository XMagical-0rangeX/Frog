function background(){
    
    ctx.drawImage(gras,0,0,cnv.width,cnv.height);

  for (let n = 0; n  <= cnv.width; n += 50 ){
    ctx.fillStyle = "black";
    ctx.fillRect(n,0,25,25);
    ctx.fillRect(n+25,25,25,25);
    ctx.fillStyle = "white";
    ctx.fillRect(n+25,0,25,25);
    ctx.fillRect(n,25,25,25);
  }
  //road 1
  ctx.fillStyle = "grey";
  ctx.fillRect(0,road1y,cnv.width,100);
  for (let n = 0; n  <= cnv.width; n += 50 ){
    ctx.fillStyle = "yellow";
    ctx.fillRect(n+15,47.5+road1y,25,5);
    }
    ctx.fillStyle = "black"
    ctx.fillRect(0,road1y,cnv.width,3);
    ctx.fillRect(0,97+road1y,cnv.width,3);

    //road 2
    ctx.fillStyle = "grey";
    ctx.fillRect(0,road2y,cnv.width,100);
  for (let n = 0; n  <= cnv.width; n += 50 ){
    ctx.fillStyle = "yellow";
    ctx.fillRect(n+15,47.5+road2y,25,5);
    }
    ctx.fillStyle = "black"
    ctx.fillRect(0,road2y,cnv.width,3);
    ctx.fillRect(0,97+road2y,cnv.width,3);

    //river
    ctx.fillStyle = "blue";
    ctx.fillRect(0,300,cnv.width,100);
    //lily pads
    ctx.fillStyle = "lawngreen";
    ctx.fillRect(lilly1.x,lilly1.y,lilly1.width,lilly1.height);
    ctx.fillRect(lilly2.x,lilly2.y,lilly2.width,lilly2.height);

    //Treez
    ctx.drawImage(treb,0,750,50,50);
    ctx.drawImage(treb,50,700,50,50);
    ctx.drawImage(treb,0,600,50,50);
    ctx.drawImage(treb,400,700,50,50);
}
function movingstuff(){
    //log1
    log1.x -= log1.speed;
    ctx.fillStyle = "brown";
    ctx.fillRect(log1.x,log1.y,log1.width,log1.height);
    if (log1.x <=0-log1.width){
        log1.x = 450;
    }
    //player
    ctx.fillStyle = "crimson";
    ctx.drawImage(frobvar,player.x,player.y,player.size,player.size);

    //truck 1
    truck1.x -= truck1.speed;
    ctx.fillStyle = "teal";
    ctx.drawImage(truckimg1,truck1.x,truck1.y,truck1.width,truck1.height);
    if (truck1.x <=0-truck1.width){
        truck1.x = 500;
    }
    //truck 2
    truck2.x += truck2.speed;
    ctx.fillStyle = "teal";
    ctx.fillRect(truck2.x,truck2.y,truck2.width,truck2.height);
    if (truck2.x >=450){
        truck2.x = -150;
    }
    //car 1
    car1.x += car1.speed;
    ctx.drawImage(carr,car1.x,car1.y,car1.width,car1.height);
    if (car1.x >=450){
        car1.x = -150;
    }
    //car 2
    car2.x += car2.speed;
    ctx.fillRect(car2.x,car2.y,car2.width,car2.height);
    if (car2.x >=450){
        car2.x = -50;
    }
    //truck 3
    truck3.x -= truck3.speed;
    ctx.drawImage(truckimg1,truck3.x,truck3.y,truck3.width,truck3.height);
    if (truck3.x <=0-truck3.width){
        truck3.x = 500;
    }
    //car 3
    car3.x -= car3.speed;
    ctx.drawImage(carl,car3.x,car3.y,car3.width,car3.height);
    if (car3.x <=0-car3.width){
        car3.x = truck1.x+150;
    }


}
function collision(){
    if(player.x+player.size>=truck1.x && player.x<= truck1.x+truck1.width && player.y<truck1.y+truck1.height && player.y+player.size>truck1.y){
        ctx.strokeStyle = "orange";
        ctx.beginPath();
        ctx.arc(player.x+player.size/2, player.y+player.size/2, 40, 0, 2 * Math.PI);
        ctx.stroke();
        state = "over";
    }
    if(player.x+player.size>=truck2.x && player.x<= truck2.x+truck2.width && player.y<truck2.y+truck2.height && player.y+player.size>truck2.y){
        ctx.strokeStyle = "orange";
        ctx.beginPath();
        ctx.arc(player.x+player.size/2, player.y+player.size/2, 40, 0, 2 * Math.PI);
        ctx.stroke();
        state = "over";
    }
    if(player.x+player.size>=truck3.x && player.x<= truck3.x+truck3.width && player.y<truck3.y+truck3.height && player.y+player.size>truck3.y){
      ctx.strokeStyle = "orange";
      ctx.beginPath();
      ctx.arc(player.x+player.size/2, player.y+player.size/2, 40, 0, 2 * Math.PI);
      ctx.stroke();
      state = "over";
  }
    if(player.x+player.size>=car1.x && player.x<= car1.x+car1.width && player.y<car1.y+car1.height && player.y+player.size>car1.y){
      ctx.strokeStyle = "orange";
      ctx.beginPath();
      ctx.arc(player.x+player.size/2, player.y+player.size/2, 40, 0, 2 * Math.PI);
      ctx.stroke();
      state = "over";
  }
  if(player.x+player.size>=car2.x && player.x<= car2.x+car2.width && player.y<car2.y+car2.height && player.y+player.size>car2.y){
    ctx.strokeStyle = "orange";
    ctx.beginPath();
    ctx.arc(player.x+player.size/2, player.y+player.size/2, 40, 0, 2 * Math.PI);
    ctx.stroke();
    state = "over";
}
if(player.x+player.size>=car3.x && player.x<= car3.x+car3.width && player.y<car3.y+car3.height && player.y+player.size>car3.y){
  ctx.strokeStyle = "orange";
  ctx.beginPath();
  ctx.arc(player.x+player.size/2, player.y+player.size/2, 40, 0, 2 * Math.PI);
  ctx.stroke();
  state = "over";
}
if(player.y<rivery+100&& player.y>=rivery&&
  !(player.x+player.size>=lilly1.x && player.x<= lilly1.x+lilly1.width && player.y<lilly1.y+lilly1.height && player.y+player.size>lilly1.y)
  &&!(player.x+player.size>=lilly2.x && player.x<= lilly2.x+lilly2.width && player.y<lilly2.y+lilly2.height && player.y+player.size>lilly2.y)
  &&!(player.x+player.size>=log1.x && player.x<= log1.x+log1.width && player.y<log1.y+log1.height && player.y+player.size>log1.y)){
  ctx.strokeStyle = "orange";
  ctx.beginPath();
  ctx.arc(player.x+player.size/2, player.y+player.size/2, 40, 0, 2 * Math.PI);
  ctx.stroke();
  state = "over";
}
if (player.y<50){
  state = "win";
}
if(player.x+player.size>=log1.x && player.x<= log1.x+log1.width && player.y<log1.y+log1.height && player.y+player.size>log1.y){
  if (logx === 0){
  logx = log1.x;}
  if (logx -five >= log1.x && player.x>0){
    player.x += -50;
    five += 50;
  }
} else {logx = 0; five = 50;}
if (player.y<=0 || player.x === 0 && player.y === 650)
{upvar = false;} else {upvar = true;}
if (player.x<=0 || player.x === 50 && player.y === 750 || player.x === 50 && player.y === 600)
{leftvar = false;} else {leftvar = true;}
if (player.x>=cnv.width-50)
{rightvar = false;} else {rightvar = true;}
if ( player.y >= cnv.height-50 || player.x === 0 && player.y === 700)
{downvar = false;} else {downvar = true;}
if (state === "over"){
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.arc(player.x+player.size/2, player.y+player.size/2, 40, 0, 2 * Math.PI);
  ctx.stroke();
}
}
function keydo(event){
    if(!event.repeat && state === "go"){
    if ((event.code === "Space" || event.code === "KeyW" || event.code === "ArrowUp") && upvar){
      player.y-=50;
      frobvar = frob;
    } else if ((event.code === "ArrowLeft"|| event.code === "KeyA") && leftvar){
    player.x-=50;
    frobvar = frobr;
    }else if ((event.code === "ArrowRight"|| event.code === "KeyD")&&rightvar){
      player.x+=50;
      frobvar = frobl;
      } else if ((event.code === "ArrowDown" || event.code === "KeyS")&&downvar){
        player.y+=50;
        frobvar = frobb;
      }}
  if ((state === "win" && event.code === "Space")||(state === "over" && event.code === "Space")){
    if (state === "win"){
      truck1.speed++;
      truck2.speed++;
      truck3.speed++;
      car1.speed++;
      car2.speed++;
      car3.speed++;
      log1.speed++;
    }
    state = "go";
    player.x = (cnv.width-50)/2;
    player.y = cnv.height-50;
    frobvar = frob;
  }
  if (event.code === "KeyL"){
    console.log(player.x,player.y);
  }
}
function lose(){
  ctx.fillStyle = "rgba(0,255,150,0.7)";
  ctx.fillRect(0,0,cnv.width,cnv.height);
  ctx.font = "100px Copperplate";
  ctx.fillStyle = "white";
  ctx.fillText("You Lost" , 25, 200);//filled text
  ctx.font = "40px Copperplate";
  ctx.fillText("Press Space to try again" , 25, 300);//filled text
}
function win(){
  ctx.fillStyle = "green"
  ctx.fillRect(0,0,cnv.width,cnv.height);
  ctx.font = "100px Copperplate";
  ctx.fillStyle = "white";
  ctx.fillText("You Won" , 25, 200);//filled text
  ctx.font = "40px Copperplate";
  ctx.fillText("Press Space to Retry" , 25, 300);//filled text
}