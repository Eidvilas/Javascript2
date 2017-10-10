
canvas = document.getElementById('canvas');

canvas.width = window.innerWidth -4;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.beginPath();
c.arc(700,100,45,0,2*Math.PI);
c.fillStyle = "yellow";
c.fill();
c.stroke();

