
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');

      imgOctopus = new Image();
      imgOctopus.src = "img/Quicks.svg";
      imgOctopus.addEventListener("load",init,false);

      var imgXCoor = 80;
      var imgYCoor = 80;

      var requestAnimFrame = 
            function (callback) {
      			window.setTimeout(callback, 1000/20);
      		};

      function init(){
      	requestAnimFrame(update);
      }

      function update(){

      	imgYCoor = imgYCoor + 3;
      	context.clearRect(0,0,500,500);
      	context.drawImage(imgOctopus, imgXCoor, imgYCoor, 80, 77.03);
      	context.fillRect(10,10,5,485, "#000000");
      	context.fillRect(10,10,485,5, "#000000");
      	context.fillRect(10,490,485,5, "#000000");
      	context.fillRect(490,10,5,485, "#000000");
      	context.fillRect(245,10,5,240, "#000000");

      	
      	


      	requestAnimFrame(update);
      }

init();


 