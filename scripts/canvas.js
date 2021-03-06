var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var spriteArray = [];
var dustArray = [];

for(var i = 0; i < 40; i++){
	spriteArray.push(new Sprite(Math.random() * canvas.width,Math.random() * canvas.height,Math.random(),Math.random(),Math.random()* 5,i,1,0.5,((Math.random()*10) +5)));
}


function Sprite(x,y,dx,dy,radius,idx,dust,blurRate,blur){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.dust = dust;
	this.blurRate = blurRate;
	this.blur = blur;

	this.draw = function(){

		c.beginPath();
		c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false);
		c.stroke();
		if(this.dust == 1)
			c.fillStyle = "#FFCC66";
		else
			c.fillStyle = "#333";
		if(this.blur >= 30 || this.blur < 5)
			this.blurRate = -this.blurRate;

		this.blur += this.blurRate;
		c.shadowBlur = this.blur;
		c.shadowColor = "white";
		c.fill();
	}
	this.update = function(){
		if(this.x > (canvas.width - this.radius) || this.x < 0){
			this.dx = -this.dx;
		}
		if(this.y > (canvas.height - this.radius) || this.y < 0){
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;
		this.draw(this.dust);
	}
}


function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,canvas.width,canvas.height);
	for(var i = 0; i < spriteArray.length; i++){
		spriteArray[i].update();
	}
}

animate();

