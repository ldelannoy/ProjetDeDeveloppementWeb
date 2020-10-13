
let i = 0;
const car = document.getElementById('car');
setInterval(function(){
    car.style.top = i % 2 === 0 ? '175px' : '174px';
    i++;
},100);

/*var car = document.getElementById("car");
//var ctx = car.getContext('2d');
//car.width = 100;
//car.height = 50;

var object = {
	height: 50,
	width: 100,
	x: 10,
	y: 10, 
	color: "#FF0000"		
}*/
let x = 0;
let y = 0;

document.addEventListener('keydown', function(event) {

    //console.log('test');
    //left
   if(event.code == 'ArrowLeft') {
       x -= 10;
       
       //console.log('click gauche');
        //object.x -= 1;
    }//right
    else if(event.code == 'ArrowRight') {
        x += 10;
        //console.log('click droit');
        //object.x += 1;
    }
    //bottom
    //top
    else if(event.code == 'ArrowUp') {
        y += 10;
        //console.log('click haut');
        //object.y -= 1;
    }
    
    else if(event.code == 'ArrowDown') {
        y -= 10;
        //console.log('click bas');
        //object.y += 1;
    }
    car.style.transform = `translate(${x}px, ${y}px)`;
    });
    
   /* function renderCar(){
        //ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 600, 600);
    } 
    function renderObject(){
        //ctx.fillStyle = "#FF0000";
        ctx.fillRect(object.x, object.y, object.width, object.height);
    }
    function fun(){
        renderCar();
        renderObject();
    }
            
    setInterval(fun, 10);*/