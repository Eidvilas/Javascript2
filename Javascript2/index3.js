
canvas = document.getElementById('canvas');

canvas.width = window.innerWidth -4;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


/*
c.beginPath ();
c.moveTo (1000, 200) ;//pradinis taskas
c.lineTo(1100,300); //galins taskas
c.lineTo(900,300);
c.lineTo(1000,200);
c.fillStyle = "brown";
c.fill();
c.stroke(); // 

c.beginPath ();
c.moveTo (1100, 300) ;//pradinis taskas
c.lineTo(1100,500); //galins taskas
c.lineTo(900,500);
c.lineTo(900,300);
c.fillStyle = "gray";
c.fill();
c.stroke(); // 

c.beginPath ();
c.moveTo (1060, 370) ;//pradinis taskas
c.lineTo(1060,420); //galins taskas
c.lineTo(1010,420);
c.lineTo(1010,370);
c.lineTo(1060,370);
c.fillStyle = "lightblue";
c.fill();
c.stroke(); // 

c.beginPath ();
c.moveTo (930, 500) ;//pradinis taskas
c.lineTo(930,370); //galins taskas
c.lineTo(990,370);
c.lineTo(990,500);
c.fillStyle = "brown";
c.fill();
c.stroke(); // 


c.beginPath();
c.arc(700,100,50,0,2*Math.PI);
c.fillStyle = "lightyellow";
c.fill();
c.stroke();

c.beginPath();
c.arc(700,100,45,0,2*Math.PI);
c.fillStyle = "yellow";
c.fill();
c.stroke();

for (var i=0; i<100; i++) {
    var x = Math.random() * window.innerWidth;//00.00000  0.9999999999999
    var y = Math.random() * window.innerHeight;

    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);

    var rand = Math.floor(Math.random()*40);

    c.beginPath();
    c.arc(x,y,rand ,0,2*Math.PI);
    c.strokeStyle= "rgb(" + r + "," + g + "," + b + ")";
    c.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
    c.fill();
    c.stroke();
} */

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
    d_x -=20;
    break;

    case 38:
    d_y +=20;
    break;

    case 39:
    d_x  +=20;
    break;

    case 40:
    d_y +=20;
    break;
  }
}


function Box(x, y, dx, dy) {
  this.x =x
  this.y =y;
  this.dx=dx;
  this.dy=dy;
}

this.update = function(dx, dy) {
    this.x +=dx;
    this.y +=dy;
    this.draw()

  }

    this.draw = function () {
      c.beginPath();
      c.rect(this.x, this.y, this.w,this.h);
      c.fillStyle = "black";
      c.stroke();
    }
}

  var circleArray = [];


    for (var i=0; i<200; i++) {
    var x = floor(Math.random() * (window.innerWidth - 50 )+50;
    var y = floor(Math.random() * (window.innerHeight -50)+50;
    var dx = (Math.random() -0.5) *10;
    var dy = (Math.random() -0.5) *10;

    circleArray.push(new Circle(x,y,dx,dy,20))
}


    var circle = new Box (200,200, 300, 50);

    function animate () {
      requestAnimationFrame(animate);
        
        c. clearRect(0,0,innerWidth,innerHeight);
        c.stroke();
      
        for (var i = circleArray.lengh - 1; i>=0; i-- )  {
          circleArray[i].update();
        }     

        box.update(d_x, d_y);
        d_x= 0;
        d_y=0;
    }

    animate();