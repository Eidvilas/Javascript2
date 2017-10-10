
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




function Circle(x, y, dx, dy, r) {
  this.x =x
  this.y = y;
  this.dx=dx;
  this.dy=dy;
  this.r=r;
}

this.update = function() {
  if (this.x + this.radius > innerWidth
    || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
  if (this.y + this.radius > innerWidth
    || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y+=this.dy;

    this.draw()

  }

    this = function () {
      c. clearRect(0,0,innerWidth,innerHeight);
      c.beginPath();
      c.arc(this.x,this.y,this.,0,2*Math.PI);
      c.fillStyle = "yellow";
      c.fill();
      c.stroke();
    }
}

  var circleArray = [];


    for (var i=0; i<200)
    var x = floor(Math.random() * (window.innerWidth - 50 )+50;
    var y =floor(Math.random() * (window.innerHeight -50)+50;


    var circle = new Circle (200,200);

    var x = Math.randon()*innerWidth;
    var dx =10;
    var radius = 45;
    var y=Math.randon()*innerHeight;
    var dy = Math.randon() - 0.5 * 10;

    function animate () {
      requestAnimationFrame(animate);
        
        c. clearRect(0,0,innerWidth,innerHeight);
        c.beginPath();
        c.arc(x,y,45,0,2*Math.PI);
        c.fillStyle = "yellow";
        c.fill();
        c.stroke();
        

        if (radius + x >= innerWidth || x-radius<=0) {
          dx =-dx;
        } 
        if (radius + y >= innerHeight || y-radius<=0) {
          dy =-dy;
        } 

        x +=dx;
        y +=dy;
    }

    animate();